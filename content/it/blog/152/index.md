---
title:       "Come leggere il sensore DHT11 con ESP32"
description: "Come leggere il sensore DHT11 con ESP32"
excerpt:     "..."
date:        2024-02-07T01:19:42+01:00
lastmod:     2024-02-07T01:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["ESP32", "PlatformIO", "DHT11", "sensori"]
contributors: ["sergio rame"]
pinned: false
homepage: false
mermaid: true
---



<hr>
<br>

## Il sensore DHT11


Il sensore DHT11 viene usato per misurare la temperatura e l'umidità relativa. Sono dei modelli estremamente popolari in parte per il basso costo in parte per la facilità di collegamento ad ESP32 e Arduino. Sono dei sensori digitali e pertanto non necessitano di conversione del voltaggio in uscita e inoltre non richiedono una resistenza di pull-up/pull-down. Un resistore da 10 KOhm si trova sempre incorporato nella basetta (salvo modelli super economici) e pertanto basta semplicemente collegarlo alla uscita a 5V di ESP32.

#### Il DHT22

Il DHT11 ha un "quasi gemello", il DHT22 con delle specifiche similari. Il sensore DHT22 ha una risoluzione migliore e un campo di misura di temperatura e umidità più ampio. Tuttavia, è un poco più costoso e puoi effettuare letture ad intervalli di 2 secondi. Nel nostro tutorial useremo solo il DHT11.

### Le specifiche del DHT11

- Intervallo di temperatura da 0 a 50 ºC + / -2 ºC
- Intervallo di umidità da 20 a 90% + / -5% 
- Risoluzione Umidità: 1%
- Temperatura: 1ºC Umidità: 0.1%
- Temperatura: 0.1 ºC
- Tensione di funzionamento 3-5. 5 V 
- Corrente di alimentazione 0.5 – 2.5 mA 
- Periodo di campionamento 1 secondo 


### Il pinout del DHT11

I sensori DHT hanno quattro pin come mostrato nella figura seguente. Tuttavia, se si ottiene il sensore DHT in una scheda breakout, viene fornito con solo tre pin e con una resistenza di pull-up interna sul pin 2.

<img width="150" class="x figure-img img-fluid lazyload blur-up"  src="images/101.webp" alt="">


La tabella seguente mostra il pinout del DHT11 a <strong>4 pin</strong>. Quando il sensore è rivolto verso di te, la numerazione dei pin inizia da 1 da sinistra verso destra.

- pin1: Alimentazione da 3.3V fino a 5V
- pin2: Qualsiasi GPIO digitale dell'ESP32 (con una resistenza)
- pin3: Non collegato
- pin4: GND


La prossima mostra invece il pinout del DHT11 a <strong>3 pin</strong> e quindi con resistenza di pull-up incorporata. 

- pin1: (GND)
- pin2: (DATA) - Uscita dati verso qualsiasi GPIO digitale dell'ESP32 
- pin3: (VCC) - Alimentazione da 3.3V fino a 5V

Nel progetto pilota useremo la versione a 3 pin.

> <strong>Le resistenze di pull-up</strong> sono componenti utilizzate nei circuiti digitali per garantire che un segnale rimanga a un livello logico alto (1 logico) quando non è altrimenti definito. Questo è particolarmente importante in dispositivi a logica aperta (open-drain o open-collector) o quando si lavora con dispositivi a bassa corrente come i MOSFET.


### Lo schema elettrico

<img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/152_bb.png" alt="schema Fritzing del circuito per leggere il sensore DHT11 con ESP32">



## Il programma per leggere il sensore DHT11 con ESP32

Per compilare un programma con Arduino Ide e con PlatformIO a linea di comando puoi leggere questo <a href="/blog/come-collegare-un-led-esterno-ad-esp32/">post</a> del nostro blog, per installare PlatformIO puoi fare riferimento a questo altro <a href="/blog/come-installare-platformio/">post</a>. In questo progetto e in altri progetti più complessi useremo soprattutto PlatformIO. Per installare il progetto completo dal nostro account Github fai copia e incolla dalla casella sottostante:

```bash
git clone git@github.com:sebadima/corso-ESP32-dht11-basic.git
make upload
platformio device monitor --baud 115200  --rts 0 --dtr 0
```

Dopo alcuni istanti vedrai i valori di Temperatura e Umidità rilevati dal sensore. Con Platformio non è necessario settare scheda, porta e installare librerie "a mano", un vantaggio non da poco. Il trucco è semplicissimo, i nomi e le versioni delle librerie sono scritte nel file platformio.ini e il comando "make" si occupa di scaricarle da internet, compilarle e linkarle.

### Il programma main.ino


```bash
#include <Arduino.h>
#include <Adafruit_Sensor.h>
#include <DHT.h>

#define DHTPIN  13    // Pin #13 dell ESP32
#define DHTTYPE DHT11 // DHT 11
DHT dht(DHTPIN, DHTTYPE);

float t;
float h;


void setup(){
  Serial.begin(115200);
  dht.begin();
}

void loop(){  
    float newT = dht.readTemperature();

    if (isnan(newT)) {
      Serial.println("Non riesco a leggere il sensore DHT!");
    }
    else {
      t = newT;
      Serial.print("Temperatura = ");
      Serial.println(t);
    }

    float newH = dht.readHumidity();

    if (isnan(newH)) {
      Serial.println("Non riesco a leggere il sensore DHT!");
    }
    else {
      h = newH;
      Serial.print("Umidità = ");
      Serial.println(h);
    }

    delay(1000);
}
```

Se hai scaricato da Github avrai l'ambiente di sviluppo già pronto compreso il file sorgente, ma è utile dargli una occhiata se vuoi, ad esempio, apportare delle piccole modifiche.

<strong>La struttura dati:<br></strong> 
DHT dht(DHTPIN, DHTTYPE);<br>
serve a far funzionare il DHT11 isolandolo in un "oggetto" incapsulato, cui accedere solo attraverso delle chiamate di funzione senza leggere o peggio modificare variabili e puntatori.

<strong>La funzione</strong>:
<br>setup()<br> 
non serve a nulla di speciale ma serve a settare la seriale a 115200 baud ed a inizializzare in automatico l'"oggetto" per il DHT11.

<strong>La istruzione: </strong>
<br>float newT = dht.readTemperature();<br>
legge le temperatura mentre la istruzione:<br>
if (isnan(newT)) ...<br>
permette di controllare se il DHT11 è davvero collegato e se arrivano i dati.

<strong>Infine la istruzione:  </strong>
<br>delay(1000);<br>
serve ad introdurre un breve intervallo di un secondo, abbastanza veloce per rilevare il movimento di un accendino nei paraggi del sensore

<img width="600" class="x figure-img img-fluid lazyload blur-up"  src="images/102.png" alt="">


### Il collaudo del programma per leggere il sensore DHT11 con ESP32

Dopo avere lanciato il monitor seriale dovresti leggere la temperatura e la umidità come nella immagine sopra. Se ciò non accade controlla di avere collegato il pin GPIO13 di ESP al connettore centrale del DHT11. Ricontrolla la connessione del cavetto di alimentazione (rosso) collegato al pin 5V dell'ESP. In casi estremi prova a cambiare il cavo USB.

<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.152.1.0.3</p>