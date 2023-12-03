---
title: "Iniziare con le breadboard"
description: "Iniziare con le breadboard"
excerpt: "Le Breadboard servono a collegare i componenti elettronici senza usare il saldatore - basta prendere i terminali e inserirli nei fori a misura standard ed il gioco è fatto. Le puoi comprare in varie forme e dimensioni e..."
date: 2023-11-04T09:19:42+01:00
lastmod: 2023-11-04T09:19:42+01:00
draft: false
weight: 50
images: ["header.webp"]
categories: ["News"]
tags: ["elettronica", "guide", "breadboard"]
contributors: ["sebadima"]
pinned: false
homepage: false
mermaid: true
---

## COSA SONO LE BREADBOARD?

Le breadboard servono a collegare i componenti elettronici **senza usare il saldatore**: basta prendere i terminali e inserirli nei buchi a misura standard ed il gioco è fatto. Le puoi comprare in varie forme e dimensioni e, per fortuna, **funzionano tutte allo stesso modo**.

La loro maggiore utilità deriva dal modo in cui i fori sono connessi. I fori sono infatti connessi a **colonne**: se un solo foro viene collegato ad un alimentatore allora tutti gli altri fori della colonna saranno collegati alla alimentazione! E se collegate una colonna di fori alla massa, tutti i fori della colonna saranno collegati a massa.

> In questo modo potrai collegare tutti i componenti alla alimentazione e alla massa del circuito semplicemente variando la loro posizione sulla scheda!

<img width="800" class="x figure-img img-fluid lazyload blur-up" src="images/101.jpeg" alt="">


## INSERIRE I OMPONENTI SULLA BREADBOARD

Vediamo come usarle in progetti appena più complessi. Fino ad ora abbiamo usato il LED interno di Arduino per fare dei semplici test, ma nel prossimo esempio vedremo come collegare dei LED esterni, aggiungendo una resistenza per limitare la corrente.

I LED infatti hanno bisogno di limitare il flusso di elettroni che altrimenti li brucerebbe in pochi secondi, esperienza che capita a tutti principianti almeno una volta nella vita. Il fatto che si possano usare i **4 LED interni** di Arduino senza problemi vuol dire solo che i progettisti hanno già inserito le resistenze adatte nella scheda, non che puoi farne a meno!

Nella figura sottostante puoi vedere una immagine di un circuito completo assemblato su una Breadboard. Consiste di un Arduino, un LED e una resistenza di 1kΩ.

<img decoding="async" title="Title" src="https://res.cloudinary.com/sebadima/image/upload/v1579521307/001/-075_jowvbl.png" alt="circuito con resistenza led e arduino" /> 

<br>
<br>

Come si vede nella colonna di sinistra abbiamo un filo nero che esce dal connettore GND (ground=massa) di Arduino. Il filo nero si innesta nella breadboard e continua fino al terminale negativo del LED.

Il filo rosso (positivo) conduce il segnale che proviene dal **pin 2** di Arduino fino alla colonna di destra. Salendo sulla colonna di destra la corrente incontra dapprima la resistenza  di un kΩ e poi il terminale positivo del LED. Senza perdere tempo con stagno e saldatore ho realizzato il circuito necessario per accendere un LED con Arduino. Prova a copiare la disposizone dei componenti sulla tua breaboard. 
Volendo potresti modificare il programma e fare lampeggiare il LED a intervalli regolari di un secondo. La modifica è semplicissima, si tratta solo di cambiare una riga, ma se sei nuovo del Blog non ti preoccupare: realizzeremo assieme molti di questi esercizi e in poco tempo saprai cavartela benissimo da solo. 

### ALCUNI UTILI TRUCCHETTI

- Accorcia i terminali dei componenti se si piegano troppo mentre li inserisci
- Quando accorci i terminali dovresti accorciare un poco di più i terminali **negativi** per riconoscerli più facilmente. I LED ad esempio hanno un terminale positivo e uno negativo
- Se colleghi un LED ad una batteria o ad un alimentatore **DEVI** sempre inserire in linea una resistenza, che per le tensioni che si usano nella Robotica sarà di **150Ω** fino a **1 KΩ**


### I SEGRETI DELLE BREADBOARD

- Molte delle connessioni tra i componenti sulla tua breadboard sono realizzate da la breadboard stessa, sotto la superficie, ma quando non puoi fare un connessione diretta tramite la scheda puoi usare dei cavi di interconnessione (a volte chiamati ponticelli). Si utilizza un filo isolato solido (non ricoperto da plastica) di un paio di mm di diametro. Un filo troppo spesso o troppo sottile non funziona bene in breadboard.

Mentre stai acquistando la tua breadboard acquista un set di ponticelli pretagliati. L'alternativa è comprare un mazzo di filo, tagliare segmenti di varie lunghezze.  Anche acquistando un vasto assortimento di ponticelli potrebbe servire un cavo di interconnessione particolare, fai perciò in modo di conservare dei pezzi di filo da 2.2 mm per ognii evenienza.

<br> 
<p style="font-size: 0.8em;">R.131.1.1.0</p>
