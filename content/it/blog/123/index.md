---
title: "Un progetto per ESP32 e la rete di tipo mesh"
description: "Un progetto per ESP32 e la rete di tipo mesh"
excerpt: "..."
date: 2023-11-02T09:19:42+01:00
lastmod: 2023-11-02T09:19:42+01:00
draft: true
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["ESP32", "programmazione", "reti mesh", "ambiente"]
contributors: ["sebadima"]
pinned: false
homepage: false
---


#### Il codice sorgente main.ino per trovare l'indirizzo MAC di un ESP32

```bash
#include "WiFi.h"
 
void setup(){
  Serial.begin(115200);
  WiFi.mode(WIFI_MODE_STA);
  Serial.print("indirizzo MAC="); 
  Serial.println(WiFi.macAddress());
}
 
void loop(){ 

}
```


##### Il file platformio.ini associato

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

[env:esp32dev]
upload_port = /dev/ttyUSB0
platform = espressif32
board = esp32dev
framework = arduino
lib_deps = 
```







#### Il codice sorgente main.ino per trovare l'indirizzo MAC di un ESP32CAM

```bash
#include "WiFi.h"
 
void setup(){
  Serial.begin(115200);
  WiFi.mode(WIFI_MODE_STA);
  Serial.print("indirizzo MAC ESP32CAM="); 
  Serial.println(WiFi.macAddress());
}
 
void loop(){ 

}
```     

##### Il file platformio.ini associato, specifico per ESP32CAM

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
```









22222222222222222222222222222222222222222222222222222222 sender 222222222222222222222222222222222222

##### Il programma per inviare dei dati campione dall'ESP32

```bash
#include <esp_now.h>
#include <WiFi.h>

// Indirizzo MAC del dispositivo di destinazione
// Sostituire nella riga in basso indirizzo MAC
// trovato con la utility apposita
uint8_t broadcastAddress[] = {0xE0, 0x5A, 0x1B, 0x6C, 0xE4, 0xB0};

// Struct per definire il formato dei dati
typedef struct struct_messaggio {
  char a[32];
  int contatore;
  float c;
  bool d;
} struct_messaggio;

struct_messaggio Dati;
esp_now_peer_info_t peerInfo;
int ix; 

// funzione callback da invocare dopo invio
void suInvioDati(const uint8_t *mac_addr, esp_now_send_status_t status) {
  Serial.print("\r\nStatus invio:\t");
  Serial.println(status == ESP_NOW_SEND_SUCCESS ? "Consegna positiva" : "Errore di consegna");
}



void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);

  // Inizializza ESP-NOW
  if (esp_now_init() != ESP_OK) {
    Serial.println("Errore di inizializzazione per ESP-NOW");
    return;
  }

  esp_now_register_send_cb(suInvioDati);
  ix= 0;

  memcpy(peerInfo.peer_addr, broadcastAddress, 6);
  peerInfo.channel = 0;  
  peerInfo.encrypt = false;
  
  // Aggiungi dispositivo
  if (esp_now_add_peer(&peerInfo) != ESP_OK){
    Serial.println("Non riesco add aggiunger il dispositivo");
    return;
  }
}
 
void loop() {
  // Valori da inviare
  strcpy(Dati.a, "Contatore in sequenza:");
  Dati.contatore = ix;
  Dati.c = (float)ix * 1000.0;
  if (ix % 2) {
    Dati.d = false;
  }
  else {
    Dati.d = true;
  }

  ix=ix+1;

  // invio del messaggio
  esp_err_t result = esp_now_send(broadcastAddress, (uint8_t *) &Dati, sizeof(Dati));
   
  if (result == ESP_OK) {
    Serial.println("Messaggio inviato con successo");
  }
  else {
    Serial.println("Errore di invio");
  }
  delay(2000);
}

```

222222222222222222222222222222222222222222222222222222 sender 222222222222222222222222222222222222

























## Il programma per ricevere dati campione dall'ESP32
```bash
#include <esp_now.h>
#include <WiFi.h>

// Struttura di esempio
typedef struct struct_messaggio {
    char a[32];
    int b;
    float c;
    bool d;
} struct_messaggio;

struct_messaggio Dati;

// Funzione di callback dopo invio dati
void suDatiRicevuti(const uint8_t * mac, const uint8_t *incomingData, int len) {
  memcpy(&Dati, incomingData, sizeof(Dati));
  Serial.print("Conteggio bytes ricevuti: ");
  Serial.println(len);
  Serial.print("Char: ");
  Serial.println(Dati.a);
  Serial.print("Int: ");
  Serial.println(Dati.b);
  Serial.print("Float: ");
  Serial.println(Dati.c);
  Serial.print("Bool pari o dispari: ");
  Serial.println(Dati.d);
  Serial.println();
}
 
void setup() {
  Serial.begin(115200);
  WiFi.mode(WIFI_STA);

  // Inizializza la rete ESP-NOW
  if (esp_now_init() != ESP_OK) {
    Serial.println("Errore nella inizialiazzione dele rete ESP-NOW");
    return;
  }
  
  esp_now_register_recv_cb(suDatiRicevuti);
}
 
void loop() {

}
```










<br>
<p style="font-size: 0.8em;">R.123.1.5.0</p>