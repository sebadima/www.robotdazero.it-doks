---
title: "ESP32: i segreti del suo successo"
description: "ESP32: i segreti del suo successo"
excerpt: "L’ESP32 è una scheda elettronica integrata (SoC) sviluppata da Espressif Systems. È un chip a basso costo e ad alte prestazioni che offre una varietà di funzionalità, tra cui..."
date: 2024-01-01T09:19:42+01:00
lastmod: 2024-01-01T09:19:42+01:0
draft: false
weight: 50
images: ["header.jpg"]
categories: ["News"]
tags: ["motori", "arduino", "automazione"]
contributors: ["sergio rame"]
pinned: false
homepage: false
mermaid: true
---



## Le principali caratteristiche tecniche

L'<a href="https://www.espressif.com/en/products/socs/esp32" target="_blank">ESP32</a> è una scheda elettronica integrata (SoC) sviluppata da <a href="https://www.espressif.com/" target="_blank">Espressif Systems</a>. È un chip a basso costo e ad alte prestazioni che offre una varietà di funzionalità, tra cui:

Processore dual core a 32 bit con clock fino a 240 MHz
Wi-Fi 802.11 b/g/n,
<a href="https://it.wikipedia.org/wiki/Bluetooth" target="_blank">Bluetooth</a> 5.0,
25 pin <a href="https://www.renesas.com/us/en/support/engineer-school/mcu-programming-peripherals-01-gpio" target="_blank">GPIO</a>,
Supporto per sensori e periferiche.

L'ESP32 è una piattaforma versatile che può essere utilizzata per una varietà di applicazioni, tra cui:

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">
- Internet delle cose (IoT)<br>
- Dispositivi indossabili<br>
- Giochi e intrattenimento<br>
- Sistemi di automazione domestica<br>
</div>


## La storia dell'ESP32

L'ESP32 ha conquistato dall'oggi al domani una larga fetta del mercato IOT. Nel 2024, grazie ale sue spiccate doti di connettività con reti <a href="https://www.youtube.com/watch?v=aqmIOn3L_Sw" target="_blank">WI-FI</a> e dispositivi Bluetooth, è diventato un punto fermo della comunità dei "maker" Diamo uno sguardo alla sua breve storia, come iniziare, e il supporto allo sviluppo che è in offerta.

### La casa madre: Espressif

Il ESP32 è prodotto dalla Espressif, una azienda di microelettronica con sede in Cina fondata appena nel 2008. Il suo primo prodotto, un sistema Wi-Fi system-on-chip (<a href="https://it.wikipedia.org/wiki/System-on-a-chip" target="_blank">SoC</a>) a 2,4 GHz, è stato introdotto sul mercato nel 2013. Si chiamava <a href="https://taoic.oss-cn-hangzhou.aliyuncs.com/sku/pdf/613d09e7100ee9df8577807cd89192a7ed6c218d.pdf" target="_blank">ESP8089</a>, ha preso di mira tablet e applicazioni set-top box. Ma è l'<a href="https://it.wikipedia.org/wiki/ESP8266" target="_blank">ESP8266</a>, rilasciato nel 2014, che ha portato questa famiglia di prodotti all'attenzione della comunità dei produttori.

La "mission" di Espressif si concentra sulle soluzioni per L'Intelligenza artificiale delle cose (<a href="https://www.internet4things.it/iot-library/artificial-intelligence-of-things-aiot-che-cose-e-come-funziona/" target="_blank">AIoT</a>). Con l'ESP32 è riuscita a conciliare una discreta potenza di elaborazione con i sistemi wireless a basso consumo. L'antenato dell'ESP32 e cioè la scheda ESP8266 ha creato una mini rivoluzione nel mondo IOT creando per la prima volta un dispositivo single-chip facile da usare con tutto il software necessario per comunicare via Wi-Fi.

### I "motori" della Espressif

Parlando della impostazione di base, l'ESP8266 è alimentato da un processore RISC Tensilica Xtensa L106 a 32 bit: questa tipo di architettura piuttosto originale deriva dai progetti originali della americana Cadence (un fornitore leader di IT con sede in San Jose - California con oltre 10.000 dipendenti).

 L'obiettivo dichiarato della azienda, secondo un comunicato stampa del 2007, era raggiungere Dhrystone MIPS superiori a quelle del noto ARM Cortex-M3. Inoltre, proprio per facilitare la connettività del processore hanno cercato il minimo consumo in mW per agevolare le applicazioni Internet-of-Things (IoT) alimentate a batteria.

La comunità dei produttori è venuta a conoscenza di questi dispositivi nel 2014, quando Hackaday ha annunciato l'introduzione di un nuovo modulo Wi-Fi da $5 venduto tramite Seeed Studio. Conosciuto come ESP-01, questo modulo è stato costruito dal produttore di terze parti Ai-Thinker, anch'esso con sede in Cina. 

Questo primo prototipo dell'ESP32 era severamente limitato dagli appena otto pin disponibili, due dei quali collegati alla interfaccia UART per controllare il modulo tramite comandi "AT". La scheda ESP-01 era facile da integrare con la piattaforma software di Arduino e ma aggiungendo la connettività Internet senza bisogno di schedine aggiuntive. L'unico punto critico: tutta la documentazione è stata scritta in cinese! 

### Il costo dell'ESP32

La bellezza dei moduli basati sull'ESP8266 era il minimo numero di componenti necessari per costruire un modulo Wi-Fi funzionale. Supponendo che fosse disponibile un'alimentazione a 3,3 V, i progetti necessitavano solo di una manciata di resistori e condensatori, un'antenna, un programmatore seriale QSPI esterno. All'accensione, l'ESP8266 estrae il firmware dal flash e quindi lo copia nella SRAM interna da dove viene eseguito.
 
Era ovvio che i moduli erano anche dei microcontroller a tutti gli effetti. 
Il processore presentava ingressi/uscite generiche (GPIOs), uscite PWM (pulse-width modulated), un convertitore analogico-digitale (ADC) e tutte le interfacce seriali standard. Con queste premesse non è passato molto tempo prima che qualche programmatore usasse la sterminata libreria già disponibile per Arduino sulla nuova scheda "cinese"...

Prima del 2015 Espressif ha rilasciato un kit di sviluppo software (SDK) che permetteva di creare codice utente che funzionava insieme al software Wi-Fi. Il kit è disponibile in due versioni: una basata sul sistema operativo in tempo reale FreeRTOS e un'altra che si basava su callback e timer software per garantire che il programma utente condividesse il tempo di elaborazione in modo equo con lo stack software Wi-Fi. Secondo le specifiche della casa madre il kit e l'hardware potevano disporre di circa 50 kB di memoria per il loro codice.

### Gli sviluppi recenti

I dispositivi della serie ESP32 attualmente disponibili dispongono di un microprocessore dual-core Tensilica Xtensa LX6 a 32 bit. Con 48 pin, forniscono 520 kB di SRAM e, per alcuni dispositivi, tra 4 e 8 MB di memoria flash. 2.4 GHz Wi-Fi e Bluetooth/Bluetooth LE versione 4.2 sono disponibili sul lato connettività. Un modulo integrato ultra-low-power (ULP) è disponibile sul chip dell'ESP32 per gestire la modalità "deep sleep". Questo modulo riesce a monitorare alcune periferiche (non tutte) durante la modalità sleep (una specie di ibernazione controllata) rendendolo perfetto per progetti alimentati a batteria.

<img img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/104.png" alt="Schema a blocchi del Tensilica Xtensa 32-bit LX6">

##### Schema a blocchi del Tensilica Xtensa 32-bit LX6
<br>

Con le serie ESP32-S2 (single-core) e ESP-S3 (dual-core) a 56 pin, gli sviluppatori beneficiano del processore Xtensa LX7 a 32 bit. Questo core da 240 MHz offre istruzioni vettoriali, fornendo accelerazione per il codice utilizzato dalle reti neurali e dall'elaborazione del segnale. 

Comprende ovviamente Wi-Fi e Bluetooth, anche se quest'ultimo è aggiornato solo alla versione 5.0. Le periferiche di interfaccia rimangono più o meno le stesse con l'aggiunta del sistema TWAI, una interfaccia automobilistica a due fili. Quest'ultimo è compatibile con ISO 11898-1, altrimenti noto come CAN, uno standard "storico" dei produttori di automobili occidentali. La sicurezza è inoltre potenziata con la disponibilità di crittografia flash e un acceleratore HMAC (Message Authentication Code) basato su hash.


### Il software della piattaforma ESP32

Al 2024 una vasta gamma di tools e codice sono già disponibili per gli sviluppatori. Per chi utilizza Arduino, il modo più facile per iniziare consiste nell'usare lo stesso IDE di Arduino!

 Basta aggiungere la posizione dei pacchetti Arduino-ESP32 tramite File - > Preferenze, quindi selezionare ESP32 da Strumenti - > Board - > Board Manager (Figura 3). Una volta completato, una serie di esempi verrà visualizzata in File -> Esempi, proprio come con qualsiasi piattaforma Arduino standard. Il codice sorgente viene salvato con lo standard '.ino ' come nome file e i programmi seguono la solita impostazione setup() e loop() a cui sei abituato.
 

### Il processore

Processore dual core a 32 bit
L'ESP32 è dotato di un processore dual core a 32 bit con clock fino a 240 MHz. Questa combinazione di potenza e prestazioni lo rende ideale per una varietà di applicazioni IoT.
Wi-Fi 802.11 b/g/n

### Il modulo Wi-Fi
L'ESP32 integra un modulo Wi-Fi 802.11 b/g/n che supporta velocità di trasmissione dati fino a 150 Mbps. Ciò lo rende ideale per applicazioni che richiedono una connessione wireless ad alta velocità, come la trasmissione di dati in tempo reale o la gestione di dispositivi IoT.
Bluetooth 5.0
L'ESP32 integra un modulo Bluetooth 5.0 che supporta velocità di trasmissione dati fino a 2 Mbps. Ciò lo rende ideale per applicazioni che richiedono una connessione Bluetooth ad alta velocità, come la trasmissione di dati audio o la connessione di dispositivi IoT.
25 pin GPIO

## L'utilizzo dell'ESP32

L'ESP32 dispone di 25 pin GPIO che possono essere utilizzati per interfacciarsi con sensori e periferiche. Ciò lo rende versatile e adatto a una varietà di applicazioni. Supporta una ampia gamma di sensori e periferiche, tra cui sensori di temperatura, luce, movimento oltre a display, motori, servocomandi industriali e per modellismo. 

Inoltre è una piattaforma ideale per lo sviluppo di dispositivi indossabili come smartwatch, fitness tracker e altri. È molto piccolo e leggero, il che lo rende ideale per questo tipo di applicazioni.

L'ESP32 può essere utilizzato per sviluppare giochi e applicazioni di intrattenimento. 

Differenza tra ESP32 e ESP8266
Come già accennato in precedenza che ESP32 è il successore di ESP8266, Consente di imparare quali sono le differenze tra ESP32 e ESP8266 con le loro caratteristiche e le specifiche di seguito.

1. ESP32 ha un core aggiuntivo rispetto a ESP8266
2. Il sistema Wi-Fi è più veloce
3. Aumento del numero di pin GPIO (input/output) 
4. Compatibilità con Bluetooth 4.2 e Bluetooth low energy (low energy).

## La scheda tecnica dell'ESP32

Di seguito è riportato lo schema a blocchi dell'ESP32 con tutti i blocchi funzionali del SOC.

<img img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/103.png" alt="esp32 diagramma a blocchi">

#### Diagramma a blocchi dell'ESP32

<br>

### Connettività wireless:
Il chip SOC ESP32 ha connettività WiFi, essendo compatibile con 802.11 b/g/n nella banda 2.4 GHz, raggiungendo velocità fino a 150 Mbit/s. Non funziona con i canali a 5GHz. Include anche la comunicazione Bluetooth compatibile con Bluetooth v4.2 e Bluetooth Low Energy (BLE).

### Core
Il processore è un Tensilica Xtensa 32-bit LX6 dual core. I nomi dei core sono PRO-CPU e APP-CPU. Pro-CPU sta per Protocol CPU e APP-CPU sta per Application CPU. La CPU Protocol è progettata per gestire funzionalità utente come Wi-Fi, Bluetooth e periferiche. La CPU dell'applicazione è progettata per gestire i codici in ESP 32. Entrambi questi core sono collegati ai registri di memoria e indirizzo. I core di LX6 hanno una frequenza di clock di 160 MHz e quella di LX7 è di 240 MHz. La figura seguente mostra la mappatura delle CPU alla memoria.

<img img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/105.png" alt="Schema a blocchi del chip Tensilica Xtensa 32-bit LX6.">

##### Schema a blocchi del chip Tensilica Xtensa 32-bit LX6

<br>
<br>

I microprocessori Tensilica Xtensa LX6 e LX7 hanno un'architettura RISC a 32 bit. Pertanto, le unità di memoria e le periferiche sono progettate in modo tale da poter comunicare con registri di indirizzi a 32 bit. La mappatura dell'architettura è mostrata nel diagramma sottostante in cui si può vedere che tutte le periferiche, ROM e SRAM interne, memoria di comunicazione in tempo reale veloce e lenta, memoria cache e flash esterno, sono tutti mappati con registri a 32 bit.

<img img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/106.png" alt="Mappatura dei chip RISC Tensilica Xtensa LX6 e LX7">

##### Mappatura dei chip RISC Tensilica Xtensa LX6 e LX7

<br>

Il chip ha un co-processore a bassissima potenza che viene utilizzato per eseguire conversioni analogico-digitali e altre operazioni e può funzionare in modalità deep sleep - low-power. In questo modo, si ottiene un consumo elettrico ridottissimo.

Alcuno vantaggi rispetto ad Arduino UNO:

- Frequenza di funzionamento: 240 MHz (esegue le istruzioni 15 volte più veloce di una scheda Arduino UNO)
- Consente di eseguire operazioni con numeri reali (numeri con virgole) in modo molto efficiente.
- Consente di moltiplicare istantaneamente grandi numeri.

Sebbene queste caratteristiche siano trasparenti durante la programmazione, hanno un grande impatto sull'efficienza e sulle dimensioni del codice scritto sul microcontroller.


#### Memoria
Nella maggior parte dei microcontrollori basati su Arduino, ci sono tre tipi di memorie:

- Memoria di programma: per memorizzare il codice.
- Memoria SRAM: per memorizzare le variabili utilizzate nel codice.
- Memoria EEPROM: per memorizzare variabili statiche che non perdono il loro valore anche quando il dispositivo è spento.

L'ESP32 funziona in modo leggermente diverso, infatti ha altri tipi di memorie che di solito sono classificate in interne ed esterne. Le memorie interne sono quelle che sono già incluse nel SoC, e quelle esterne sono quelle che possono essere aggiunte per espandere la capacità del sistema.

Molte schede di sviluppo basate su ESP32 aggiungono memoria esterna per un sistema più performante.

#### Quali sono le Memorie interne:

- Memoria ROM (448 KiB): questa memoria è di sola scrittura, cioè non è possibile riprogrammarla. È qui che vengono memorizzati i codici che gestiscono lo stack Bluetooth, il controllo del Wi-Fi e il bootloader per avviare i programmi utente.
- Memoria SRAM interna (520 KiB): questa memoria viene utilizzata dal processore per memorizzare sia i dati che le istruzioni. Il suo vantaggio è che è molto più facile per il processore accedere rispetto alla SRAM esterna.
- RTC SRAM (16 KiB): questa memoria viene utilizzata dal coprocessore quando il dispositivo funziona in modalità deep sleep .
- Efuse (1Kb): 256 bit di questa memoria sono utilizzati dal sistema stesso e i restanti 768 bit sono riservati ad altre applicazioni.
- Flash embedded (Embedded flash): questa memoria è dove è memorizzato il codice dell'applicazione. 

La quantità di memoria varia a seconda del chip utilizzato:
0 MB (chip ESP32-D0WDQ6, ESP32-D0WD, ESP32-S0WD)
2 MB (circuito integrato ESP32-D2WD)
4 MB (Chip ESP32-PICO-D4)

Per ESP32S che non hanno memoria incorporata o semplicemente quando la memoria è insufficiente per l'applicazione, è possibile aggiungere più memoria esternamente :

#### Espansione di memoria
<div class="alert alert-doks d-flexflex-shrink-1" role="alert">
⚡️ È' possibile aggiungere fino a 16 MB di memoria flash esterna: in questo modo è possibile sviluppare applicazioni estremamente complesse. Supporta anche fino a 8 MB di memoria SRAM esterna. 
</div>

#### Acceleratori hardware di crittografia
Uno dei fattori più importanti in qualsiasi sistema è la sicurezza. Ecco perché l'ESP32 ha acceleratori di algoritmi mirati alla crittografia:

1. AES (FIPS PUB 197)
2. SHA (FIPS PUB 180-4)
3. RSA
4. ECC

Questi acceleratori consentono di aumentare la velocità di funzionamento e ridurre la complessità del software consentendo la crittografia e la de-crittografia dinamica. In questo modo, il sistema è protetto da possibili attacchi di hacking che cercano di ottenere il codice memorizzato.


#### La scheda di sviluppo DevKitC

L'ESP32 è un chip versatile ed ampiamente adottato dalla industria "automotive" per esempio, ma per essere usato da hobbysti e programmatori ha bisogno di una scheda di sviluppo che provveda alla alimentazione e alla connessione seriale.

<img img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/107.jpg" alt="La scheda di sviluppo completa di alimentatore e interfaccia serial UART con microUSB">

Il piccolo chip che provvede alla alimentazione si chiama AMS1117 e lo vedi al centro della scheda vicino al bridge UART. 

<br>
<br>

<img img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/108.png" alt="La piedinatura dell'ESP32">

##### piedinatura del modulo ESP32 WROOM

Come potete vedere dall'immagine sopra del diagramma di piedinatura del modulo ESP32 WROOM, tutti i diversi tipi di pin sono menzionati in diversi colori che spiegheremo in dettaglio di seguito .

#### I pin digitali

> L'ESP32 ha un totale di 34 pin digitali. Questi pin sono simili ai pin digitali Arduino che consentono di aggiungere display a LED, display OLED, sensori, pulsanti, cicalini, ecc. ai nostri progetti.

La maggior parte di questi pin supporta anche l'uso di pull-up interno, pull-down e stato ad alta impedenza. Ciò li rende ideali per il collegamento di pulsanti e tastiere a matrice, nonché per l'applicazione di tecniche di controllo a LED come il noto Charlieplexing.

Il modulo WROOM ESP32 ha 25 pin GPIO di cui ci sono solo pin di ingresso, pin con pull up di ingresso e pin senza pullup interno.

La corrente massima assorbita per un singolo GPIO è 40mA secondo la sezione "Condizioni operative consigliate" nella scheda tecnica ESP32.

Ingresso solo pin (senza resistente di PULLUP)

- GPIO 34
- GPIO 35
- GPIO 36
- GPIO 39

##### Pin con pull up INPUT_PULLUP (dispongono di una resistenza di 10KOhm)

- GPIO14
- GPIO16
- GPIO17
- GPIO18
- GPIO19
- GPIO21
- GPIO22
- GPIO23

##### Pin senza pull up interno

GPIO13
GPIO25
GPIO26
GPIO27
GPIO32
GPIO33

##### ADC (convertitori analogico-digitali)
Alcuni dei pin elencati nel diagramma di piedinatura possono anche essere utilizzati per interagire con sensori analogici, come i pin analogici di una scheda Arduino.

Per questo, l'ESP32 ha una risoluzione a 12 bit(0-4096, il che significa che quando la tensione osservata è 0 il valore è 0 e quando si osserva una tensione massima come 3,3 v il valore va a 4096), convertitore analogico-digitale a 18 canali, il che significa che è possibile prendere letture da un massimo di 18 sensori analogici.


##### Questi i pin di ingresso analogico:

- ADC1_CH0 (GPIO 36)
- ADC1_CH1 (GPIO 37)
- ADC1_CH2 (GPIO 38)
- ADC1_CH3 (GPIO 39)
- ADC1_CH4 (GPIO 32)
- ADC1_CH5 (GPIO 33)
- ADC1_CH6 (GPIO 34)
- ADC1_CH7 (GPIO 35)
- ADC2_CH0 (GPIO 4)
- ADC2_CH1 (GPIO 0)
- ADC2_CH2 (GPIO 2)
- ADC2_CH3 (GPIO 15)
- ADC2_CH4 (GPIO 13)
- ADC2_CH5 (GPIO 12)
- ADC2_CH6 (GPIO 14)
- ADC2_CH7 (GPIO 27)
- ADC2_CH8 (GPIO 25)
- ADC2_CH9 (GPIO 26)


DAC (Convertitori da digitali ad analogici)
I segnali PWM sono utilizzati sulla maggior parte delle schede Arduino per generare tensioni analogiche . L'ESP32 ha due convertitori da digitale ad analogico a 8 bit.

### Il successo del'ESP32

Con queste premesse possiamo capire come la scheda abbia scalato le classifiche di vendita dell'IOT. Seppure venga percepita come una **alternativa** rispetto ad Arduino, ne eredita moltissimi tools e librerie. Gli appassionati che vogliono provare il nuovo sistema possono dunque godere delle maggiori prestazioni senza perdere tempo con nuovi software...

<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it -  post - R.138.0.5.0</p>  