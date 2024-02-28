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


## Una panoramica complessiva

La connessione simultanea WIFI ed ESP-NOW presenta alcune sfide di programmazione non indifferenti e per questo abbiamo deciso di approfondire l'argomento con un paragrafo dedicaro solo a questo argomento.

## Cosa è ESP-NOW

ESP-NOW è un protocollo di rete proprietario sviluppato da Espressif per la comunicazione a bassa latenza e basso consumo energetico tra dispositivi ESP32. Offre un'alternativa al Wi-Fi per la connessione di dispositivi in reti locali, con alcuni vantaggi:

- Maggiore affidabilità: ESP-NOW è progettato per ambienti con interferenze RF elevate e offre una maggiore affidabilità rispetto al Wi-Fi.
- Minore latenza: ESP-NOW offre una latenza inferiore rispetto al Wi-Fi, rendendola ideale per applicazioni in tempo reale.
- Minore consumo energetico: ESP-NOW consuma meno energia rispetto al Wi-Fi, prolungando la durata della batteria dei dispositivi.


### I problemi nell'utilizzo simultaneo di Wi-Fi e ESP-NOW

Sebbene ESP-NOW offra diversi vantaggi, la sua coesistenza con il Wi-Fi sull'ESP32 presenta alcune sfide:

- Condivisione delle risorse

L'ESP32 ha un'unica radio Wi-Fi che deve essere condivisa tra Wi-Fi e ESP-NOW.
Questo può causare conflitti e rallentamenti in entrambi i tipi di connessione, soprattutto in ambienti con traffico intenso.

- Gestione del software

La gestione di due connessioni di rete separate richiede un software più complesso, aumentando la complessità di sviluppo e la possibilità di errori.
La sincronizzazione dei dati tra le due reti può essere un problema, richiedendo un'attenta progettazione del software.

- Consumo energetico

Sebbene ESP-NOW consumi meno energia del Wi-Fi, la gestione di due connessioni contemporaneamente può comunque avere un impatto significativo sulla durata della batteria.
3. Soluzioni per le sfide:


## 

Ci sono alcune cose che dovete prendere in considerazione se si desidera utilizzare Wi-Fi per ospitare un server web e utilizzare ESP-NOW contemporaneamente per ricevere le letture dei sensori da altre schede:

Le schede mittente ESP32 devono utilizzare lo stesso canale Wi-Fi della scheda ricevente.
Il canale WiFi della scheda ricevente viene assegnato automaticamente dal router WiFi.
La modalità Wi-Fi della scheda ricevente deve essere access point e station (WIFI_AP_STA).
È possibile impostare manualmente lo stesso canale Wi-Fi, oppure è possibile aggiungere una semplice spinetta di codice sul mittente per impostare il proprio canale Wi-Fi sullo stesso della scheda ricevente.



## Un programma basico per commettersi ad ESP-NOW

Vediamo con un esempio pratico come l'ESP32 può connettersi a 

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

> *.*

<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.155.0.3.1</p>