---
title: "Come leggere una porta analogica con ESP32"
description: "Come leggere una porta analogica con ESP32"
excerpt: "La scheda ESP32 riesce a leggere valori digitali e analogici dai suoi pin di ingresso: la operazione di lettura non presenta particolari difficoltà ma talvolta può essere noioso trovare i piedini liberi..."
date: 2024-01-31T09:19:42+01:00
lastmod: 2024-01-31T09:19:42+01:00
draft: false
weight: 50
images: ["header.png"]
categories: ["News"]
tags: ["ESP32", "Teoria", "Programmazione"]
contributors: ["sebadima"]
pinned: false
homepage: false
mermaid: true
---



<!--
https://randomnerdtutorials.com/esp32-adc-analog-read-arduino-ide/
-->
<hr>
<br>



## Introduzione:

L'ESP32 è un microcontrollore che supporta la lettura di segnali analogici attraverso i suoi pin ADC (Analog to Digital Converter). Per leggere i canali analogici, useremo il linguaggio di programmazione C++ insieme alla libreria Arduino per ESP32.

## I pin analogici dell'ESP32

La scheda ESP32 riesce a leggere valori digitali e analogici dai suoi pin di ingresso: la operazione di lettura non presenta particolari difficoltà ma talvolta può essere noioso trovare i piedini liberi o adatti per l'uso. Nella immagine sotto vedi la piedinatura completa della ESP32 DEVKIT-V1 a 30 pin. 

#### I piedini disponibili per l'ingresso analogico sono evidenzati in rosso.

<img img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/104.webp" alt="">

### Cosa sono gli ingressi analogici ADC

> ADC è l'acronimo di "Analog-to-Digital Converter", che in italiano significa "Convertitore Analogico-Digitale". 

Si tratta di un componente elettronico utilizzato per convertire segnali analogici, come tensioni o correnti, in valori digitali che possono essere elaborati da un microcontrollore o un computer. Gli ADC sono comunemente utilizzati in dispositivi elettronici per misurare e monitorare segnali provenienti da sensori o da altre sorgenti analogiche.

La lettura di un valore analogico con l'ESP32 significa semplicemente misurare i livelli di tensione tra 0V e 3.3V. Ci aspetteremo che i dispositivi ADC abbiano sempre un comportament neutro e lineare: ma non + sempre così, leggi la sezione sotto per saperne di più.

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑
<strong>Il comportamento dei circuiti ADC</strong> non è sempre lineare. In linea generale l'ESP32 non riesce a distinguere la differenza tra 3,3V e 3,2V: Otterremo sempre lo stesso valore per e cioè 4095. Lo stesso accade per valori di tensione molto bassi: Per 0V e 0.1V otteniamo o stesso valore di 0! 
<br><br>È necessario tenerlo bene a mente quando si utilizzano i pin ADC dell'ESP32.
</div>


### Le istruzioni C++ per leggere un pin analogico

La funzione analogRead(GPIO) legge un ingresso analogico dove GPIO indice il piedino che vuoi leggere , nel nostro caso useremo il pin 34. L'ESP32 supporta le misure in 18 pin ma solo 15 sono disponibili nella scheda DEVKIT V1 DOIT (versione con 30 pin) che noi usiamo di preferenza.

Questi pin di ingresso analogici hanno una risoluzione massima di 12 bit. Ciò significa che quando si legge un ingresso analogico, il suo intervallo può variare da 0 a 4095.

> analogReadResolution (risoluzione): imposta i bit e la risoluzione del campione. Può essere un valore compreso tra 9 (0 – 511) e 12 bit (0-4095). Il valore predefinito è la risoluzione a 12 bit.


#### Altre funzioni utili

Ci sono altre funzioni più avanzate da utilizzare con i pin ADC che possono essere utili in altri progetti.

- Analsetwidth (width): imposta i bit di esempio e la risoluzione. Può essere un valore compreso tra 9 (0 – 511) e 12 bit (0-4095). Il valore predefinito è la risoluzione a 12 bit.

- analogSetCycles (cicli): impostare il numero di cicli per campione. Il valore predefinito è 8. Intervallo: da 1 a 255.
analogSetSamples (samples): imposta il numero di campioni nell'intervallo. Il valore predefinito è 1 campione. Ha un effetto di aumentare la sensibilità.

- analogSetClockDiv (attenuazione): imposta il divisore per l'orologio ADC. Il valore predefinito è 1. L'intervallo va da 1 a 255.

- analogSetAttenuation (attenuazione): imposta l'attenuazione di ingresso per tutti i pin ADC. Valore predefinito = ADC_11db. 


## I componenti necessari

Per questo progetto, sono necessarie le seguenti parti:

1. ESP32 DOIT DEVKIT V1 Consiglio (leggi migliori schede di sviluppo ESP32)
2. Potenziometro
3. Breadboard
4. Ponticelli


## Lo schema

Collega un potenziometro all'ESP32, il perno centrale del potenziometro deve essere collegato al pin GPIO 34. Puoi usare lo schema in basso come riferimento.

<img img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/101.webp" alt="scheme di montaggio del progetto per ESP32">

<br>
<br>

## Come eseguire il programma

Programmeremo l'ESP32 usando il compilatore PlatformIO e quindi assicurati di avere installato il programma secondo le instruzioni del nostro <a href="https://www.robotdazero.it/blog/come-installare-platformio/">post</a> prima di procedere.
Per compilare e testare il programma basta fare copia e incolla delle tre righe successive: la prima copia sul tuo PC il codice sorgente dal nostro account Github. la seconda lo compila e la terza lancia il monitor seriale.

```bash
git clone git@github.com:sebadima/analog_read.git
make upload
platformio device monitor --baud 115200  --rts 0 --dtr 0
```



Come vedi si tratta di una operazione velocissima, molto più veloce di Arduino IDE, al solo *costo* di installare PlatformIO sultuo PC. Spesso si ha la sensazione erronea che lavorare in modalità testo sia più lento che usare interfacce grafiche, ma come vedi il tempo à stato compresso particamante a zero.

Dopo avere lanciato il monitor seriale di PlatformIO (la terza riga) vedrai l'output del programma:


La istruzione lancia il monitor seriale di PlatformIO ad una velocità di trasmissione di 115200. Prova a ruotare il potenziometro per vedere i valori che cambiano...

```bash
Valore del potenziometro = 0
Valore del potenziometro = 0
Valore del potenziometro = 118
Valore del potenziometro = 450
Valore del potenziometro = 733
Valore del potenziometro = 979
Valore del potenziometro = 1234
Valore del potenziometro = 1484
Valore del potenziometro = 1744
Valore del potenziometro = 1968
Valore del potenziometro = 2192
Valore del potenziometro = 2397
Valore del potenziometro = 2619
Valore del potenziometro = 2838
Valore del potenziometro = 3110
Valore del potenziometro = 3399
Valore del potenziometro = 3810
Valore del potenziometro = 4095
Valore del potenziometro = 4095
```

### Il codice completo del progetto


Il codice legge semplicemente i valori dal potenziometro e li stampa nel monitor seriale.

- Tieni a mente che stiamo leggendo il pin 34 cui è  collegato il pin centrale del potenzimetro.
- In setup(), Si inizializza la comunicazione seriale a una velocità di trasmissione di 115200.
- Nel loop (), la funzione analoRead(34) legge l'ingresso analogico dal pin 34 e lo stampa con:
  Serial.println();



```bash
void setup() {

  // Setta la seriale a 115200 baud
  Serial.begin(115200);
  // Setta la precisione a 12 bits (0-4096)
  // Il valore 4095 corrisponde a 3.3V
  analogReadResolution(12);

}


void loop() {

  // Leggi il valore del potenziometro al pin 34
  int ValoreAnalogico = analogRead(34);
  // Scrivi il valore appena rilevato 
  Serial.printf("Valore del potenziometro = %d\n", ValoreAnalogico);
  delay(100); // Un decimo di secondo tra due letture consecutive

}
```

Carica il codice fornito sul tuo ESP32. Dopo aver caricato il codice e aver premuto il pulsante di reset ESP32, scrivi le 2 seguenti istruzione nel terminale (fai copia e incolla): 

```bash
make upload
platformio device monitor --baud 115200  --rts 0 --dtr 0
```

Anche in questo caso puoi vedere il funzionamento del canale ADS ruotando il potenziometro.


<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.148.1.2.0</p>