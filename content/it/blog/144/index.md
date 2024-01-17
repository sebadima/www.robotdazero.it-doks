---
title: "Introduzione ai transistor"
description: "Introduzione ai transistor"
excerpt: "Un transistor è un componente elettronico a semiconduttore che può essere utilizzato per amplificare o interrompere un segnale elettrico. È composto da tre terminali, chiamati base, collettore ed emettitore...."
date: 2024-01-16T09:19:42+01:00
lastmod: 2024-01-16T09:19:42+01:00
draft: false
weight: 50
images: ["header.png"]
categories: ["News"]
tags: ["Elettronica", "Teoria"]
contributors: ["sebadima"]
pinned: false
homepage: false
mermaid: true
---



<!-- 
<a href="https://www.robotdazero.it/blog/in-arrivo-il-nuovo-esp32-p4/" target="_blank">ESP32-P4</a>
<a href="/contatti">contatti</a>
<img img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/101.png" alt="">
```bash
<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑.</div>
-->

<hr>
<br>


## Cos'è un transistor?

Il transistor è la base della elettronica moderna e costituisce la parte essenziale di ogni CPU, come delle memorie RAM e dei *controller* come l'ESP32. E' facile dimenticare come questi e altri dispositivi siano sono fatti, alla fine, solo di un numero variabile di transistor. La quantità di transitor in un dispositivo può andare da un singolo transistor che pilota un motorino elettrico fino a decine di milardi per conservare i "GIGA" delle chiavette USB.

##### Come mai il transistor è onnipresente nella moderna elettronica?

Il transistor è così importante perchè elettricamente si comporta come una resistenza "intelligente" che agevola o impedisce il passaggio della corrente tra due terminali. Ma rispetto alla modesta "resistenza" elettrica, il transistor possiede TRE elettrodi e non DUE... 


<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑
In due terminali (<strong>COLLETTORE</strong> e <strong>EMETTITORE</strong>) fluisce la corrente, mentre il terzo polo (<strong>BASE</strong>) ha il compito di regolarne il passaggio secondo la tensione che gli viene applicata.</div> 

<br>

Sfruttando questo principio funzionano, ad esempio le memorie RAM, dove gli stati **0** e **1** sono sono rappresentati da normali transistor bloccati (senza passaggio di corente) o attivi (cioè conducono corrente).

> <strong>I transitor e le "valvole"</strong>: se hai già una qualche conoscenza di elettronica avrai letto che il suo funzionamento di base è simile a quello delle antiche "valvole" termoioniche, ormai rintracciabili sono in alcuni amplificatori HI-FI per amatori.

<br>

Elettricamente, dunque funziona all'incirca come una valvola termoionica, ma la somiglianza finisce qui. Un transistor è un robusto componente elettronico a semiconduttore capace di gestire pichi di corrente notevolissimi, di interrompere il passaggio della corrente a velocità formidabili (I GigaHertz delle moderne CPU) e di avere una durata quasi "eterna". 

Il transistor dunque può anche essere utilizzato per interrompere un segnale elettrico. In questo caso, quando la tensione applicata alla base è inferiore a una certa soglia, la giunzione P-N è isolata e non consente il passaggio di corrente elettrica tra collettore ed emettitore.

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑
Il funzionamento del transistor si basa sulla giunzione P-N, una regione di un semiconduttore in cui si trovano a contatto due regioni con diversa conduttività elettrica. Una regione è di tipo p, con una conduttività elettrica elevata, mentre l'altra è di tipo n, con una conduttività elettrica bassa.</div>

<br>

Quando una tensione viene applicata alla base del transistor, si crea una corrente elettrica nella giunzione P-N. Questa corrente provoca un aumento della conduttività della giunzione, che consente il passaggio di una corrente elettrica maggiore tra collettore ed emettitore.


## Una breve storia dei transistor

L'esordio del transistor risale all'inizio del 20° secolo. Il primo transistor fu inventato nel 1947 da un team di scienziati dei Bell Laboratories negli Stati Uniti, che comprendeva William Shockley, John Bardeen e Walter Brattain. Questa invenzione fu una svolta monumentale nell'elettronica, segnando l'inizio dell'era dei semiconduttori.

Il transistor fu un'invenzione rivoluzionaria perché offriva un'alternativa più affidabile e compatta ai tubi a vuoto utilizzati nei dispositivi elettronici dell'epoca. I tubi a vuoto erano ingombranti, consumavano molta energia e avevano una durata limitata, mentre i transistor erano piccoli, richiedevano meno energia e avevano una durata molto più lunga, rendendoli ideali per l'uso in una vasta gamma di dispositivi elettronici.

### Evoluzione e transistor moderni

Dopo l'invenzione del transistor punto-contatto nel 1947, il campo dell'elettronica entrò in un periodo di rapida evoluzione e innovazione. Tuttavia, il transistor punto-contatto, mentre rivoluzionario, era difficile da produrre in modo affidabile e non era adatto per la produzione di massa. Questa richiesta spinse lo sviluppo del transistor di giunzione, un design più affidabile e più facile da produrre, nei primi anni 1950.

Il transistor di giunzione, un dispositivo a tre strati con uno strato sottile di un tipo di materiale semiconduttore inserito tra due strati più spessi dell'altro tipo, era più robusto e affidabile del transistor a contatto puntuale. Di conseguenza, divenne rapidamente lo standard per la progettazione di transistor.

Negli anni 1950 e 1960, il transistor ha subito un'ulteriore evoluzione con lo sviluppo del transistor a giunzione bipolare (BJT)e del transistor a effetto di campo (FET) 4. Mentre il BJT, operando su un principio diverso, è anche un dispositivo a tre strati, il FET è un dispositivo a quattro strati che controlla la larghezza di un "canale" attraverso il quale scorre la corrente.

Lo sviluppo di questi nuovi tipi di transistor ha aperto nuove possibilità per la progettazione elettronica. I transistor potrebbero ora essere utilizzati non solo per amplificare i segnali, ma anche per accenderli e spegnerli, rendendo possibile l'elettronica digitale. Questo avanzamento ha portato allo sviluppo di circuiti integrati, che sono collezioni di transistor e altri componenti su un singolo chip, nel 1958 Dal 1960, circuiti integrati sono stati utilizzati in una vasta gamma di dispositivi elettronici.

Nel 1970, è stato sviluppato il transistor a effetto di campo metallo-ossido-semiconduttore (MOSFET), che è diventato il tipo più comune di transistor in uso oggi, in quanto ha diversi vantaggi rispetto ai precedenti tipi di transistor. Ad esempio, è più facile da produrre, può essere reso molto piccolo e consuma pochissima energia.

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑Oggi i transistor sono onnipresenti nell'elettronica moderna e la loro evoluzione è tutt'altro che finita. Sono utilizzati in tutto, dai computer e smartphone alle auto e agli elettrodomestici, guidando la rivoluzione digitale e consentendo lo sviluppo di dispositivi elettronici sempre più potenti e complessi.</div>


### I diversi tipi di transistor in breve
Esistono diversi tipi di transistor, che si differenziano per la struttura e il funzionamento. I principali tipi di transistor sono:

- Transistor a giunzione bipolare (BJT): è il tipo di transistor più comune. È costituito da una giunzione P-N, e il suo funzionamento si basa sulla corrente elettrica che scorre attraverso questa giunzione.
- Transistor a giunzione di ioni mobili (IGBT): è un tipo di transistor che combina le caratteristiche dei BJT e dei FET. È caratterizzato da una bassa resistenza di ON, che lo rende adatto per applicazioni di potenza.
- Transistor a effetto di campo (FET): è un tipo di transistor in cui il flusso di corrente è controllato da un campo elettrico. 

I FET si suddividono a loro volta in due sotto categorie principali:
- FET a canale n (NMOS): il canale è di tipo n, e la corrente scorre dal drain verso il source.
- FET a canale p (PMOS): il canale è di tipo p, e la corrente scorre dal source verso il drain.


## Le Applicazioni dei transistor nel campo del digitale

I transistor sono fondamentali per la realizzazione di circuiti logici, circuiti di memoria e circuiti di calcolo, vediamo per sommi capi quali sono le maggiori applicazioni.

#### Circuiti logici

I circuiti logici sono utilizzati per eseguire operazioni logiche, come AND, OR, NOT, XOR e NAND. I transistor possono essere utilizzati per realizzare qualsiasi circuito logico, e sono la base di tutti i calcolatori digitali.

Ad esempio, un circuito logico AND può essere realizzato utilizzando due transistor in configurazione OR. Quando entrambi i transistor sono nello stato ON, la corrente scorre attraverso il circuito, e il circuito fornisce un output logico HIGH.

#### Circuiti di memoria

I circuiti di memoria sono utilizzati per memorizzare dati. I transistor possono essere utilizzati per realizzare diversi tipi di circuiti di memoria, come la memoria statica (SRAM), la memoria dinamica (DRAM) e la memoria flash.

La SRAM è un tipo di memoria volatile, che significa che i dati vengono persi quando viene tolta l'alimentazione. La DRAM è un altro tipo di memoria volatile, ma è più economica della SRAM. La memoria flash è un tipo di memoria non volatile, che significa che i dati vengono conservati anche quando viene tolta l'alimentazione.

##### Circuiti di calcolo

I circuiti di calcolo sono utilizzati per eseguire operazioni matematiche. I transistor possono essere utilizzati per realizzare diversi tipi di circuiti di calcolo, come i circuiti additivi, i circuiti sottrazionali e i circuiti moltiplicativi.

Ad esempio, un circuito additivo può essere realizzato utilizzando quattro transistor in configurazione OR. Quando le tensioni applicate ai quattro transistor sono entrambe HIGH, la corrente scorre attraverso il circuito, e il circuito fornisce un output logico HIGH.

I transistor sono quindi componenti essenziali per l'elettronica digitale, e sono utilizzati per realizzare una vasta gamma di circuiti digitali. Il loro sviluppo ha contribuito in modo determinante alla miniaturizzazione e alla diffusione dell'elettronica digitale.




## Principi di base dei transistor

I transistor funzionano in base ai principi della fisica dei semiconduttori. Al centro di questi principi c'è il concetto di portatori di carica, che possono essere elettroni o buchi (l'assenza di un elettrone). Il comportamento di questi portatori di carica nel materiale semiconduttore di un transistor consente di controllare e amplificare i segnali elettrici.

##### Tipicamente, un transistor è costituito da tre strati di materiale semiconduttore: 

- l'emettitore, 
- la base 
- il collettore. 


> L'emettitore e il collettore sono generalmente fortemente drogati, il che significa che hanno un'alta concentrazione di portatori di carica, mentre la base è leggermente drogata. L'emettitore e il collettore appartengono a un tipo di doping (tipo n o tipo p), mentre la base appartiene all'altro tipo.

La chiave per il funzionamento di un transistor è la giunzione base-emettitore, che funge da gate. Applicando una piccola corrente alla base, consente a una corrente molto più grande di fluire dall'emettitore al collettore. Questo è l'effetto di amplificazione di un transistor.


#### I Transistor bipolari in dettaglio

I transistor bipolari sono componenti elettronici a semiconduttore che possono essere utilizzati per amplificare o interrompere un segnale elettrico. Sono composti da tre terminali, chiamati base, collettore ed emettitore.

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑
Il funzionamento del transistor bipolare si basa sulla giunzione P-N, una regione di un semiconduttore in cui si trovano a contatto due regioni con diversa conduttività elettrica. Una regione è di tipo p, con una conduttività elettrica elevata, mentre l'altra è di tipo n, con una conduttività elettrica bassa.</div>

<br>

Il transistor bipolare può quindi essere utilizzato per amplificare un segnale elettrico. In questo caso, la corrente elettrica in uscita dal transistor è molto maggiore della corrente elettrica in ingresso.

Ma può anche essere utilizzato per interrompere un segnale elettrico. In questo caso, quando la tensione applicata alla base è inferiore a una certa soglia, la giunzione P-N è isolata e non consente il passaggio di corrente elettrica tra collettore ed emettitore.

Tipi di transistor bipolari

Esistono due tipi principali di transistor bipolari:

Transistor NPN: la base è di tipo p, mentre l'emettitore e il collettore sono di tipo n.
Transistor PNP: la base è di tipo n, mentre l'emettitore e il collettore sono di tipo p.
Il funzionamento dei transistor bipolari NPN e PNP è identico, ma la polarità delle tensioni applicate ai terminali è invertita.

Funzionamento dei transistor bipolari

Il funzionamento dei transistor bipolari può essere spiegato utilizzando un modello semplificato che considera le giunzioni p-n come diodi. In questo modello, la giunzione base-emettitore viene chiamata diodo base, mentre la giunzione base-collettore viene chiamata diodo collettore.

Il diodo base è polarizzato in avanti, quindi la corrente scorre dalla base all'emettitore. La corrente di base è molto piccola, ma è sufficiente per controllare la corrente del diodo collettore.

Quando la corrente di base è sufficientemente alta, il diodo collettore è polarizzato in avanti e la corrente scorre dal collettore all'emettitore. La corrente del collettore è molto maggiore della corrente di base, quindi il transistor bipolare funziona come un amplificatore.

Se la corrente di base è inferiore a una certa soglia, il diodo collettore è polarizzato in inverso e la corrente non scorre dal collettore all'emettitore. In questo caso, il transistor bipolare funziona come un interruttore.

Applicazioni dei transistor bipolari

I transistor bipolari sono utilizzati in una vasta gamma di applicazioni, tra cui:

Elettronica digitale: i transistor bipolari sono fondamentali per la realizzazione di circuiti logici, circuiti di memoria e circuiti di calcolo.
Elettronica analogica: i transistor bipolari vengono utilizzati per amplificare, filtrare e generare segnali analogici.
Elettronica di potenza: i transistor bipolari vengono utilizzati per controllare dispositivi ad alta potenza, come motori elettrici e trasformatori.
Vantaggi e svantaggi dei transistor bipolari

I transistor bipolari presentano una serie di vantaggi e svantaggi rispetto ad altri tipi di transistor, come i transistor a effetto di campo.

Vantaggi:

Ampio range di guadagno: i transistor bipolari possono fornire un guadagno molto elevato, rendendoli adatti per applicazioni di amplificazione.
Bassa impedenza di uscita: i transistor bipolari hanno una bassa impedenza di uscita, rendendoli adatti per applicazioni di commutazione.
Buona stabilità termica: i transistor bipolari sono relativamente stabili termicamente, rendendoli adatti per applicazioni in cui la temperatura può variare.
Svantaggi:

Consumo di corrente: i transistor bipolari consumano una corrente relativamente elevata, rendendoli meno efficienti dei transistor a effetto di campo.
Dimensioni: i transistor bipolari sono generalmente più grandi dei transistor a effetto di campo, rendendoli meno adatti per applicazioni in cui lo spazio è limitato.
In generale, i transistor bipolari sono una buona scelta per applicazioni che richiedono un alto guadagno, una bassa impedenza di uscita o una buona stabilità termica.


#### I Transistor a effetto di campo (FET) in dettaglio

I transistor a effetto di campo (FET) sono un tipo di transistor in cui il flusso di corrente è controllato da un campo elettrico. I FET si suddividono in due categorie principali:

FET a canale n (NMOS): il canale è di tipo n, e la corrente scorre dal drain verso il source.
FET a canale p (PMOS): il canale è di tipo p, e la corrente scorre dal source verso il drain.
Il funzionamento di un FET è basato sulla presenza di una regione di semiconduttore drogata, chiamata canale, che è circondata da due regioni drogate con tipo di conducibilità opposto. La tensione applicata al terminale di controllo, chiamato gate, crea un campo elettrico che modifica la conduttività del canale.

Quando la tensione applicata al gate è sufficientemente alta, il campo elettrico è in grado di creare un canale di conducibilità nella regione di semiconduttore drogata. Questo canale consente il passaggio di corrente elettrica tra i terminali drain e source.

La corrente che scorre tra i terminali drain e source dipende dalla tensione applicata al gate. Maggiore è la tensione applicata al gate, maggiore è la corrente che scorre tra i due terminali.

I FET presentano una serie di vantaggi rispetto ai transistor bipolari, tra cui:

Elevata impedenza di ingresso: l'impedenza di ingresso di un FET è molto elevata, il che significa che il transistor richiede una piccola quantità di corrente per essere controllato. Questo lo rende ideale per applicazioni in cui è necessario ridurre il consumo energetico.
Alta efficienza: i FET sono più efficienti dei transistor bipolari, in quanto convertono più energia elettrica in corrente elettrica. Questo li rende ideali per applicazioni in cui è necessario ridurre le perdite di potenza.
Alta velocità di commutazione: i FET possono essere commutati molto rapidamente, il che li rende ideali per applicazioni in cui è necessario generare segnali ad alta frequenza.
I FET sono utilizzati in una vasta gamma di applicazioni, tra cui:

Elettronica digitale: i FET vengono utilizzati per realizzare circuiti logici, circuiti di memoria e circuiti di calcolo.
Elettronica analogica: i FET vengono utilizzati per amplificare, filtrare e generare segnali analogici.
Elettronica di potenza: i FET vengono utilizzati per controllare dispositivi ad alta potenza, come motori elettrici e trasformatori.
I FET sono componenti elettronici fondamentali per l'elettronica moderna. Sono presenti in tutti i dispositivi elettronici, e il loro sviluppo ha contribuito in modo determinante alla miniaturizzazione e alla diffusione dell'elettronica.

Tipi di FET

I FET si suddividono in due categorie principali, a seconda del tipo di canale:

FET a canale n: il canale è di tipo n, e la corrente scorre dal drain verso il source.
FET a canale p: il canale è di tipo p, e la corrente scorre dal source verso il drain.
I FET a canale n sono più comuni dei FET a canale p. Questo perché i semiconduttori di tipo n sono più facili da realizzare e hanno una conduttività elettrica maggiore.

Configurazioni di polarizzazione

I FET possono essere polarizzati in due configurazioni principali:

Configurazione di saturazione: in questa configurazione, la tensione applicata al gate è sufficientemente alta da creare un canale di conducibilità completamente aperto. In questo modo, la corrente che scorre tra i terminali drain e source è massima.
Configurazione di triodo: in questa configurazione, la tensione applicata al gate è inferiore alla tensione di saturazione. In questo modo, il canale di conducibilità è parzialmente aperto. La corrente che scorre tra i terminali drain e source dipende dalla tensione applicata al gate.
Aplicazioni

I FET sono utilizzati in una vasta gamma di applicazioni, tra cui:

Elettronica digitale: i FET vengono utilizzati per realizzare circuiti logici, circuiti di memoria e circuiti di calcolo.
Elettronica analogica: i FET vengono utilizzati per amplificare, filtrare e generare segnali analogici.
Elettronica di potenza: i FET vengono utilizzati per controllare dispositivi ad alta potenza, come motori elettrici e trasformatori.
I FET sono componenti elettronici fondamentali per l'elettronica moderna. Sono presenti in tutti i dispositivi elettronici, e il loro sviluppo ha contribuito in modo determinante alla miniaturizzazione e alla diffusione dell'elettronica.



<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it -  post - R.144.1.0.0</p> 