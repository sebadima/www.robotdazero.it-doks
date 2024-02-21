---
title: "Una centralina multi sensore con ESP32"
description: "Una centralina multi sensore con ESP32"
excerpt: "Cattura ogni impurità dell'aria con questo semplicissimo progetto per ESP32! Puoi monitorare in modo estremamente preciso e in tempo reale la concentrazione di una decina di gas differenti nel tuo appartamento. Mai più gas non rilevati e cattiva qualità dell'aria con questa mini centralina. Scopri come usare i sensori MQ-2, MQ135 e DHT11 per..."
date: 2024-02-08T01:19:42+01:00
lastmod: 2024-02-08T01:19:42+01:00
draft: true
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["ESP32", "PlatformIO", "DHT11", "sensori", "MQ-2", "MQ135"]
contributors: ["sergio rame"]
pinned: false
homepage: false
mermaid: true
---



<!-- https://randomnerdtutorials.com/esp32-dht11-dht22-temperature-humidity-sensor-arduino-ide/ -->

## Introduzione

L'avvento dell'Internet of Things (IoT) ha rivoluzionato il modo in cui interagiamo con la nostra casa. La domotica, in particolare, ha portato all'introduzione di dispositivi intelligenti in grado di automatizzare diverse funzioni e di monitorare l'ambiente domestico.

In questo articolo, presenteremo un progetto per la realizzazione di una centralina multi-sensore basata sulla scheda ESP32. La centralina sarà in grado di:

Rilevare la temperatura e l'umidità dell'ambiente.
Monitorare la qualità dell'aria.
Rilevare la presenza di gas combustibili.
Il progetto è rivolto a hobbisti ed appassionati di elettronica con un livello di conoscenza intermedio. La realizzazione della centralina richiede l'utilizzo di componenti elettronici di base, facilmente reperibili online o nei negozi di elettronica.

Cosa troverai in questo articolo:

Lista dei componenti necessari.
Schema elettrico della centralina.
Programma per ESP32.

## Il sensore di gas MQ-2

Il sensore di gas <a href="https://www.az-delivery.de/it/products/gas-sensor-modul" target="_blank">MQ-2</a> è un dispositivo elettronico ampiamente utilizzato per rilevare la presenza di vari gas nel suo ambiente circostante. Questo sensore è particolarmente noto per la sua capacità di rilevare gas <a href="https://www.vigilfuoco.it/sitiComandi/GestioneSiti/downloadFile.asp?s=181&f=106408" target="_blank">infiammabili</a> come metano, propano, butano, idrogeno e altri gas combustibili, oltre a essere sensibile anche a gas nocivi come fumi di sigaretta, alcol, ammoniaca e vapori di <a href="https://www.issalute.it/index.php/la-salute-dalla-a-alla-z-menu/b/benzene" target="_blank">benzene</a>. 

> Grazie alla sua versatilità e alle sue prestazioni affidabili, il sensore MQ-2 trova impiego in una vasta gamma di applicazioni, che vanno dalla sicurezza domestica e industriale al monitoraggio ambientale e alla sicurezza sul lavoro.

Il sensore MQ-2 si basa su una tecnologia di rilevamento nota come sensore di gas a resistenza variabile. Questo tipo di sensore utilizza un elemento sensibile che reagisce chimicamente alla presenza di gas specifici, causando una variazione nella sua resistenza elettrica. Quando il gas viene rilevato, la resistenza dell'elemento sensibile cambia e questa variazione viene misurata per determinare la concentrazione del gas nell'ambiente.

Dal punto di vista tecnico, il sensore MQ-2 è costituito da diversi componenti chiave, tra cui l'elemento sensibile, un circuito di controllo e un dispositivo di rilevamento delle variazioni di resistenza. 


##### L'elemento sensibile è solitamente un film sottile di materiale sensibile ai gas, che viene esposto all'ambiente circostante attraverso una griglia. 

Il circuito di controllo è responsabile della gestione delle operazioni del sensore, inclusa la conversione del segnale di resistenza in un segnale elettrico utilizzabile. Il dispositivo di rilevamento delle variazioni di resistenza è in genere un convertitore analogico-digitale che trasforma il segnale di resistenza in una lettura digitale che può essere interpretata da un microcontrollore o da un altro dispositivo elettronico.

Una delle caratteristiche distintive del sensore MQ-2 è la sua sensibilità e la sua capacità di rilevare una vasta gamma di gas in modo rapido ed efficiente. 


<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑
<strong>Tuttavia, è importante notare</strong> che il sensore MQ-2 può essere influenzato da vari fattori ambientali come temperatura, umidità e interferenze da altri gas, il che può influire sulla sua precisione e affidabilità. Pertanto, è fondamentale calibrare e configurare il sensore correttamente per garantire prestazioni ottimali.</div><br>

In conclusione, il sensore di gas MQ-2 è uno strumento prezioso per il rilevamento dei gas infiammabili e nocivi in ​​una varietà di contesti applicativi. Grazie alla sua sensibilità e alla sua capacità di rilevare una vasta gamma di gas, è ampiamente utilizzato in sistemi di monitoraggio e sicurezza per proteggere le persone, le strutture e l'ambiente da potenziali pericoli associati alla presenza di gas.



0000

### +647854



## Funzionamento del sensore di gas MQ-2

Il sensore è composto da un elemento riscaldante in ossido di stagno (SnO2) posizionato su un substrato di ceramica. Al riscaldamento, l'elemento sensibile presenta una conduttività elettrica che varia in base alla concentrazione di gas combustibili presenti nell'aria circostante. In presenza di gas, le molecole di gas si adsorbono sulla superficie dell'ossido di stagno, provocando una diminuzione della conduttività. 

> La variazione di conduttività viene misurata da un circuito elettrico e convertita in un segnale analogico proporzionale alla concentrazione di gas presente.

### Caratteristiche del sensore di gas MQ-2

### we68f7

Sensibilità elevata: Il sensore è particolarmente sensibile a gas combustibili come GPL, propano e metano.
Ampia gamma di rilevamento: Il sensore è in grado di rilevare concentrazioni di gas da 200 ppm a 10000 ppm.
Tempo di risposta rapido: Il sensore ha un tempo di risposta rapido, inferiore a 2 secondi.
Facile da usare: Il sensore è facile da utilizzare e richiede solo una semplice alimentazione a 5V.
Costo contenuto: Il sensore ha un costo relativamente basso.
Applicazioni:

Il sensore di gas MQ-2 è utilizzato in diverse applicazioni, tra cui:

- Rilevamento di fughe di gas: Il sensore può essere utilizzato per rilevare fughe di gas in abitazioni, industrie e ambienti commerciali.
- Sistemi di allarme antincendio: Il sensore può essere utilizzato in sistemi di allarme antincendio per rilevare la presenza di fumi e gas combustibili.
- Controllo della qualità dell'aria: Il sensore può essere utilizzato per monitorare la qualità dell'aria in ambienti interni ed esterni.
- Domotica: Il sensore può essere utilizzato in sistemi di domotica per controllare la ventilazione e altri dispositivi in base alla qualità dell'aria.



#### Vantaggi:

**Sensibilità elevata**: Il sensore è in grado di rilevare anche piccole concentrazioni di gas.
Ampia gamma di rilevamento: Il sensore è in grado di rilevare una varietà di gas combustibili.
Tempo di risposta rapido: Il sensore è in grado di rilevare la presenza di gas in modo rapido.
Facile da usare: Il sensore è facile da utilizzare e richiede solo una semplice alimentazione.
Costo contenuto: Il sensore ha un costo relativamente basso.

#### Svantaggi:

**Sensibilità a interferenze**: Il sensore può essere sensibile a interferenze da parte di altri gas e vapori.
Non selettivo: Il sensore non è in grado di distinguere tra diversi tipi di gas combustibili.
Richiede calibrazione: Il sensore richiede una calibrazione periodica per mantenere la sua accuratezza.
Durata limitata: Il sensore ha una durata limitata, che varia in base alle condizioni di utilizzo.
Alternative:

##### Sensori di gas alternativi:

Esistono diversi sensori di gas alternativi al sensore MQ-2, tra cui ti ricordo:

**1**. Sensori <a href="https://www.processsensing.com/it-it/blog/come-funzionano-i-sensori-elettrochimici.htm" target="_blank">elettrochimici</a>: Questi sensori sono più selettivi rispetto al sensore MQ-2 e sono in grado di distinguere tra diversi tipi di gas.

**2**. Sensori a infrarossi: Questi sensori sono in grado di rilevare la presenza di gas senza entrare in contatto con essi.

**3**. Sensori a <a href="https://www.fisica.unina.it/documents/12375590/13725484/2790_VerdeC_18-12-2018.pdf/55f3bdb0-9060-47ee-95fc-870804ca16c0" target="_blank">stato solido</a>: Questi sensori sono più stabili e affidabili rispetto al sensore MQ-2.


## Il sensore di gas MQ135

Il sensore di gas MQ135 è un sensore a semiconduttore di tipologia chemioresistivo, progettato per rilevare la presenza di gas combustibili come GPL, propano, metano, idrogeno e fumi in aria.

Il sensore è composto da un elemento riscaldante in ossido di stagno (SnO2) posizionato su un substrato di ceramica.
Al riscaldamento, l'elemento sensibile presenta una conduttività elettrica che varia in base alla concentrazione di gas combustibili presenti nell'aria circostante.
In presenza di gas, le molecole di gas si adsorbono sulla superficie dell'ossido di stagno, provocando una diminuzione della conduttività.
La variazione di conduttività viene misurata da un circuito elettrico e convertita in un segnale analogico proporzionale alla concentrazione di gas presente.
Caratteristiche:

#### Sensibilità elevata: Il sensore è particolarmente sensibile a gas combustibili come GPL, propano e metano.

Possiede inoltre una ampia gamma di rilevamento: Il sensore è in grado di rilevare concentrazioni di gas da 200 ppm a 10000 ppm.

#### Vantaggi dell' MQ135:

- Tempo di risposta rapido: Il sensore ha un tempo di risposta rapido, inferiore a 2 secondi.
- Facile da usare: Il sensore è facile da utilizzare e richiede solo una semplice alimentazione a 5V.
- Costo contenuto: Il sensore ha un costo relativamente basso.

In genere il sensore vienere usato per rilevamento di fughe di gas e sistemi di sistemi di allarme antincendio. Si può utilizzare vantaggiosamente per il controllo della qualità dell'aria e la Domotica in generale laddove abbiamo bisogno di monitorare molti amniente con un sensore a basso costo.





## Il sensore DHT11

Come funziona il sensore DHT11:
Il sensore DHT11 è un sensore digitale di temperatura e umidità dell'aria. 

#### Sensore di temperatura: 
Il sensore utilizza un termistore per rilevare la temperatura ambiente. Un termistore è un dispositivo resistivo la cui resistenza varia in base alla temperatura. Nel caso del DHT11, il termistore è costituito da un materiale il cui valore di resistenza diminuisce al crescere della temperatura.

#### Sensore di umidità: 
Per misurare l'umidità relativa, il DHT11 utilizza un condensatore a film polimerico con un dielettrico che varia in base all'umidità. Il cambiamento dell'umidità modifica la capacità del condensatore, che viene quindi convertita in un segnale elettrico.

Circuito di controllo: Il DHT11 contiene un circuito integrato che regola il funzionamento del sensore, compresa la conversione delle variazioni di resistenza e capacità in segnali digitali interpretabili.

Segnali digitali: Il sensore trasmette i dati di temperatura e umidità attraverso un segnale digitale seriale. Questi dati sono codificati in una sequenza di impulsi elettrici che possono essere letti da un microcontrollore o da un altro dispositivo elettronico.

Accuratezza: ±1°C per la temperatura e ±5% per l'umidità.
Risoluzione: 1°C per la temperatura e 1% per l'umidità.
Gamma di misurazione: 0-50°C per la temperatura e 20-90% per l'umidità.
Tempo di risposta: 1 secondo.
Facile da usare: Il sensore è facile da utilizzare e richiede solo una semplice alimentazione a 5V.
Costo contenuto: Il sensore ha un costo relativamente basso.
Applicazioni:

Monitoraggio ambientale: Il sensore DHT11 può essere utilizzato per monitorare la temperatura e l'umidità dell'aria in ambienti interni ed esterni.
Domotica: Il sensore DHT11 può essere utilizzato in sistemi di domotica per controllare la temperatura e l'umidità di casa.
Stazioni meteorologiche: Il sensore DHT11 può essere utilizzato in stazioni meteorologiche per misurare la temperatura e l'umidità dell'aria.
Incubatrici: Il sensore DHT11 può essere utilizzato in incubatrici per monitorare la temperatura e l'umidità.
Serre: Il sensore DHT11 può essere utilizzato in serre per monitorare la temperatura e l'umidità.
Vantaggi:



<hr>
<br>

```bash
git clone git@github.com:sebadima/corso-esp32-centralina-multisensore.git
cd corso-esp32-centralina-multisensore
make upload
platformio device monitor --baud 115200  --rts 0 --dtr 0
```

```bash
#include <Arduino.h>
#include "DHT.h"
#include "soc/soc.h"
#include "soc/rtc_cntl_reg.h"

#define DHTPIN 13
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);
float t, h, g_1, g_2;
int lost_packages;
int Gas_1 = 33;
int Gas_2 = 35;


void setup() {
  Serial.begin(115200);
  WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0); //disable brownout detector

  dht.begin();
  pinMode(Gas_1, INPUT);
  pinMode(Gas_2, INPUT);
}

void loop() {
  h   = dht.readHumidity();
  t   = dht.readTemperature();
  g_1 = analogRead(Gas_1);
  g_2 = analogRead(Gas_2);

  if (isnan(g_1) )
  {
    Serial.println(F("Non riesco a leggere dal sensore di GAS 1!"));
    return;
  }

  if (isnan(g_2) )
  {
    Serial.println(F("Non riesco a leggere dal sensore di GAS 2!"));
    return;
  }
 
  if (isnan(t) ) 
  {
    Serial.println(F("Non riesco a leggere dal sensore DHT!"));
    return;
  }

  Serial.print("Temperatura: ");
  Serial.println(t);
  Serial.print("Umidità: ");
  Serial.println(h);
  Serial.print("Gas_1: ");
  Serial.println(g_1);
  Serial.print("Gas_2: ");
  Serial.println(g_2);
  Serial.println("");

  delay(2000);
}
```

<img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/103.png" alt="">

<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.153.0.4.0</p>
