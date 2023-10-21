---
title: "Come per collegare due schede ESP32 usando il procollo ESPNOW"
description: "Come per collegare due schede ESP32 usando il procollo ESPNOW"
excerpt: "Le nuove schede LoRa (Long Range) usano una tecnologia a bassa potenza wide area network (LPWAN)
sviluppato da Semtech. Le schede LoRa operano usando la modulazione di frequenza (FM) piuttosto che la modulazione di ampiezza..."
date: 2023-10-18T09:19:42+01:00
lastmod: 2023-18-01T09:19:42+01:00
draft: true
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["ESPNOW", "programmazione", "ESP32"]
contributors: ["sergio rame"]
pinned: true
homepage: false
---



<!--
https://www.hackster.io/pradeeplogu0/getting-started-with-esp-now-d7d8b2#:~:text=The%20range%20of%20ESP%2DNOW,for%20bridging%20between%20multiple%20ESP32s1.
-->



ESP-NOW è un protocollo di comunicazione wireless basato sul livello di collegamento dati che consente il controllo diretto, rapido e a bassa potenza di dispositivi intelligenti senza la necessità di un router. Espressif lo definisce e può funzionare con Wi-Fi e Bluetooth LE. ESP-ORA fornisce una trasmissione dati flessibile e a bassa potenza a tutti i dispositivi interconnessi. Può anche essere utilizzato come protocollo indipendente che aiuta con il provisioning del dispositivo, il debug e gli aggiornamenti del firmware.


La differenza con gli altri sistemi di comunicazione
In che modo è diverso dai protocolli esistenti?
ESP-NOW è un protocollo di comunicazione wireless diverso da Wi-Fi e Bluetooth in quanto riduce i cinque strati del modelloSI a un solo1. Inoltre, ESP-ORA occupa meno CPU e risorse flash rispetto ai protocolli di connessione tradizionali mentre coesiste con Wi-Fi e Bluetooth LE.

Il Bluetooth viene utilizzato per collegare dispositivi a corto raggio per la condivisione di informazioni, mentre il WiFi viene utilizzato per fornire accesso a Internet ad alta velocità2. Il Wi-Fi offre una larghezza di banda elevata perché la velocità di Internet è un problema importante.


Distanza massima:
La gamma di ESP-NOW è fino a 480 metri quando si utilizza il protocollo ESP-NOW per il bridging tra più ESP32s1. La gamma può essere ulteriormente aumentata abilitando ESP-NOW a lungo raggio. Quando abilitato, il PHY rate di ESP32 sarà 512Kbps o 256Kbps.



Nodi massimi:
ESP-ORA supporta varie serie di chip Espressif, fornendo una trasmissione dati flessibile adatta per collegare dispositivi” uno-a-molti “e” molti-a-molti".






Passo: 1Passo: 1Passo: 1Passo: 1Passo: 1Passo: 1Passo: 1Passo: 1Passo: 1Passo: 1Passo: 1Passo: 1Passo: 1Passo: 1
ESP COME funziona la comunicazione basata sull'indirizzo MAC dei nodi. Quindi, abbiamo bisogno di trovare l'indirizzo Mac del nostro nodo slave o ricevitore.

] Per questo basta caricare il seguente schizzo sulla scheda ESP32 e cercare l'indirizzo Mac nel monitor seriale



```bash
#include "WiFi.h"
 
void setup(){
  Serial.begin(115200);
  WiFi.mode(WIFI_MODE_STA);
  Serial.println(WiFi.macAddress());
}
 
void loop(){
}
```





















Step-2:Step-2:Step-2:Step-2:Step-2:Step-2:Step-2:Step-2:Step-2:Step-2:Step-2:Step-2:
Next, we need to prepare the transmitter, for that use this example sketch which can send multiple data types of data to the particular slave node.


```bash
#include <esp_now.h>
#include <WiFi.h>

// REPLACE WITH YOUR RECEIVER MAC Address
uint8_t broadcastAddress[] = {0x94, 0xB5, 0x55, 0x26, 0x27, 0x34};

// Must match the receiver structure
typedef struct struct_message {
  char a[32];
  int b;
  float c;
  bool d;
} struct_message;

// Create a struct_message called myData
struct_message myData;

esp_now_peer_info_t peerInfo;

// callback when data is sent
void OnDataSent(const uint8_t *mac_addr, esp_now_send_status_t status) {
  Serial.print("\r\nLast Packet Send Status:\t");
  Serial.println(status == ESP_NOW_SEND_SUCCESS ? "Delivery Success" : "Delivery Fail");
}
 
void setup() {
  // Init Serial Monitor
  Serial.begin(115200);
 
  // Set device as a Wi-Fi Station
  WiFi.mode(WIFI_STA);

  // Init ESP-NOW
  if (esp_now_init() != ESP_OK) {
    Serial.println("Error initializing ESP-NOW");
    return;
  }

  // Once ESPNow is successfully Init, we will register for Send CB to
  // get the status of Trasnmitted packet
  esp_now_register_send_cb(OnDataSent);
  
  // Register peer
  memcpy(peerInfo.peer_addr, broadcastAddress, 6);
  peerInfo.channel = 0;  
  peerInfo.encrypt = false;
  
  // Add peer        
  if (esp_now_add_peer(&peerInfo) != ESP_OK){
    Serial.println("Failed to add peer");
    return;
  }
}
 
void loop() {
  // Set values to send
  strcpy(myData.a, "I'm alive");
  myData.b = random(1,20);
  myData.c = 1.2;
  myData.d = false;
  
  // Send message via ESP-NOW
  esp_err_t result = esp_now_send(broadcastAddress, (uint8_t *) &myData, sizeof(myData));
   
  if (result == ESP_OK) {
    Serial.println("Sent with success");
  }
  else {
    Serial.println("Error sending the data");
  }
  delay(2000);
}
```



















Step-3:Step-3:Step-3:Step-3:Step-3:Step-3:Step-3:Step-3:Step-3:Step-3:Step-3:Step-3:Step-3:
Step-3:d example sketch which can receive the data from the master and it will print that into the serial monitor.


```bash
#include <esp_now.h>
#include <WiFi.h>

// Structure example to receive data
typedef struct struct_message {
    char a[32];
    int b;
    float c;
    bool d;
} struct_message;

// Create a struct_message called myData
struct_message myData;

// callback function that will be executed when data is received
void OnDataRecv(const uint8_t * mac, const uint8_t *incomingData, int len) {
  memcpy(&myData, incomingData, sizeof(myData));
  Serial.print("Bytes received: ");
  Serial.println(len);
  Serial.print("Char: ");
  Serial.println(myData.a);
  Serial.print("Int: ");
  Serial.println(myData.b);
  Serial.print("Float: ");
  Serial.println(myData.c);
  Serial.print("Bool: ");
  Serial.println(myData.d);
  Serial.println();
}
 
void setup() {
  // Initialize Serial Monitor
  Serial.begin(115200);
  
  // Set device as a Wi-Fi Station
  WiFi.mode(WIFI_STA);

  // Init ESP-NOW
  if (esp_now_init() != ESP_OK) {
    Serial.println("Error initializing ESP-NOW");
    return;
  }
  
  // get recv packer info
  esp_now_register_recv_cb(OnDataRecv);
}
 
void loop() {
}
```





Wrap Up:
We have seen how to implement the ESP NOW in ESP32 microcontroller, in upcoming tutorials will see how to transmit sensor data via ESPNOW





++++++++++++++++++++++++++ NARD ++++++++++++++++++++++++++ NARD ++++++++++++++++++++++++++ NARD 


```bash
#include <esp_now.h>
#include <WiFi.h>

// Definizione delle variabili
const char* ssid = "YourWiFiSSID";
const char* password = "YourWiFiPassword";

// Definizione del canale ESPNOW
const int channel = 1;

// Definizione delle callback
void OnDataReceived(const uint8_t* mac, const uint8_t* data, int len) {
  // Stampa i dati ricevuti
  Serial.print("Received data from: ");
  Serial.print(mac);
  Serial.print(" with length: ");
  Serial.println(len);

  // Stampa i dati ricevuti come stringa
  String dataString = "";
  for (int i = 0; i < len; i++) {
    dataString += (char)data[i];
  }
  Serial.println(dataString);
}

// Funzione di configurazione di ESPNOW
void InitESPNow() {
  // Inizializza ESPNOW
  esp_now_init();

  // Imposta il canale ESPNOW
  esp_now_set_channel(channel);

  // Imposta il callback per la ricezione dei dati
  esp_now_register_recv_cb(OnDataReceived);
}

// Funzione principale
void setup() {
  // Inizializza la connessione Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  // Stampa le informazioni di connessione Wi-Fi
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.println("IP address: ");
  Serial.println(WiFi.localIP());

  // Inizializza ESPNOW
  InitESPNow();
}

// Loop infinito
void loop() {
  // Fai qualcosa
}
```



Per utilizzare questo programma, è necessario modificare le seguenti variabili:

ssid e password con il nome e la password della tua rete Wi-Fi.
channel con il canale ESPNOW che desideri utilizzare.
Una volta compilato il programma, è possibile caricarlo su entrambe le schede ESP32. Dopo il caricamento, entrambe le schede saranno collegate tra loro usando ESPNOW.

Per inviare dati da una scheda all'altra, è possibile utilizzare la funzione esp_now_send(). Questa funzione richiede due parametri: l'indirizzo MAC della scheda di destinazione e i dati da inviare.

Ad esempio, per inviare la stringa "Hello, world!" dalla scheda 1 alla scheda 2, è possibile utilizzare il seguente codice:


er utilizzare questo programma, è necessario modificare le seguenti variabili:

ssid e password con il nome e la password della tua rete Wi-Fi.
channel con il canale ESPNOW che desideri utilizzare.
Una volta compilato il programma, è possibile caricarlo su entrambe le schede ESP32. Dopo il caricamento, entrambe le schede saranno collegate tra loro usando ESPNOW.

Per inviare dati da una scheda all'altra, è possibile utilizzare la funzione esp_now_send(). Questa funzione richiede due parametri: l'indirizzo MAC della scheda di destinazione e i dati da inviare.

Ad esempio, per inviare la stringa "Hello, world!" dalla scheda 1 alla scheda 2, è possibile utilizzare il seguente codice:


```bash
// Imposta i dati da inviare
uint8_t data[] = "Hello, world!";

// Invia i dati alla scheda 2
esp_now_send(mac_2, data, sizeof(data));
```