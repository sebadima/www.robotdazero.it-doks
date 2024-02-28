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



<!-- https://randomnerdtutorials.com/esp32-ESP-NOW-wi-fi-web-server/  -->


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
<br>Se hai provato l'esempio di base ed hai aggiunto i comandi per collegarsi al tuo Wi-Fi, avrai osservato che i pacchetti non riescono a passare tra il nodo master e lo slave solo <strong>DOPO</strong> che viene attivato il WiFi. Infatti, se commenti la linea "WiFi.begin()" nel tuo programmi o spegni il router Wi-Fi l'errore scompare!</div>

<br>

WiFi facile e ESP-NOW soluzione
Nonostante quanto sia stato difficile per me trovare la soluzione, navigando nei forum con esempi che non funzionavano, la gente diceva che bisognava usare due schede, una per il WiFi e l'altra per l'ESP-NOW collegate dalla porta seriale .. e si scopre che la soluzione è la più semplice.

Il problema principale sembra essere causato dalla modalità station WiFi che entra in modalità sleep mentre non si ha lavoro. Ciò significa che non ascolta per ricevere i pacchetti ESP-NOW e quindi sono persi. Per risolvere questo problema dovremo forzare il nostro microcontrollore ad ascoltare continuamente, e questo si ottiene trasformandolo in un AP (Access Point). Rilassati, non sarà necessario esporre il microcontrollore, basta dirgli di configurarsi come AP e Stazione allo stesso tempo. Per questo cambieremo questa linea:

WiFi.modalità(WIFI_STA);
Per questo:

WiFi.modalità(WIFI_AP_STA);

E con questo semplice cambiamento, si risolve un problema che sembra aver trasformato molti su Internet. Non sto dicendo che le persone sono molto goffe, forse quando l'hanno provato non è riuscito o non è stato implementato. Ecco perché vi porto questo modo facile nella speranza che servirà a molti.





Difficile
Se l'opzione sopra non ti è riuscita, c'è un'opzione alternativa che è quella di mettere il canale WiFi sul master, che sembra essere anche un requisito per farlo funzionare. Nel mio caso senza andare oltre, al momento della pubblicazione della prima parte di questa guida ha funzionato perfettamente per me, ma quando sono andato a implementarlo due giorni dopo nel mio progetto ha iniziato a fallire. Forse è stato un cambio di canale dal mio router o simili, così ho deciso di espandere questa guida con l'altra opzione che avevo visto.

Non essere spaventato dal titolo, il "modo difficile" è perché devi aggiungere qualche riga in più, ma non è davvero difficile. Le linee da aggiungere sono l'intestazione per poter configurare il canale e la linea in cui è indicato il canale.


++++

Dopo questi aggiustamenti dovrebbe funzionare per te, ma se nel tuo caso non conosci il canale o ti succede come se fosse automatico, potrebbe essere meglio per te rilevare automaticamente il canale del tuo router. Per questo puoi usare questo codice:

Che passando l'SSID del router restituisce il canale corrente. Grazie a Randomnerdtutorial che mi ha aiutato con quest'ultima soluzione.

Con entrambe le modifiche il codice finale sarebbe simile a questo:

```bash
/*
  Daniel Carrasco
  This and more tutorials at https://www.electrosoftcloud.com/
*/
#include <esp_now.h>
#include <esp_wifi.h>
#include <WiFi.h>
// Set the SLAVE MAC Address
uint8_t slaveAddress[] = {0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF};
// Insert your SSID
constexpr char WIFI_SSID[] = "YOUR_WIFI_SSID";
// Structure to keep the temperature and humidity data from a DHT sensor
typedef struct temp_humidity {
  float temperature;
  float humidity;
};
// Create a struct_message called myData
temp_humidity dhtData;
// Callback to have a track of sent messages
void OnSent(const uint8_t *mac_addr, esp_now_send_status_t status) {
  Serial.print("\r\nSend message status:\t");
  Serial.println(status == ESP_NOW_SEND_SUCCESS ? "Sent Successfully" : "Sent Failed");
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
 
void setup() {
  // Init Serial Monitor
  Serial.begin(115200);
 
  // Set device as a Wi-Fi Station
  WiFi.mode(WIFI_STA);
  int32_t channel = getWiFiChannel(WIFI_SSID);
  esp_wifi_set_channel(channel, WIFI_SECOND_CHAN_NONE);
  // Init ESP-NOW
  if (esp_now_init() != ESP_OK) {
    Serial.println("There was an error initializing ESP-NOW");
    return;
  }
  // We will register the callback function to respond to the event
  esp_now_register_send_cb(OnSent);
  
  // Register the slave
  esp_now_peer_info_t slaveInfo;
  memcpy(slaveInfo.peer_addr, slaveAddress, 6);
  slaveInfo.channel = 0;  
  slaveInfo.encrypt = false;
  
  // Add slave        
  if (esp_now_add_peer(&slaveInfo) != ESP_OK){
    Serial.println("There was an error registering the slave");
    return;
  }
}
void loop() {
  // Set values to send
  // To simplify the code, we will just set two floats and I'll send it 
  dhtData.temperature = 12.5;
  dhtData.humidity = 58.9;
  // Is time to send the messsage via ESP-NOW
  esp_err_t result = esp_now_send(slaveAddress, (uint8_t *) &dhtData, sizeof(dhtData));
   
  if (result == ESP_OK) {
    Serial.println("The message was sent sucessfully.");
  }
  else {
    Serial.println("There was an error sending the message.");
  }
  delay(2000);
}

```


<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.155.0.3.1</p>

