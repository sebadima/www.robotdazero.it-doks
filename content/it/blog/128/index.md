---
title: "Come usare la ESP32 Cam per controllare la nostra vettura"
description: "Come usare la ESP32 Cam per controllare la nostra vettura"
excerpt: "L’introduzione del nuovo SoC ESP32-S3, che offre prestazioni e funzionalità migliorate rispetto al precedente ESP32. L’ESP32-S3 è dotato di un processore dual-core da 240 MHz..."
date: 2023-11-17T09:19:42+01:00
lastmod: 2023-11-17T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["schede", "ESP32", "AI"]
contributors: ["sebadima"]
pinned: false
homepage: false
mermaid: true
---



<hr>


Come usare la OV2640 cam per controllare la vostra vettura nel parcheggio

In questo post vedremo come utilizzare la OV2640 cam per controllare la vostra vettura nel parcheggio. La OV2640 cam è una fotocamera digitale a colori con risoluzione di 2 megapixel. È una fotocamera economica e facile da usare, che può essere utilizzata per una varietà di applicazioni, tra cui il monitoraggio del parcheggio.

Materiali necessari

Per utilizzare la OV2640 cam per controllare la vostra vettura nel parcheggio, avrete bisogno dei seguenti materiali:

Una OV2640 cam
Un adattatore USB OTG
Un computer o uno smartphone con porta USB
Un software per la visione delle immagini
Connessione della fotocamera

Collegare la fotocamera al computer o allo smartphone utilizzando l'adattatore USB OTG. La fotocamera dovrebbe essere rilevata automaticamente dal dispositivo.

Installazione del software

Installare un software per la visione delle immagini sul computer o sullo smartphone. Ci sono molti software disponibili, tra cui VLC Media Player e OpenCV.

Configurazione della fotocamera

Una volta installato il software, è necessario configurare la fotocamera. La maggior parte dei software offre una serie di opzioni di configurazione, tra cui la risoluzione dell'immagine, la frequenza dei fotogrammi e la sensibilità alla luce.

Avvio della registrazione

Una volta configurata la fotocamera, è possibile avviare la registrazione. La maggior parte dei software offre un'opzione per registrare le immagini in un file video.

Controllo della vettura

Per controllare la vostra vettura, è sufficiente avviare la registrazione e collegarvi al dispositivo su cui è installato il software. È possibile visualizzare le immagini in tempo reale e registrare un video della vostra vettura.

Esempio di utilizzo

Ecco un esempio di come utilizzare la OV2640 cam per controllare la vostra vettura nel parcheggio:

Collegate la fotocamera al computer utilizzando l'adattatore USB OTG.
Installate il software VLC Media Player sul computer.
Avviate VLC Media Player e caricate il file di immagine della fotocamera.
Posizionate la fotocamera in modo che possa vedere la vostra vettura.
Avviate la registrazione.
In questo modo, potrete visualizzare le immagini della vostra vettura in tempo reale e registrare un video. Questo vi permetterà di controllare la vostra vettura anche quando non siete presenti.


### IL PROGRAMMA 

```bash
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


void initMicroSDCard(){
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
  initMicroSDCard();

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


Conclusione

La OV2640 cam è una soluzione semplice ed economica per controllare la vostra vettura nel parcheggio. Con pochi semplici passaggi, potrete visualizzare le immagini della vostra vettura in tempo reale e registrare un video.


<br>
<br>
<p style="font-size: 0.8em;">R.128.0.0.1</p>