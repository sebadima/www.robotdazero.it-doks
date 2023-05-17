---
title: "Come collegare un LED esterno ad Arduino"
description: "Come collegare un LED esterno ad Arduino"
excerpt: "..."
date: 2023-05-04T09:19:42+01:00
lastmod: 2023-05-04T09:19:42+01:00
draft: false
weight: 50
images: ["00.webp"]
categories: ["News"]
tags: ["rover", "performance", "SEO"]
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

</br>


Una guida dettagliata su come collegare LED e altri dispositivi passivi al tuo Arduino Uno e sui semplicissimi circuiti che dovresti conoscere per partire con il piede giusto.In particolare vedremo come gestire le operazioni di input e output con le porte digitali di Arduino.

<p id="se-hai-già-tutti-i-componenti-procedi-alla-sezione-successiva-altrimenti-acquistali-su-amazon-o-su-un-altro-sito-e-continua-successivamente-non-avere-troppa-fretta-di-iniziare--">
  Se hai già tutti i componenti procedi alla sezione successiva, altrimenti acquistali su Amazon o su un altro sito e continua successivamente.
</p>

Scopriamo come usare le Breadboard per assemblare i componenti

<img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1600666958/001/Breadboard_20inside_favhrb.jpg" alt="" /> 

Abbiamo già parlato della [Breadboard][1] e per non rileggere il post ti ricordo brevemente le cose principali:

Le Breadboard sono composte da 4 linee di rame longitudinali e da numerosi conduttori disposti di traverso, tipo _spina di pesce_. Nella immagine precedente **con la freccia rossa sono evidenziati i fili longitudinali che corrono sul fondo della scheda**. Non sono visibili perchè ricoperti da un foglio di cartoncino. La idea di base di queste schede è di usare le linee longitudinali per distribuire la corrente (polo positivo e negativo della batteria o accumulatore), mentre i conduttori trasversali sostituiscono le saldature dei componenti.

L’altra estremità delle resistenza è connessa alla quinta riga partendo dall’alto. **La resistenza risulta così collegata al connettore del LED**. Allo stesso modo il connettore inferiore del LED è connesso ad una estrermità del filo nero e il filo nero arriva fino a un foro della lunga colonna verticale. **Le colonne si estendono per tutta la lunghezza della basetta e conducono la corrente di alimentazione**.

In questo modo uno qualsiasi dei componenti collegati alle colonne sarà connesso al filo nero. In questo modo si possono fare infiniti circuiti. E possiamo assemblare tutto senza fare saldature.

### **Qualche cenno sulle resistenze**

Le resistenze si oppongono al flusso della corrente e non hanno un verso particolare; **detto in termine tecnico non hanno una polarità**. Il loro valore viene determinato dal produttore e indicato attraverso delle minuscole fascette colorate (in genere 4) sul corpo della resistenza. [Qui][2] una tabella che permette di calcolare il valore.

### **Come collegare un LED**

In generale i LED (Light Emitting Diodes) sono componenti molto piu complessi delle resistenze, lasciano passare la corrente in una sola direzione e perciò hanno un **polo positivo** e un **polo negativo**. Il connettore più lungo è quello positivo e viene chiamato **anodo**, mentre quello più corto si chiama **catodo** ed è il polo negativo. Il lato del catodo viene sempre evidenziato con una una tacca “piatta” sul minuscolo contenitore di plastica.

### Assembliamo Arduino, LED e resistenza! {#assembliamo-arduino-led-e-resistenza}

<img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1601127034/001/LED_schem_oz44jt.jpg" alt="" /> 

### Qui sopra lo schema teorico disegnato con Fritzing. {#qui-sopra-lo-schema-teorico-disegnato-con-fritzing}

Il circuito è semplicissimo: usa una sola resistenza da mettere in serie al LED per limitare la corrente assorbita.

Iniziamo a collegare la resistenza al **pin 13**: la resistenza deve essere di **220** Ω. Le resistenze hanno 4 striscette e piazzando la resistenza in modo da avere la striscia oro a destra dovresti vedere questi colori: **rosso, rosso, marrone, oro**.

Collega la resistenza all’anodo, cioè il connettore più lungo del LED e quindi collega il terminale più corto del LED alla “massa” (**0V**) del circuito.

> Il polo positivo di un LED si chiama anodo(+), quello negativo catodo(-). L’anodo(+) è sempre più lungo del catodo!

Per collegare il LED alla massa usa un filo nero. **In genere per collegare un componente alla massa si usa un filo nero**. E&#8217; solo una convenzione, i fili sono internamente tutti uguali.

**Per controllare le connessioni elettriche procedi in questo modo**: Prendi il filo giallo e collegalo direttamente al pin 5V di Arduino. In questo modo diamo corrente al LED _bypassando_ la parte software del progetto. Per il momento limitiamoci ai collegamenti. Il LED si dovrebbe accendere all’istante: se non si accende il circuito è stato cablato in modo errato. **Ricontrolla e se necessario riassembla tutto da zero**. Se invece il LED si accende prendi il filo giallo e ricollegalo al pin 13. Adesso puoi fare l’upload del programma!

### Adesso che la parte hardware del progetto funziona, vediamo il software {#adesso-che-la-parte-hardware-del-progetto-funziona-vediamo-il-software}

Il programma da caricare su Arduino:

     
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
    

Vediamo tutto in modo analitico riga per riga:

     led int = 13 ;
    

Qui stiamo dichiarando una variabile chiamata **led** che contiene il numero 13. Nel linguaggio di Arduino bisogna specificare sempre il tipo di variabile: ne esistono di tipo **int** o di tipo **float**, così chiamate dall inglese **floating**, “fluttuante” per indicare i **numeri a virgola mobile**. In linea di massima per i programmi piu semplico useremo solo degli int, e in questo programma particolare quando Arduino legge la variabile **led** la converte immediatamente nel valore 13.

**setup**() è un pezzo molto particolare di codice che viene eseguito solo all’inizio del programma: serve allla scheda Arduino per sapere cosa fare quando viene avviata o viene premuto il tasto di reset. A livello di programmazione non è altro che una funzione, cioè un pezzo di codice isolato con delle parentesi graffe **{}**. Come per le variabili a volte puo essere utile specificare il tipo. Alcune funzioni ritornano dei valori di tipo float, altre degli int e altre ancora non ritornano alcun valore e sono dette di tipo **void**.

    pinMode(led, OUTPUT);
    

Guardando la scheda Arduino dall’alto puoi vedere che ci sono due file di fori alle estremità laterali; i fori prendono un nome particolare e sono chiamati **pin**. I pin che vanno da 0 a 13 sono dei pin digitali e possono funzionare sia in modalità **INPUT** che in **OUTPUT**. Noi useremo il **pin 13** come output per accendere il LED.

Dopo la funzione setup() inizia una altra funzione:

La funzione loop, come indica il nome, esegue continuamente le stesse istruzioni e si può considerare la parte principale del codice e in genere la piu complessa.

    digitalWrite(led, HIGH);
    

_digitalWrite()_ accende in **OUTPUT** uno dei pin. Il primo valore dopo la parentesi è il pin che deve essere acceso, mentre il secondo indica il segnale da inviare. In gergo si dice mettere in **HIGH** o in **LOW**. Parlando di corrente quando il pin 13 viene messo in **ON** inizia a condurre una tensione di **5 V**.

    delay(1000);
    

_delay()_ serve solo a fare una pausa di x millisecondi e quindi complessivamente Arduino si _ferma_ per una secondo.

    digitalWrite(led, LOW);
    

_digitalWrite(led, LOW)_ mette in **LOW** cioè a **0 V** il pin 13 e quindi spegnerà il LED.

    delay(1000);
    

E&#8217; lo stesso ritardo di prima 1000 millisecondi e lascerà in pin in **OFF** per un secondo.

### `<br />
` **Come installare il programma**

Per caricare il programma su Arduino devi andare su **File/Nuovo**, incollare il programma copiato dal post, andare su **File/Salva con nome** e scrivere “**led10**”. Quindi devi andare su **Sketch**, **Compila/Upload** e aspettare che l’IDE di Arduino finisca il suo lavoro.

### Un esperimento finale {#un-esperimento-finale}

Avendo testato l’hardware _a parte_ e copiato il programma, a questo punto tutto dovrebbe essere Ok. Se ti senti pronto a provare delle modifiche, prova a cambiare la resistenza di **220** Ω con una da **2.2 k**Ω e cioè con 4 strisce **rosso, rosso, rosso, oro**.

> e quindi dai una occhiata al LED!     🙂

#### Cosa succede? Si accende? Prova tu stesso! {#cosa-succede-si-accende-prova-tu-stesso}

Ricorda che l’obiettivo di questo blog è quello di farti appassionare all’argomento e darti **gli strumenti di base per lavorare da adesso come tecnico**, senza impegnare anni di studio all’università!

 [1]: https://www.robotdazero.it/blog/iniziare-con-le-breadboard/
 [2]: https://res.cloudinary.com/sebadima/image/upload/v1607693937/001/codice-colore-resistenze_v5sjs6.jpg
