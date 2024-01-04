---
title: "Cos'è l'ESP32"
description: "Cos'è l'ESP32"
excerpt: "..."
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

L'ESP32 è una scheda elettronica integrata (SoC) sviluppata da Espressif Systems. È un chip a basso costo e ad alte prestazioni che offre una varietà di funzionalità, tra cui:

Processore dual core a 32 bit con clock fino a 240 MHz
Wi-Fi 802.11 b/g/n
Bluetooth 5.0
25 pin GPIO
Supporto per sensori e periferiche

L'ESP32 è una piattaforma versatile che può essere utilizzata per una varietà di applicazioni, tra cui:

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">
- Internet delle cose (IoT)<br>
- Dispositivi indossabili<br>
- Giochi e intrattenimento<br>
- Sistemi di automazione domestica<br>
</div>


### Il processore

Processore dual core a 32 bit
L'ESP32 è dotato di un processore dual core a 32 bit con clock fino a 240 MHz. Questa combinazione di potenza e prestazioni lo rende ideale per una varietà di applicazioni IoT.
Wi-Fi 802.11 b/g/n

### Il modulo Wi-Fi
L'ESP32 integra un modulo Wi-Fi 802.11 b/g/n che supporta velocità di trasmissione dati fino a 150 Mbps. Ciò lo rende ideale per applicazioni che richiedono una connessione wireless ad alta velocità, come la trasmissione di dati in tempo reale o la gestione di dispositivi IoT.
Bluetooth 5.0
L'ESP32 integra un modulo Bluetooth 5.0 che supporta velocità di trasmissione dati fino a 2 Mbps. Ciò lo rende ideale per applicazioni che richiedono una connessione Bluetooth ad alta velocità, come la trasmissione di dati audio o la connessione di dispositivi IoT.
25 pin GPIO

## La piedinatura
L'ESP32 dispone di 25 pin GPIO che possono essere utilizzati per interfacciarsi con sensori e periferiche. Ciò lo rende versatile e adatto a una varietà di applicazioni.
Supporto per sensori e periferiche
L'ESP32 supporta una varietà di sensori e periferiche, tra cui sensori di temperatura, sensori di luce, sensori di movimento, display, motori e altro ancora. Ciò lo rende ideale per una varietà di applicazioni IoT.
Applicazioni

L'ESP32 è una piattaforma versatile che può essere utilizzata per una varietà di applicazioni, tra cui:

Internet delle cose (IoT)
L'ESP32 è una piattaforma ideale per lo sviluppo di dispositivi IoT. È economico, ad alte prestazioni e dispone di un'ampia gamma di funzionalità.
Dispositivi indossabili
L'ESP32 è una buona scelta per lo sviluppo di dispositivi indossabili, come smartwatch, fitness tracker e altri dispositivi indossabili. È piccolo e leggero, il che lo rende ideale per questo tipo di applicazioni.
Giochi e intrattenimento
L'ESP32 può essere utilizzato per sviluppare giochi e applicazioni di intrattenimento. È potente e versatile, il che lo rende ideale per questo tipo di applicazioni.
Sistemi di automazione domestica
L'ESP32 può essere utilizzato per sviluppare sistemi di automazione domestica. È economico e facile da usare, il che lo rende ideale per questo tipo di applicazioni.

Che cosa è ESP32?
ESP32 è creato da Espressif Systems con una serie di SoC (System on a Chip) e moduli a basso costo con basso consumo energetico.

Questo nuovo ESP32 è il successore del noto ESP8266 (diventato molto popolare con il suo WiFi integrato). ESP32 non solo ha costruito in WiFi, ma ha anche Bluetooth e Bluetooth a bassa energia. In altre parole possiamo definire ESP32 come "ESP8266 sugli steroidi".

Il chip ESP32 ESP32-D0WDQ6 è basato su un microprocessore dual core Tensilica Xtensa LX6 con una frequenza operativa fino a 240 MHz.

Il piccolo pacchetto ESP32 ha un alto livello di integrazioni come:

Interruttori antenna
Balun per controllare RF
Amplificatore di potenza
Amplificatore di ricezione a basso rumore
Filtri e moduli di gestione dell'alimentazione
Oltre a tutto ciò, raggiunge un consumo energetico molto basso attraverso funzioni di risparmio energetico, tra cui la sincronizzazione dell'orologio e molteplici modalità di funzionamento. La corrente di riposo del chip ESP32 è inferiore a 5 µA, il che lo rende lo strumento ideale per i progetti alimentati a batteria o le applicazioni IoT .

Differenza tra ESP32 e ESP8266
Come già accennato in precedenza che ESP32 è il successore di ESP8266, Consente di imparare quali sono le differenze tra ESP32 e ESP8266 con le loro caratteristiche e le specifiche di seguito.

ESP32 ha un core aggiuntivo rispetto a ESP8266
Wi-Fi più veloce
Aumento del numero di pin GPIO (input/output) 
Compatibilità con Bluetooth 4.2 e Bluetooth low energy (low energy).
Inoltre, l'ESP32 è dotato di pin sensibili al tocco che possono essere utilizzati per “svegliare” l'ESP32 dalla modalità deep sleep e un sensore ad effetto hall integrato.

Sebbene entrambe le schede siano estremamente economiche, l'ESP32 è leggermente più costoso dell'ESP8266. ESP32 lo merita in quanto ha più funzionalità di ESP8266.

Abbiamo differenziato le principali specifiche tecniche tra l'ESP8266 e l'ESP32 nella tabella sottostante.

CARATTERISTICHE ESP8266 ESP32
esp8266 circuito integrato esp32 circuito integrato
Microprocessore Xtensa Single-core 32-bit L106 Xtensa Dual-Core 32-bit LX6 con 600 DMIPS
Wi-Fi (802.11 b/g/n) HT20 HT40
Bluetooth non dispone di Bluetooth 4.2 y BLE
Frequenza di funzionamento (valore tipico) 80 MHz 160 MHz
VERGOGNA Non disponibile 448 KB
Flash non disponibile 520 KB
GPIO 17 34
PWM (hardware) Non disponibile Non disponibile
PWM (software) 8 canali 16 canali
SPI 2 4
I2C 1 2
I2S 2 2
ARTICOLO 2 2
Risoluzione ADC a 10 bit Risoluzione a 12 bit
PUÒ No Sì
Interfaccia MAC Ethernet No Sì
Sensore di tocco No Sì
Sensore di temperatura No Sì (solo le vecchie versioni)
Sensore effetto hall No Sì
Temperatura di lavoro-40ºC a 125ºC-40ºC a 125ºC
ESP32 Blocchi funzionali e caratteristiche
Sebbene nella tabella precedente si possano notare alcune caratteristiche tecniche principali dell'ESP32, la verità è che non tutto è nella tabella. In realtà, mancano molti dettagli. Per conoscere tutte le caratteristiche di questo magnifico SoC è necessario fare riferimento ai seguenti documenti offerti dallo sviluppatore Espressif.

Scheda tecnica ESP32
Manuale di riferimento tecnico ESP32
ESP32 Schema a blocchi architettonico
Di seguito è riportato lo schema a blocchi architettonico di ESP32 che mostra tutti i blocchi funzionali di ESP32 SOC.

esp32 diagrammi blocco architettonico che vedete dal diagramma a blocchi di cui sopra consente di imparare tutti i singoli blocchi in dettaglio di seguito.

Connettività wireless:
Il chip SOC ESP32 ha connettività WiFi, essendo compatibile con 802.11 b / g/n nella banda 2.4 GHz, raggiungendo velocità fino a 150 Mbit / s. Include anche la comunicazione Bluetooth compatibile con Bluetooth v4.2 e Bluetooth Low Energy (BLE).

esp32 wifi bluetooth e blocchi radio

Il blocco radio è strettamente legato ai moduli di comunicazione wireless . In realtà, questo è quello che effettivamente trasmette e riceve le informazioni.

Cioè, prende i dati digitali dai moduli WiFi e Bluetooth e li converte in segnali elettromagnetici che viaggiano attraverso l'aria per comunicare con il telefono cellulare o il router .

Esegue anche l'operazione inversa: traduce le onde elettromagnetiche generate da altri dispositivi in dati digitali che i moduli WiFi e Bluetooth sono in grado di interpretare.

Core
Come abbiamo già detto che l'ESP32 ha microprocessori dual core a bassa potenza Tensilica Xtensa 32-bit LX6.

processori core esp32

Come si può osservare dall'immagine del blocco core sopra, ha un co-processore a bassissima potenza che viene utilizzato per eseguire conversioni analogico-digitali e altre operazioni mentre il dispositivo funziona in modalità deep sleep low-power. In questo modo, si ottiene un consumo molto basso da parte del SoC.

È importante notare che questi processori offrono grandi vantaggi tipici di un processore di segnale digitale :

Frequenza di funzionamento: 240 MHz (esegue le istruzioni 15 volte più veloce di una scheda Arduino UNO)
Consente di eseguire operazioni con numeri reali (numeri con virgole) in modo molto efficiente.
Consente di moltiplicare istantaneamente grandi numeri.
Sebbene queste caratteristiche siano trasparenti durante la programmazione, hanno un grande impatto sull'efficienza e sulle dimensioni del codice scritto sul microcontrollore.
Memoria
Nella maggior parte dei microcontrollori basati su Arduino, ci sono tre tipi di memorie:

Memoria di programma: per memorizzare lo schizzo.
Memoria SRAM: per memorizzare le variabili utilizzate nel codice.
Memoria EEPROM: per memorizzare variabili che non perdono il loro valore anche quando il dispositivo è spento.
esp32 unità di memoria schema a blocchi

In ESP32 questo non accade, infatti ci sono più tipi di memorie che di solito sono classificate in interne ed esterne .

Le memorie interne sono quelle che sono già incluse nel SoC, e quelle esterne sono quelle che possono essere aggiunte per espandere la capacità del sistema .

Molte schede di sviluppo basate su ESP32 aggiungono memoria esterna per un sistema più performante.

ESP32 Memorie interne e loro funzioni:

Memoria ROM (448 KiB): questa memoria è di sola scrittura, cioè non è possibile riprogrammarla. È qui che vengono memorizzati i codici che gestiscono lo stack Bluetooth , il controllo del livello fisico Wi-Fi, alcune routine di uso generale e il bootloader per avviare il codice dalla memoria esterna .
Memoria SRAM interna (520 KiB): questa memoria viene utilizzata dal processore per memorizzare sia i dati che le istruzioni. Il suo vantaggio è che è molto più facile per il processore accedere rispetto alla SRAM esterna.
RTC SRAM (16 KiB): questa memoria viene utilizzata dal co-processore quando il dispositivo funziona in modalità deep sleep .
Efuse (1 Kilobit): 256 bit di questa memoria sono utilizzati dal sistema stesso e i restanti 768 bit sono riservati ad altre applicazioni.
Flash embedded (Embedded flash): Questa memoria è dove è memorizzato il codice dell'applicazione. La quantità di memoria varia a seconda del chip utilizzato:
0 MB (chip ESP32-D0WDQ6, ESP32-D0WD, ESP32-S0WD)
2 MB (circuito integrato ESP32-D2WD)
4 MB (Chip ESP32-PICO-D4)
Per ESP32S che non hanno memoria incorporata o semplicemente quando la memoria è insufficiente per l'applicazione, è possibile aggiungere più memoria esternamente :

È possibile aggiungere fino a 16 MB di memoria flash esterna . In questo modo è possibile sviluppare applicazioni più complesse.
Supporta anche fino a 8 MB di memoria SRAM esterna .
Pertanto, è difficile per te trovarti limitato nella memoria quando implementi un'applicazione che utilizza questa piattaforma.

Acceleratori hardware di crittografia
Blocco di accelerazione hardware di crittografia ESP32

Uno dei fattori più importanti in qualsiasi sistema è la sicurezza. Ecco perché l'ESP32 ha acceleratori di algoritmi mirati alla crittografia:

AES (FIPS PUB 197)
SHA (FIPS PUB 180-4)
RSA
ECC
Questi acceleratori consentono di aumentare la velocità di funzionamento e ridurre la complessità del software consentendo la crittografia e la decrittografia dinamica. In questo modo, il sistema è protetto da possibili attacchi di hacking che cercano di ottenere il codice memorizzato.

Caratteristiche periferiche
L'ESP32 ha una grande serie di periferiche che puoi vedere dallo schema a blocchi sopra.

ESP32 Schema di piedinatura e perni:
ESP 32 schema di piedinatura

Come potete vedere dall'immagine sopra del diagramma di piedinatura del modulo ESP32 WROOM, tutti i diversi tipi di pin sono menzionati in diversi colori che spiegheremo in dettaglio di seguito .

Pin digitali
L'ESP32 ha un totale di 34 pin digitali . Questi pin sono simili ai pin digitali Arduino che consentono di aggiungere display a LED, display OLED, sensori, pulsanti, cicalini, ecc. ai nostri progetti.

La maggior parte di questi pin supporta anche l'uso di pull-up interno, pull-down e stato ad alta impedenza. Ciò li rende ideali per il collegamento di pulsanti e tastiere a matrice, nonché per l'applicazione di tecniche di controllo a LED come il noto Charlieplexing.

Il modulo WROOM ESP32 ha 25 pin GPIO di cui ci sono solo pin di ingresso, pin con pull up di ingresso e pin senza pullup interno.

La corrente massima assorbita per un singolo GPIO è 40mA secondo la sezione "Condizioni operative consigliate" nella scheda tecnica ESP32.

Ingresso solo pin: 

GPIO 34
GPIO 35
GPIO 36
GPIO 39
Pin con pull up INPUT_PULLUP

GPIO14
GPIO16
GPIO17
GPIO18
GPIO19
GPIO21
GPIO22
GPIO23
Perni senza pull up interno

GPIO13
GPIO25
GPIO26
GPIO27
GPIO32
GPIO33
ADC (convertitori analogico-digitali)
Alcuni dei pin elencati nel diagramma di piedinatura possono anche essere utilizzati per interagire con sensori analogici, come i pin analogici di una scheda Arduino .

Per questo, l'ESP32 ha una risoluzione a 12 bit(0-4096, il che significa che quando la tensione osservata è 0 il valore è 0 e quando si osserva una tensione massima come 3,3 v il valore va a 4096), convertitore analogico-digitale a 18 canali, il che significa che è possibile prendere letture da un massimo di 18 sensori analogici.

Ciò consente di sviluppare applicazioni connesse molto compatte, anche quando si utilizzano più sensori analogici.

Pin di ingresso analogico:

ADC1_CH0 (GPIO 36)
ADC1_CH1 (GPIO 37)
ADC1_CH2 (GPIO 38)
ADC1_CH3 (GPIO 39)
ADC1_CH4 (GPIO 32)
ADC1_CH5 (GPIO 33)
ADC1_CH6 (GPIO 34)
ADC1_CH7 (GPIO 35)
ADC2_CH0 (GPIO 4)
ADC2_CH1 (GPIO 0)
ADC2_CH2 (GPIO 2)
ADC2_CH3 (GPIO 15)
ADC2_CH4 (GPIO 13)
ADC2_CH5 (GPIO 12)
ADC2_CH6 (GPIO 14)
ADC2_CH7 (GPIO 27)
ADC2_CH8 (GPIO 25)
ADC2_CH9 (GPIO 26)
DAC (Convertitori da digitali ad analogici)
I segnali PWM sono utilizzati sulla maggior parte delle schede Arduino per generare tensioni analogiche . L'ESP32 ha due convertitori da digitale ad analogico a 8 bit .


<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it -  post - R.138.0.5.0</p>  