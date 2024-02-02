---
title: "Come far lampeggiare il LED interno dell'ESP32"
description: "Come far lampeggiare il LED interno dell'ESP32"
excerpt: "..."
date: 2024-02-01T09:19:42+01:00
lastmod: 2024-02-01T09:19:42+01:00
draft: true
weight: 50
images: ["header.webp"]
categories: ["News"]
tags: ["ESP32", "LED", "PlatformIO"]
contributors: ["sergio rame"]
pinned: false
homepage: false
mermaid: true
---



<hr>
<br>

## Come eseguire il programma

Programmeremo l'ESP32 usando il compilatore PlatformIO e quindi assicurati di avere installato il programma secondo le instruzioni di questo <a href="https://www.robotdazero.it/blog/come-installare-platformio/">post</a> prima di procedere.
Per compilare e testare il programma basta fare copia e incolla delle tre righe che vedi nello specchietto in basso:<br> 
- la prima riga "clona" sul tuo PC il codice originale dal nostro account Github, 
- la seconda lo compila,
- la terza lancia il monitor seriale.

```bash
git clone git@github.com:sebadima/blinky.git
make upload
platformio device monitor --baud 115200  --rts 0 --dtr 0
```

Come vedi si tratta di una operazione velocissima, molto più veloce di Arduino IDE, al solo *costo* di <a href="https://www.robotdazero.it/blog/come-installare-platformio/">installare</a> PlatformIO sul tuo PC. Spesso si ha la sensazione erronea che lavorare in modalità testo sia più lento che usare interfacce grafiche, ma come vedi il lavoro manuale è stato compresso praticamente a zero.


### Le istruzioni C++ per scrivere sulle ...




### Come costruire da zero il programma

Lavorando con PlatformIO puoi semplicemente "clonare" un progetto da Github e poi modificarlo a tuo piacimento. Inoltre puoi usare questo stesso progetto come "template universale" e clonarlo in una directory differente per avere in un attimo un nuovo progetto!<br> Eviterai in questo modo di combattere con librerie, PATH, configurazione della "board", etc. tipici di Arduino IDE. 

> <strong>Se sei agli inizi con ESP32</strong> troverai comunque interessante creare da zero i tuoi files e scoprire così qualche nuovo trucco di PlatformIO. Continua a leggere questa sezione per conoscere i dettagli.

Il programma, come dicevamo prima, legge semplicemente i valori dal potenziometro e li scrive nel monitor seriale: questi sono i 3 punti chiave del programma:

- In <strong>setup</strong>(), il programma inizializza la comunicazione seriale ad una velocità di trasmissione di 115200 baud,
- Nel <strong>loop</strong>(), la funzione analoRead(34) legge l'ingresso analogico dal pin 34,
- Serial.<strong>println</strong>() stampa il valore ottenuto.

#### main.ino

```bash
#define LED 2

void setup() {
  // Setta il baud rate della seriale a 115200
  Serial.begin(115200);
  // Setta il pin 2 in modalità OUTPUT
  pinMode(LED,OUTPUT);
}

void loop() {
  delay(50);
  digitalWrite(LED,HIGH);
  Serial.println("Led è HIGH");
  delay(50);
  digitalWrite(LED,LOW);
  Serial.println("Led è LOW");
}

```


Carica il codice fornito sopra in un file **main.ino** e inoltre usa il tuo editor preferito per creare un file platformio.ini con il seguente contenuto:

#### platformio.ini
```bash
```


Segui lo stesso procedimento per creare un file "Makefile" con il seguente contenuto:

#### Makefile
```bash
```

E quindi scrivi le 2 seguenti istruzione nel terminale (fai copia e incolla): 

```bash
```

<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.149.0.2.0</p>