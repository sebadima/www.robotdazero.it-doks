---
title: "Cosa sono le reti mesh per ESP32?"
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
Le reti mesh sono reti wireless in cui i dispositivi sono connessi tra loro in modalità <a href="https://it.wikipedia.org/wiki/Peer-to-peer" target="_blank" rel="noopener">peer-to-peer</a>. Questo significa che ogni dispositivo può comunicare direttamente con qualsiasi altro dispositivo nella rete, senza bisogno di un server centralizzato.

Vengono spesso usate per applicazioni <a href="https://www.ibm.com/topics/internet-of-things#:~:text=The%20Internet%20of%20Things%20(IoT,to%20collect%20and%20share%20data." target="_blank" rel="noopener">IoT</a> in cui è necessario collegare un gran numero di dispositivi in un'area topografica estesa. Le reti mesh offrono una serie di vantaggi rispetto alle reti Wi-Fi tradizionali:

## Vantaggi delle reti mesh

- <a href="https://www.capterra.it/glossary/135/scalability#:~:text=Scalabilit%C3%A0%20%C3%A8%20un%20termine%20utilizzato,aumentano%20nel%20corso%20del%20tempo." target="_blank" rel="noopener">Scalabilità</a>: Le reti mesh possono essere facilmente scalate per aggiungere nuovi dispositivi.
- <a href="https://www.ibm.com/it-it/topics/cyber-resilience#:~:text=La%20cyber%20resilience%20%C3%A8%20un,disastri%20naturali%20o%20crisi%20economiche." target="_blank" rel="noopener">Resilienza</a>: Le reti mesh possono continuare a funzionare anche se alcuni dispositivi vengono scollegati o danneggiati.
- <a href="https://it.wikipedia.org/wiki/Green_computing" target="_blank" rel="noopener">Efficienza energetica</a>: Le reti mesh utilizzano meno energia rispetto alle reti Wi-Fi tradizionali.

## Svantaggi delle reti mesh

Le reti mesh presentano anche alcuni svantaggi, tra cui:

- Complessità: La configurazione e la gestione delle reti mesh può essere più complessa rispetto alle reti Wi-Fi tradizionali.
- Performance: Le reti mesh possono avere prestazioni inferiori rispetto alle reti Wi-Fi tradizionali, soprattutto per applicazioni che richiedono un elevato throughput di dati.

In questo post vedremo come con la scheda micontroller <a href="https://www.espressif.com/en/products/socs/esp32" target="_blank" rel="noopener">ESP32</a> sia facile creare reti mesh di piccole e grandi dimensioni. Anzitutto vediamo di quali librerie software abbiamo bisogno.

## Il software di sistema
Esistono diverse librerie che possono essere utilizzate per creare reti mesh con ESP32. Una delle librerie più popolari è <a href="https://gitlab.com/painlessMesh/painlessMesh" target="_blank" rel="noopener">painlessMesh</a>. Questa libreria è facile da usare e offre una vasta gamma di funzionalità.

A livello operativo, pur avendo risolto il node della libreria, rimangono alcuni passaggi da risolvere:

**1** - Installare la libreria painlessMesh.

**2** - Programmare ogni dispositivo ESP32 con il codice per creare una rete mesh.

**3** - Accendere i dispositivi ESP32.

**4** - Una volta che i dispositivi ESP32 saranno accesi, si connetteranno tra loro automaticamente per formare la rete mesh.

In Robotdazero poniamo sempre un forte accento sulle applicazioni ambientali e anche in questo caso abbiamo pensato a delle applicazioni pratiche per controllare e combattere (almeno a livello di informazione) i danni dell'inquinamento.

## Monitoraggio ambientale con le reti mesh

Le reti mesh possono essere utilizzate per monitorare i livelli di inquinamento, la qualità dell'aria e altri dati ambientali. Vediamo un esempio di partenza su come rilevare e condividere valori ambientali:

Ecco un programma C++ per effettuare il monitoraggio ambientale con le reti mesh per ESP32:

### Il codice sorgente

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

  // Acquisisce la umidità
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

La fase di setup inizializza la seriale, il sensore <a href="https://www.bosch-sensortec.com/products/environmental-sensors/humidity-sensors-bme280/" target="_blank" rel="noopener">BME280</a> e la rete mesh. La funzione loop, molto semplice, acquisisce i dati dal sensore BME280 e li invia i dati al nodo <a href="https://it.wikipedia.org/wiki/Gateway_(informatica)" target="_blank" rel="noopener">gateway</a>.

Quindi attende 1 secondo prima di eseguire il loop successivo.
Per utilizzare questo programma, è necessario collegare un sensore BME280 al dispositivo <a href="https://www.espressif.com/en/products/socs/esp32" target="_blank" rel="noopener">ESP32</a>. Il sensore BME280 è un sensore ambientale che misura la temperatura, l'umidità e la pressione. Quando il programma "entra a regime", l'ESP32 acquisisce i dati dal sensore li invia al gateway e il nodo gateway può a sua volta inviare ad una app come la nostra "<a href="https://www.robotdazero.it/docs/piattaforma/quick-start/" target="_blank" rel="noopener">Kaspian</a>" per visualizzare i dati acquisiti.

#### Ecco un esempio di output del programma:

> Temperatura: 22.5 °C
Umidità: 45%
Pressione: 1013.25 hPa

Le reti mesh per ESP32 risolvono in economia il difficile problema di rilevare dati su una zona geografica estesa come potrebbe essere un terreno agricolo e sono una valida alternative alle <a href="https://it.wikipedia.org/wiki/LoRa" target="_blank" rel="noopener">schede LoRa</a> per la tramissione di dati in formato <a href="https://it.wikipedia.org/wiki/JavaScript_Object_Notation" target="_blank" rel="noopener">Json</a>. 

##### I progressi della tecnologia "mesh" fanno comunque intravedere l'utilizzo dell'ESP32 anche per trasmettere foto ad alta e video a bassa risoluzione, cosa del tutto impensabile per il protocollo LoRa.

<br>
<p style="font-size: 0.8em;">R.118.2.2.0</p>
<br>
