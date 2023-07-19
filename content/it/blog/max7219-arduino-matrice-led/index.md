---
title: Max7219 e Arduino per costruire una Matrice a LED
description: "Max7219 e Arduino per costruire una Matrice a LED"
excerpt: "In questo post scoprirai come costruire una matrice a LED con max7219 Arduino. Questa è forse la più scenografica delle applicazioni con Arduino, facile da realizzare a livello hardware ma utile per conoscere i “driver” delle Matrici a LED..."
date: 2023-05-15T09:19:42+01:00
lastmod: 2023-05-15T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["LED", "MAX7219", "progetti", "Arduino"]
contributors: ["sergio rame "]
pinned: false
homepage: false
---
* * *

_In questo post scoprirai come costruire una matrice a LED con max7219 Arduino. Questa è forse la più scenografica delle applicazioni con Arduino, facile da realizzare a livello hardware ma utile per conoscere i “driver” delle Matrici a LED._

## **1 &#8211; Il chip “MAX7219”** {#il-chip-max7219}

Parliamo innanzitutto del “driver” MAX7219. Il chip è in grado di pilotare 64 LED individuali utilizzando solo 3 fili per il link con Arduino, e per di più lo possiamo collegare in configurazione “sequenziale” con altri driver usando sempre gli stessi 3 fili!

<img decoding="async" class="aligncenter" src="https://res.cloudinary.com/sebadima/image/upload/v1603627142/001/101_pdrngj.png" alt="Driver matrice LED MAX7219 8x8" /> 

**I 64 LED sono pilotati tutti dai 16 pin di uscita dell’IC**. Come è possibile? Ebbene, il numero massimo di LED che si accendono contemporaneamente è in realtà otto. I LED sono disposti come un insieme di righe e colonne 8 × 8. Il drive MAX7219 si attiva per ogni colonna solo per un periodo di tempo molto breve e allo stesso tempo accende in sequenza tutte le righe. Grazie all’effetto di permanenza delle luce sulla retina, i nostri occhi noteranno solamente una luce **continua**.

<img decoding="async" loading="lazy" class="aligncenter" src="https://res.cloudinary.com/sebadima/image/upload/v1603627621/001/103_tmfcuq.jpg" alt="Resistenza del regolatore di corrente MAX7219" width="444" height="376" /> La tabella seguente è presa pari pari dal datasheet della casa madre e mostra il valore della resistenza che dovremmo usare in base alla caduta di tensione diretta dei nostri LED.

<img decoding="async" class="aligncenter" src="https://res.cloudinary.com/sebadima/image/upload/v1603628639/001/106_xos9gj.png" alt="Tabella della corrente del segmento MAX7219 rispetto alla caduta di tensione diretta dal datasheet" /> 

## **2 &#8211; Schema del circuito** {#schema-del-circuito}

Adesso colleghiamo il modulo Matrice LED 8×8 alla nostra scheda Arduino. Ecco lo schema del circuito:

<img decoding="async" loading="lazy" class="alignnone" src="https://res.cloudinary.com/sebadima/image/upload/v1603627879/001/105_aubkty.png" alt="Schema del circuito che spiega come come costruire una Matrice a LED con Arduino" width="700" height="538" /> 

Il **VCC** e **GND** del modulo vanno ai pin **5V** e **GND** di Arduino e gli altri tre pin, **DIN**, **CLK** e **CS** vanno a un qualsiasi pin digitale della scheda Arduino. Se vogliamo collegare più di un modulo, colleghiamo semplicemente i pin di uscita della precedente scheda pin di ingresso del nuovo modulo. In realtà questi pin sono tutti uguali tranne che il pin **DOUT** della scheda precedente va a finire nel pin **DIN** della nuova scheda. Ti ricordo che puoi ottenere i componenti necessari per questo tutorial dai link sottostanti:

  * Modulo a matrice di punti 8 × 8 LED MAX7219 &#8211; [**Amazon**][1]
  * Modulo Bluetooth HC-05 &#8211; [**Amazon**][2]
  * Una Breadboard e Jump Wires &#8211; [**Amazon**][3]
  * Una [**Scheda**][4] Arduino &#8211; [**Amazon**][5]

## 3 &#8211; Il programma base per il MAX7219 + Arduino {#il-programma-base-per-il-max7219--arduino}

<script src="https://gist.github.com/sebadima/c07ac86450b616ea8cd51e405d68f725.js"></script>


Una volta collegati i moduli siamo pronti per caricare il codice Arduino del primo esempio. Useremo la libreria MaxMatrix **specifica per il MAX7219** che può essere scaricata da [GitHub][6]. Non hai bisogno di fare copia e incolla del programma, ti basta andare alla fine del listato e cliccare su una delle 2 icone sottostanti.

Nella **sezione setup** inizializziamo il modulo a LED impostimo la luminosità. Nella **sezione loop** utilizzamo la funzione **setDot()** con cui possiamo impostare qualsiasi singolo LED in modo che si accenda alla posizione desiderata. Quindi usiamo la funzione **clear()** per cancellare il display.

<img decoding="async" class="aligncenter" src="https://res.cloudinary.com/sebadima/image/upload/v1603636402/001/8x8-LED-Matrix-Smile-Character_trsssz.jpg" alt="display con lettera G" /> 

Per visualizzare i caratteri predefiniti usiamo la **funzione writeSprite()**: i primi due argomenti sono la posizione X e Y dell’angolo superiore sinistro del carattere. A fine sorgente usiamo la funzione **shiftLeft()** per spostare il carattere verso sinistra.

## 4 &#8211; Il secondo programma di esempio {#il-secondo-programma-di-esempio-con-lo-con-scroll-del-testo-sulla-matrice-luminosa}

<script src="https://gist.github.com/sebadima/e35432649835d2dfe340ea40fe298213.js"></script>

Adesso diamo un’occhiata al programma con il testo scorrevole e vediamo cosa c’è di diverso. Sotto il codice troverai il mio commento su **alcuni punti qualificanti** del sorgente.

## 5 &#8211; Un breve commento sul secondo programma: {#descrizione}

All’inizio dobbiamo fare l&#8217;**include** di una libreria aggiuntiva per poter usare **PROGMEN**, che è un modificatore di variabili. Ci serve per salvare i dati nella **memoria flash** invece che nella **SRAM**: quando abbiamo un **gruppo sostanzioso di variabili statiche**, come in questo caso è meglio memorizzarle nella più capiente memoria flash. La memoria flash infatti ha **32K byte**, sedici volte la capacità della SRAM (**2K byte**).

<img decoding="async" loading="lazy" class="aligncenter" src="https://res.cloudinary.com/sebadima/image/upload/v1603636457/001/8x8-LED-Matrix-Scrolling-Text-Arduino-Code_ka1nwv.jpg" alt="8x8 LED Matrix Scrolling Text Codice Arduino" width="550" height="348" /> 

Successivamente con un **array di caratteri** definiamo il testo scorrevole e nella sezione **loop()** definiamo la funzione custom **printStringWithShift()**, che stampa il testo scorrevole sulla matrice LED con una velocità di scorrimento variabile. Puoi cambiare la velocità modificando il secondo argomento, ma ti consiglio di **fare esperimenti solo dopo che tutto funzioni** secondo il progetto. Altrimenti non capirai se hai sbagliate le modifiche o la costruzione in se stessa.

> La funzione printStringWithShift() estrae i caratteri dalla stringa e li visualizza con effetto scroll sulla matrice a LED. La puoi considerare il “nucleo” del programma.

Ancora una volta mi preme evidenziare come le difficoltà nel realizzare circuiti complessi come questo siano legate al software, piuttosto che all’hardware. I chip di ultima generazione **riducono moltissimo la complessità del progetto**. Con le tante funzioni automatiche dei nuovi chip puoi facilmente apprendere come costruire una Matrice a LED con Arduino.

 [1]: https://amzn.to/3mnWmOS
 [2]: https://amzn.to/2J5sCZ1
 [3]: https://amzn.to/31ELJ2z
 [4]: https://www.robotdazero.it/blog/009-la-guida-definitiva-per-scegliere-il-tuo-arduino/
 [5]: https://amzn.to/3mQiuT7
 [6]: https://github.com/riyas-org/max7219
