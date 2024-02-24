---
title: "Come far lampeggiare il LED interno dell'ESP32"
description: "Come far lampeggiare il LED interno dell'ESP32"
excerpt: "Se stai cercando un modo per aggiungere un tocco di dinamismo ai tuoi progetti con ESP32, il controllo del LED interno è un ottimo punto di partenza. In questa guida, impareremo a utilizzare le librerie Arduino per accendere, spegnere e modulare l'intensità luminosa di questo LED, aprendo ...."
date: 2024-02-01T09:19:42+01:00
lastmod: 2024-02-01T09:19:42+01:00
draft: false
weight: 50
images: ["header.webp"]
categories: ["News"]
tags: ["ESP32", "LED", "PlatformIO"]
contributors: ["sergio rame"]
pinned: false
homepage: false
mermaid: true
---



<hr>
<br>

## Il programma "Blink"

Il programma "Blink" per far lampeggiare l'ESP32 è l'equivalente IoT del classico "Hello world" dei linguaggi di programmazione. In questo articolo vederemo come compilarlo sia con Arduino Ide che con PlatformIO.

## Come compilare il programma "Blink" con Arduino IDE

Apri l'Arduino IDE.

- Vai su File -> Preferenze.
- Nella finestra delle preferenze, aggiungi l'URL seguente nella casella "URL aggiuntivi per il gestore schede":

```bash
https://dl.espressif.com/dl/package_esp32_index.json
```

- Clicca su "OK" per chiudere la finestra delle preferenze.
- Vai su Strumenti -> Scheda -> Gestore Schede.
- Cerca "esp32" e installa "ESP32 by Espressif Systems".

#### Selezione della scheda ESP32

Dopo aver installato il supporto per ESP32, seleziona la scheda giusta. 

- Vai su Strumenti -> Scheda e seleziona la tua scheda ESP32 dalla lista.

Ora puoi aprire l'esempio di "Blink" predefinito in Arduino IDE. 
<br>Vai su File > Esempi > ESP32 > Basics > Blink.

### Compilazione e upload del programma

- Collega il tuo ESP32 al computer tramite un cavo USB.
- Seleziona la porta corretta sotto Strumenti -> Porta.
- Cicca su Sketch -> Verifica/Compila.

Se la compilazione ha successo, puoi caricare il programma sull'ESP32 facendo clic su Sketch -> Carica.


## Come compilare "Blink" usando Github.com

Se non hai ancora installato PlatformIO sul tuo PC puoi leggere questo <a href="https://www.robotdazero.it/blog/come-installare-platformio/">post</a> del nostro blog. Usando questo compilatore, gli strumenti a linea di comando e i files presi da Github.com puoi migliorare la tua produttività in modo importante. <br>Infatti quando svilupperai i tuoi progetti sarai "sempre" alle prese con complessi comandi "<a href="/blog/come-installare-il-programma-git/">GIT</a>" sulla linea di comando. E commutare su Arduino Ide o Visual Studio ti costa molto più tempo che scrivere "make" sulla tastiera! 

Per compilare e testare il programma fai copia e incolla del testo sottostante e incollalo nel terminale di Linux o nel CMD di Windows:<br> 
- la prima riga copia sul tuo PC il codice dal nostro account Github, 
- la seconda lo compila usando le istruzioni contenute nel Makefile e in platformio.ini,
- la terza lancia il monitor sulla seriale.

```bash
git clone https://github.com/sebadima/corso-ESP32-blink.git
cd corso-ESP32-blink
make upload
platformio device monitor --baud 115200  --rts 0 --dtr 0
```

### Come costruire da zero il programma

Con PlatformIO puoi "clonare" il programma da Github: come hai notato non serve scaricare il file (https://dl.espressif.com/dl/package_esp32_index.json) e non devi settare la "board" come sei costretto a fare con Arduino IDE. 

> <strong>Se sei agli inizi con ESP32</strong> troverai interessante creare da zero i tuoi files e scoprire così qualche nuovo trucco di PlatformIO. Continua a leggere questa sezione per conoscere i dettagli.

Il codice è davvero breve e qui lo spieghiamo in dettaglio:

- In <strong>setup</strong>(), il programma inizializza la comunicazione seriale ad una velocità di trasmissione di 115200 baud e inoltra setta il pin 2 in modalità OUTPUT
- Nel <strong>loop</strong>(), la funzione digitalWrite() commuta continuamente lo stato del LED da HIGH a LOW.


#### main.ino

```bash
#define LED 2

void setup() {
  // Setta la seriale a 115200 baud
  Serial.begin(115200);
  // Setta la porta 2 in modalità OUT
  pinMode(LED,OUTPUT);
}

void loop() {
  digitalWrite(LED,HIGH);
  Serial.println("Led è HIGH");
  delay(1000);
  digitalWrite(LED,LOW);
  Serial.println("Led è LOW");
  delay(1000);
}
```


Carica il codice sopra in un file **main.ino** e inoltre usa il tuo editor preferito per creare un **file platformio.ini** con il seguente contenuto:

#### platformio.ini
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
platform = espressif32
board = esp32dev
framework = arduino
lib_deps = 
```


Per creare il Makefile puoi leggere questo <a href="/blog/come-funziona-il-makefile-di-platformio/">post</a> oppure fare copia e incolla del codice in basso in un file con lo stesso nome:

#### Makefile
```bash
# Uncomment lines below if you have problems with $PATH
#SHELL := /bin/bash
#PATH := /usr/local/bin:$(PATH)

all:
  pio -f -c vim run

upload:
  pio -f -c vim run --target upload

clean:
  pio -f -c vim run --target clean

program:
  pio -f -c vim run --target program

uploadfs:
  pio -f -c vim run --target uploadfs

update:
  pio -f -c vim update
```

Dopo avere creato il file, lancia la compilazione con "make" oppure carica il programma sulla scheda scrivendo "make upload".

<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.149.1.2.4</p>
