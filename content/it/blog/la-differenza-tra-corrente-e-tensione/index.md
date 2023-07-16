---
title: La differenza tra corrente e tensione
description: "La differenza tra corrente e tensione"
excerpt: "La differenza tra corrente e tensione spesso riesce a far naufragare la passione di tanti neo appassionati di elettronica. Anche dei calcoli semplicissimi sulla resistenza da collegare ad un Led appaiono misteriosi se non si hanno chiari questi due concetti..."
date: 2023-05-15T09:19:42+01:00
lastmod: 2023-05-15T09:19:42+01:00
draft: false
weight: 50
images: ["header.png"]
categories: ["News"]
tags: ["rover", "performance", "SEO"]
contributors: ["sergio rame "]
pinned: false
homepage: false
---
La differenza tra corrente e tensione spesso riesce a far naufragare la passione di tanti neo appassionati di [elettronica][1]. Anche dei calcoli semplicissimi sulla resistenza da collegare ad un Led appaiono misteriosi se non si hanno chiari questi due concetti.

> La tensione è la differenza di “potenziale” tra due punti e la corrente è il numero di cariche elettriche che scorrono tra i due punti in un secondo.

In due parole abbiamo descritto un fenomeno molto semplice: ma, nonostante la apparente semplicità, questi concetti riescono sempre a creare confusione tra i neofiti. Sfortunatamente non possiamo far finta di nulla e passare ad altro perchè stiamo parlando delle “dimensioni base” della Elettronica e con la **resistenza** ne formano la legge fondamentale: la [legge di Ohm][2]. Avrai sempre a che fare con tensione e corrente e lo testimonia il fatto che sul _case_ dei componenti ne vengano riportati i valori specifici espressi in **Volt**, abbreviato con una **V** e in **Ampere**, abbreviato con una **A**.

Se la Corrente sembra un concetto intuitivo legato a **quanti** **elettroni passano in un circuito**, la idea di **tensione** sembra un poco più evasiva e per questo proviamo un poco ad approfondirla.

## Cosa è davvero la Tensione

> La tensione è la Forza che spinge gli elettroni carichi attraverso un circuito elettrico e permette loro di svolgere un **Lavoro** come accendere una luce o far girare un motorino. Con una bassa tensione nulla di tutto questo può funzionare.

## La differenza tra corrente e tensione: proviamo a capire meglio con con degli esempi pratici {#proviamo-a-capire-meglio-con-con-degli-esempi-pratici}

Per capire la differenza tra le due [grandezze][6] voglio usare un approccio “facile” al problema e aiutarmi con una similitudine, **quella tra carica elettrica e acqua**: un paragone sicuramente **forzato** ma che ha aiutato tante persone ad avvicinarsi alla Elettronica (me compreso).

Immagina di avere 2 serbatoi di acqua a differenti altezze e collegati da un tubo. Per la differenza di altezza ogni volta che apri il tubo l’acqua scenderà dal serbatoio posto più in alto a quello posto più in basso. OK?

<img decoding="async" loading="lazy" class="aligncenter" src="https://res.cloudinary.com/sebadima/image/upload/c_scale,h_394,q_80,w_300/v1579111568/001/1200px-Lappo.svg_shqwq4.png" alt="la differenza tra corrente e tensione - esempio 1" width="300" height="394" /> 

Se i serbatoi fossero alla stessa altezza l’acqua non si muoverebbe e non avremmo **nessuna corrente idrica.** Bene. Adesso facciamo finta che al posto dell’acqua ci siano delle **cariche elettriche** e che al posto del tubo ci sia un **filo di rame**.

E ancora che invece di differenti altezze ci sia una differenza di potenziale elettrico, cioè molti **elettroni concentrati in solo contenitore**.

Maggiore è la differenza di carica elettrica tra i due contenitori e maggiore sarà il **potenziale** capace di farle muovere. Gli elettroni si sposteranno dalla zone a carica più alta a quella a carica più bassa fino a quando i due serbatoi saranno a **potenziale zero** cioè avranno la stessa densità di carica. **La velocità con cui si sposteranno misura la tensione**.

## La definizione “accademica” di cosa significano tensione e corrente {#la-definizione-accademica-di-cosa-significano-tensione-e-corrente}

Abbiamo capito più o meno cosa è la tensione, ma come viene definita esattamente in ambito scientifico? In questo modo:

> La tensione è il LAVORO che bisogna fornire per spostare una singola carica elettrica (un elettrone) all&#8217; interno di in un campo elettrico.

<img decoding="async" loading="lazy" class="aligncenter" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Electrostatic_induction.svg/440px-Electrostatic_induction.svg.png" alt="la differenza tra corrente e tensione - esempio 1 " width="440" height="302" /> 

Nel primo caso non **sentiresti** nessuno sforzo nello spostare l’elettrone in un punto qualsiasi e con una traiettoria qualsiasi, ma nella seconda figura **sentiresti** l’effetto delle cariche elettriche (in rosso quelle positive, in blu quelle negative) che lo attirano o respingono. Per continuare su una specifica traiettoria, mettiamo rettilinea, dovresti esercitare una certa **forza** per compensare l’attrazione e la repulsione delle cariche vicine.

> Si deve applicare una certa forza su una distanza X e cioè fare un **lavoro** per mantenere la traiettoria. La quantità di lavoro impiegata “misura” la tensione.

## Capire gradualmente la differenza tra tensione e corrente {#capire-gradualmente-la-differenza-tra--tensione-e-corrente}

**Non ti preoccupare di capire subito** le sottigliezze che distinguono corrente e tensione: sono come le regole della grammatica italiana: tutti noi le applichiamo senza ragionarci sopra, perchè con la pratica ci sono diventate naturali. Ti accadrà lo stesso con la Elettronica, se insisterai con Robotdazero e non vorrai capire tutto immediatamente!

> Ricordati che il 99 per cento degli elettricisti riesce a fare il proprio lavoro senza sapere cosa sia un “campo elettrico”!

Pensa a due **serbatoi di con gas ad alta pressione**, uno a 100 atmosfere e al’altro a 60 atmosfere. Cosa succederebbe se collegassimo i 2 serbatoi con un tubo di acciaio e un rubinetto? Accadrebbe che il gas ad alta pressione inizierebbe a muoversi verso il serbatoio a pressione più bassa fino a colmare la differenza (diciamo 80 e 80 atmosfere).

> La tensione è la differenza di potenziale tra due ZONE distinte, dovute a un accumulo di cariche elettriche. La corrente è il movimento di cariche che cerca di riequilibrare il sistema.

E per finire: La Elettronica moderna si basa molto sulla tensione piuttosto che sul flusso di corrente. Il motivo? **Per misurare la tensione basta appoggiare i puntali di un tester nei 2 punti da controllare**. Per misurare la corrente devi invece inserirti nel flusso degli elettroni e perciò scollegare i fili o addirittura tagliare le piste del circuito.

 [1]: https://www.robotdazero.it/standard/elettronica/
 [2]: https://it.wikipedia.org/wiki/Legge_di_Ohm
 [3]: https://www.robotdazero.it/blog/la-guida-definitiva-per-scegliere-il-tuo-arduino/
 [4]: https://www.robotdazero.it/blog/come-leggere-la-temperatura-ambientale-con-arduino/
 [5]: https://www.robotdazero.it/blog/pilotare-un-motore-elettrico-con-arduino/
 [6]: https://it.wikipedia.org/wiki/Grandezza_fisica
