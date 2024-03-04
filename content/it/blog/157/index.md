---
title:        "Come funziona un server web con ESP32"
description:  "Come funziona un server web con ESP32"
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



## Perchè usare un server web con ESP32

Un progetto che si limiti a presentare i valori dei sensori sul "Monitor Seriale" di Arduino IDE è una tappa inevitabile per un programmatore IoT, ma si tratta di una applicazione amatoriale e gravata da ovvi limiti. Per realizzare applicazioni professionali abbiamo bisogno di *condividere* i dati rilevati e magari inviarli a qualche App su Android. Per fare questo salto di qualità dobbiamo imparare delle nuove, semplici tecniche di networking (nulla di complicato) e usare un programma fondamentale nel mondo IoT: Il "server" HTTP.

In questo paragrafo vedremo quali sono le strutture dati e le funzioni per creare un server HTTP minimale. Lo stesso codice verrà quindi "incorporato" nella versione evoluta della nostra Centralina Multi-sensore. Con questo innesto la centralina potrà condividere i dati usando un sito web dinamico con HTML, Javascript e JSON. Il protocollo JSON è necessario per implementare il sistema <a href="https://www.w3schools.com/js/js_ajax_intro.asp" target="_blank">AJAX</a>.

> AJAX (Asynchronous JavaScript and XML) è una tecnica di sviluppo web che permette di aggiornare una pagina web in modo dinamico, senza ricaricare l'intera pagina e senza cliccare sul tasto *Aggiorna* del browser.<br><strong>Come funziona Ajax</strong><br>Il meccanismo software si può dividere per semplicità in tre parti:<br>- Richiesta: L'utente invia una richiesta al server tramite JavaScript. <br>- Elaborazione: Il server elabora la richiesta e restituisce una risposta in formato XML, JSON o testo.
<br>- Aggiornamento: Il client JavaScript aggiorna la pagina web in base alla risposta ricevuta.


Una applicazione IoT moderna dovrebbe necessariamente includere AJAX per i grandi benefici che apporta nella esperienza utente (Le pagine web sono più fluide e reattive), ma anche per la riduzione nel traffico da e verso l'ESP32. Seppure i moderni microcontroller siano molto superiori ad Arduino UNO, le loro capacità di elaborazione sono comunque lontane dalle classiche CPU per Desktop.

##### "Se vorrete costruire la nostra centralina con le modifiche che vi presentiamo potrete realizzare a basso costo un efficiente prodotto IoT dalla reale valenza commerciale."

### Cosa è un server HTTP

Un server HTTP (server web) è un software che gestisce le richieste HTTP (Hypertext Transfer Protocol) da client come web browser o applicazioni. In ambito IoT, un server HTTP può essere implementato su un dispositivo ESP32 per:

- Fornire un'interfaccia web per controllare un dispositivo,
- Restituire dati in formato JSON o XML per l'analisi,
- Ricevere comandi da client remoti.

### Come usare un server web con ESP32

ESP32 utilizza (per fortuna) la sterminata libreria di Arduino e chi ha familiarità con questa piattaforma non dovrà imparare alcun nuovo concetto di programmazione. Come avviene con Arduino, per risolvere dei compiti complessi come la creazione di un server http, conviene appoggiarsi a del software già esistente. In questo caso potevamo usare, ad esempio la libreria "*<a href="https://github.com/espressif/arduino-esp32/tree/master/libraries/WebServer" target="_blank">WebServer</a>*" inclusa nell'IDE di Arduino e adottata da <a href="https://github.com/espressif" target="_blank">Espressif</a> per l'ESP32. 

Per i tuo progetti "basici" IoT puoi tranquillamente usare "*WebServer*", ma per il nostro server ESP32 con il sistema asincrono AJAX e il rendering dei valori in background, abbiamo preferito utilizzare la più *potente* libreria <a href="https://github.com/me-no-dev/ESPAsyncWebServer" target="_blank">ESPAsyncWebServer</a>, asincrona come suggerisce il nome e specifica per l'ESP32.

## Il codice

Per iniziare con il codice vediamo come caricare le librerie che ci servono e lo faremo nelle prime due linee per caricare gli **header** di due librerie.

> I file header, o file di intestazione, sono file di testo con estensione .h che contengono informazioni utili per la compilazione del codice C++. <br><br>Le funzioni dei file header sono molteplici e non si limitano ad *agganciare* librerie come nel nostro caso:<br>- Dichiarazioni di funzioni: Prototipi di funzioni che definiscono il nome, il tipo di ritorno e i parametri, 
<br>- Dichiarazioni di classi: Struttura e membri di classi C++.
<br>- Definizioni di macro: Costanti simboliche utilizzate nel codice.
<br>- Inclusione di librerie: Collegamento del codice con librerie esterne.

Per chi inizia con il C++, aggiungere altre istruzioni solo per dichiarare "quello" che vogliamo fare nel resto del programma può sembrare una complicazione inutile, ma non è così.

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑
<strong>I Vantaggi dell'utilizzo dei file header:</strong><br>
Nella pratica del C++ è emerso come dichiarare esplicitamente funzioni e librerie sia una pratica vantaggiosa per migliorare la qualità del codice in questi settori:
<br><br><strong>Modularità</strong>, perchè permettono di dividere il codice in moduli separati e riutilizzabili - <strong>Organizzazione</strong>, in quanto migliorano la leggibilità e la manutenibilità del codice - <strong>Condivisione del codice</strong> perchè facilitano la condivisione di funzioni e librerie con altri sviluppatori.
</div>

#### Gli header del programma

```bash
#include "ESPAsyncWebServer.h"
#include <WiFi.h>
```    
Il primo include "carica" la libreria fondamentale e cioè "ESPAsyncWebServer", mentre il secondo serve a *caricare* tutte le funzioni per il wireless offerte dalla libreria <a href="https://www.arduino.cc/reference/en/libraries/wifi/" target="_blank">Wifi</a> di Arduino.


#### Le variabili statiche

```bash
constexpr char WIFI_SSID[] = "change-name";
constexpr char WIFI_PASS[] = "change-name";

IPAddress local_IP(192, 168, 1, 200);
IPAddress gateway(192, 168, 1, 1);
IPAddress subnet(255, 255, 0, 0);
IPAddress primaryDNS(8, 8, 8, 8);
IPAddress secondaryDNS(8, 8, 4, 4);
```

Le prime due righe usano la istruzione "*constexpr*" per motivi di ottimizzazione del codice. Con <a href="https://en.cppreference.com/w/cpp/language/constexpr" target="_blank">constexpr</a> possiamo assegnare il valore di espressioni (anche complesse) nel momento della compilazione, anziché a tempo di esecuzione, migliorando significativamente le prestazioni del codice.

Le cinque righe successive assomigliano a delle normali dichiarazioni di variabili, ma sono variabili di un tipo specifico e cioè "*IPAddress*" specifico per interfacciarsi con la libreria Wifi. Per fortuna non dobbiamo ridefinire e modificare il loro "tipo", ci basta seguire il formato ideato dagli sviluppatori e inserire i quattro parametri di un classico indirizzo IP.

Parlare di variabili in queste instruzioni è un poco ingannevole, perchè si tratta di valori che vengono definiti "una tantum" nel momento della creazione: Sono i parametri per le funzioni "Object Oriented" della libreria WiFi, ma dal punto di vista della teoria della programmazioni sono comunque cinque variabili con un tipo dati creato ad hoc.


### Le "variabili" per il server web

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

La prima riga crea la "istanza" dell'oggetto AsyncWebServer assegnando nel contempo il valore "80" come porta da usare nella applicazione. Il valore "80" viene usato per il normale protocollo http mentre il valore "443" viene riservato a quello http(s). Il nome dell'oggetto creato sarà semplicemente un generico "server" e la cosa non è priva di vantaggi: Se decidiamo di cambiare tipo di server e libreria collegata non avremo bisogno di modificare decine o centinaia di istruzioni nel codice, ci basta cambiare la riga:

```bash
AsyncWebServer server(80);
```

in 

```bash
WebServer server(80);
```

La riga successiva: <br>const char index_html[] PROGMEM = R"rawliteral(... ...)rawliteral";<br> (si tratta di una singola riga!) crea un oggetto statico "*index_html*" che usa il "modificatore di variabile" <a href="https://github.com/me-no-dev/ESPAsyncWebServer#send-large-webpage-from-progmem-containing-templates" target="_blank">PROGMEM</a> per inserire le istruzioni successive nella zona di memoria flash di ESP32. 

Si tratta dunque di un trucco specifico per l'ESP32. Nel nostro caso specifico, vista la ridotta lunghezza della variabile, potevamo fare a meno di usarlo, ma ti ricordo che questa versione del programma serve a spiegarne il funzionamento, mentre nella versione finale da usare nella nostra Centralina Multisensore tale accorgimento sarà necessario per compilare il programma. Nella nota seguente cercheremo di chiare l'atro aspetto misterioso della riga e cioè il costrutto sintattico "R()".

> Nel C++ di Arduino, la parola chiave <strong>R"()"</strong> (rawliteral) consente di definire stringhe letterali senza interpretare caratteri di escape come \n o \t. Questo significa che i caratteri di escape vengono trattati come caratteri letterali all'interno della stringa. <br> La cosa è molto utile quando si tratta di stringhe che includono percorsi file o i caratteri "slash" onnipresenti nei tag del codice HTML.

Inoltre invece della parola "<strong>rawliteral</strong>" puoi usare qualsiasi altra parola come delimitatore.


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
<br><br><img width="48" class="x figure-img img-fluid lazyload blur-up"  src="/hog/inter.svg" alt="logo sezione"><br><br>

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