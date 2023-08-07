---
title: "La Piattaforma in cloud"
description: "Come funziona la nostra piattaforma Kaspian in versione cloud."
lead: "Come funziona la nostra piattaforma Kaspian in versione cloud."
date: 2020-11-16T13:59:39+01:00
lastmod: 2023-08-05T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "piattaforma"
weight: 210
toc: true
---



<img width="45%" class="x figure-img img-fluid lazyload blur-up" src="/106.svg" alt="">

### Introduzione

Puoi preparare da solo la tua infrastruttura per far funzionare la nostra piattaforma ma ti suggeriamo di partire con la versione ospitata sui nostri computer che puoi provare gratuitamente visitando questa <a href="/docs/piattaforma/trial/">pagina</a>.

### Cosa accade al primo accesso

Con la nostra versione cloud puoi partire da subito collegando i tuoi sensori collegati ad aun Arduino con accesso al WIFI, con un ESP32 (tutte le versioni accedonoi al WIFI).  Usando le credenzili che riceverai via email potrai andare alla pagina di setup e generale i files in linguaggio C++ per il Arduino. I files terranno conto delle tue credenzili WIFI da inserire tra le opzioni e dei valori assegnati in atuomatico da Amazon AWS. Le foto dei tuoi apprati saranno conservate su sistemi ad alta cicurezza come Amazon S3 e i dati numerici saranno conservati su MQTT, il data base specializzato in applicazioni IOT.

### Cosa bisogna impostare nelle opzioni per partire

Devi personalmente inserire tra le opzioni i SSDID della tua WIFI (il nome) e la password. Il resto della configurazione, le API e le password dei servizi associati sono invece inserite automaticamente da noi.

<img width="100%" class="x figure-img img-fluid lazyload blur-up" src="/docs/piattaforma/images/101.png" alt="">

### Iniziare con Arduino

Appena inserite le credenziali WIFI puoi andare nella HOME della App Kaspian ... 

<img width="100%" class="x figure-img img-fluid lazyload blur-up" src="/docs/piattaforma/images/102.png" alt="">

e cliccare su "Crea il sorgente per Arduino", dopo questa operazione verrà creato un file dal nome "arduino.setup" che poteri scaricare nella cartella di download. Ti basterà copiare il contenuto del file in un nuovo progrmma per Arduino e procedere con il solito cicl di compilazione / upload. Fatto questo devi aspettare almeno cinque minuti e potrai andare nel client della App Kaspian sul tuo telefoni, ad esempio e visualizzare i dati dei sensori nella pagina "Sorveglianza".

<img width="100%" class="x figure-img img-fluid lazyload blur-up" src="/docs/piattaforma/images/103.png" alt="">
