---
title:        "Come scrivere un server web con ESP32"
description:  "Come scrivere un server web con ESP32"
excerpt:      "Espandi le tue abilità nel mondo IoT: Scopri come implementare un Server web con ESP32 - La prima parte della guida completa per creare e gestire un Server web Utilizzando la potente piattaforma ESP32!..."
date:         2024-03-01T01:20:42+01:00
lastmod:      2024-03-01T01:20:42+01:00
draft:        true
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

https://rntlab.com/question/web-servers-with-the-esp32-and-esp8266-1-1-hello-world-web-server/

<img width="300" class="x figure-img img-fluid lazyload blur-up"  src="/images/154.png" alt="schema connessioni">
<strong>1</strong>. <span style="background-color:#eeeeee"> Controllo delle versioni</span>:
img width="70" class="x figure-img img-fluid lazyload blur-up"  src="/hog/inter.svg" alt="logo sezione"><br><br>

```bash
```     
<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑.</div>

-->



## Cosa è un server web

Un server web (server HTTP) è un software che gestisce le richieste HTTP (Hypertext Transfer Protocol) da client come web browser o app per mobile. In ambito IoT, un server web può essere implementato su un dispositivo ESP32 per:

- Fornire un'interfaccia web che gestisca un dispositivo,
- Restituire dati in formato JSON o XML per l'analisi,
- Ricevere comandi da client remoti.

### Perchè usare un server web con ESP32

Un progetto che si limiti a presentare i valori dei sensori sul "Monitor Seriale" di Arduino IDE è una tappa inevitabile per un programmatore IoT, ma si tratta di una applicazione amatoriale e gravata da ovvi limiti. Per realizzare applicazioni professionali abbiamo bisogno di *condividere* i dati rilevati e magari inviarli a qualche App su Android. Per fare questo salto di qualità dobbiamo imparare delle nuove, semplici tecniche di networking (nulla di complicato) e usare un programma fondamentale nel mondo IoT: Il "server" web.

In questo paragrafo vedremo quali sono le strutture dati e le funzioni per creare un server web minimale. Lo stesso codice verrà quindi "incorporato" nella versione evoluta della nostra Centralina Multi-sensore. Con tale innesto la centralina potrà condividere i dati usando un sito web dinamico con HTML, Javascript e JSON. Il protocollo aggiuntivo JSON è necessario per implementare il sistema <a href="https://www.w3schools.com/js/js_ajax_intro.asp" target="_blank">AJAX</a>.

> AJAX (Asynchronous JavaScript and XML) è una tecnica di sviluppo web che permette di aggiornare una pagina web in modo dinamico, senza ricaricare l'intera pagina e senza cliccare sul tasto *Aggiorna* del browser.<br><strong>Come funziona Ajax</strong><br>Il meccanismo software si può dividere per semplicità in tre parti:<br>- Richiesta: L'utente invia una richiesta al server tramite JavaScript. <br>- Elaborazione: Il server elabora la richiesta e restituisce una risposta in formato XML, JSON o testo.
<br>- Aggiornamento: Il client JavaScript aggiorna la pagina web in base alla risposta ricevuta.


Una applicazione IoT moderna dovrebbe necessariamente includere AJAX per i grandi benefici che apporta nella esperienza utente (Le pagine web sono più fluide e reattive), ma anche per la riduzione nel traffico da e verso l'ESP32. Seppure i moderni microcontroller siano molto superiori ad Arduino UNO, le loro capacità di elaborazione sono comunque lontane dalle classiche CPU per Desktop.

##### "Se vorrete costruire la nostra centralina con le modifiche che vi presentiamo potrete realizzare a basso costo un efficiente prodotto IoT dalla reale valenza commerciale."

## Come scrivere un server web con ESP32

ESP32 utilizza (per fortuna) la sterminata libreria di Arduino e chi ha familiarità con questa piattaforma non dovrà imparare alcun nuovo concetto di programmazione. Come avviene con Arduino, per risolvere dei compiti complessi come la creazione di un server web, conviene appoggiarsi a del software già esistente. In questo caso potevamo usare, ad esempio la libreria "*<a href="https://github.com/espressif/arduino-esp32/tree/master/libraries/webServer" target="_blank">webServer</a>*" inclusa nell'IDE di Arduino e adottata da <a href="https://github.com/espressif" target="_blank">Espressif</a> per l'ESP32. 

Per i tuo progetti "basici" IoT puoi tranquillamente usare "*webServer*", ma per il nostro server ESP32 con il sistema asincrono AJAX e il rendering dei valori in background, abbiamo preferito utilizzare la più *potente* libreria <a href="https://github.com/me-no-dev/ESPAsyncwebServer" target="_blank">ESPAsyncwebServer</a>, asincrona come suggerisce il nome e specifica per l'ESP32.

### Il codice

Per iniziare vediamo come caricare le librerie che ci servono. Ci bastano le prime due linee con gli #include **header** delle librerie utilizzate.

> I file header, o file di intestazione, sono file di testo con estensione .h che contengono informazioni utili per la compilazione del codice C++. <br><br>Le funzioni dei file header sono molteplici e non si limitano ad *agganciare* librerie come nel nostro caso, ma servono a vari altri scopi come:<br>- Dichiarazioni di funzioni: Prototipi di funzioni che definiscono il nome, il tipo di ritorno e i parametri, 
<br>- Dichiarazioni di classi: Struttura e membri di classi C++.
<br>- Definizioni di macro: Costanti simboliche utilizzate nel codice.

<br>

Per chi inizia con il C++, aggiungere altre istruzioni solo per definire quello che vogliamo fare nel resto del programma può sembrare una complicazione inutile, ma non è così. Inoltre parrebbe più semplice caricare tutto nello stesso file sorgente, magari molto lungo e fare delle chiamate a funzioni. Ma le "best practices" della programmazione strutturata sconsigliano tale approccio:

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑
<strong>I Vantaggi dell'utilizzo dei file header</strong><br>
Nella pratica del C++ è emerso come dichiarare esplicitamente funzioni e librerie sia una pratica vantaggiosa per migliorare la qualità del codice in molti settori come:
<br><br><strong>Modularità</strong>, perchè permettono di dividere il codice in moduli separati e riutilizzabili - <strong>Organizzazione</strong>, in quanto migliorano la leggibilità e la manutenibilità del codice - <strong>Condivisione del codice</strong> perchè facilitano la condivisione di funzioni e librerie con altri sviluppatori.
</div>

#### Ecco dunque gli header del programma:

```bash
#include "ESPAsyncwebServer.h"
#include <WiFi.h>
```    
Il primo include "carica" la libreria fondamentale e cioè "*ESPAsyncwebServer*", mentre il secondo mette a disposizione del codice tutte le funzioni per il wireless offerte dalla libreria <a href="https://www.arduino.cc/reference/en/libraries/wifi/" target="_blank">Wifi</a> di Arduino.


#### Le "variabili" statiche:

```bash
constexpr char WIFI_SSID[] = "Cambia-il-nome";
constexpr char WIFI_PASS[] = "Cambia-il-nome";

IPAddress local_IP(192, 168, 1, 200);
IPAddress gateway(192, 168, 1, 1);
IPAddress subnet(255, 255, 0, 0);
IPAddress primaryDNS(8, 8, 8, 8);
IPAddress secondaryDNS(8, 8, 4, 4);
```

Le prime due righe usano la istruzione "*constexpr*" per motivi di ottimizzazione del codice. Con <a href="https://en.cppreference.com/w/cpp/language/constexpr" target="_blank">constexpr</a> possiamo assegnare il valore di espressioni (anche complesse) nel momento della compilazione, anziché a tempo di esecuzione, migliorando significativamente le prestazioni del codice.

Le cinque righe successive assomigliano a delle normali dichiarazioni di variabili, ma sono variabili di un tipo particolare e cioè "*IPAddress*" specifico per interfacciarsi con la libreria Wifi. Per fortuna non dobbiamo ridefinire e modificare il loro "tipo", ci basta seguire il formato ideato dagli sviluppatori e inserire i quattro numeri di un classico indirizzo IP.

Parlare di variabili in queste instruzioni è un poco ingannevole, perchè si tratta di valori che vengono definiti "una tantum" nel momento della creazione: Sono i parametri per le funzioni OOP della libreria WiFi, ma per semplificare la spiegazione potete pensarle come cinque variabili con un tipo dati creato ad hoc.


#### Le istruzioni per creare il server web:

```bash
AsyncwebServer server(80);

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

La prima riga crea la "istanza" dell'oggetto AsyncwebServer assegnando nel contempo il valore "80" come porta da usare nella applicazione. Il valore "80" viene usato per il normale protocollo http mentre il valore "443" viene riservato a quello http(s). Il nome dell'oggetto creato sarà un generico "server" e la cosa non è casuale: Se decidiamo di cambiare tipo di server e libreria collegata non avremo bisogno di modificare tutte le istruzioni nel codice, ma ci basta cambiare la riga:

```bash
AsyncwebServer server(80);
```

in 

```bash
webServer server(80);
```

La riga successiva: <br>*const char index_html[] PROGMEM = R"rawliteral(... ...)rawliteral*"<br> (si tratta di una singola riga!) crea un oggetto String "*index_html*" che usa il "modificatore di variabile" <a href="https://github.com/me-no-dev/ESPAsyncwebServer#send-large-webpage-from-progmem-containing-templates" target="_blank">PROGMEM</a> per caricare le istruzioni successive nella zona di memoria flash di ESP32. 

Si tratta dunque di un trucco specifico per l'ESP32: Nel caso in questione, vista la ridotta lunghezza della stringa, potevamo fare a meno di usarlo, ma ti ricordo che stiamo solo illustrando il funzionamento di un server HTTP minimale. Nella versione completa che useremo nella Centralina Multi-sensore, l'accorgimento invece diventerà indispensabile per compilare il programma. Nella nota seguente cercheremo di chiarire l'altro comando *misterioso* della riga e cioè il costrutto sintattico "R()".

> Nel C++ di Arduino, la parola chiave <strong>R"()"</strong> (rawliteral) consente di definire stringhe letterali senza interpretare caratteri di escape come \n o \t. Questo significa che i caratteri di escape vengono trattati come caratteri letterali all'interno della stringa. <br> La cosa è molto utile quando si tratta di stringhe che includono i caratteri "slash" e "back-slash" onnipresenti nei tag del codice HTML e XML.

La parola <strong>rawliteral</strong> non ha un valore particolare e viene usata solo per consuetudine: puoi usare qualsiasi altra parola come delimitatore.


#### La connessione al WI-Fi:

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

La funzione "*initWiFi()*" è una nostra funzione utente, priva di parametri in ingresso e non presenta "sottigliezze" particolari: E' una pura sequenza di istruzioni, destinata ad essere invocata dal "*setup()*" del programma. Una funzione di questo tipo, senza parametri in ingresso cioè e senza valore di uscita, potrebbe essere *meglio* chiamata una "procedura". 

- La prima istruzione che incontriamo è:<br> "*WiFi.mode(WIFI_MODE_STA);*"<br> che assegna alla sezione radio di ESP32 la modalità "STATION" per collegarsi al Wi-Fi. Esistono altre modalità, ad esempio di tipo misto come "APSTA" di cui ci occuperemo in seguito.

- La chiamata di funzione<br>"*WiFi.config(local_IP, gateway, subnet, primaryDNS, secondaryDNS)*"<br> serve a configurare l'oggetto Wifi con i parametri definiti in precedenza. L'operatore "." è tipico dei linguaggi di programmazione OOP. In caso di errore scrive sul monitor seriale un messaggio di errore.


- Le istruzioni<br> "*while (WiFi.status() != WL_CONNECTED) { Serial.print("."); delay(200); }*"<br> mettono in loop il programma in attesa che lo stato della connessione sia = "WL_CONNECTED". <br>La istruzione "*IPAddress ip = WiFi.localIP();*" serve a settare l'indirizzo IP statico che avevamo definito ad inizio programma. 

- Una istruzione interessante è "*Serial.printf("Canale: %u\n", WiFi.channel());*" perchè permette di leggere il valore del canale Wi-Fi su cui opera la connessione: un dato fondamentale per lavorare con il protocollo ESP-NOW.

#### La funzione setup() e la funzione loop()

```bash
void setup() {
  Serial.begin(115200);
  initWiFi();

  server.on("/", HTTP_GET, [](AsyncwebServerRequest *request){
    request->send_P(200, "text/html", index_html);
  });
   
  server.begin();
}
 
void loop() {} 
```
La funzione loop è vuota perchè stiamo considerando solo la struttura minima di un server http, mentre la funzione "*setup()*" presenta una importante chiamata di funzione e cioè<br> "*server.on("/", HTTP_GET, [](AsyncwebServerRequest *request){
    request->send_P(200, "text/html", index_html);*"<br> che mappa sulla RAM l'oggetto "server" (ricordate il nome molto generico?). L'oggetto request rappresenta un oggetto di tipo *AsyncwebServerRequest*. Lo puoi considerare una zona di *buffer* dove sono conservate e manipolate moltissime informazioni quali ad esempio: il metodo HTTP utilizzato (GET, POST, ecc.), l'URL richiesto, i parametri passati nella "query string", le intestazioni HTTP e moltissime altre informazioni. 

<br><img width="48" class="x figure-img img-fluid lazyload blur-up"  src="/hog/inter.svg" alt="logo sezione"><br>

## Conclusioni

I server web (server http) per ESP32 e Arduino offrono una serie di grandi vantaggi nello sviluppo di applicazioni IoT:

- Controllo e monitoraggio remoti: Permettono di controllare e monitorare i dispositivi IoT da qualsiasi luogo con un dispositivo connesso a internet.
- Interfacce utente web: Consentono di creare interfacce utente web per interagire con i dispositivi IoT.
- Comunicazione dati: Facilitano la comunicazione di dati tra dispositivi IoT e server remoti.
- Flessibilità: Offrono una piattaforma flessibile per creare applicazioni IoT personalizzate.

Capire questo versione minimale del programma sarà di grande aiuto nell'affrontare progetti software più sofisticati.
<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.157.1.4.1</p>