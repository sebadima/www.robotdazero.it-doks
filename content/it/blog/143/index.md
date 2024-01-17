---
title: "Un simulatore Arduino che viene eseguito nel browser web"
description: "Un simulatore Arduino che viene eseguito nel browser web"
excerpt: "Arduino Simulator di Leonardo Russo è un simulatore Arduino open-source scritto in JavaScript che esegue il codice direttamente nel browser Web e mostra l'uscita seriale e lo stato dei pin digitali / analogici per varie schede Arduino, ovvero Arduino UNO...."
date: 2024-01-15T09:19:42+01:00
lastmod: 2024-01-15T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["Arduino", "simulazione", "automazione"]
contributors: ["sebadima"]
pinned: false
homepage: false
mermaid: true
---



<hr>
<br>
<!-- https://www.cnx-software.com/2024/01/16/arduinosimulator-is-an-open-source-arduino-simulator-that-runs-on-your-web-browser/ -->

## Cosa è Arduino Simulator?

<a href="https://github.com/lrusso/ArduinoSimulator/" target="_blank">Arduino Simulator</a> è un sofisticato simulatore Arduino che viene eseguito nel browser web senza bisogno di installare alcun applicativo. E' stato scritto da Leonardo Russo usando il linguaggio eed è in grado di simulare la esecuzione del codice e lo stato dei pin digitali e analogici. Funziona per varie schede Arduino, ovvero Arduino UNO R3, MEGA1280, MEGA2560 e NANO V3.

In passato su Robotdazero abbiamo già accennato nelle news riguardo a <a href="https://wokwi.com/" target="_blank">Wokwi-flop</a> (per ESP32, Pi Pico, STM32) un grande strumento per emulare i circuiti che supporta anche l'ESP32-P4 tuttora in fase di rilascio, ma ArduinoSimulator è completamente open-source e funziona **interamente** in un browser web.

Arduino Simulator non è complesso e completo come Wokwi, in quanto non si possono costruire dei circuiti, ma possiede una area per scrivere codice utente e salvarlo localmente. Fornisce delle icone per pin digitali (rosso = basso, verde = alto) e pin analogici (valore da 0 a 255) e un monitor seriale con un campo che consente di inviare comandi esattamente come si può fare con Arduino. Per testare un programma basta fare clic sul pulsante Esegui in alto, sebza la fa se di upload ovviamente.

Leonardo Russo ha dichiarato che il progetto è un work in progress e può essere utile per regioni o paesi in cui potrebbe essere ancora difficile acquistare componenti. Serve solo un browser anche senza accesso a Internet. Il simulatore di Arduino rileva la lingua predefinita del sistema e passerà a inglese, spagnolo, italiano, francese o portoghese, le 5 cinque attualmente disponbili.

<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it -  post - R.143.1.2.0</p> 