---
title: "Come funziona il Makefile di PlatformIO"
description: "Come funziona il Makefile di PlatformIO"
excerpt: "Il compilatore PlatformIO che noi usiamo per l’ESP32 funziona ottimamente con Visual Studio Code, ma spesso risulta più comodo usare la interfaccia a linea di comando..."
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

Il compilatore PlatformIO che noi usiamo per l'ESP32 funziona ottimamente con Visual Studio Code, ma spesso risulta più comodo usarlo nel Terminale a linea di comando. Ad esempio quanto usiamo il comando "**git clone**" per scaricare un progetto da Github, viene spostaneo scrivere semplicemente "**make upload**" e compilare il tutto.

Per i progetti predisposti per PlatformIO non ci sono problemi, ma come facciamo a creare da zero i due file "**platformio.ini**" e "**Makefile**" quando sono assenti nel progetto originario? E soprattutto a cosa serve il Makefile?


> <strong>I file di tipo "make"</strong> sono dei normali file di testo desinato alla utility "MAKE" di Unix/Linux. Questa <a href="https://linuxhandbook.com/using-make/" target="_blank">utility</a> automatizza la fase di compilazione conservando i flag del compilatore, gli indirizzi delle librerie, etc. senza doverle inserirle a mano di volta in volta. Per nostra fortuna il Makefile usato da PlatformIO ha raramente bisogno di modifiche e funziona benissimo con con il 99% dei progetti. 

##### A differenza di "platformio.ini" che contiene l'elenco delle librerie da usare nel progetto e cambia di volta in volta, il Makefile resta dunque sempre uguale.

Per questo motivo abbiamo scritto un breve post dove pubblicare una volta per tutte la versione standard del Makefile da copiare e incollare nel vostro editor preferito.


## Il codice

Potete copiare spostando il mouse "dentro" la zona gialla del codice: dovrebbe apparire un rettangolo colorato con la scritta "Copy". Cliccate sulla scritta e il testo verrà copiato nella clipboard senza problemi.

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