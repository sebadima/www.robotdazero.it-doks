---
title: "La connessione simultanea tra WIFI ed ESPNOW"
description: "La connessione simultanea tra WIFI ed ESPNOW"
excerpt: "Il problema della connessione simultanea WIFI ed ESPNOW..."
date: 2024-02-26T01:19:42+01:00
lastmod: 2024-02-26T01:19:42+01:00
draft: true
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["ESP32", "PlatformIO", "ESPNOW", "WIFI"]
contributors: ["sergio rame"]
pinned: false
homepage: false
mermaid: true
---



<!-- 
https://randomnerdtutorials.com/esp32-ESP-NOW-wi-fi-web-server/  
https://rntlab.com/question/how-to-know-and-or-set-the-wifi-channel-on-an-esp32/?utm_source=pocket_saves
https://github.com/HarringayMakerSpace/ESP-Now/blob/master/espnow-sensor-minimal/espnow-sensor-minimal.ino
-->

## Una breve premessa

La connessione simultanea WIFI ed ESP-NOW con l'ESP32 presenta alcune sfide di programmazione non indifferenti e per questo abbiamo deciso di trattare l'argomento in modo esteso, prima di presentare dei nuovi progetti che sfruttano a fondo entrambe le tecnologie.

### Cosa è ESP-NOW

ESP-NOW è un protocollo di rete proprietario sviluppato da Espressif per la comunicazione a bassa latenza e basso consumo energetico tra dispositivi ESP32. Offre un'alternativa al Wi-Fi per la connessione di dispositivi in reti locali, con alcuni vantaggi:

- Maggiore affidabilità: ESP-NOW è progettato per ambienti con interferenze RF elevate e offre una maggiore affidabilità rispetto al Wi-Fi.
- Minore latenza: ESP-NOW offre una latenza inferiore rispetto al Wi-Fi, rendendola ideale per applicazioni in tempo reale.
- Minore consumo energetico: ESP-NOW consuma meno energia rispetto al Wi-Fi, prolungando la durata della batteria dei dispositivi.


### Un programma basico per commettersi ad ESP-NOW

La trasmissione dati tra due ESP32 utilizzando il protocollo ESP-NOW è ben documentata da Espressif e il codice per inviare dati ad una scheda di cui conosciamo l'indirizzo <a href="https://it.wikipedia.org/wiki/Indirizzo_MAC" target="_blank">MAC</a> si limita a queste poche righe:

##### Esempio di base per ESP-NOW:
```bash
#include <WiFi.h>
#include <esp_now.h>

// Indirizzo MAC della scheda slave
uint8_t slave_mac[] = {0xXX, 0xXX, 0xXX, 0xXX, 0xXX, 0xXX};

// Messaggio da inviare
char message[] = "Ciao da ESP32 Master!";

void setup() {
  Serial.begin(115200);

  // Inizializzazione ESP-NOW
  if (esp_now_init() != ESP_OK) {
    Serial.println("Errore durante l'inizializzazione!");
    while(1);
  }

  // Imposta la scheda come master
  esp_now_set_self_role(ESP_NOW_ROLE_MASTER);

  // Aggiungi la scheda slave
  esp_now_add_peer(slave_mac);
}

void loop() {
  // Invia il messaggio alla scheda slave
  esp_now_send(slave_mac, (uint8_t*)message, strlen(message));
  Serial.println("Messaggio inviato: " + String(message));

  // Attendi 10 secondi prima di inviare di nuovo il messaggio
  delay(10000);
}
```

## I problemi nell'utilizzo simultaneo di Wi-Fi e ESP-NOW

Dall'esempio precedente si nota come ESP-NOW non sia un protocollo "difficile" da inserire nei nostri programmi, ma la sua coesistenza con il Wi-Fi sull'ESP32 presenta delle sfide non banali. Tra queste la maggiore è sicuramente la dotazione di una singola radio (e antenna) che deve essere condivisa tra i due sistemi.
Questa limitazione tecnica può causare, e spesso causa, conflitti e rallentamenti in entrambe le connessioni.

### Possibili soluzioni

Poichè avevamo deciso di implentare una centralina di monitoraggio dell'aria con accesso ai sensori ESP-NOW e con server WEB integrato, abbiamo sperimentato alcune scappatoie per aggirare il problema. Il primo passo è stato studiare le limitazioni per il loro uso in simultanea che riassumiamo in breve:

> *- La schede ESP32 trasmittente deve utilizzare lo stesso canale Wi-Fi della scheda ricevente.
Il canale WiFi della scheda ricevente viene assegnato automaticamente dal router WiFi e questo è già una fonte di potenziali problemi.
<br>- La modalità Wi-Fi della scheda ricevente deve essere "access point e station" e quindi deve essere definita con il parametro (**WIFI_AP_STA**).
È possibile impostare manualmente (sul router) lo stesso canale Wi-Fi, ma è preferibile scrivere una funzione software per "agganciare" il canale Wi-Fi delle due schede.*




### I problemi dell'approccio basico ad ESP-NOW

Se, come noi, hai usato l'esempio base aggiungendo la connessione Wi-Fi, avrai notato che, non appena questa viene attivata, la maggior parte dei pacchetti ESP-NOW non arriva affatto. Questa anomalia sembra essere correlata al modo in cui funziona il Wi-Fi in genere e non solo con ESP32. Vediamo meglio come risolvere il problema e cominciamo dai problemi pratici:

#### L'esempio di base e i problemi con il "Master"

Il master è il nodo che invierà i dati ESP-NOW allo slave, che a sua volta si occuperà di connettersi al WiFi. Il Master non si connetterà al WiFi e quindi lo useremo solo per inviare.


> *Master e Slave in ESP-NOW di Espressif per ESP32:
<br>- Master: Invia dati ad altri dispositivi (slave), avvia la comunicazione con gli slave, può comunicare con più slave contemporaneamente.
<br>- Slave:
Riceve dati dal master, Risponde alle richieste del master, Può comunicare con un solo master alla volta.
<br><br>- Configurazione Master/Slave:
<br>La configurazione del ruolo master/slave avviene tramite software.
<br>La libreria software ESP-NOW (<a href="https://github.com/yoursunny/WifiEspNow" target="_blank">link</a>) fornisce funzioni per impostare il ruolo del dispositivo ESP32, mentre questa <a href="https://espressif-docs.readthedocs-hosted.com/projects/arduino-esp32/en/latest/api/espnow.html" target="_blank">pagina</a> fornisce (in inglese) la documentazione completa dell'intero pacchetto.*




#### I problemi della scheda "Slave"
Lo slave sarà dunque il nodo che si connette al WiFi per poter inviare i dati su Internet. È proprio in questo nodo che troveremo il problema dei pacchetti che *non arrivano* con conseguente perdita di dati. Se per il master non si poteva parlare di un vero e proprio difetto di progettazione, con lo slave siamo costretti a modificare il programma di base fornito da Expressif.

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑
<strong>Perchè la colpa è realmente della connessione WI-FI</strong>:
<br>Se hai provato l'esempio di base ed hai aggiunto i comandi per collegarsi al tuo Wi-Fi, avrai osservato che i pacchetti non riescono a passare tra il nodo master e lo slave solo <strong>DOPO</strong> che viene attivato il WiFi. Infatti, se commenti la linea "WiFi.begin()" nel tuo programma l'errore scompare!</div>

### Una prima parziale soluzione

Abbiamo visto, per esempio in questo <a href="https://www.hackster.io/news/timm-bogner-s-farm-data-relay-system-uses-esp8266-esp32-nodes-and-gateways-for-sensor-networks-b87a75c69f46" target="_blank">sito</a> che in alcuni casi i progettisti ricorrevano a due schede "gateway" che scambiano dati via <a href="https://www.w3schools.com/js/js_json_intro.asp" target="_blank">JSON</a> sulla porta seriale, con il primo gateway collegato ai sensori ESP-NOW e il secondo a Wi-Fi. 

<img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/101.png" alt="logo contatti">

Nel box in rosso si vede come le due schede ESP32 provvedano a dividersi i compiti e a scambiare i dati via JSON. In questo modo si risolve la anomalia ma si introduce un nuovo elemento di complessità alla rete mista con ESP-NOW/Wi-Fi. E sappiamo per esperienza che la complessità si porta appresso un sacco di conseguenza "indesiderate".

Abbiamo dunque cercato per la nostra centralina una soluzione più semplice e abbiamo trovato una traccia a questo <a href="https://www.electrosoftcloud.com/en/esp32-wifi-and-esp-now-simultaneously/" target="_blank">link</a> su Electrosoftcloud.com dove si suggerisce non connettersi alla Wi-Fi con la istruzione:

```bash
WiFi.modalità(WIFI_STA);
```
ma di usare invece questa istruzione:

```bash
WiFi.modalità(WIFI_AP_STA);
```

> *Il problema principale sembra essere causato dalla modalità station WiFi che entra in modalità sleep mentre non si ha lavoro. Ciò significa che non ascolta per ricevere i pacchetti ESP-NOW e quindi sono persi. Per risolvere questo problema dovremo forzare il nostro microcontrollore ad ascoltare continuamente, e questo si ottiene trasformandolo in un AP (Access Point). Rilassati, non sarà necessario esporre il microcontrollore, basta dirgli di configurarsi come AP e Stazione allo stesso tempo.*

### Ls soluzione definitiva al problema

Con questo semplice cambiamento, si risolve il 70% dei problemi della rete mista con ESP32, ma non tutti. La anomalia sui dati potrebbe rispresentarsi cambiando router, schede e configurazione, proprio perchè serve piuttosto risolvere ala rasie il problema del canale Wi-Fi! Per questo motivo progetti che funzionano per ore apparentemente in modo perfetto smettono di funzionare semplicemente riavviando il router. 

La soluzione definitiva consiste nell'aggiungere qualche riga in più ai programmi che scriverai per collegare ESP32 al Wi-fi e in basso trovi il codice commentato come lo utilizziamo bei nostri progetti. Dopo questi aggiustamenti il collegamento in rete mista dovrebbe sempre funzionare: La funzione "getWiFiChannel()" infatti aggancia in automatico il canale della ricevente. In questo modo la connessione diventa stabile e la useremo per "potezionare" la nostra centralina di controllo della qualità dell'aria. Con la ESP-NOW possiamo infatti piazzare molteplici sensori anche a distanza di oltre 200 metri dalla centralina. Con l'utilizzo di una antenna ricevente ad alto guadagno possiamo intercettare i segnali delle ESP32 lontane senza manomettere il router e l'antenna del router.

Il codice finale sarebbe simile a questo, ovviamente si tratta solo delle "differenze" imposte da ESP-NOW e non di un programma completo che presenteremo piu avanti con schemi di montaggio e immagini del prototipo:

##### Codice della scheda ESP32 "ricevente"
```bash
void initWiFi() {
    WiFi.mode(WIFI_MODE_APSTA);

    if(!WiFi.config(local_IP, gateway, subnet, primaryDNS, secondaryDNS)) {
      Serial.println("Errore di configurazione");
    }

    WiFi.begin(WIFI_SSID, WIFI_PASS);

    Serial.printf("In connessione a %s .", WIFI_SSID);
    while (WiFi.status() != WL_CONNECTED) { Serial.print("."); delay(200); }
    Serial.println("ok");

    IPAddress ip = WiFi.localIP();
    Serial.printf("SSID: %s\n", WIFI_SSID);
    Serial.printf("Channel: %u\n", WiFi.channel());
    Serial.printf("IP: %u.%u.%u.%u\n", ip & 0xff, (ip >> 8) & 0xff, (ip >> 16) & 0xff, ip >> 24);
}

void initEspNow() {
    if (esp_now_init() != ESP_OK) {
        Serial.println("Errore di inizializzazione di ESP NOW");
        while (1);
    }
    esp_now_register_recv_cb(suDatiRicevuti);
}

void setup() {
  initWiFi();
  initEspNow();
}
```

##### Codice della ESP32 "trasmittente"
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

void setup() {

  initWiFi();
  initEspNow();

}
```

E questo è infine il pezzo di programma che riesce a sicncornizzare le due schede ESP32 in versione ricevente e trasmittenye sullo stesso canale. Un semplice ciclo "for" effettua la scansione dei canali disponibili sulla rete = "WIFI_SSID".

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

void initWiFi() {

    WiFi.mode(WIFI_MODE_STA);
    
    // la parte chiva del programma
    int32_t channel = getWiFiChannel(WIFI_SSID);
    
    esp_wifi_set_promiscuous(true);
    esp_wifi_set_channel(channel, WIFI_SECOND_CHAN_NONE);
    esp_wifi_set_promiscuous(false);
    Serial.printf("SSID: %s\n", WIFI_SSID);
    Serial.printf("Channel: %u\n", WiFi.channel());
}
```


<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.155.0.3.1</p>

