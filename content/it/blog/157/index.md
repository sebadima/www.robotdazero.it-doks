---
title:        "Come implementare un server web con ESP32"
description:  "Come implementare un server web con ESP32"
excerpt:      "Espandi le tue abilità nel mondo IoT: Scopri come implementare un Server Web con ESP32 - La prima parte della guida completa per creare e gestire un Server Web Utilizzando la potente piattaforma ESP32!..."
date:         2024-03-01T01:20:42+01:00
lastmod:      2024-03-01T01:20:42+01:00
draft:        false
weight:       50
images:       ["header.jpeg"]
categories:   ["News"]
tags:         ["ESP32", "Sensori"]
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

-->



## Perchè implementare un server web con ESP32

Poter leggere i valori dei sensori collegati ad ESP32 attraverdo il "Monitor Seriale" di Arduino IDe o PlatformIO è un passaggio obbligato nella crescita di un programmatore IoT. Presto però la esigenza di convidere in rete i valori rilevati conduce alla creazione di un "sito" web da condividere in LAN o magari su Internet. In questa sezione vedremo quali sono le struttre dati e le funzioni per creare un server HTML minimale. Lo stesso programma verrà quindi "inglobato" nella versione evoluta della Centralina Multisensore che userà contemporaneamente HTML, Javascript, JSON, CSS e il protocollo di rete ESP-NOW per creare un prodotto "installabile" ve valido commercialmente.

## Cosa è un server WEB

Un server HTTP è un software che gestisce le richieste HTTP (Hypertext Transfer Protocol) da client come web browser o applicazioni.In ambito IoT, un server HTTP può essere implementato su un dispositivo Arduino per:

- Fornire un'interfaccia web per controllare il dispositivo.
- Restituire dati in formato JSON o XML per l'analisi.
- Ricevere comandi da client remoti.

## Come usare un server web con ESP32

ESP32 utilizza (per fortuna) la sterminata libreria di Arduino e per questa chi ha familiarità con la piattaforma non dovrà reinventare la ruota e apprendere nuovi comandi di programmazione. In generale per dei compiti complessi come la creazione di un server http conviene appoggiarsi a delle librerie già esistenti come la libreria "*WiFiServer*"" inclusa nell'IDE di Arduino. 
Per i tuo progetti "basici" Iot con Arduino puoi tranquillamente usare "*WebServer*", ma per il nostro server ESP32 e la necessita di inglonbre via JSON i valori forniti dalla rete ESP-NOW di Espressif abbiamo preferito utilizzare la più "*potente*" libreria <a href="https://github.com/me-no-dev/ESPAsyncWebServer" target="_blank">ESPAsyncWebServer</a>. Si tratta di una versione evoluta del server di base con la capacità di eseguire dei compiti in background. 

Per iniziare vediamo come caricare le librerie che ci servono e usiamo le prime due lineed del codice per caricare gli *header* delle 2 librerie che ci servono:

> I file header, o file di intestazione, sono file di testo con estensione .h che contengono informazioni utili per la compilazione del codice C++. <br>Le funzioni dei file header sono :<br>- Dichiarazioni di funzioni: Prototipi di funzioni che definiscono il nome, il tipo di ritorno e i parametri, 
<br>- Dichiarazioni di classi: Struttura e membri di classi C++.
<br>- Definizioni di macro: Costanti simboliche utilizzate nel codice.
<br>- Inclusione di librerie: Collegamento del codice con librerie esterne.
Ma in questo caso useremo i fil header per include due librerie, della prima abbiamo gia parato mentre la seconda "*WiFi.h*" serve a caricare le funzini per collegarsi alla rete Wi-Fi.

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑
<strong>I Vantaggi dell'utilizzo dei file header:</strong><br><br>
Aggiungere altre istruzioni solo per dichiarare "quello" che vogliamo fare nel resto del programma sembra una complicazione inutile, ma nella pratcia del C++ è emerso come dichiarare esplicitamente funzioni e librerie sia una pratica vantaggiosa che ottilizza la qualità del codice in questi settori:
<br><br><strong>Modularità</strong>, perchè permettono di dividere il codice in moduli separati e riutilizzabili - <strong>Organizzazione</strong>, in quanto migliorano la leggibilità e la manutenibilità del codice - <strong>Condivisione del codice</strong> perchè facilitano la condivisione di funzioni e librerie con altri sviluppatori.
</div>

### Gli header del programma

```bash
#include "ESPAsyncWebServer.h"
#include <WiFi.h>
```    

Le variabili statiche

```bash
constexpr char WIFI_SSID[] = "change-name";
constexpr char WIFI_PASS[] = "change-name";

IPAddress local_IP(192, 168, 1, 200);
IPAddress gateway(192, 168, 1, 1);
IPAddress subnet(255, 255, 0, 0);
IPAddress primaryDNS(8, 8, 8, 8);
IPAddress secondaryDNS(8, 8, 4, 4);
```

### Le variabili per il server web

```bash
AsyncWebServer server(80);

const char index_html[] PROGMEM = R"rawliteral(
<!DOCTYPE HTML><html>
<head>
  <title>Robotdazero - un semplice sito Statico</title>
</head>
<body>
  <p>Robotdazero - un semplice sito Statico</p>
</body>
</html>)rawliteral";
```


> In C++ con Arduino, la parola chiave R"()" (raw string literal) consente di definire stringhe letterali senza interpretare caratteri di escape come \n o \t. Questo significa che i caratteri di escape vengono trattati come caratteri letterali all'interno della stringa.Ad esempio, considera il seguente codice:cpp
Copy code
String str = R"(C:\Users\Arduino\)";
In questo caso, la stringa str conterrà il percorso C:\Users\Arduino\ senza che i caratteri di escape come \U, \A o \r vengano interpretati.

Questo è particolarmente utile quando si tratta di stringhe che includono percorsi file o espressioni regolari, in cui la presenza di caratteri di escape potrebbe rendere complicata la loro lettura o manipolazione.


 Utilizzando raw string literals, è possibile evitare la necessità di inserire doppie barre invertite (\\) per rappresentare una singola barra invertita (\) nei percorsi file, ad esempio.

Tuttavia, è importante notare che l'uso di stringhe raw può comportare il rischio di includere caratteri non desiderati nella stringa se non vengono gestiti correttamente, quindi è sempre consigliabile prestare attenzione quando si manipolano stringhe in questo modo.



### La connessione al WI-Fi

```bash
void initWiFi() {
    WiFi.mode(WIFI_MODE_STA);

    if(!WiFi.config(local_IP, gateway, subnet, primaryDNS, secondaryDNS)) {
      Serial.println("Non riesco a configurare la modalità station (STA)");
    }

    WiFi.begin(WIFI_SSID, WIFI_PASS);

    Serial.printf("In connessione a %s .", WIFI_SSID);
    while (WiFi.status() != WL_CONNECTED) { Serial.print("."); delay(200); }
    Serial.println("connesso!");

    IPAddress ip = WiFi.localIP();

    Serial.printf("SSID: %s\n", WIFI_SSID);
    Serial.printf("Canale: %u\n", WiFi.channel());
    Serial.printf("IP: %u.%u.%u.%u\n", ip & 0xff, (ip >> 8) & 0xff, (ip >> 16) & 0xff, ip >> 24);
}


```

### Il setup() e la funzioneloop()

```bash
```
<br><br><img width="70" class="x figure-img img-fluid lazyload blur-up"  src="/hog/inter.svg" alt="logo sezione"><br><br>

### Il programma con il monitor seriale

```bash
--- forcing DTR inactive
--- forcing RTS inactive
--- Terminal on /dev/ttyUSB0 | 115200 8-N-1
--- Available filters and text transformations: colorize, debug, default, direct, esp32_exception_decoder, hexlify, log2file, nocontrol, printable, send_on_enter, time
--- More details at https://bit.ly/pio-monitor-filters
--- Quit: Ctrl+C | Menu: Ctrl+T | Help: Ctrl+T followed by Ctrl+H
ets Jul 29 2019 12:21:46

rst:0x1 (POWERON_RESET),boot:0x13 (SPI_FAST_FLASH_BOOT)
configsip: 0, SPIWP:0xee
clk_drv:0x00,q_drv:0x00,d_drv:0x00,cs0_drv:0x00,hd_drv:0x00,wp_drv:0x00
mode:DIO, clock div:2
load:0x3fff0030,len:1184
load:0x40078000,len:13232
load:0x40080400,len:3028
entry 0x400805e4
In connessione a D-Link-3D1BBF000 .....
```     



<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.157.1.0.0</p>