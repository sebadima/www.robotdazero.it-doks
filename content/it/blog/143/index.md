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

E' un simulatore Arduino open-source che viene eseguito nel browser web
ArduinoSimulator di Leonardo Russo è un simulatore Arduino open-source scritto in JavaScript che esegue il codice direttamente nel browser Web e mostra l'uscita seriale e lo stato dei pin digitali / analogici per varie schede Arduino, ovvero Arduino UNO R3, MEGA1280, MEGA2560 e NANO V3.

Abbiamo precedentemente coperto il simulatore Wokwi per ESP32. Arduino e Raspberry Pi RP2040 è un piccolo grande strumento per gli educatori per emulare i circuiti ed eseguire il codice direttamente in un browser Web, e supporta anche l'MCU wireless ESP32-P4 anche se deve ancora essere rilasciato. Mentre i simulatori sono scritti in JavaScript e open-source, lo strumento stesso non lo è e, ad esempio, non è possibile eseguire un'istanza self-hosted di Wokwi o utilizzarla offline. ArduinoSimulator è completamente open-source e funziona interamente da un browser web.

Simulatore Arduino 

Non è così complesso e completo come Wokwi, in quanto non puoi costruire i tuoi circuiti, ma hai ancora un'area per scrivere il codice e salvarlo localmente, icone per pin digitali (rosso = basso, verde = alto) e pin analogici (valore da 0 a 255) e un monitor seriale con un campo che ti consente di inviare comandi secondo necessità.  Per testare un programma è sufficiente fare clic sul pulsante Esegui in alto.

Leonardo ha dichiarato a CNX Software che il progetto è un work in progress e può essere utile per regioni o paesi in cui potrebbe essere ancora difficile acquistare componenti. Avrai solo bisogno di un browser web senza o senza accesso a Internet e sei a posto. Il simulatore Arduino rileverà automaticamente anche la lingua predefinita e passerà a inglese, spagnolo, italiano, francese o portoghese. Altre lingue dovrebbero essere abbastanza facili da aggiungere con solo poche stringhe da tradurre.

<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it -  post - R.143.1.0.0</p> 