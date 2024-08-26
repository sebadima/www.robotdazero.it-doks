---
title:        "Una centralina meteo con ESP32, ESP-NOW e Wi-Fi"
description:  "Una centralina meteo con ESP32, ESP-NOW e Wi-Fi"
excerpt:      "Trasforma il tuo ESP32 in una potente centralina meteo! Crea una rete di sensori wireless con ESP-NOW e monitora in tempo reale: Temperatura - Qualità dell'aria - Metano - Monossido di Carbonio e altri parametri ambientali. Con il Wi-Fi invia i dati a un server web per l'analisi e la visualizzazione..."
date:         2024-03-07T01:20:42+01:00
lastmod:      2024-03-07T01:20:42+01:00
draft:        false
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
https://github.com/espressif/arduino-esp32/blob/master/libraries/ESP32/examples/Timer/RepeatTimer/RepeatTimer.ino
https://espressif-docs.readthedocs-hosted.com/projects/arduino-esp32/en/latest/api/timer.html
https://randomnerdtutorials.com/esp32-cam-connect-external-antenna/
https://deepbluembedded.com/esp32-timers-timer-interrupt-tutorial-arduino-ide/

-->



## Introduzione

La nostra centralina "meteo" con sensori di gas nocivi può catturare in tempo reale la presenza di +25 sostanze tossiche, tra cui idrocarburi  e ossidi di azoto e visualizzare la concentrazione dei gas, la temperatura e l'umidità dell'aria su un qualunque dispositivo dotato di browser Web.

### Le scelte di progetto

Il progetto usa stazioni trasmittenti multiple, da collocare in zone anche distanti e non coperte dal segnale Wi-Fi: Sfruttando il protocollo ESP-NOW di Espressif la centralina può visualizzare i dati dei sensori posti fino a 800 metri di distanza!<br>
  
Per la stazione trasmittente abbiamo inoltre selezionato dei componenti di pregio, come i due sensori di gas MQ2 e MQ135. Questi dispositivi garantiscono delle misurazioni affidabili  ad un un costo contenuto, ed essendo dotati di connettori con passo di 2.54 mm permettono di assemblare tutto il prototipo su una classica breadboard da 830 punti.

> *Il progetto è facilmente estensibile per leggere il valore di otto diversi trasmettitori con minime modifiche ai programmi. A tale scopo **tutto** il software viene distribuito in modalità "Open Source" e quindi completamente gratuito e personalizzabile.*

#### Utilizzo della centralina in ambienti "chiusi"

Con il dispositivo potresti, ad esempio, controllare la qualità dell'aria nella tua casa e monitorare gas come CO, metano, GPL e fumi di combustione. In questo modo otterresti un ambiente più sicuro in tutti locali compresi box e garage esterni. Inoltre il sensore MQ2 potrebbe diventare un alleato prezioso per anticipare problemi all'impianto del metano, a stufe e scaldabagni a gas.

> *La centralina può sicuramente aiutarti a prevenire malanni legati agli sbalzi di temperatura e definire una qualità dell'aria superiore grazie al sensore incorporato MQ135. **Il sensore infatti riesce a tracciare la infiltrazione di molti inquinanti industriali, come il benzene** e gli ossidi di azoto e i dannosi "vapori" di ammoniaca e trielina.* 


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

## #1 - Il trasmettitore

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


### Lo schema a blocchi del trasmettitore
A parte lo schema con la filatura, ti vogliamo mostrare lo schema a blocchi delle connessioni, usando gli stessi diagrammi che avrai a volte visto nei manuali di programmazione. Nel diagramma puoi leggere i collegamenti *teorici* per ogni dispositivo e come collegare ognuno di essi a ESP32 e breadboard. 

{{< mermaid class="bg-light text-center" >}}
classDiagram
    ESP32 <|-- DHT11
    ESP32 <|-- MQ2
    ESP32 <|-- MQ135
    
    ESP32 : ALIMENTAZIONE diretta da cavo USB
    ESP32 : pin.GND al negativo della breadboard
    ESP32 : pin.V5 al positivo della breadboard
    ESP32 : pin.13 - pin.33 - pin.35 ai sensori
    class DHT11 {
        GND  -> [--] Breadboard
        VIN  -> [+] Breadboard
        DATA -> pin.13 ESP32
    }
    class MQ2 {
        GND  -> [--] Breadboard
        VIN  -> [+] Breadboard
        DATA -> pin.33 ESP32
        

    }
    class MQ135 {
        GND  -> [--] Breadboard
        VIN  -> [+] Breadboard
        DATA -> pin.35 ESP32
    }

{{< /mermaid >}}


### Configurazione software del trasmettitore 

Per la compilazione di questo progetto puoi usare Arduino Ide o il compilatore a linea di Comando PlatformIO. Esiste una terza possibilità per compilare i programmi e cioè usare PlatformIO integrato in Visual Studio Code; ma per il momento ti forniremo istruzioni dettagliate solo per le prime due opzioni.

#### Compilazione con Arduino IDE

Per ottenere il codice sorgente specifico per il trasmettitore ti basta lanciare il comando GIT seguito dall'indirizzo del repository "corso-ESP32-centralina-meteo-trasmettitore" preparato per il nostro corso on-line. Puoi fare copia e incolla dagli esempio in basso, modificando se vuoi il nome della directory.

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
- Clicca sul pulsante "Installa" accanto alla libreria desiderata.

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

<iframe frameborder="0" scrolling="no" style="width:100%; height:4153px;" allow="clipboard-write" src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fsebadima%2Fcorso-ESP32-centralina-meteo-trasmettitore%2Fblob%2Fmaster%2Fsrc%2Fmain.ino&style=arduino-light&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on"></iframe>

#### Un breve commento al programma


##### Il nome della rete

Per usare il programma con la tua rete Wi-Fi o hotspot devi modificare la riga #9:

```bash
constexpr char WIFI_SSID[] = "SSID-da-modificare";
```
e inserire il SSID (il nome) della tua rete fissa o mobile.


##### L'indirizzo MAC della "ricevente"

Per funzionare la rete ESP-NOW *pretende* di sapere l'indirizzo MAC  univoco della scheda ESP32 di destinazione.

> *Un indirizzo MAC (Media Access Control) è un identificativo univoco assegnato a ogni scheda di rete (NIC) presente in un dispositivo informatico. È un numero di 12 cifre esadecimali, solitamente rappresentato in gruppi di due coppie separate da due punti (ad esempio, 00:11:22:33:44:55).*

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


<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑<br>
La "esp_now_send()" effettua una chiamata alla libreria Espressif per trasmettere i dati alla scheda ricevente. Anche se il tutto non appare proprio semplicissimo, potrai apprezzare come la trasmissione fisica sia gestita in toto dalla libreria con una singola istruzione. La maggior parte della complessità viene gestita dalla libreria esterna, per cui il programma risulta alla fine abbastanza semplice e breve.
</div> 

<br>

##### Il reset automatico degli interrupt

Il programma utilizza delle funzioni avanzate di ESP32 per resettare la scheda dopo 15 pacchetti dati persi. Come in ogni applicazione IoT non possiamo pensare di stare al computer per monitorare il comportamento dei dispositivi e dobbiamo prevedere delle istruzione di "recupero" automatico della connessione in caso di problemi.

> *I **controller** ESP32 sono dotati di 4 timer hardware, ognuno dei quali è un contatore up/down a 64 bit generico con un prescaler a 16 bit. Fa eccezione la scheda ESP 32C3 che ha solo 2 timer ognuno dei quali è invece di 54 bit. I timer di ESP32 funzionano in modalità roll e alla fine del conteggio ad esempio 800000 ripartono da zero.*

```bash
#define DELAY_RECONNECT 600 
// intervallo in secondi per forzare il reboot
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

La configurazione di interrupt viene completata dentro la funzione "setup()"

```bash
  timer = timerBegin(0, 80, true);
  timerAttachInterrupt(timer, &onTimer, true);
  timerAlarmWrite(timer, DELAY_RECONNECT * 1000000, true);
  timerAlarmEnable(timer);
```

Le prime cinque righe impostano la struttura dati suggerita da Espressif per la gestione degli interrupt mentre la successiva funzione "onTimer()" viene richiamata automaticamente dal sistema.


##### La ricerca del canale Wi-Fi del ricevitore

Il ricevitore della centraline è collegato alla rete Wi-Fi per fornire in HTML i dati dei sensori, e la necessità di fare convivere ESP-NOW e Wi-Fi impone che il dure operino nello stesso canale. Con il pezzo di programma sotto il trasmettitore legge il nome della *rete* dal parametro passato alla funzione:<br> "getWiFiChannel" con il parametro: "(const char \*ssid)" ed effettua una semplice scansione di tutti i canali.

Per determinare il numero real dei canali disponibili il programma usa la istruzione "int32_t n = WiFi.scanNetworks()" e quindi lancia un ciclo in loop con: "for (uint8_t i=0; i\<n; i++)" dove "i\<n;" serve a limitare il numero di ripetizioni.
Se la istruzione "strcmp()" rileva il canale con il nome giusto ne ritorna il codice al resto del programma. La funzione "InitWiFi()" userà il codice ottenuto durante la fase di *boot* del controller.

```bash
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
```


##### Come controllare se ESP-NOW è collegato

Questa è forse la parte più importante el programma e usa la istruzione "if (lost_packages >=15)" per attivare la procedura di restart del controller e rilanciare la connessione al canale Wi-Fi esatto.


```bash
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
```

<br>


## #2 - Il ricevitore 


### Assemblaggio del ricevitore

Il ricevitore non necessita realmente di una fase di assemblaggio a parte la saldatura di una antenna esterna per ESP32 come vedi nella foto sotto, ma anche questa fase può essere evitata usando una ESP32CAM come ricevitore con la presa per antenna


<img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/105.webp" alt="ESP32CAM con antenna per ESPNOW">


### Configurazione software del ricevitore 

Puoi usare Arduino Ide o il compilatore a linea di Comando PlatformIO. Noi in genere preferiamo Platformio ma ciò non significa che il programma non possa essere compilato con Arduino IDE o che il codice oggetto sia *migliore*: semplicemente preferiamo installare le librerie in automatico come riesce a fare comodamente PlatformIO.

####  Compilazione con Arduino IDE

Per scaricare il codice sorgente del ricevitore puoi andare nella linea di comando di Windows usando la PowerShell o nel terminale di Linux e digitare o fare copia e incolla di:

```bash
git clone git@github.com:sebadima/corso-ESP32-centralina-meteo_ricevitore.git
```     

Fatto questo puoi aprire il programma con: "File"-> "Apri" dall'IDE e rispondere alla eventuale richiesta di spostare la directory o il "file main.ino". Per installare le librerie mancanti. Per installare le librerie mancanti puoi procedere in questo modo:

- Apri Arduino IDE
- Clicca su "Sketch" -> "Includi libreria" -> "Gestisci librerie".
- Nella casella di ricerca, digita il nome della libreria mancante.
- Clicc sul pulsante "Installa" accanto alla libreria desiderata.

Se non vuoi usare Github puoi fare copia e incolla del programma sottostante e procedere allo stesso modo:

### Il codice sorgente del ricevitore

<iframe frameborder="0" scrolling="no" style="width:100%; height:4819px;" allow="clipboard-write" src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fsebadima%2Fcorso-ESP32-centralina-meteo-ricevitore%2Fblob%2Fmaster%2Fsrc%2Fmain.ino&style=arduino-light&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on"></iframe>

<br>

#### Compilazione con PlatformIO


```bash
git clone git@github.com:sebadima/corso-ESP32-centralina-meteo_ricevitore.git
cd corso-ESP32-centralina-meteo-trasmettitore
make upload
platformio device monitor --baud 115200  --rts 0 --dtr 0 --port /dev/ttyUSB0
```     

#### Un breve commento al programma


##### La connessione alla rete Wi-Fi

Poichè il ricevitore si collega effettivamente alla rete Wi-Fi, nelle righe successive dobbiamo impostare le variabili per la connessione. DNon cis sono particolarità da notare a parte la riga "IPAddress local_IP(192, 168, 1, 200);" che si servirà ad impostare l'IP fisso del server Web. Se preferisci puoi cambiarlo per evitare una *collisione* con altri dispositivi collegati.

```bash
constexpr char WIFI_SSID[] = "SSID-da-modificare";
constexpr char WIFI_PASS[] = "PASSWORD-da-modificare";

// Setta un indirizzo IP Fisso
IPAddress local_IP(192, 168, 1, 200);
// Setta indirizzo del Gateway
IPAddress gateway(192, 168, 1, 1);
IPAddress subnet(255, 255, 0, 0);
IPAddress primaryDNS(8, 8, 8, 8); //opzionale
IPAddress secondaryDNS(8, 8, 4, 4); //opzionale

```

Nella funzione "initWiFi()" la radio dell'ESP32 viene inizializzata in modalità *mista* con il comando: "WiFi.mode(WIFI_MODE_APSTA);" per permette l'uso simultaneo di ESP-NOW e Wi-Fi. La istruzione " Serial.printf("Channel: %u\n", WiFi.channel());" serve in modalità di debug per controllare il canale in cui avviene la connessione. E' importante avere una idea del canale perchè alcuni router potrebbero essere configurati solo con il Wi-Fi a 5Ghz attivato e dare risultati imprevedibili.

```bash
void initWiFi() {
    WiFi.mode(WIFI_MODE_APSTA);

    if(!WiFi.config(local_IP, gateway, subnet, primaryDNS, secondaryDNS)) {
      Serial.println("STA Failed to configure");
    }

    WiFi.begin(WIFI_SSID, WIFI_PASS);

    Serial.printf("Connecting to %s .", WIFI_SSID);
    while (WiFi.status() != WL_CONNECTED) { Serial.print("."); delay(200); }
    Serial.println("ok");

    IPAddress ip = WiFi.localIP();

    Serial.printf("SSID: %s\n", WIFI_SSID);
    Serial.printf("Channel: %u\n", WiFi.channel());
    Serial.printf("IP: %u.%u.%u.%u\n", ip & 0xff, (ip >> 8) & 0xff, (ip >> 16) & 0xff, ip >> 24);
}
```


##### La struttura dati in ricezione

I dati ricevuti dal trasmettitore devono seguire necessariamente lo stesso formato pena errori imprevedibili o blocco completo della trasmissione. Se torni al sorgente del trasmettitore vedrai che formato e sequenza delle variabili sono le stesse, mentre teoricamente non è necessario che abbiano lo stesso identificativo.

```bash
// Struttura dati, deve corrispondere a quella del mittente
typedef struct struttura_dati {
  char  v0[32];
  int   v1;
  float v2;
  float v3;
  float v4;
  unsigned int progressivo;
} struttura_dati;

```


##### La lettura dei dati

Dopo avere letto i dati da ESP-NOw dobbiamo usarli nel nostro server Web e quindi li importiamo nella variabile JSON board che abbiamo definito ad inizio programma con "JSONVar board;". I valori v1,v2,v3,v4 verrano poi usati dal server con queste istruzioni: "document.getElementById("t1").innerHTML = Math.round(obj.v2 * 100) / 100;". 

Poichè si tratta di un argomento un poco complesso lo tratteremo in una sezione successiva. Un altro *pezzo* interessante è la print dell'indirizzo MAC del mittente ottenuta con:<br>

```bash
snprintf(macStr, sizeof(macStr), "%02x:%02x:%02x:%02x:%02x:%02x"
```


> ***snprintf** è estremamente simile a sprintf: Dopo tutto, i nomi delle funzioni differiscono solo dal carattere 'n'! Questa è in realtà una convenzione abbastanza comune in C: la funzione con la 'n' richiede un limite superiore nel nostro caso lo definiamo con "sizeof(macStr)". In genere la versione' n ' delle funzioni è più sicura e meno suscettibile agli overflow del buffer.*


```bash
void suDatiRicevuti(const uint8_t * mac_addr, const uint8_t *incomingData, int len) { 
  // Copia indirizzo MAC del mittente
  char macStr[18];
  Serial.print("Pacchetto ricevuto da: ");
  snprintf(macStr, sizeof(macStr), "%02x:%02x:%02x:%02x:%02x:%02x",
           mac_addr[0], mac_addr[1], mac_addr[2], mac_addr[3], mac_addr[4], mac_addr[5]);
  Serial.println(macStr);
  memcpy(&LettureSensori, incomingData, sizeof(LettureSensori));
  
  board["v1"] = LettureSensori.v1;
  board["v2"] = LettureSensori.v2;
  board["v3"] = LettureSensori.v3;
  board["v4"] = LettureSensori.v4;
  board["progressivo"] = String(LettureSensori.progressivo);
  String jsonString = JSON.stringify(board);
  events.send(jsonString.c_str(), "new_readings", millis());
  
  Serial.printf("Board ID %u: %u bytes\n", LettureSensori.v1, len);
  Serial.printf("t valore: %4.2f \n", LettureSensori.v2);
  Serial.printf("h valore: %4.2f \n", LettureSensori.v3);
  Serial.printf("Progressivo: %d \n", LettureSensori.progressivo);
  Serial.println();
}

```


##### La connessione ad ESP-NOW

In questa sezione è utile notare la funzione "esp_now_register_recv_cb(suDatiRicevuti);" che definisce un *hook* verso "suDatiRicevuti" che verrà invocata in maniera automatica (asincrona) ogni volta che la scheda riceve dei dati. E' importante definire in maniere asincrona le routine di ricezione dati per evitare che la schede sprechi preziosi cicli di clock per controllare continuamente se sono arrivati dei dati.

> *La **programmazione asincrona** è una tecnica che consente al programma di avviare un'attività potenzialmente di lunga durata e di essere ancora in grado di rispondere ad altri eventi durante l'esecuzione di tale attività, piuttosto che dover attendere che tale attività sia terminata. Una volta che l'attività è terminata, il programma viene presentato con il risultato.*


```bash
void initEspNow() {
    if (esp_now_init() != ESP_OK) {
        Serial.println("ESP NOW failed to initialize");
        while (1);
    }
    esp_now_register_recv_cb(suDatiRicevuti);
}
```



<br><img width="48" class="x figure-img img-fluid lazyload blur-up"  src="/hog/inter.svg" alt="logo sezione"><br><br>



## Il server Web

Il server dopo la connessione ad ESP-NOW e alla rete Wi-Fi riesce a mostrare in tempo reale le letture dei sensori: HTML non è adatto a questo tipo di visualizzazione e deve essere necessariamente integrato con la tecnologia Ajax. Ma iniziamo per gradi e vediamo intanto come viene conservato nella ram il codice HTML:


```bash
const char index_html[] PROGMEM = R"rawliteral(
<!DOCTYPE HTML><html>
<head>
...
...
</head>

<body>
...  
...  
</body>

<script>
if (!!window.EventSource) {
 var source = new EventSource('/events');
 
 source.addEventListener('open', function(e) {
  console.log("Events Connected");
 }, false);
 source.addEventListener('error', function(e) {
  if (e.target.readyState != EventSource.OPEN) {
    console.log("Events Disconnected");
  }
 }, false);
 
 source.addEventListener('message', function(e) {
  console.log("message", e.data);
 }, false);
 
 source.addEventListener('new_readings', function(e) {
  console.log("new_readings", e.data);
  var obj = JSON.parse(e.data);
  document.getElementById("t1").innerHTML = Math.round(obj.v2 * 100) / 100;
  document.getElementById("h1").innerHTML = obj.v1;
  document.getElementById("t2").innerHTML = obj.v3;
  document.getElementById("h2").innerHTML = obj.v4;
 }, false);
}
</script>

```

Nelle sezioni precedenti abbiamo già parlato di come implementare un server Web e quindi in questo caso ci concentriamo soprattutto sulle novità e sul funzionamenti di AJAX. 

La istruzione "var source = new EventSource('/events');" aggiunge un una routine asincrona che viene attivata dall'arrivo dei nuovi dati e lo segnale sul monitor seriale con "console.log("new_readings", e.data);" ma soprattutto provvede a modificare il documento HTML con la istruzione: <br>"document.getElementById("h1").innerHTML = obj.v1;".


## Troubleshooting

Le cause di un malfunzionamento possono essere molte, ma ricadono fondamentalmente in queste tre tipologie:

- un errato collegamento dei connettori:
Il diagramma che ti forniamo rappresenta fedelmente il progetto realizzato da Robotdazero. ma ciò non garantisce che alcune versioni commerciali del DHT11 non possano avere diverse disposizioni del connettore dati. Se i pin di alimentazione sembrano restare *coerenti* nelle varie versioni in commercio, il pin dati potrebbe essere collegato a uno qualsiasi dei due pin liberi. Il problema comunque facilmente risolvibile facendo un poco di attenzione e ricontrollando "a vista" i connettori. Per facilitare il lavori di controllo ti consigliamo di adottare sempre colori nero e rosso per la alimentazione e verde o giallo per il segnale dati, in tal modi capire se il pin dati e stato collegato correttamente diventa quasi banale.

- un problema alla alimentazione fornita dalla USB:
La tensione fornito dalla USB in condizioni ideali riesce ad erogare la minima corrente richiesta dall'ESP32 e dai sensori, parliamo di mezzo di 350mA al massimo, ma su alcuni piccoli laptop o desktop danneggiati anche tale carico potrebbe rappresentare un problema. Inoltre ricorda che gli HUB per USB non sono sempre *trasparenti* alla corrente e potrebbero assorbirne una parte per il loro funzionamento. Inoltre, nel caso peggiore, l'UHB potrebbe avere difficoltà a mantenere la tensione costante se troppi dispositivi assorbono corrente nello stesso momento.

- un problema hardware:
Ad esempio il sistema potrebbe non funzionare per la rottura di uno dei sensori, un connettore Dupont spezzato (magari solo all'interno), la sezione radio dell'ESP32 danneggiata perchè hai collegato due antenne "troppo" vicine, un piedino rotto dell'ESP32, una breadboard difettosa, un cavo USB difettoso (un caso molto comune).

## Conclusioni 

In questo articolo, abbiamo esplorato le potenzialità dell'IoT per la casa e il lavoro, utilizzando un ESP32 con sensori di qualità dell'aria e gas pericolosi come esempio pratico.

A livello domestico, l'implementazione di un sistema di monitoraggio IoT può portare a una maggiore sicurezza e comfort. La capacità di monitorare la qualità dell'aria e la temperatura può aiutare a creare un ambiente più sano e confortevole per la propria famiglia. Inoltre, la rilevazione di gas pericolosi può fornire un avvertimento tempestivo in caso di emergenza.

In ambito lavorativo, l'IoT può migliorare l'efficienza e la produttività. I sensori possono essere utilizzati per monitorare le condizioni ambientali in un singolo ufficio o in molteplici locali, garantendo un ambiente di lavoro sicuro e confortevole.


<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/C_IRoCjgdRs/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/C_IRoCjgdRs/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Visualizza questo post su Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/C_IRoCjgdRs/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Un post condiviso da Sebastiano Dimartina (@sebastianodimartina)</a></p></div></blockquote>
<script async src="//www.instagram.com/embed.js"></script>

<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.159.3.2.1</p>
