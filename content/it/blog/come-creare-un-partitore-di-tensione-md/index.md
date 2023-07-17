---
title: "Come creare un partitore di tensione"
description: "Come creare un partitore di tensione"
excerpt: "Leggere la temperatura con Arduino è un compito facile e utilissimo. Esiste in commercio a poco prezzo un varietà di sensori di temperatura con delle caratteristiche spesso molto diverse e applicazioni sorprendenti. Nel post vi vogliamo presentare quelli che abbiamo usato personalmente e usiamo tuttora nelle installazioni più facili e redditizie.."
date: 2020-11-04T09:19:42+01:00
lastmod: 2020-11-04T09:19:42+01:00
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

<style>
.x {
    transition:transform 0.50s ease;
}

.x:hover {
    -webkit-transform:scale(1.75); /* or some other value */
    transform:scale(1.75);
}
</style>


---
Usare due resistenze per abbassare la tensione al livello desiderato, un trucco che ogni appassionato di elettronica sa usare alla perfezione.


### La tensione dei componenti che usiamo con Arduino deve restare rigorosamento entro certi limiti, pena bruciare sensori o intere schede in pochi secondi. {#la-tensione-dei-componenti-che-usiamo-con-arduino-deve-restare-rigorosamento-entro-certi-limiti-pena-bruciare-sensori-o-intere-schede-in-pochi-secondi}

Se la corrente in linea di massima non è un problema perchè i componenti “assorbono” sempre solo quella che serve loro, la tensione eccessiva deve restare comunque sotto controllo (come spesso viene spiegato nel [forum di Arduino][1]).

Oggi ti mostro come ottenere facilmente la tensione che ti serve.

* * *

Ricordo che la **potenza in Watt si ottiene moltiplicando Ampere X Volt**, motivo per cui la potenza a volte viene chiamata Volt-Ampere.

Se guardi la immagine all’inizio del post vedrai che si tratta di usare banalmente due resistenze (R1 e R2) collegate in serie ai poli di una batteria e di due contatti posti “a cavallo” della resistenza R2. La tensione che sarà disponibile tra quei due punti non è però Vg come si potrebbe pensare, ma:

Vr2 = Vg * (R2 / R2+R1)

Il motivo è che la caduta di tensione viene “spalmata” tra le due resistenze in proporzione al loro valore. In pratica si fa cadere una tensione Vg sulle due resistenze e se ne preleva una parte (VR2) sulla sola R2.

Agendo sui valori di R1 ed R2 si può ottenere **teoricamente** una qualunque tensione VR2, comunque mai superiore a Vg.

### Il partitore di tensione nella pratica quotidiana: {#il-partitore-di-tensione-nella-pratica-quotidiana}

Moltissimi dispositivi digitali funzionano a 5V o 3.3V. Capita spesso di dovere convertire la tensione tra questi due livellii per collegare due circuiti (ad esempio un sensore all’Arduino). E seppure il partitore di tensione sia un concetto semplice, **quando dobbiamo usarlo all’inverso** e cioè trovare le resistenze per ottenere una certa tensione, nascono delle difficoltà:

**Come portare la tensione da un livello V-iniziale a V-finale senza ricorrere a formule e tabelle? Esiste un sistema facile? Esiste ed è piuttosto semplice: proverò a spiegartelo con degli esempi**.

**Es.1:** La tensione che ti serve è 1V ma hai a disposizione 10V. 10V sono dieci volte **(10X)** rispetto a 1V e perciò ti serve una R1 9 volte **(9X)** maggiore rispetto a R2.

**Es.2:** La tensione che ti serve è 3.3V e hai a disposizione solo i 9V di una normale pila quadra. 9V sono circa il triplo **(3X)** di 3.3V e perciò ti serve una resistenza R2 qualsiasi e una R1 di valore doppio **(2X)**.

**Es.3:** La tensione che ti serve è di 6V e hai a disposizione solo i 12V di una piccola batteria. 12V sono il doppio **(2X)** rispetto a 6V e perciò ti serve una resistenza R1 uguale **(1X)** a R2.

**Es.4:** La tensione che ti serve è 1.75V ma hai a disposizione solo 5V. 5V sono circa il triplo **(3X)** rispetto a 1.75V e perciò ti serve una R1 due volte **(2X)** volte maggiore di R2. Con le resistenze in commercio ad esempio potresti usare R1 = 3,3 kΩm e R2 = 1,8 kΩ per una tensione finale di 1.67V molto vicina ai 1.75V voluti.

Insomma, per farla breve:

> Se hai a disposizione una tensione (X) volte maggiore di quella che ti serve, prendi una resistenza a caso e poi trovane un’altra (X-1) volte maggiore della prima.

Perchè funziona? Perchè l’errore che commettiamo mentalmente sarà al massimo del 20% e ci sono resistenze in commercio con tolleranze peggiori! Questo in soldoni è il ragionamento banale che fanno tutti gli elettricisti; “al volo” e quasi senza pensarci. Dopo qualche volta che lo avrai usato verrà facile e istintivo anche a te. In ogni caso ricorda che ci sono molti simulatori in giro per Internet e sei hai il pc sottomano puoi usarli senza problemi. Io uso [questo][2] ma puoi trovarne tanti altri. Se vuoi avere una tabella sottomano per calcolare i valori con le resistenze in commercio ti presento questa immagine tratta dall&#8217; eccellente sito di [Raffaele ilardo][3]. Con questa tabella mi trovo le resistenze R1 e R2 per la (diffusissima) tensione di 9V.

<img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1600194577/001/parti3_x8s6or.png" alt="itabella partitore 9V" /> . Ti interessa questo articolo e vuoi scoprire a costo zero tutti i segreti della elettronica digitale?

 [1]: https://forum.arduino.cc/index.php?topic=36324.0
 [2]: https://web.archive.org/web/20201026072734/http://www.pcbooster.altervista.org/?artid=232
 [3]: http://www.raffaeleilardo.it/parti.htm
