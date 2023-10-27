---
title: "118 Cosa sono le reti mesh per ESP32?"
description: "In questo post parleremo delle reti wireless peer to peer per ESP32."
excerpt: "Le reti mesh sono spesso utilizzate per applicazioni IoT, in cui è necessario collegare un gran numero di dispositivi in un'area estesa. Le reti mesh offrono una serie di vantaggi rispetto alle reti Wi-Fi tradizionali, tra cui ..."
date: 2023-10-26T09:19:42+01:00
lastmod: 2023-26-01T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["python", "programmazione"]
contributors: ["sergio rame"]
pinned: false
homepage: false
---




## Cosa sono le reti mesh
Le reti mesh sono reti wireless in cui i dispositivi sono connessi tra loro in modo peer-to-peer. Questo significa che ogni dispositivo può comunicare direttamente con qualsiasi altro dispositivo nella rete, senza bisogno di un nodo centrale.

Le reti mesh sono spesso utilizzate per applicazioni IoT, in cui è necessario collegare un gran numero di dispositivi in un'area estesa. Le reti mesh offrono una serie di vantaggi rispetto alle reti Wi-Fi tradizionali, tra cui:

### Vantaggi rispetto alle reti Wi-Fi
- Scalabilità: Le reti mesh possono essere facilmente scalate per aggiungere nuovi dispositivi.
- Resilienza: Le reti mesh possono continuare a funzionare anche se alcuni dispositivi vengono scollegati o danneggiati.
- Efficienza energetica: Le reti mesh utilizzano meno energia rispetto alle reti Wi-Fi tradizionali.

L'ESP32 è un microcontrollore che supporta le reti mesh. È possibile utilizzare l'ESP32 per creare reti mesh di piccole, medie o grandi dimensioni.

## Il software di sistema
Esistono diverse librerie che possono essere utilizzate per creare reti mesh con ESP32. Una delle librerie più popolari è painlessMesh. Questa libreria è facile da usare e offre una vasta gamma di funzionalità.

Come avviene lo scambio di messaggi semplici utilizzando il protocollo ESP-MESH:

> Ora, impariamo come scambiare messaggi semplici tra più schede ESP32 / ESP8266. Ad esempio useremo quattro schede ESP tra cui una NodeMCU ESP8266 e tre schede di sviluppo ESP32. La scheda ESP8266 verrà assegnata come Nodo 1 e le schede ESP32 verranno assegnate rispettivamente al Nodo 2, al Nodo 3 e al Nodo 4.

> Il nostro obiettivo sarà quello di mostrare come scambiare un semplice messaggio tra schede ESP utilizzando il protocollo di rete ESP-MESH utilizzando la libreria painlessMesh che abbiamo installato in precedenza. Il messaggio scambiato sarà: 'Questo è un messaggio di test dal nodo X' dove X specificherà il numero assegnato a ciascuna scheda nello schizzo del programma. Il nodo 1 riceverà messaggi dal Nodo 2, dal Nodo 3 e dal Nodo 4. Allo stesso modo, ogni Nodo riceverà messaggi dall'altro nodo e invierà il proprio messaggio al resto dei nodi.

Per creare una rete mesh con ESP32, è necessario eseguire i seguenti passaggi:

Installare la libreria painlessMesh.
Programmare ogni dispositivo ESP32 con il codice per creare una rete mesh.
Accendere i dispositivi ESP32.
Una volta che i dispositivi ESP32 sono accesi, si connetteranno tra loro automaticamente per formare una rete mesh.



## Monitoraggio ambientale con le reti mesh

Le reti mesh possono essere utilizzate per monitorare i livelli di inquinamento, la qualità dell'aria e altri dati ambientali. Veidmao un esempio di partenza su come rilevare e condividere valori ambientali:


Ecco un programma C++ per effettuare il monitoraggio ambientale con le reti mesh per ESP32:

#### Il codice sorgente

```bash
#include <painlessMesh.h>
#include <Wire.h>
#include <Adafruit_Sensor.h>
#include <Adafruit_BME280.h>

// Definizione dei parametri della rete mesh
#define MESH_SSID "my-mesh-network"
#define MESH_PASSWORD "my-mesh-password"
#define MESH_PORT 5555

// Definizione dei parametri del sensore
#define SEALEVELPRESSURE_HPA 1013.25

// Crea un oggetto mesh
Mesh mesh;

// Crea un oggetto sensore BME280
Adafruit_BME280 bme;

// Funzione per inizializzare il sensore BME280
void initSensor() {
  // Inizializza la comunicazione I2C
  Wire.begin();

  // Inizializza il sensore BME280
  bme.begin(0x76);
}

// Funzione per acquisire i dati dal sensore BME280
void readSensor() {
  // Acquisisce la temperatura
  float temperature = bme.readTemperature();

  // Acquisisce l'umidità
  float humidity = bme.readHumidity();

  // Acquisisce la pressione
  float pressure = bme.readPressure() / SEALEVELPRESSURE_HPA;

  // Stampa i dati acquisiti
  Serial.println("Temperatura: " + String(temperature) + " °C");
  Serial.println("Umidità: " + String(humidity) + "%");
  Serial.println("Pressione: " + String(pressure) + " hPa");
}

// Funzione per inviare i dati al nodo gateway
void sendData() {
  // Crea un messaggio
  String message = String(temperature) + "," + String(humidity) + "," + String(pressure);

  // Invia il messaggio al nodo gateway
  mesh.sendBroadcast(message);
}

// Funzione per eseguire il loop principale
void loop() {
  // Verifica se il dispositivo è connesso alla rete mesh
  if (!mesh.isConnected()) {
    // Tenta di connettersi alla rete mesh
    mesh.connect(MESH_SSID, MESH_PASSWORD, MESH_PORT);
  }

  // Acquisisce i dati dal sensore BME280
  readSensor();

  // Invia i dati al nodo gateway
  sendData();

  // Attende 1 secondo prima di eseguire il loop successivo
  delay(1000);
}

// Funzione per inizializzare la rete mesh
void setup() {
  // Inizializza la seriale
  Serial.begin(115200);

  // Inizializza il sensore BME280
  initSensor();

  // Inizializza la rete mesh
  mesh.init(MESH_SSID, MESH_PASSWORD, MESH_PORT);

  // Imposta il dispositivo come nodo router
  mesh.setRouter(true);

  // Imposta il dispositivo come nodo gateway
  mesh.setRoot();
}
```


Inizializza la seriale, il sensore BME280 e la rete mesh.
Accede alla rete mesh.
Acquisisce i dati dal sensore BME280.
Invia i dati al nodo gateway.
Attende 1 secondo prima di eseguire il loop successivo.
Per utilizzare questo programma, è necessario collegare un sensore BME280 al dispositivo ESP32. Il sensore BME280 è un sensore ambientale che misura la temperatura, l'umidità e la pressione.

Una volta che il programma è in esecuzione, il dispositivo ESP32 inizierà a acquisire i dati dal sensore BME280 e a inviarli al nodo gateway. Il nodo gateway può quindi visualizzare i dati acquisiti o inviarli a un server remoto.

Ecco un esempio di output del programma:

Temperatura: 22.5 °C
Umidità: 45%
Pressione: 1013.25 hPa


Smart home: Le reti mesh possono essere utilizzate per controllare i dispositivi di casa intelligente, come luci, termostati e serrature.
Sicurezza: Le reti mesh possono essere utilizzate per creare sistemi di sicurezza wireless.
Vantaggi delle reti mesh

Le reti mesh offrono una serie di vantaggi rispetto alle reti Wi-Fi tradizionali, tra cui:

Scalabilità: Le reti mesh possono essere facilmente scalate per aggiungere nuovi dispositivi.
Resilienza: Le reti mesh possono continuare a funzionare anche se alcuni dispositivi vengono scollegati o danneggiati.
Efficienza energetica: Le reti mesh utilizzano meno energia rispetto alle reti Wi-Fi tradizionali.
Svantaggi delle reti mesh

Le reti mesh presentano anche alcuni svantaggi, tra cui:

Complessità: La configurazione e la gestione delle reti mesh può essere più complessa rispetto alle reti Wi-Fi tradizionali.
Performance: Le reti mesh possono avere prestazioni inferiori rispetto alle reti Wi-Fi tradizionali, soprattutto per applicazioni che richiedono un elevato throughput di dati.

<br>
<p style="font-size: 12px;"> R.118.1.0.1 </p>
<br>