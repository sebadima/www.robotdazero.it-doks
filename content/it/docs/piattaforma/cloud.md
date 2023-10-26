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
weight: 101
toc: true
---



### Introduzione

Puoi preparare da solo la tua infrastruttura per far funzionare la nostra piattaforma ma ti suggeriamo di partire con la versione ospitata sui nostri computer che puoi richiedere gratuitamente visitando questa <a href="/docs/piattaforma/trial/">pagina</a>.

### Cosa accade al primo accesso

Con la nostra versione cloud puoi partire senza installare il programma e in pochi minuti potrai leggere sulla App i dati dei tuoi sensori.  La App è compatibile con ogni Arduino dotato di accesso al WIFI e con ESP32 (tutte le versioni). 



### Cosa bisogna impostare nelle opzioni per partire

Usando le credenziali che riceverai via email dovrai accedere alla App dal tuo PC e andare subito alla pagina delle impostazioni, premere modifica e inserire le credenziali della tua WIFI (SSID e password). 
Dopo avere premuto "AGGIORNA" la nostra App dovrebbe apparire come nella immagine sotto. Il resto della configurazione, le API e le password dei servizi associati sono invece inserite automaticamente da noi.

<img width="100%" class="x figure-img img-fluid lazyload blur-up" src="/docs/piattaforma/images/101.png" alt="">

### Come programmare il tuo Arduino

Appena inserite le credenziali WIFI puoi andare nella HOME della App Kaspian cliccando sul logo: 

<img width="100%" class="x figure-img img-fluid lazyload blur-up" src="/docs/piattaforma/images/102.png" alt="">

<br>
<br>

e cliccare su "CREA IL SORGENTE PER ARDUINO".Verrà creato un file dal nome "arduino.setup" che potrai scaricare nella cartella di download. Ti basterà copiare il contenuto del file in un programma per Arduino IDE e procedere con il solito ciclo di compilazione / upload. 

I files contengono le tue credenziali WIFI da te impostate e le credenziali per Amazon AWS. Le foto scattate dalle tue WebCAM saranno conservate sul sistema ad alta sicurezza Amazon S3, mentre i dati numerici saranno conservati su MQTT, il database Amazon per applicazioni IOT.

Fatto questo devi aspettare almeno cinque minuti e potrai andare nel client della App Kaspian sul tuo telefonino, ad esempio e visualizzare i dati dei sensori nella pagina "Sorveglianza".

<br>
<img width="100%" class="x figure-img img-fluid lazyload blur-up" src="/docs/piattaforma/images/103.png" alt="">
