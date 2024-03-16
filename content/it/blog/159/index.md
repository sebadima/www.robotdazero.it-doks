---
title:        "Una centralina meteo con ESP32, ESP-NOW e Wi-Fi"
description:  "Una centralina meteo con ESP32, ESP-NOW e Wi-Fi"
excerpt:      "Trasforma il tuo ESP32 in una potente centralina meteo! Crea una rete di sensori wireless con ESP-NOW e monitora in tempo reale: Temperatura - Qualità dell'aria - Metano - Monossido di Carbonio e altri parametri ambientali. Con il Wi-Fi invia i dati a un server web per l'analisi e la visualizzazione..."
date:         2024-03-07T01:20:42+01:00
lastmod:      2024-03-07T01:20:42+01:00
draft:        true
weight:       50
images:       ["header.jpeg"]
categories:   ["News"]
tags:         ["ESP32", "sensori", "ESP-NOW", "MQ2", "MQ135", "DHT11"]
contributors: ["sebadima"]
pinned:       false
homepage:     false
mermaid:      true
---



<!-- 
<img width="300" class="x figure-img img-fluid lazyload blur-up"  src="/images/154.png" alt="schema connessioni">
<strong>1</strong>. <span style="background-color:#eeeeee"> Controllo delle versioni</span>:
img width="70" class="x figure-img img-fluid lazyload blur-up"  src="/hog/inter.svg" alt="logo sezione"><br><br>

```bash
```     
<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑.</div>
<iframe  width="800" height="1200" src="https://robotdazero.ck.page/posts/000002" title="W3Schools Free Online Web Tutorials"></iframe>

-->



## Introduzione

La nostra centralina "meteo" con sensori di gas nocivi può catturare in tempo reale la presenza di +25 sostanze tossiche, tra cui idrocarburi  e ossidi di azoto e visualizzare la concentrazione dei gas, la temperatura e l'umidità dell'aria su un qualunque dispositivo dotato di browser Web.

### Le scelte di progetto

Il progetto usa stazioni trasmittenti multiple, da collocare in zone anche distanti e non coperte dal segnale Wi-Fi: Sfruttando il protocollo ESP-NOW di Espressif la centralina può visualizzare i dati dei sensori posti fino a 800 metri di distanza!<br>
  
Per la stazione trasmittente abbiamo inoltre selezionato dei componenti di pregio, come i due sensori di gas MQ2 e MQ135. Questi dispositivi garantiscono delle misurazioni affidabili  ad un un costo contenuto, ed essendo dotati di connettori con passo di 2.54 mm permettono di assemblare tutto il prototipo su una classica breadboard da 830 punti.

> *Il progetto è facilmente estensibile per leggere il valore di otto diversi trasmettitori con minime modifiche ai programmi. A tale scopo **tutto** il software viene distribuito in modalità "Open Source" e quindi completamente gratuito e personalizzabile.*

#### Utilizzo della centralina in ambienti "chiusi"

Con il dispositivo potresti, ad esempio, controllare la qualità dell'aria nella tua casa e monitorare gas come CO, metano, GPL e fumi di combustione. In questo modo otterresti un ambiente più sicuro in tutti locali compresi box e garage esterni. Inoltre il sensore MQ2 potrebbe diventare un alleato prezioso per anticipare problemi all'impianto del metano, a stufe e scaldabagni a gas.

> *La centralina può sicuramente aiutarti a prevenire malanni legati agli sbalzi di temperatura e definire una qualità dell'aria superiore grazie al sensore incorporato MQ135. Il sensore infatti riesce a tracciare la infiltrazione di molti inquinanti industriali, come il benzene e gli ossidi di azoto e i pericolosi "vapori" di ammoniaca e trielina.* 


#### Utilizzo della centralina in ambienti "aperti"

All'aperto la centralina può controllare la qualità dell'aria in giardini, parchi e camping grazie ai due sensori MQ. Avrai solo bisogno di una sorgente di alimentazione a 5V con attacco USB, una esigenza che puoi assolvere facilmente con degli economici *power bank* per telefonia mobile.<br>Per quanto riguarda i dati e il server Web, la centralina funziona egregiamente sfruttando il solo *hotspot* del telefonino e con un consumo di dati molto ridotto grazie alla tecnologia di programmazione "AJAX". 

### Gli utilizzi professionali della nostra centralina

Nell'ambito della domotica potresti integrare la centralina nel tuo sistema domestico, per offrire *anche* il controllo completo dell'aria e dei gas pericolosi.<br>Nel giardinaggio potresti monitorare a basso costo le condizioni climatiche delle tue piante direttamente sul terreno e lontano dalla rete Wi-Fi. <br>E nel campo della industria e limitatamente alla qualità dell'aria, il dispositivo potrebbe controllare la conformità delle aziende alle normative ambientali. 

#### Perchè proprio ESP32 e non Arduino

Abbiamo scelto ESP32 per la sua formidabile connettività: la rete ESP-NOW, disponibile solo su questo *controller*, permette di porre i sensori ad oltre 800 metri dalla stazione ricevente: Una prestazione impossibile da ottenere con il solo Arduino e la normale copertura del Wi-Fi.


<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑
 I valori da noi indicati si riferiscono alle normali installazioni di ESP-NOW in modalità "<strong>long range</strong>" e senza antenne speciali o amplificatori RF. I dispositivi possono certamente raggiungere queste portate, ma solo a patto di posizionarli in posizioni elevate e lontane da interferenze fisiche (muri, palazzi, alberi).</div>


<br>Nelle versioni future della centralina useremo gli stessi sensori e le schede di comunicazione dati "LoRa" per consentire la trasmissione fino a 2/3 chilometri in ambiente urbano e 10/15 chilometri in aria libera.

## i componenti e il software

### #1 - Il trasmettitore

Pe realizzare il trasmettitore ti serviranno questi materiali:

- Sensore MQ-2 - vedi su <a href="https://amzn.to/49pwhrF" target="_blank">Amazon</a>
- Sensore MQ-135 - vedi su <a href="https://amzn.to/48qeoaT" target="_blank">Amazon</a>
- Sensore DHT11 - vedi su <a href="https://amzn.to/49f2fqF" target="_blank">Amazon</a>
- Scheda ESP32 - vedi su <a href="https://amzn.to/49Gig8Q" target="_blank">Amazon</a>
- Breadboard per montaggi elettronici

### Assemblaggio del trasmettitore

Per costruire il trasmettitore puoi usare i connettori Dupont seguendo lo schema elettrico che vedi in basso. Ti suggerisco di inserire innanzitutto la scheda ESP32 e quindi i connettori per i sensori e l'alimentazione. Solo "**dopo**" dovresti inserire i sensori con il vantaggio di avere la filatura già pronta. <br>Per montare il trasmettitore non serve alcuna saldatura a meno che tu non voglia creare un prodotto molto robusto da distribuire commercialmente: Anche in questo caso, comunque potresti ridurre al minimo le saldature utilizzando la scheda multifunzione disponibile nel nostro <a href="/docs/ecommerce/multifunzione/">ecommerce</a>. 

<br>

<img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/103.png" alt="schema elettrico fritzing della centralina multi sensore con ESP32">

### Configurazione software del trasmettitore 

Per la compilazione di questo progetto puoi usare Arduino Ide o il compilatore a linea di Comando PlatformIO. Esiste una terza possibilità per compilare i programmi e cioè usare PlatformIO integrato in Visual Studio Code; ma per il momento ti forniremo istruzioni dettagliate solo per le prime due opzioni.

#### Compilazione con Arduino IDE

Per ottenere il codice sorgente specifico per il trasmettitore ti basta lanciare il comando GIT seguito dall'indirizzo del repository "corso-ESP32-centralina-meteo-trasmettitore" preparato per il nostro corso on line. Puoi fare copia e incolla dagli esempio in basso, modificando se vuoi il nome della directory.

##### su Windows con PowerShell:
```bash
md c:\Progetti_Arduino
cd c:\Progetti_Arduino
git clone git@github.com:sebadima/corso-ESP32-centralina-meteo-trasmettitore.git
```     

##### sul Terminale di Linux:
```bash
cd 
mkdir Progetti_Arduino
cd Progetti_Arduino
git clone git@github.com:sebadima/corso-ESP32-centralina-meteo-trasmettitore.git
```     

Fatto questo puoi aprire il programma con: "File"-> "Apri" dall'IDE e rispondere alla eventuale richiesta di spostare la directory o il "file main.ino". Potresti teoricamente compilare subito il programma, ma otterresti solo degli errori relativi alle librerie mancanti. Ad esempio potrebbero mancare due librerie come la "esp_now" o la "DHT" dedicata al sensore DHT11. <br>Detto ciò vediamo come risolvere il problema delle librerie mancanti...

##### Come installare le librerie su Arduino IDE

Per installare le librerie mancanti puoi procedere in questo modo:

- Apri Arduino IDE
- Clicca su "Sketch" -> "Includi libreria" -> "Gestisci librerie".
- Nella casella di ricerca, digita il nome della libreria mancante.
- Clicc sul pulsante "Installa" accanto alla libreria desiderata.

Ad esempio per installare la libreria del DHT11 puoi eseguire gli stessi passi digitando: "DHT":

Vedrai sulla sinistra un elenco delle librerie possibili e nel nostro caso puoi scegliere la libreria "DHT Sensor Lybrary" di Adafruit nella versione 1.4.6.<br>Clicca su "INSTALL" e potrai rilanciare la compilazione dello sketch. Purtroppo dovrai eseguire questi passaggi per ogni libreria mancante fino a quando il programma verrà compilato correttamente. Dopo di ciò potrai fare l'upload sulla ESP32 cliccando su "Sketch"->"Upload".

<br>

<img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/101.png" alt="installazione della libreria DHT di Adafruit su Arduino IDE">


####  Compilazione con PlatformIO

La compilazione con Platformio è molto più diretta perchè questo software provvede a installare le librerie leggendo il file "platformio.ini" che abbiamo inserito su Github. Per compilare puoi procedere semplicemente facendo copia e incolla dei comandi sottostanti:

```bash
git clone git@github.com:sebadima/corso-ESP32-centralina-meteo-trasmettitore.git
cd corso-ESP32-centralina-meteo-trasmettitore
make upload
platformio device monitor --baud 115200  --rts 0 --dtr 0 --port /dev/ttyUSB0
```     

Dopo la compilazione il comando "**platformio device monitor**" provvede a lanciare il monitor seriale sulla porta *ttyUSB0*. Se questo valore non dovesse corrispondere con la porta del tuo sistema Linux o Windows dovresti rilanciare la ultima riga con la porta realmente in uso.

### Il codice sorgente del trasmettitore

```bash
#include <Arduino.h>
#include <esp_now.h>
#include <WiFi.h>
#include <esp_wifi.h> 
#include "DHT.h"
#include "soc/soc.h"
#include "soc/rtc_cntl_reg.h"

constexpr char WIFI_SSID[] = "SSID-da-modificare";

// Indirizzi MAC dei dispositivi di destinazione
// trovati con la utility apposita
// indirizzo MAC di destinazione: A0:A3:B3:97:83:E8
constexpr uint8_t ESP_NOW_RECEIVER[] = { 0xA0, 0xA3, 0xB3, 0x97, 0x83, 0xE8 };

// Struct per definire il formato dei dati
typedef struct struct_messaggio {
  char a[32];
  int   umidita;
  float temperatura;
  float gas_1;
  float gas_2;
  int contatore;
} struct_messaggio;

struct_messaggio Dati;
esp_now_peer_info_t peerInfo;

#define DHTPIN 13
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);
float t, h, g_1, g_2;
int lost_packages;
int ix;
int Gas_1 = 33;
int Gas_2 = 35;

#define DELAY_RECONNECT 600 // intervallo in secondi per forzare il reboot
volatile int interruptCounter;
int totalInterruptCounter;
hw_timer_t * timer = NULL;
portMUX_TYPE timerMux = portMUX_INITIALIZER_UNLOCKED;



void IRAM_ATTR onTimer() 
{
  // https://github.com/espressif/arduino-esp32/blob/master/libraries/ESP32/examples/Timer/RepeatTimer/RepeatTimer.ino
  portENTER_CRITICAL_ISR(&timerMux);
  interruptCounter++;
  if (lost_packages >=15) {
    ESP.restart(); // Riesegui la connessione al nuovo canale WIFI
  }
  portEXIT_CRITICAL_ISR(&timerMux);
}


int32_t getWiFiChannel(const char *ssid) {

    if (int32_t n = WiFi.scanNetworks()) {
        for (uint8_t i=0; i<n; i++) {
            if (!strcmp(ssid, WiFi.SSID(i).c_str())) {
                return WiFi.channel(i);
            }
        }
    }

    return 0;
}


void initWiFi() {

    WiFi.mode(WIFI_MODE_STA);

    // acquisice il canale usato dalla WIFI
    int32_t channel = getWiFiChannel(WIFI_SSID);

    esp_wifi_set_promiscuous(true);
    esp_wifi_set_channel(channel, WIFI_SECOND_CHAN_NONE);
    esp_wifi_set_promiscuous(false);

    Serial.printf("SSID: %s\n", WIFI_SSID);
    Serial.printf("Channel: %u\n", WiFi.channel());
}


void initEspNow() {

    if (esp_now_init() != ESP_OK) {
        Serial.println("ESP NOW failed to initialize");
        while (1);
    }

    memcpy(peerInfo.peer_addr, ESP_NOW_RECEIVER, 6);
    peerInfo.ifidx   =  WIFI_IF_STA;
    peerInfo.encrypt = false;

    if (esp_now_add_peer(&peerInfo) != ESP_OK) {
        Serial.println("ESP NOW pairing failure");
        while (1);
    }
}


void suInvioDati(const uint8_t *mac_addr, esp_now_send_status_t status) {
  Serial.print("\r\nStatus invio:\t");
  Serial.println(status == ESP_NOW_SEND_SUCCESS ? "Consegna positiva" : "Errore di consegna");
  if (status != ESP_NOW_SEND_SUCCESS) {
      lost_packages ++;
  }
  if (lost_packages >=15) {
    Serial.println("ESP restarting on lost packages");
    ESP.restart(); // Riesegui la connessione al nuovo canale WIFI
  }
}


void setup() {
  Serial.begin(115200);
  WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0); //disable brownout detector

  initWiFi();
  initEspNow();

  timer = timerBegin(0, 80, true);
  timerAttachInterrupt(timer, &onTimer, true);
  timerAlarmWrite(timer, DELAY_RECONNECT * 1000000, true);
  timerAlarmEnable(timer);

  dht.begin();
  pinMode(Gas_1, INPUT);
  pinMode(Gas_2, INPUT);

  esp_now_register_send_cb(suInvioDati);
  ix = 1;
}


void loop() {
  
  h   = dht.readHumidity();
  t   = dht.readTemperature();
  g_1 = analogRead(Gas_1);
  g_2 = analogRead(Gas_2);

  if (isnan(g_1) )
  {
    Serial.println(F("Non riesco a leggere dal sensore di GAS 1!"));
    return;
  }

  if (isnan(g_2) )
  {
    Serial.println(F("Non riesco a leggere dal sensore di GAS 2!"));
    return;
  }
 
  if (isnan(t) ) 
  {
    Serial.println(F("Non riesco a leggere dal sensore DHT!"));
    return;
  }

  Serial.print("Temperatura: ");
  Serial.println(t);
  Serial.print("Umidità: ");
  Serial.println(h);
  Serial.print("Gas_1: ");
  Serial.println(g_1);
  Serial.print("Gas_2: ");
  Serial.println(g_2);

  strcpy(Dati.a, "Rilevazioni DHT11");
  Dati.umidita     = (int) h;
  Dati.temperatura = t;
  Dati.gas_1       = g_1;
  Dati.gas_2       = g_2;
  Dati.contatore   = ix;

  // invio del messaggio a ESP1
  esp_err_t result = esp_now_send(0, (uint8_t *) &Dati, sizeof(Dati));
   
  if (result == ESP_OK) {
    Serial.println("Messaggio inviato con successo");
  }
  else {
    Serial.println("Errore di invio");
  }

  ix = ix + 1;
  delay(2000);
}
```     

### Un breve commento al programma


##### Il nome della rete

Per usare il programma con la tua rete Wi-Fi o hotspot devi modificare la riga #9:

```bash
constexpr char WIFI_SSID[] = "SSID-da-modificare";
```
e inserire il SSID (il nome) della tua rete fissa o mobile.


##### L'indirizzo MAC della "ricevente"

Per funzionare la rete ESP-NOW *pretende* di sapere l'indirizzo MAC  univoco della scheda ESP32 di destinazione.

> Un indirizzo MAC (Media Access Control) è un identificativo univoco assegnato a ogni scheda di rete (NIC) presente in un dispositivo informatico. È un numero di 12 cifre esadecimali, solitamente rappresentato in gruppi di due coppie separate da due punti (ad esempio, 00:11:22:33:44:55).

```bash
// indirizzo MAC di destinazione: A0:A3:B3:97:83:E8
constexpr uint8_t ESP_NOW_RECEIVER[] = { 0xA0, 0xA3, 0xB3, 0x97, 0x83, 0xE8 };
```
Per ottenere il valore MAC della scheda abbiamo usato il programma descritto nella sezione #7.2 del nostro corso e quindi ti rimandiamo alle istruzioni lì pubblicate. Dopo avere ottenuto l'indirizzo MAC della tua scheda dovrai ovviamente inserirlo nel programma mantendendo la forma di scrittura 0x00.


##### La struttura dati: "struct_messaggio"

```bash
// Struct per definire il formato dei dati
typedef struct struct_messaggio {
  char a[32];
  int   umidita;
  float temperatura;
  float gas_1;
  float gas_2;
  int contatore;
} struct_messaggio;
```

I dati dei sensori non vengono comunicati separatamente ma sono raggruppati in una *struct* del linguaggio C++. La struct è un costrutto sintattico che si limita a definire soltanto il "typedef" (il formato) senza realmente creare spazio nella zona  variabili della RAM.

La istruzione successiva e cioè "struct_messaggio Dati;" crea effettivamente uno spazio nella RAM del controller e gli assegna il valore prescelto: Nel nostro caso semplicemente "Dati", che useremo per gestire e trasmettere le letture dei sensori e il contatore numerico. 

La prossima istruzione (contenuta all'interno della funzione loop) utilizza le variabili prelevandole con il *puntatore* "&Dati" e li fornisce alla funzione **"esp_now_send()"**. 


<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑
<strong>La "esp_now_send()" effettua una chiamata alla libreria Espressif per </strong>trasmettere i dati alla scheda ricevente. Anche se il tutto non appare proprio semplicissimo, potrai apprezzare come la trasmissione fisica sia gestita in toto dalla libreria con una singola istruzione. La maggior parte della complessità viene gestita dalla libreria esterna, per cui il programma risulta alla fine abbastanza semplice e breve.</div> 



<br>

##### Il reset automatico

Il programma utilizza delle funzioni avanzate di ESP32 per resettare la scheda dopo 15 pacchetti dati persi. Come in ogni applicazione IoT non poassiamo pensare di stare al computer per monitorare il comportamento dei dispositivi e dobbiamo prevedere delle istruzione di "recupero" automatico della connessione in caso di problemi.


```bash
#define DELAY_RECONNECT 600 // intervallo in secondi per forzare il reboot
volatile int interruptCounter;
int totalInterruptCounter;
hw_timer_t * timer = NULL;
portMUX_TYPE timerMux = portMUX_INITIALIZER_UNLOCKED;


void IRAM_ATTR onTimer() 
{
  portENTER_CRITICAL_ISR(&timerMux);
  interruptCounter++;
  if (lost_packages >=15) {
    ESP.restart(); // Riesegui la connessione al nuovo canale WIFI
  }
  portEXIT_CRITICAL_ISR(&timerMux);
}

```

La configurazione dell'interrupt viene completato dentro la funzione "setup()"

```bash
  timer = timerBegin(0, 80, true);
  timerAttachInterrupt(timer, &onTimer, true);
  timerAlarmWrite(timer, DELAY_RECONNECT * 1000000, true);
  timerAlarmEnable(timer);
```


Le prime cinque righe impostano la struttura dati suggerista da Espressif per la gestione degli interrupt mentre la successiva funzione "onTimer()" viene richiamata automaticamente dal sistema 

111111111

























### #2 - Il ricevitore 


### Assemblaggio del ricevitore

minimo assemblaggio 

<img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/103.png" alt="schema elettrico fritzing della centralina multi sensore con ESP32">

### Configurazione software del ricevitore 

Puoi usare Arduino Ide o il compilatore a linea di Comando PlatformIO. Esiste una terza possibilità per compil

####  Compilazione con Arduino IDE

- Specificare l'IDE utilizzato (es. Arduino IDE).
- Spiegare come installare le librerie necessarie.
- Fornire il codice sorgente per la configurazione del sensore di temperatura e umidità.

```bash
git clone git@github.com:sebadima/corso-ESP32-centralina-meteo-trasmettitore.git
cd corso-ESP32-centralina-meteo-trasmettitore
make upload
platformio device monitor --baud 115200  --rts 0 --dtr 0 --port /dev/ttyUSB0
```     

#### Compilazione con PlatformIO

- Mostrare come configurare il sensore di pressione atmosferica.
- Illustrare la configurazione del sensore di gas nocivi.


```bash
git clone git@github.com:sebadima/corso-ESP32-centralina-meteo-trasmettitore.git
cd corso-ESP32-centralina-meteo-trasmettitore
make upload
platformio device monitor --baud 115200  --rts 0 --dtr 0 --port /dev/ttyUSB0
```     


<br><img width="48" class="x figure-img img-fluid lazyload blur-up"  src="/hog/inter.svg" alt="logo sezione"><br><br>


## Il server Web

- Descrivere come acquisire i dati dai sensori.
- Spiegare come memorizzare i dati su scheda SD o EEPROM.
- Mostrare come inviare i dati ad un server remoto.
- Visualizzazione dei dati:

- Presentare diverse opzioni per la visualizzazione dei dati, come un grafico o un pannello di controllo.
- Fornire il codice sorgente per la visualizzazione dei dati sul display LCD.
- Mostrare come creare un'interfaccia web per la visualizzazione dei dati.


## Troubleshooting

riprendere da altri post

## Conclusioni

Riassumere i vantaggi della centralina meteo realizzata con ESP32 e C++.
Suggerire possibili miglioramenti e future implementazioni.
Ringraziare i lettori per l'attenzione e invitarli a lasciare commenti o domande.


<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.159.1.3.2</p>