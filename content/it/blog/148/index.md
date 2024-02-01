---
title: "Come leggere una porta analogica con ESP32"
description: "Come leggere una porta analogica con ESP32"
excerpt: "..."
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


Questo articolo mostra come leggere gli ingressi analogici con l'ESP32 utilizzando l'IDE Arduino. La lettura analogica è utile per leggere i valori da resistori variabili come potenziometri o sensori analogici.

ESP32 ADC Leggere valori analogici con Arduino IDE
Leggere gli ingressi analogici con ESP32 è facile come usare la funzione analogRead(GPIO), che accetta come argomento, il GPIO che si desidera leggere.

Abbiamo anche altri tutorial su come utilizzare pin analogici con scheda ESP:

ESP8266 ADC-Leggere i valori analogici con Arduino IDE, MicroPython e Lua
ESP32 Letture analogiche con MicroPython
Guarda il video
È possibile guardare il video tutorial o continuare a leggere questa pagina per le istruzioni scritte.



Ingressi analogici (ADC)
La lettura di un valore analogico con l'ESP32 significa che è possibile misurare diversi livelli di tensione tra 0 V e 3,3 V.

La tensione misurata viene quindi assegnata a un valore compreso tra 0 e 4095, in cui 0 V corrisponde a 0 e 3,3 V corrisponde a 4095. Qualsiasi tensione tra 0 V e 3.3 V sarà dato il valore corrispondente in mezzo.

ESP32 ADC Analogico ingressi di lettura Valore della gamma
L'ADC non è lineare
Idealmente, ci si aspetterebbe un comportamento lineare quando si utilizzano i pin ADC ESP32. Tuttavia, ciò non accade. Quello che otterrai è un comportamento come mostrato nella seguente tabella:

ESP32 ESP32 ADC Ingressi analogici di lettura Range Value behavior
Visualizza sorgente
Questo comportamento significa che il tuo ESP32 non è in grado di distinguere 3,3 V da 3,2 V. Otterrai lo stesso valore per entrambe le tensioni: 4095.

Lo stesso accade per valori di tensione molto bassi: per 0 V e 0.1 V si otterrà lo stesso valore: 0. È necessario tenere questo in mente quando si utilizzano i pin ADC ESP32.

C'è una discussione su GitHub su questo argomento.

analogRead () Funzione
Leggere un ingresso analogico con l'ESP32 utilizzando l'IDE Arduino è semplice come usare la funzione analogRead (). Accetta come argomento, il GPIO che vuoi leggere:

analogRead(GPIO);
L'ESP32 supporta le misure in 18 canali diversi. Solo 15 sono disponibili nella scheda DEVKIT V1 DOIT (versione con 30 GPIO).

Afferra la piedinatura della scheda ESP32 e individua i pin ADC. Questi sono evidenziati con un bordo rosso nella figura sottostante.

ESP32 ADC GPIOs Pins
Ulteriori informazioni sul ESP32 GPIOs: ESP32 piedinatura di riferimento.

Questi pin di ingresso analogici hanno una risoluzione a 12 bit. Ciò significa che quando si legge un ingresso analogico, il suo intervallo può variare da 0 a 4095.

Nota: i pin ADC2 non possono essere utilizzati quando si utilizza il Wi-Fi. Quindi, se stai usando il Wi-Fi e hai problemi a ottenere il valore da un GPIO ADC2, potresti prendere in considerazione l'utilizzo di un GPIO ADC1, che dovrebbe risolvere il tuo problema.

Altre funzioni utili
Ci sono altre funzioni più avanzate da utilizzare con i pin ADC che possono essere utili in altri progetti.

analogReadResolution (risoluzione): imposta i bit e la risoluzione del campione. Può essere un valore compreso tra 9 (0 – 511) e 12 bit (0-4095). Il valore predefinito è la risoluzione a 12 bit.
Analsetwidth (width): imposta i bit di esempio e la risoluzione. Può essere un valore compreso tra 9 (0 – 511) e 12 bit (0-4095). Il valore predefinito è la risoluzione a 12 bit.
analogSetCycles (cicli): impostare il numero di cicli per campione. Il valore predefinito è 8. Intervallo: da 1 a 255.
analogSetSamples (samples): imposta il numero di campioni nell'intervallo. Il valore predefinito è 1 campione. Ha un effetto di aumentare la sensibilità.
Analsetclockdiv (attenuazione): impostare il divisore per l'orologio ADC. Il valore predefinito è 1. Intervallo: da 1 a 255.
Analsetattenuation (attenuazione): imposta l'attenuazione di ingresso per tutti i pin ADC. Il valore predefinito è ADC_11db. Valori accettati:
ADC_0db: non imposta attenuazione. ADC può misurare fino a circa 800 mV (ingresso 1V = lettura ADC di 1088).
ADC_2_5db: La tensione di ingresso di ADC sarà attenuata, estendendo il campo di misura fino a ca. 1100 mV. (Ingresso 1V = lettura ADC di 3722).
ADC_6db: La tensione di ingresso di ADC sarà attenuata, estendendo il campo di misura fino a ca. 1350 mV. (Ingresso 1V = lettura ADC di 3033).
ADC_11db: La tensione di ingresso di ADC sarà attenuata, estendendo il campo di misura fino a ca. 2600 mV. (Ingresso 1V = lettura ADC di 1575).
Analsetpinattenuation (pin, attenuazione): imposta l'attenuazione di ingresso per il pin specificato. Il valore predefinito è ADC_11db. I valori di attenuazione sono gli stessi della funzione precedente.
adcAttachPin (pin): collega un pin ad ADC (cancella anche qualsiasi altra modalità analogica che potrebbe essere attiva). Restituisce il risultato VERO o FALSO.
adcStart(pin), adcBusy(pin) e resultadcEnd (pin): avvia una conversione ADC sul bus del pin collegato. Controlla se la conversione sul bus ADC del pin è attualmente in esecuzione (restituisce TRUE o FALSE). Ottieni il risultato della conversione: restituisce un intero a 16 bit.
C'è un ottimo video che spiega queste funzioni che puoi guardare qui.

Leggere i valori analogici da un potenziometro con ESP32
Per vedere come tutto si lega insieme, faremo un semplice esempio per leggere un valore analogico da un potenziometro.

Per questo esempio, sono necessarie le seguenti parti:

ESP32 DOIT DEVKIT V1 Consiglio (leggi migliori schede di sviluppo ESP32)
Potenziometro
Breadboard
Ponticelli
È possibile utilizzare i link precedenti o andare direttamente a MakerAdvisor.com/tools per trovare tutte le parti per i tuoi progetti al miglior prezzo!



Schematico
Collegare un potenziometro al vostro ESP32. Il perno centrale del potenziometro deve essere collegato a GPIO 34. È possibile utilizzare il seguente schema schematico come riferimento.

Leggere il valore dal potenziometro ESP32 Arduino IDE
Codice
Programmeremo l'ESP32 usando l'IDE Arduino, quindi assicurati di avere installato l'add-on ESP32 prima di procedere:

Istruzioni di Windows-Scheda ESP32 in Arduino IDE
Istruzioni per Mac e Linux-Scheda ESP32 in Arduino IDE
Apri il tuo IDE Arduino e copia il seguente codice.

// Potenziometro è collegato a GPIO 34 (analogico ADC1_CH6) 
const int potPin = 34;

// variabile per memorizzare il valore del potenziometro
valore nominale int = 0;

void setup() {
  Seriale.inizio (115200);
  ritardo(1000);
}

loop vuoto () {
  // Lettura potenziometro valore
  potValue = analogRead (potPin ) ;
  Seriale.println (valore aggiunto);
  ritardo(500);
}
Visualizza codice raw

Questo codice legge semplicemente i valori dal potenziometro e li stampa nel monitor seriale.

Nel codice, si inizia definendo il GPIO a cui è collegato il potenziometro. In questo esempio, GPIO 34.

const int potPin = 34;
In setup(), inizializzare una comunicazione seriale a una velocità di trasmissione di 115200.

Seriale.inizio (115200);
Nel loop (), utilizzare la funzione analogRead () per leggere l'ingresso analogico dal potPin.

potValue = analogRead (potPin ) ;
Infine, stampare i valori letti dal potenziometro nel monitor seriale.

Seriale.println (valore aggiunto);
Carica il codice fornito sul tuo ESP32. Assicurati di avere la scheda e la porta COM giuste selezionate nel menu Strumenti.

Testare l'esempio
Dopo aver caricato il codice e aver premuto il pulsante di reset ESP32, aprire il monitor seriale a una velocità di trasmissione di 115200. Ruotare il potenziometro e vedere i valori che cambiano.

Leggi potenziometro ESP32 analogRead

<img img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/101.webp" alt="">

<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.148.0.1.0</p>