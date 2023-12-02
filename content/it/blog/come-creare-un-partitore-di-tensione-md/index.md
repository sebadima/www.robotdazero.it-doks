---
title: "Come creare un partitore di tensione"
description: "Come creare un partitore di tensione"
excerpt: "La tensione dei componenti che usiamo con Arduino deve restare rigorosamento entro certi limiti, pena bruciare sensori o intere schede in pochi secondi. Se la corrente in linea di massima non è un problema..."
date: 2020-11-04T09:19:42+01:00
lastmod: 2023-12-02T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["elettronica", "teoria", "resistori"]
contributors: ["sebadima"]
pinned: false
homepage: false
mermaid: true
---



<hr>

Con i partitori di tensione possiamo usare due resistenze per abbassare la tensione al livello desiderato, un trucco che ogni appassionato di elettronica sa usare alla perfezione.

## Lo schema teorico

<img img width="400" class="x figure-img img-fluid lazyload blur-up"  src="images/101.png" alt="immagine di un partitore di tensione - schema teorico">

<br>
<br>

La tensione dei componenti che usiamo con Arduino deve restare rigorosamento entro certi limiti, pena bruciare sensori o intere schede in pochi secondi. Se la corrente in linea di massima non è un problema perchè i componenti assorbono solo quella che serve loro, la tensione deve essere calcolata con precisione.

## La formula matematica

Se guardi la immagine sopra vedrai che si tratta di usare banalmente due resistenze (**R1** e **R2**) collegate in serie ai poli di una batteria e di due contatti posti “a cavallo” della resistenza **R2**. La tensione che sarà disponibile tra quei due punti non è però **Vg** come si potrebbe pensare, ma:

**Vr2** = **Vg** * (**R2** / **R2+R1**)

Il motivo è che la caduta di tensione viene “spalmata” tra le due resistenze in proporzione al loro valore. In pratica si fa cadere una tensione **Vg** sulle due resistenze e se ne preleva una parte (**VR2**) sulla sola **R2**.

Agendo sui valori di **R1** ed **R2** si può ottenere teoricamente una qualunque tensione **VR2**, comunque mai superiore a **Vg**.

## Il partitore di tensione nella pratica quotidiana:

Moltissimi dispositivi digitali funzionano a 5V o 3.3V. Capita spesso di dovere convertire la tensione tra questi due livellii per collegare due circuiti (ad esempio un sensore all’Arduino). E seppure il partitore di tensione sia un concetto semplice, **quando dobbiamo usarlo all’inverso** e cioè trovare le resistenze per ottenere una certa tensione, nascono delle difficoltà:

> Come portare la tensione da un livello V-iniziale a V-finale senza ricorrere a formule e tabelle? Esiste un sistema facile? Esiste ed è piuttosto semplice: proverò a spiegartelo con questi esempi.

### Esempi

**Es.1:** La tensione che ti serve è 1V ma hai a disposizione 10V. 10V sono dieci volte **(10X)** rispetto a 1V e perciò ti serve una R1 9 volte **(9X)** maggiore rispetto a R2.

**Es.2:** La tensione che ti serve è 3.3V e hai a disposizione solo i 9V di una normale pila quadra. 9V sono circa il triplo **(3X)** di 3.3V e perciò ti serve una resistenza R2 qualsiasi e una R1 di valore doppio **(2X)**.

**Es.3:** La tensione che ti serve è di 6V e hai a disposizione solo i 12V di una piccola batteria. 12V sono il doppio **(2X)** rispetto a 6V e perciò ti serve una resistenza R1 uguale **(1X)** a R2.

**Es.4:** La tensione che ti serve è 1.75V ma hai a disposizione solo 5V. 5V sono circa il triplo **(3X)** rispetto a 1.75V e perciò ti serve una R1 due volte **(2X)** volte maggiore di R2. Con le resistenze in commercio ad esempio potresti usare R1 = 3,3 kΩm e R2 = 1,8 kΩ per una tensione finale di 1.67V molto vicina ai 1.75V voluti.

## Conclusione

> Se hai a disposizione una tensione (X) volte maggiore di quella che ti serve, prendi una resistenza a caso e poi trovane un’altra (X-1) volte maggiore della prima.

Perchè funziona? Perchè l’errore che commettiamo mentalmente sarà al massimo del 20% e ci sono resistenze in commercio con tolleranze peggiori. Questo in breve è il ragionamento che fanno gli elettricisti, al volo e quasi senza pensarci. 

### I calcolatori on line

Dopo qualche volta che lo avrai usato verrà facile e istintivo anche a te. In ogni caso ricorda che ci sono molti simulatori in giro per Internet, io utilizzo questo <a href="https://www.digikey.it/it/resources/conversion-calculators/conversion-calculator-voltage-divider" target="_blank" rel="noopener">calcolatore on line</a> di Digikey.

Se vuoi avere una tabella sottomano per calcolare i valori con le resistenze in commercio ti presento questa immagine tratta dall'eccellente sito di <a href="http://www.raffaeleilardo.it/parti.htm" target="_blank" rel="noopener">Raffaele Ilardo</a>. Con questa tabella mi trovo le resistenze R1 e R2 per la tensione di 9V.

<br>

<img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1600194577/001/parti3_x8s6or.png" alt="itabella partitore 9V" />

<br>
<br>