---
title: "Come funziona il Makefile di PlatformIO"
description: "Come funziona il Makefile di PlatformIO"
excerpt: "Quando si tratta di progetti embedded, l'ottimizzazione del flusso di lavoro di sviluppo è fondamentale per il successo del progetto. Il file Makefile di PlatformIO si presenta come una soluzione elegante per semplificare e automatizzare il processo di compilazione, consentendo agli sviluppatori di concentrarsi maggiormente sullo sviluppo effettivo del codice...."
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

Il compilatore PlatformIO che noi usiamo per l'ESP32 funziona ottimamente con Visual Studio Code, ma spesso risulta più comodo usarlo nel CMD di Windows o dentro la shell di Linux. Ad esempio quanto usiamo il comando "**git clone**" per scaricare un progetto da Github, viene spostaneo scrivere semplicemente "**make upload**" e compilare il tutto.

Per i progetti predisposti per PlatformIO non ci sono problemi, ma come facciamo a creare da zero i due file "**platformio.ini**" e "**Makefile**" quando sono assenti nel progetto originario? E soprattutto a cosa serve il Makefile?


> <strong>I file di tipo "make"</strong> sono dei normali file di testo destinati alla utility "MAKE" di Linux. Questa <a href="https://linuxhandbook.com/using-make/" target="_blank">utility</a> automatizza la fase di compilazione conservando i flag del compilatore, gli indirizzi delle librerie, etc. senza doverle inserirle a mano di volta in volta. Per nostra fortuna il Makefile usato da PlatformIO ha raramente bisogno di modifiche e funziona benissimo con con il 99% dei progetti. 

##### A differenza di "platformio.ini" che contiene l'elenco delle librerie da usare nel progetto e cambia di volta in volta, il Makefile resta dunque sempre uguale.

Per questo motivo abbiamo scritto un breve post dove pubblicare una volta per tutte la versione standard del Makefile di PlatformIO, da copiare e incollare nel vostro editor preferito.


## Il codice

Potete copiare spostando il mouse "dentro" la zona gialla del codice: dovrebbe apparire un rettangolo colorato con la scritta "Copy". Cliccate sulla scritta e il codice verrà copiato nella clipboard senza problemi.

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
<p style="font-size: 0.80em;">Robotdazero.it - post - R.150.1.3.0</p>