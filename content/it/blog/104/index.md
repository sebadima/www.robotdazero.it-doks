---
title: "Come alimentare un Arduino Teensy?"
description: "Come alimentare un Arduino Teensy?"
excerpt: "Ci sono diversi modi per alimentare un Arduino Teensy. Ecco alcuni dei modi più comuni: Utilizzare un cavo USB. Il Teensy può essere alimentato direttamente da un computer utilizzando un cavo USB. Questo è il modo più semplice per alimentare il Teensy, ma non è sempre pratico..."
date: 2023-08-02T09:19:42+01:00
lastmod: 2023-08-03T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["arduino", "elettronica","pratica"]
contributors: ["sebadima"]
pinned: false
homepage: false
mermaid: true
---



### L'ARDUINO TEENSY È UNA SCHEDA ARDUINO COMPATTA E POTENTE CHE PUÒ ESSERE ALIMENTATA IN DIVERSI MODI. 

Ecco alcuni metodi comuni:

- Uscita USB: L'Arduino Teensy può essere alimentato direttamente da una porta USB. Questo è il modo più semplice per alimentare la scheda e viene spesso utilizzato durante lo sviluppo e il test.
- Alimentatore esterno: L'Arduino Teensy può anche essere alimentato da un alimentatore esterno. Questo può essere utile se si desidera utilizzare la scheda in un progetto portatile o se si desidera avere un maggiore controllo sulla tensione di alimentazione.
- Batteria: L'Arduino Teensy può anche essere alimentato da una batteria. Questo può essere utile se si desidera utilizzare la scheda in un progetto senza accesso a una presa di corrente.

### IL RANGE DI ALIMENTAZIONE DI ARDUINO TEENSY
Quando si alimenta l'Arduino Teensy, è importante assicurarsi che la tensione di alimentazione sia compresa tra 7 e 12 volt. Se la tensione di alimentazione è troppo alta, la scheda potrebbe essere danneggiata. Se la tensione di alimentazione è troppo bassa, la scheda potrebbe non funzionare correttamente.

### ALCUNI SUGGERIMENTI PER ALIMENTARE L'ARDUINO TEENSY

1. Utilizzare un alimentatore che sia in grado di fornire abbastanza corrente per l'Arduino Teensy. La corrente richiesta dall'Arduino Teensy è indicata nelle specifiche della scheda.
2. Utilizzare un alimentatore che abbia una tensione di uscita compresa tra 7 e 12 volt.
 Se si alimenta l'Arduino Teensy da una batteria, utilizzare una batteria che abbia una capacità sufficiente per alimentare la scheda per il periodo di tempo desiderato.
3.  Se si utilizza un alimentatore esterno, utilizzare un alimentatore regolato. Questo garantirà che la tensione di alimentazione fornita all'Arduino Teensy sia costante.



### I VALORI OPERATIVI RACCOMANDATI

<div class="alert alert-doks d-flexflex-shrink-1" role="alert"> 👉 
Tensioni massime operative
<br>
<br>
4.5V to 5.5V	16 MHz	Yes
<br>
3.4V to 4.5V	8 MHz	Yes
<br>
3.0V to 3.4V	8 MHz	No*
<br>
2.7V to 3.0V	8 MHz	No
<br>
2.6V** to 2.7V	2 MHz	No
<br>
</div>


### IL TEENSY IN DETTAGLIO

Teensy non viene assemblato direttamente da Arduino o da un produttore collegato. Viene fornro da una società separata chiamata PJRC, di proprietà di Paul Stoffregen. L'imprenditore ha immediatamente riconosciuto il potenziale della nuova schede e la capacità di sopperire alle lacune della scheda originale. La PJRC ha progettato dunque una versione "ARM based" di Arduino che incorporava tutto il meglio della vecchia scheda, con la potenza di un ARM Cortex-M4 a 180 MHz! Il Teensy rappresenta un salto di potenza enorme rispetto al classico ATmega328P!

### LA PIEDINATURA DEL TEENSY

> In linea di massima, per la presenza di ulteriori dispositivi di I/O la piedinatura appare competamente diverrsa nelle ultime versioni 2023.

<br>

##### La piedinatura del Teensy 4.1 Pins - Parte frontale
<img width="800" class="x figure-img img-fluid lazyload blur-up" src="images/101.png" alt="La piedinatura del Teensy 4.1 Pins - Front">

<br>
<br>
<br>

##### La piedinatura del Teensy 4.1 Pins - Parte posteriore
<img width="800" class="x figure-img img-fluid lazyload blur-up" src="images/101.png" alt="La piedinatura del Teensy 4.1 Pins - Back">

<br>
<br>
<br>
<br>

> Mentre il Teensy originale cercava di mantenere una certa somiglianza con l'hardware Arduino originale...

#### La piedinatura del Teensy 4.1 Pins - rel 1.0
<img width="800" class="x figure-img img-fluid lazyload blur-up" src="images/101.png" alt="La piedinatura del Teensy 4.1 Pins - rel 1.0">

<br>
<br>

Oltre ad un processore a 32 bit 180Mhz, alcune versioni del Teensy esibiscono slot per schede SD, porte Ethernet e porte di comunicazione seriale. Il Teensy possiede inoltre decine di librerie aggiuntive e software per Arduino. Ciò significa che tutte le nuove funzionalità sono già integrate a livello software e richiedono solo la aggiunta delle librerie!

<div class="alert alert-doks d-flexflex-shrink-1" role="alert"> 👉 ⚡️
Nella maggior parte dei casi sarai in grado di compilare e caricare i tuoi progetti Arduino esistenti direttamente sul Teensy senza modifiche.
</div>

<br>
<br>



<p style="font-size: 12px">R.104.4.0</p>
