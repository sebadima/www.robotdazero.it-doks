---
title: "Come collegare un LED esterno ad Arduino"
description: "Come collegare un LED esterno ad Arduino"
excerpt: "Una guida dettagliata su come collegare LED e altri dispositivi passivi al tuo Arduino Uno e sui semplicissimi circuiti che dovresti conoscere per partire con il piede giusto.In particolare vedremo come gestire le operazioni di input e output con le porte digitali di Arduino..."
date: 2023-11-11T09:19:42+01:00
lastmod: 2023-11-11T09:19:42+01:00
draft: false
weight: 50
images: ["header.webp"]
categories: ["News"]
tags: ["LED", "Arduino", "Progetti"]
contributors: ["sebadima"]
pinned: false
homepage: false
mermaid: true
---



<hr>

## Una guida rapida su come collegare un LED al tuo Arduino Uno

In questo progetto useremo una breadboard per assemblare tutti componenti:

<img img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/102.jpg" alt="breadnoard per montaggi arduino">

#### Abbiamo già parlato delle breadboard, per non rileggere il post ti ricordo brevemente le cose principali:

Le Breadboard sono composte da 4 linee di rame longitudinali e da numerosi conduttori disposti di traverso, tipo spina di pesce. Nella immagine precedente con la freccia rossa sono evidenziati i fili longitudinali che corrono sul fondo della scheda. Non sono visibili perchè ricoperti da un foglio di cartoncino. 

La idea di base di queste schede è di usare le linee longitudinali per distribuire la corrente (polo positivo e negativo della batteria o accumulatore), mentre i conduttori trasversali sostituiscono le saldature dei componenti.

L’altra estremità delle resistenza è connessa alla quinta riga partendo dall’ alto. La resistenza risulta così collegata al connettore del LED. Allo stesso modo il connettore inferiore del LED è connesso ad una estrermità del filo nero e il filo nero arriva fino a un foro della lunga colonna verticale. Le colonne si estendono per tutta la lunghezza della basetta e conducono la corrente di alimentazione.

> In questo modo uno qualsiasi dei componenti collegati alle colonne sarà connesso al filo nero e possiamo assemblare tutto senza saldature.

### Qualche cenno sulle resistenze

Le resistenze si oppongono al flusso della corrente e non hanno un verso particolare; detto in termine tecnico non hanno una polarità. Il loro valore viene determinato dal produttore e indicato attraverso delle minuscole fascette colorate (in genere 4) sul corpo della resistenza..

### Come collegare un LED

In generale i LED (Light Emitting Diodes) sono componenti molto più complessi delle resistenze, lasciano passare la corrente in una sola direzione e perciò hanno un **polo positivo** e un **polo negativo**. Il connettore più lungo è quello positivo e viene chiamato **anodo**, mentre quello più corto si chiama **catodo** ed è il polo negativo. Il lato del catodo viene sempre evidenziato con una una tacca “piatta” sul minuscolo contenitore di plastica.

## Assembliamo Arduino, LED e resistenza

<img decoding="async" src="images/101.jpg" alt="" /> 

### Lo schema teorico 

Il circuito è semplicissimo: usa una sola resistenza da mettere in serie al LED per limitare la corrente assorbita.

Iniziamo a collegare la resistenza al **pin 13**: la resistenza deve essere di **220**Ω. Le resistenze hanno 4 striscette e piazzando la resistenza in modo da avere la striscia oro a destra dovresti vedere questi colori:rosso, rosso, marrone, oro.

Collega la resistenza all’ anodo, cioè il connettore più lungo del LED e quindi collega il terminale più corto del LED alla “massa” (**0V**) del circuito.

> Il polo positivo di un LED si chiama anodo(+), quello negativo catodo(-). L’ anodo(+) è sempre più lungo del catodo!

Per collegare il LED alla massa usa un filo nero. **In genere per collegare un componente alla massa si usa un filo nero**. E&#8217; solo una convenzione, i fili sono internamente tutti uguali.

### Le connessioni elettriche

Prendi il filo giallo e collegalo direttamente al pin 5V di Arduino. Per il momento limitiamoci ai collegamenti. Il LED si dovrebbe accendere all’istante: se non si accende il circuito è stato cablato in modo errato. **Ricontrolla e se necessario riassembla tutto da zero**. Se invece il LED si accende prendi il filo giallo e ricollegalo al pin 13. Adesso puoi fare l’ upload del programma!

## Il programma:

```bash     
// Copyright (c) robotdazero.it
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

int led = 13;
int buttonPin = 2;
     
int val = 0;
int riferimento = 0;
int state = LOW;
     
void setup(){ 
   pinMode(led, OUTPUT);
   pinMode(buttonPin, INPUT);
}
            
void loop(){ 
   val = digitalRead(buttonPin); 
   if  ((val == 1) && (riferimento == 0)){ 
      if (state == LOW) {
          state = HIGH;
      } 
      else {
          state = LOW;
      }
   } 
        
   riferimento = val;
             
   if (state == LOW){
      digitalWrite(led, HIGH);
   } 
   else {
      digitalWrite(led, LOW);
   }
     
   delay(10);
}
```

Vediamo tutto in modo analitico riga per riga:

```bash     
 led int = 13 ;
```

Qui stiamo dichiarando una variabile chiamata**led**che contiene il numero 13. Nel linguaggio di Arduino bisogna specificare sempre il tipo di variabile: ne esistono di tipo**int**o di tipo**float**, così chiamate dall inglese**floating**, “fluttuante” per indicare i**numeri a virgola mobile**. In linea di massima per i programmi piu semplico useremo solo degli int, e in questo programma particolare quando Arduino legge la variabile **led** la converte immediatamente nel valore 13.

setup() è un pezzo molto particolare di codice che viene eseguito solo all’inizio del programma: serve allla scheda Arduino per sapere cosa fare quando viene avviata o viene premuto il tasto di reset. A livello di programmazione non è altro che una funzione, cioè un pezzo di codice isolato con delle parentesi graffe**{}**. Come per le variabili a volte puo essere utile specificare il tipo. Alcune funzioni ritornano dei valori di tipo float, altre degli int e altre ancora non ritornano alcun valore e sono dette di tipo **void**.

```bash     
 pinMode(led, OUTPUT);
```    
Guardando la scheda Arduino dall’alto puoi vedere che ci sono due file di fori alle estremità laterali; i fori prendono un nome particolare e sono chiamati**pin**. I pin che vanno da 0 a 13 sono dei pin digitali e possono funzionare sia in modalità **INPUT** che in **OUTPUT**. Noi useremo il **pin 13** come output per accendere il LED.

Dopo la funzione setup() inizia una altra funzione:

> La funzione loop, come indica il nome, esegue continuamente le stesse istruzioni e si può considerare la parte principale del codice e in genere la piu complessa.

```bash     
 digitalWrite(led, HIGH);
```    

- digitalWrite() accende in **OUTPUT** uno dei pin. Il primo valore dopo la parentesi è il pin che deve essere acceso, mentre il secondo indica il segnale da inviare. In gergo si dice mettere in **HIGH** o in **LOW**. Parlando di corrente quando il pin 13 viene messo in ON inizia a condurre una tensione di 5 V.

```bash     
 delay(1000);
```

- delay() serve solo a fare una pausa di x millisecondi e quindi complessivamente Arduino si_ferma_per una secondo.
    

```bash         
 digitalWrite(led, LOW);    
 ```

- digitalWrite(led, LOW) mette in **LOW** cioè a **0 V** il pin 13 e quindi spegne il LED.

```bash         
    delay(1000);    
```

E&#8217; lo stesso ritardo di prima di 1000 millisecondi e lascerà in pin in **OFF** per un secondo.


### Come compilare il programma

Per caricare il programma su Arduino vai su "File/Nuovo", incolla il programma copiato dal post, vai su "File/Salva con nome" e scrivi “led10”. Quindi vai su "Sketch", "Compila/Upload" e aspetta che l’IDE di Arduino finisca il suo lavoro.

#### Un esperimento finale

Avendo testato l’ hardware a parte e copiato il programma, a questo punto tutto dovrebbe essere pronto. Se vuoi provare delle modifiche, prova a cambiare la resistenza di **220** Ω con una da **2.2 KΩ** e cioè con 4 strisce: rosso, rosso, rosso, oro. Dopo la modifica dai una occhiata al LED!

<br>
 <p style="font-size: 0.8em;">R.126.1.0.8</p>
