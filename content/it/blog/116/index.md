---
title: "Come per collegare due schede ESP32 usando il procollo ESPNOW."
description: "Come per collegare due schede ESP32 usando il procollo ESPNOW."
excerpt: "Le nuove schede LoRa (Long Range) usano una tecnologia a bassa potenza wide area network (LPWAN)
sviluppato da Semtech. Le schede LoRa operano usando la modulazione di frequenza (FM) piuttosto che la modulazione di ampiezza..."
date: 2023-10-18T09:19:42+01:00
lastmod: 2023-18-01T09:19:42+01:00
draft: true
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["LoRa", "programmazione", "ESP32"]
contributors: ["sergio rame"]
pinned: false
homepage: false
---




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