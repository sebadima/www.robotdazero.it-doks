---
title: "Come usare la ESP32 Cam per sorvegliare la nostra vettura"
description: "Come usare la ESP32 Cam per sorvegliare la nostra vettura"
excerpt: "In questo post vedremo come utilizzare la scheda ESP32 Cam per controllare la nostra vettura durante il parcheggio. La OV2640 Cam è una fotocamera digitale a colori con risoluzione di 2 megapixel..."
date: 2023-11-18T09:19:42+01:00
lastmod: 2023-11-18T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["OV2640", "ESP32", "sorveglianza", "programmazione"]
contributors: ["sergio rame"]
pinned: false
homepage: false
mermaid: true
---



<hr>

## Usiamo la ESP32 Cam per monitorare la vettura durante il parcheggio

La ESP32 nella versione con la OV2640 Cam è una completa fotocamera digitale a colori con risoluzione di 2 megapixel. È piuttosto economica: la potete trovare nel link in basso a 12~13 euro su Amazon o prezzi ancora più bassi su Aliexpress.
Può essere usata per una vasta gamma di applicazioni, tra cui il monitoraggio di auto o accessi. Permette di registrare video con media risoluzione o scattare foto ad alta risoluzione ad intervalli prefissati. 

> Poiché la registrazione dei video "potrebbe" in certi casi scaricare la batteria abbiamo pensato ad una versione "soft" del sistema di monitoraggio, con una serie di accortezze per risparmiare la batteria e avere delle foto ad intervalli di 10 secondi circa.

### Materiali necessari

Per realizzare il progetto avrete bisogno dei seguenti materiali:

- Una <a href="https://amzn.to/3MRTOs3" target="_blank" rel="noopener">ESP32 Cam</a> con fotocamera OV2640
- Un adattatore USB per la presa accendisigari della vettura
- Una scheda SD-card da almeno 16GB

### Come usare la scheda

- Formattate la SD-card usando il vostro PC
- Inserite la SD-card nella feritoia della Cam
- Collegate la fotocamera alla presa accendisigari della vettura
- La Cam si accenderà immediatamente
- Posizionate la fotocamera in modo che possa inquadrare il parabrezza e parte dei finestrini


In questo modo della Cam saranno registrate ogni 15 secondi sulla SD-card  in una directory chiamata "img". Questo vi permetterà di vedere i movimenti delle persone quando la vettura é parcheggiata. Il programma utilizza alcuni "trucchi" per minimizzare il consumo della ESP32, in particolare utilizza la modalità <a href="https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/system/sleep_modes.html" target="_blank" rel="noopener">deep sleep</a> della scheda, disabilita il WIFI, il Bluetooth e la <a href="https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/peripherals/touch_pad.html" target="_blank" rel="noopener">funzione touchpad</a> di alcuni piedini. In questa modalità l'ESP32 consuma appena 1~2 mA contro i circa 130~150 mA della scheda collegata al WIFI.

La scheda va a "dormire" per 10 secondi e si risveglia giusto il tempo necessario per scattare la foto. Senza questo accorgimento probabilmente la batteria della macchina potrebbe scaricarsi. Se non volete rischiare la batteria della macchina usate un power bank da 20000 mAh, perfettamente in grado di fare funzionare la Cam per 8/10 ore. 




## Il programma da caricare sulla ESP32

```bash
// Copyright (c) robotdazero.it
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// https://randomnerdtutorials.com/esp32-deep-sleep-arduino-ide-wake-up-sources/
// https://randomnerdtutorials.com/esp32-cam-photo-microsd-card-timestamp/

#include "esp_camera.h"
#include "FS.h"
#include "SD_MMC.h"
#include "soc/soc.h"
#include "soc/rtc_cntl_reg.h"
#include "driver/rtc_io.h"
#include <WiFi.h>
#include "time.h"
#include <EEPROM.h>
#include "esp_bt.h"
#include <esp_wifi.h>

int pictureNumber = 0;
#define EEPROM_SIZE 1

// Pin definition for CAMERA_MODEL_AI_THINKER
// Change pin definition if using another ESP32 camera module
#define PWDN_GPIO_NUM     32
#define RESET_GPIO_NUM    -1
#define XCLK_GPIO_NUM      0
#define SIOD_GPIO_NUM     26
#define SIOC_GPIO_NUM     27
#define Y9_GPIO_NUM       35
#define Y8_GPIO_NUM       34
#define Y7_GPIO_NUM       39
#define Y6_GPIO_NUM       36
#define Y5_GPIO_NUM       21
#define Y4_GPIO_NUM       19
#define Y3_GPIO_NUM       18
#define Y2_GPIO_NUM        5
#define VSYNC_GPIO_NUM    25
#define HREF_GPIO_NUM     23
#define PCLK_GPIO_NUM     22

camera_config_t config;

#define uS_TO_S_FACTOR 1000000
#define TIME_TO_SLEEP  10
RTC_DATA_ATTR int bootCount = 0;


void print_wakeup_reason(){
  esp_sleep_wakeup_cause_t wakeup_reason;
  wakeup_reason = esp_sleep_get_wakeup_cause();
  switch(wakeup_reason)
  {
    case ESP_SLEEP_WAKEUP_EXT0 : Serial.println("Wakeup caused by external signal using RTC_IO"); break;
    case ESP_SLEEP_WAKEUP_EXT1 : Serial.println("Wakeup caused by external signal using RTC_CNTL"); break;
    case ESP_SLEEP_WAKEUP_TIMER : Serial.println("Wakeup caused by timer"); break;
    case ESP_SLEEP_WAKEUP_TOUCHPAD : Serial.println("Wakeup caused by touchpad"); break;
    case ESP_SLEEP_WAKEUP_ULP : Serial.println("Wakeup caused by ULP program"); break;
    default : Serial.printf("Wakeup was not caused by deep sleep: %d\n",wakeup_reason); break;
  }
}


void configInitCamera(){
  config.ledc_channel = LEDC_CHANNEL_0;
  config.ledc_timer = LEDC_TIMER_0;
  config.pin_d0 = Y2_GPIO_NUM;
  config.pin_d1 = Y3_GPIO_NUM;
  config.pin_d2 = Y4_GPIO_NUM;
  config.pin_d3 = Y5_GPIO_NUM;
  config.pin_d4 = Y6_GPIO_NUM;
  config.pin_d5 = Y7_GPIO_NUM;
  config.pin_d6 = Y8_GPIO_NUM;
  config.pin_d7 = Y9_GPIO_NUM;
  config.pin_xclk = XCLK_GPIO_NUM;
  config.pin_pclk = PCLK_GPIO_NUM;
  config.pin_vsync = VSYNC_GPIO_NUM;
  config.pin_href = HREF_GPIO_NUM;
  config.pin_sscb_sda = SIOD_GPIO_NUM;
  config.pin_sscb_scl = SIOC_GPIO_NUM;
  config.pin_pwdn = PWDN_GPIO_NUM;
  config.pin_reset = RESET_GPIO_NUM;
  config.xclk_freq_hz = 20000000;
  config.pixel_format = PIXFORMAT_JPEG; //YUV422,GRAYSCALE,RGB565,JPEG
  config.grab_mode = CAMERA_GRAB_LATEST;

  if(psramFound()){
    config.frame_size = FRAMESIZE_UXGA; // FRAMESIZE_ + QVGA|CIF|VGA|SVGA|XGA|SXGA|UXGA
    config.jpeg_quality = 10; //0-63 lower number means higher quality
    config.fb_count = 1;
  } else {
    config.frame_size = FRAMESIZE_SVGA;
    config.jpeg_quality = 12;
    config.fb_count = 1;
  }
  
  esp_err_t err = esp_camera_init(&config);
  if (err != ESP_OK) {
    Serial.printf("Camera init failed with error 0x%x", err);
    return;
  }
}


String getPictureFilename(){
  struct tm timeinfo;
  if(!getLocalTime(&timeinfo)){
    Serial.println("Failed to obtain time");
    return "";
  }
  char timeString[20];
  strftime(timeString, sizeof(timeString), "%Y-%m-%d_%H-%M-%S", &timeinfo);
  Serial.println(timeString);
  String filename = "/img/picture_" + String(timeString) +".jpg";
  return filename; 
}


void initMicroSD-card(){
  Serial.println("Starting SD Card");
  if(!SD_MMC.begin()){
    Serial.println("SD Card Mount Failed");
    return;
  }
  uint8_t cardType = SD_MMC.cardType();
  if(cardType == CARD_NONE){
    Serial.println("No SD Card attached");
    return;
  }
}


void takeSavePhoto(){
  camera_fb_t * fb = esp_camera_fb_get();
  if(!fb) {
    Serial.println("Camera capture failed");
    delay(1000);
    ESP.restart();
  }

  EEPROM.begin(EEPROM_SIZE);
  pictureNumber = EEPROM.read(0) + 1;

  String path = "/img/picture" + String(pictureNumber) +".jpg";
  fs::FS &fs = SD_MMC; 
  Serial.printf("Picture file name: %s\n", path.c_str());
  
  File file = fs.open(path.c_str(), FILE_WRITE);
  if(!file){
    Serial.println("Failed to open file in writing mode");
  } 
  else {
    file.write(fb->buf, fb->len); // payload (image), payload length
    Serial.printf("Saved file to path: %s\n", path.c_str());
    EEPROM.write(0, pictureNumber);
    EEPROM.commit();
  }
  file.close();
  esp_camera_fb_return(fb); 
}


void setup() {
  WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0); // disable brownout detector

  Serial.begin(115200);
  delay(500);

  esp_bt_controller_disable();
  esp_wifi_stop();

  Serial.print("Initializing the camera module...");
  configInitCamera();
  Serial.println("Ok!");
  Serial.print("Initializing the MicroSD card module... ");
  initMicroSD-card();

  // initialize EEPROM with predefined size
  EEPROM.begin(EEPROM_SIZE);
  pictureNumber = EEPROM.read(0) + 1;

  takeSavePhoto();

  ++bootCount;
  Serial.println("Boot number: " + String(bootCount));
  print_wakeup_reason();
  esp_sleep_enable_timer_wakeup(TIME_TO_SLEEP * uS_TO_S_FACTOR);
  Serial.println("Setup ESP32 to sleep for every " + String(TIME_TO_SLEEP) +
  " Seconds");

  Serial.println("Going to sleep now");
  delay(300);
  Serial.flush(); 
  esp_deep_sleep_start();
  Serial.println("This will never be printed");
}


void loop() {    
}
```


### Come caricare il programma usando l'IDE di Arduino

Per compilare e caricare un programma usando l'Arduino IDE, è necessario seguire questi passaggi:

- Aprite l'Arduino IDE.
- Create un nuovo progetto o aprite un progetto esistente.
- Inserisci il codice del programma nel file .ino.
- Collegate la scheda Arduino al computer.
- Seleziona la scheda Arduino dal menu Strumenti.
- Fate clic sul pulsante Compila.

Se la compilazione è andata a buon fine, il pulsante Carica diventerà attivo.
Fate clic sul pulsante Carica per caricare il programma sulla scheda Arduino.

##### Passaggio 1: Aprire l'Arduino IDE

Per aprire l'Arduino IDE, è possibile fare doppio clic sull'icona dell'applicazione sul desktop. Se non avete ancora installato l'Arduino IDE, potete scaricarlo dal sito web di Arduino.

##### Passaggio 2: Creare un nuovo progetto o aprire un progetto esistente

Per creare un nuovo progetto, fate clic sul menu File e selezionate Nuovo. Per aprire un progetto esistente, fate clic sul menu File e selezionate Apri.

##### Passaggio 3: Inserisci il codice del programma nel file .ino

Il file .ino è il file di testo che contiene il codice del programma. Per inserire il codice del programma nel file .ino, potete utilizzare un editor di testo qualsiasi.

##### Passaggio 4: Collegare la scheda Arduino al computer

Per collegare la scheda Arduino al computer, è necessario utilizzare un cavo USB. La porta USB della scheda Arduino è contrassegnata con il simbolo USB.

#####  Passaggio 5: Seleziona la scheda Arduino dal menu Strumenti

Per selezionare la scheda Arduino dal menu Strumenti, fate clic sul menu Strumenti e selezionate la scheda Arduino che avete collegato al computer.

##### Passaggio 6: Fare clic sul pulsante Compila

Per compilare il programma, fate clic sul pulsante Compila. Se la compilazione è andata a buon fine, non verranno visualizzati errori nella finestra del terminale.

##### Passaggio 7: Se la compilazione è andata a buon fine, il pulsante Carica diventerà attivo

Se la compilazione è andata a buon fine, il pulsante Carica diventerà attivo.

##### Passaggio 8: Fare clic sul pulsante Carica per caricare il programma sulla scheda Arduino

Per caricare il programma sulla scheda Arduino, fate clic sul pulsante Carica. Il programma verrà copiato sulla scheda Arduino e inizierà ad eseguirsi.


### Come caricare il programma usando PlatformIO

Per compilare e caricare un programma usando <a href="https://platformio.org/install/ide?install=vscode" target="_blank" rel="noopener">PlatformIO</a>, è necessario seguire questi passaggi:

- Installare PlatformIO. Per fare ciò, è possibile utilizzare il gestore di pacchetti del proprio IDE.
- Creare un nuovo progetto. Per fare ciò, è possibile utilizzare la funzione "New Project" del proprio IDE.
- Scrivere il codice del programma.
- Compilare il programma. Per fare ciò, è possibile utilizzare il comando "PlatformIO Build" del proprio IDE.
- Caricare il programma sulla scheda. Per fare ciò, è possibile utilizzare il comando "PlatformIO Upload" del proprio IDE.

##### Passaggio 1: Installare PlatformIO

Per installare PlatformIO, è possibile utilizzare il gestore di pacchetti del proprio IDE. Per esempio, se si utilizza Visual Studio Code, è possibile aprire la barra laterale di Extensions e cercare "PlatformIO IDE". Una volta trovata l'estensione, è possibile installarla facendo clic sul pulsante "Install".

##### Passaggio 2: Creare un nuovo progetto

Per creare un nuovo progetto, è possibile utilizzare la funzione "New Project" del proprio IDE. Per esempio, in Visual Studio Code, è possibile aprire la barra laterale di Projects e fare clic sul pulsante "New Project".

Nella finestra di dialogo "New Project", è necessario selezionare il tipo di progetto da creare. Per i progetti Arduino, è necessario selezionare "Arduino". È inoltre necessario selezionare la scheda Arduino da utilizzare.

##### Passaggio 3: Scrivere il codice del programma

Una volta creato il progetto, è possibile scrivere il codice del programma. Il codice può essere scritto in qualsiasi linguaggio supportato da PlatformIO, tra cui C/C++, Python, JavaScript e TypeScript.

Per esempio, ecco un semplice programma Arduino che fa lampeggiare un LED:


```bash
#include <Arduino.h>

void
 
setup()
 
{
  pinMode(LED_BUILTIN, OUTPUT);
}

void
 
loop()
 
{
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```

##### Passaggio 4: Compilare il programma

Una volta scritto il codice del programma, è possibile compilarlo. Per fare ciò, è possibile utilizzare il comando "PlatformIO Build" del proprio IDE.

In Visual Studio Code, è possibile eseguire il comando "PlatformIO Build" premendo la scorciatoia da tastiera Ctrl+Shift+B.

##### Passaggio 5: Caricare il programma sulla scheda

Una volta compilato il programma, è possibile caricarlo sulla scheda. Per fare ciò, è possibile utilizzare il comando "PlatformIO Upload" del proprio IDE.

In Visual Studio Code, è possibile eseguire il comando "PlatformIO Upload" premendo la scorciatoia da tastiera Ctrl+Shift+U.

Una volta caricato il programma sulla scheda, esso inizierà ad eseguire.


### Usare PlatformIO dalla linea di comando

Se usate come facciamo noi PlatformIO dalla linea di comando dovrete inserire nel file platformio.ini il seguente codice:


```bash
; PlatformIO Project Configuration File
;
;   Build options: build flags, source filter
;   Upload options: custom upload port, speed and extra flags
;   Library options: dependencies, extra library storages
;   Advanced options: extra scripting
;
; Please visit documentation for the other options and examples
; https://docs.platformio.org/page/projectconf.html

[env:esp32cam]
platform = espressif32
board = esp32cam
framework = arduino
monitor_speed=115200
lib_ldf_mode=deep
build_flags =
   -I../lib/esp32-camera

lib_deps =
  esp32-camera
```


### Come formattare la scheda SD-card su Windows 


Per formattare una scheda SD-card in Windows usando il filesystem FAT, segui questi passaggi:



- Collega la scheda SD-card al tuo computer utilizzando un adattatore per schede SD o un lettore di schede.
- Apri <a href="https://support.microsoft.com/it-it/windows/trovare-e-aprire-esplora-file-ef370130-1cca-9dc5-e0df-2f7416fe1cb1" target="_blank" rel="noopener">Esplora file</a>
 premendo la Windows + E.

<img img width="800" style="border: 2px solid #999;" class="x figure-img img-fluid lazyload blur-up"  src="images/103.png" alt="schermata di Esplora file quando usi Windows 10 e 11">


- In Esplora file, seleziona "Questo PC".
- La scheda SD-card dovrebbe apparire nell'elenco dei dispositivi di archiviazione.
- Fai clic destro sulla scheda SD-card e seleziona "Formatta".
- Selezione della scheda SD-card in Esplora fileOpens in a new window

- Selezione della scheda SD-card in Esplora file
- Nella finestra di formattazione, seleziona "FAT32" dal menu a discesa "File system".
- Fai clic su "Avvia" per avviare la formattazione.

> La formattazione della scheda SD-card richiederà alcuni minuti. Al termine, la scheda SD-card sarà formattata in FAT32.
Attenzione: La formattazione di una scheda SD-card cancella tutti i dati presenti sulla scheda. Assicurati di aver eseguito il backup di tutti i dati importanti prima di formattare la scheda.


#### Conclusione

Dopo avere superato lo scoglio della formattazione e della compilazione potete iniziare ad usare il progetto semplicemente collegandola la scheda alla accendisigari. In questo modo arete a disposizione un sistema di controllo super economico.
La ESP32 con la camera OV2640 vi permetterà di salvare le immagini dell'esterno vettura e usarle come prova per atti vandalici.


<br>
<br>
<p style="font-size: 0.8em;">R.128.1.2.0</p>