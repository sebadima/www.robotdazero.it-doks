---
title:        "Una centralina meteo con ESP32, ESP-NOW e Wi-Fi"
description:  "Una centralina meteo con ESP32, ESP-NOW e Wi-Fi"
excerpt:      "Trasforma il tuo ESP32 in una potente centralina meteo! Crea una rete di sensori wireless con ESP-NOW e monitora in tempo reale: Temperatura - Qualità dell'aria - Metano - Monossido di Carbonio e altri parametri ambientali. Con il Wi-Fi invia i dati a un server web per l'analisi e la visualizzazione..."
date:         2024-03-07T01:20:42+01:00
lastmod:      2024-03-07T01:20:42+01:00
draft:        true
weight:       50
images:       ["header.jpeg"]
categories:   ["News"]
tags:         ["ESP32", "sensori", "ESP-NOW", "MQ2", "MQ135", "DHT11"]
contributors: ["sebadima"]
pinned:       false
homepage:     false
mermaid:      true
---



<!-- 
<img width="300" class="x figure-img img-fluid lazyload blur-up"  src="/images/154.png" alt="schema connessioni">
<strong>1</strong>. <span style="background-color:#eeeeee"> Controllo delle versioni</span>:
img width="70" class="x figure-img img-fluid lazyload blur-up"  src="/hog/inter.svg" alt="logo sezione"><br><br>

```bash
```     
<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑.</div>
<iframe  width="800" height="1200" src="https://robotdazero.ck.page/posts/000002" title="W3Schools Free Online Web Tutorials"></iframe>

-->



## Introduzione

La nostra Centralina Meteo con sensori di gas nocivi può catturare in tempo reale la presenza di oltre oltre 25 sostanze tossiche, tra cui anche i fumi di combustione e visualizzare temperatura e umidità dell'aria su un qualunque dispositivo dotato di brpwser Web.

### Le scelte di progetto

Il progetto usa una trasmittente separata da piazzare anche in zone lontane e non coperte dal segnale Wi-Fi: In questo modo puoi controllare gas e parametri di edifici o luoghi distanti da 100 metri fino a 1.5 chilometri! <br> Per ottenere questi valori abbiamo accoppiato il protocollo proprietario ESP-NOW alla normale rete Wi-Fi.

Abbiamo selezionato dei componenti come il *controller* ESP32 e due tipi di sensori molto precisi (MQ2 e MQ135) per ottenere delle rilevazioni consistenti ma con un costo relativamente contenuto e con la possibilità di assemblare il prototipo su una normale breadboard per hobbysti.

> Il progetto è facilmente estensibile per leggere il valore di quattro trasmettitori separati senza modifiche software particolare. Il software viene fornito in modalità "Open Source" e quindi completamente gratuito e modificabile.

#### Utilizzo in ambienti "chiusi"

Puoi ad esempio controllare la qualità dell'aria nella tua casa e rilevare gas come CO, metano, GPL e fumi per un ambiente sicuro e confortevole. Il sensore MQ2 diventa un alleato prezioso per rilevare con anticipo problemi all'impianto del metano o ai tubi di stufe, cucine, scaldabagni etc. La centralina può aiutarti a prevenire malanni legati agli sbalzi di temperatura e definire una qualità dell'aria ideale


#### Utilizzo in ambienti "aperti"

Negli spazi aperti la centralina può controllare la qualità dell'aria in giardini, parchi o durante campeggi a condizione di avere una sorgente di alimentazione a 5V (in pratica basta usare dei normalissimi *power bank*). Può certamente monitorare  l'inquinamento atmosferico e infatti riesce a rilevare la presenza di una vasta gamme di gas nocivi in aree urbane o industriali.

La centralina esibisce buone doti di connettività e ti consente di leggere via WEB usando l'*hotspot* del tuo telefonino quando sei all'aperto con aggiornamento automatico e in tempo reale di temperatura, pressione, gas nocivi (MQ2 e MQ135).

### Gli utilizzi professionali della centralina

Domotica: Puoi integrare la centralina nel tuo sistema domotico per un controllo completo dell'ambiente domestico.
Giardinaggio: Serve a monitorare le condizioni climatiche per ottimizzare la crescita delle tue piante.
Industria: Assicura la sicurezza dei lavoratori e la conformità alle normative ambientali.

Abbiamo scelto ESP32 rispetto ad Arduino per la formidabile connettività di questa scheda: la rete ESP-NOW specifica per ESP32 consente di porre la stazione *trasmittente* ad oltre 150 metri dalla *ricevente*, una feature impossibile da ottenere con la copertura del Router Wi-Fi. In versioni future della centralina useremo gli stessi sensori e le schede LoRa per consentire la trasmissione fino a 3/4 chilometri in ambiente urbano.

## Componenti e materiali

## #1 - Il trasmettitore

Pe realizzare il primo elemento della centralna vi servono questi materiali:

- Sensore MQ-2 - vedi su <a href="https://amzn.to/49pwhrF" target="_blank">Amazon</a>
- Sensore MQ-135 - vedi su <a href="https://amzn.to/48qeoaT" target="_blank">Amazon</a>
- Sensore DHT11 - vedi su <a href="https://amzn.to/49f2fqF" target="_blank">Amazon</a>
- Scheda ESP32 - vedi su <a href="https://amzn.to/49Gig8Q" target="_blank">Amazon</a>
- Breadboard per montaggi elettronici (oppure 2 breadboard unite lungo la linea di mezzeria)

### Assemblaggio del trasmettitore

Per costruire il trasmettitore ti basterà usare i connettori Dupont seguendo lo schema fornito. Ti suggerisco di inserire innanzitutto la scheda ESP32 e poi i connettori verso i sensori. Dopo puoi connettere in sensori con la circuitazione già pronta. Non devi fare nessuna saldatura e meno che tu non voglia vendere a terzi questo progetto il tuo progetto o usarlo in una installazione portatile.

<img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/103.png" alt="schema elettrico fritzing della centralina multi sensore con ESP32">

### Configurazione software del trasmettitore 

Per la compilazione di questo proogetto puoi usare Arduino Ide o il compilatore a linea di Comando PlatformIO. Esiste una terza possibilità per compil

#### Compilazione con Arduino IDE

- Specificare l'IDE utilizzato (es. Arduino IDE).
- Spiegare come installare le librerie necessarie.
- Fornire il codice sorgente per la configurazione del sensore di temperatura e umidità.

```bash
git clone git@github.com:sebadima/corso-ESP32-centralina-meteo-trasmettitore.git
cd corso-ESP32-centralina-meteo-trasmettitore
make upload
platformio device monitor --baud 115200  --rts 0 --dtr 0 --port /dev/ttyUSB0
```     

####  Compilazione con PlatformIO

- Mostrare come configurare il sensore di pressione atmosferica.
- Illustrare la configurazione del sensore di gas nocivi.





## #2 - Il ricevitore 


### Assemblaggio del ricevitore

minimo assemblaggio 

<img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/103.png" alt="schema elettrico fritzing della centralina multi sensore con ESP32">

### Configurazione software del ricevitore 

Puoi usare Arduino Ide o il compilatore a linea di Comando PlatformIO. Esiste una terza possibilità per compil

####  Compilazione con Arduino IDE

- Specificare l'IDE utilizzato (es. Arduino IDE).
- Spiegare come installare le librerie necessarie.
- Fornire il codice sorgente per la configurazione del sensore di temperatura e umidità.

```bash
git clone git@github.com:sebadima/corso-ESP32-centralina-meteo-trasmettitore.git
cd corso-ESP32-centralina-meteo-trasmettitore
make upload
platformio device monitor --baud 115200  --rts 0 --dtr 0 --port /dev/ttyUSB0
```     

#### Compilazione con PlatformIO

- Mostrare come configurare il sensore di pressione atmosferica.
- Illustrare la configurazione del sensore di gas nocivi.



<br><br><img width="48" class="x figure-img img-fluid lazyload blur-up"  src="/hog/inter.svg" alt="logo sezione"><br><br>




## Il server WEB

- Descrivere come acquisire i dati dai sensori.
- Spiegare come memorizzare i dati su scheda SD o EEPROM.
- Mostrare come inviare i dati ad un server remoto.
- Visualizzazione dei dati:

- Presentare diverse opzioni per la visualizzazione dei dati, come un grafico o un pannello di controllo.
- Fornire il codice sorgente per la visualizzazione dei dati sul display LCD.
- Mostrare come creare un'interfaccia web per la visualizzazione dei dati.
- KASPIAN??????


## Troubleshooting

riprendere da altri post

## Conclusioni

Riassumere i vantaggi della centralina meteo realizzata con ESP32 e C++.
Suggerire possibili miglioramenti e future implementazioni.
Ringraziare i lettori per l'attenzione e invitarli a lasciare commenti o domande.


<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.159.0.3.0</p>