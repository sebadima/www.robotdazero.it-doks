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

## La schema dei pin analogici

La scheda ESP32 riesce a leggere valori digitali e analogici dai suoi pin di ingresso: la operazione di lettura non presenta particolari difficoltà ma talvolta può essere noioso trovare i piedini liberi o adatti per l'uso. Nella immagine sotto vedi la piedinatura completa della ESP32 DEVKIT-V1. 

#### I piedini disponibili per l'ingresso analogico sono evidenzati in rosso.

<img img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/104.webp" alt="">

### La lettura degli ingressi analogici (ADC)


> ADC è l'acronimo di "Analog-to-Digital Converter", che in italiano significa "Convertitore Analogico-Digitale". 

Si tratta di un componente elettronico utilizzato per convertire segnali analogici, come tensioni o correnti, in valori digitali che possono essere elaborati da un microcontrollore o un computer. Gli ADC sono comunemente utilizzati in dispositivi elettronici per misurare e monitorare segnali provenienti da sensori o da altre sorgenti analogiche.


La lettura di un valore analogico con l'ESP32 significa semplicemente misurare i livelli di tensione tra 0V e 3,3V.

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑
<strong>In teoria ci apettiamo un comportamento lineare</strong> nella lettura dei pin ADC, tuttavia, ciò non è sempre vero. In linea generale l'ESP32 non riesce a distinguere la differenza tra 3,3V e 3,2V: Otterremo sempre lo stesso valore per e cioè 4095. Lo stesso accade per valori di tensione molto bassi: Per 0V e 0.1V otteniamo o stesso valore di 0! 
<br>È necessario tenere questo in mente quando si utilizzano i pin ADC ESP32.
</div>



In linea generale l'ESP32 non è riesce a distinguere la differenza tra 3,3V e 3,2V: Otterremo sempre lo stesso valore per entrambe le tensioni: 4095.Lo stesso accade per valori di tensione molto bassi: per 0V e 0.1V otteniamo o stesso valore: 0. 
<br>È necessario tenere questo in mente quando si utilizzano i pin ADC ESP32.


### Le istruzioni per leggere un pin analogico

La funzione analogRead(GPIO) legge un ingresso analogico dove GPIO indice il piedino che vuoi leggere , nel nostro cso useremo il pin 34. L'ESP32 supporta le misure in 18 pin ma solo 15 sono disponibili nella scheda DEVKIT V1 DOIT (versione con 30 pin) che noi usiamo di preferenza.

Questi pin di ingresso analogici hanno una risoluzione massima di 12 bit. Ciò significa che quando si legge un ingresso analogico, il suo intervallo può variare da 0 a 4095.

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




Questo codice legge semplicemente i valori dal potenziometro e li stampa nel monitor seriale.

- Nel codice, si inizia definendo il GPIO a cui è collegato il potenziometro. In questo esempio, GPIO 34.

- In setup(), Si inizializza la comunicazione seriale a una velocità di trasmissione di 115200.

- Nel loop (), la funzione analoRead(34) legge l'ingresso analogico dal pin 34.

- Seriale.println (valore aggiunto);



Carica il codice fornito sul tuo ESP32. Assicurati di avere la scheda e la porta COM giuste selezionate nel menu Strumenti.

Testare l'esempio
Dopo aver caricato il codice e aver premuto il pulsante di reset ESP32, scrivi la seguente istruzione nel terminalr (fai copia e incolla) 

```bash
platformio device monitor --baud 115200  --rts 0 --dtr 0
```

La istruzione lancia il monitor seriale di PlatformIO ad una velocità di trasmissione di 115200. Prova a ruotare il potenziometro per vedere i valori che cambiano...




















<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.148.1.2.0</p>