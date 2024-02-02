---
title: "Come funziona il Makefile di PlatformIO"
description: "Come funziona il Makefile di PlatformIO"
excerpt: "..."
date: 2024-02-02T09:19:42+01:00
lastmod: 2024-02-02T09:19:42+01:00
draft: false
weight: 50
images: ["header.png"]
categories: ["News"]
tags: ["ESP32", "PlatformIO", "Programmazione"]
contributors: ["sebadima"]
pinned: false
homepage: false
mermaid: true
---



<hr>
<br>



## Introduzione

Il compilatore PlatformIO che noi usiamo per l'ESP32 funziona ottimamente con Visual Studio Code, ma spesso risulta più comodo usare la interfaccia a linea di comando. Per usare PlatformiIO in questa modalità abbiamo sempre bisogno del file sorgente, del file di configurazione (*platformio.ini*) del file "make". 

> <strong>Il file "make"</strong> è un normale file di testo desinato alla utility "MAKE" di Unix/Linux e per nostra fortuna non ha alcun bisogno di modifiche per compilare qualunque programma per ESP32 o Arduino 

Per questo motivo abbiamo scritto un breve post dove pubblicare una volta per tutte la versione standard del Makefile da copiare e incollare nel vostro editor preferito.



## Il codice

Potete copiare semplicemente spostando il mouse "dentro" la zona gialla del codice: dovrebbe apparire un rettangolo colorato con la scritta "COPY". Cliccate sulla scritta e il testo verrà copiato nella clipboard senza trascinare il mouse o copiare dal browser.

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

<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.148.1.2.0</p>