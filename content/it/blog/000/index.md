---
title:         "000"
description:   "000"
excerpt:       "..."
date:          2024-03-19T09:19:42+01:00
lastmod:       2024-03-19T09:19:42+01:00
draft:         true
weight:        50
images:        ["header.jpg"]
categories:    ["News"]
tags:          [""]
contributors:  ["sergio rame"]
pinned:        false
homepage:      false
mermaid:       true
---



++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

## 1.1   Presentazione - "Come programmare con ESP32"               - breve articolo

La automazione elettronica o I.o.T è stata finora un "lusso" per aziende o abitazioni di un certo livello: Seppure sistemi come "Alexa" di Amazon o i dispositivi "SONOFF" abbiano raggiunto livelli di prezzo e diffusione sorprendenti, non possiamo ancora parlare di una vera integrazione dei sistemi o di case robotizzate. I dispositivi commerciali stentano a trovare un procotollo comune di comunicazione e nuovi, migliori sistemi tendono a privilegiare gli algoritmi della AI piuttosto che la pura "esecuzione" di ordini umani.

Non sappiamo come saranno i nuovi sistemi di automazione ma la disponibilità di schede come "Arduino" o ESP32 ci permette già adesso di risolvere a costi limitati dei singoli, preziosi compiti per cui non vogliamo aspettare le soluzioni universali di "Google Home", "Alexa" o Samsung "SmartThings".

Tutti questi sistemi possono mantenere bassi costi grazie alla produzione in scala massiccia di CPU e controller e sarebbe un peccato lasciare solo alle multinazionali lo sfruttamento di questo promettentissimo sviluppo della tecnologia

Se il costo dell'hardware non pare più un problema, anche i sistemi e i siti di condivisione tipo "Github.com" consentono ai singoli e micro aziende di progettare programmi a costo zero. In questo libro vederemo come sia possibile costruire alcune aplicazioni dell' Iot usando solo programmi Open Source o gratis per essere più chiari.

Il panorama del software Open Source ha raggiunto recentemente vette di qualità estrema come testimoniato da programmi Node-RED di IBM o protocolli come MQTT. Il nostro obiettivo è costruire da zero applicazioni mirate per i nostri problemi  e collegarle ad internet fruttando solo dei protocolli "Open". In tal modo non saremo più soggetti alla schiavitù degli aggiornamenti, o alla condivisione forzata dei nostri dati con i colossi americani e non solo.

Abbiamo scelto ESP32 rispetto al più classico Arduino per una seria di motivi; il primo certamente la connettività a tutta prova di questo controller e in seconda battuta per il favorevolissimo rapporto prestazioni/prezzo. Distribuire la elaborazione dati tra dieci ESP32 può costare meno che impiegare una singola CPU Intel e questo fatto tende a influenzare la topologia dei sistemi IoT: Meno reti e più controller locali, autonomi e integrati.

Seguendo questa filosofia alla fine del libro poterete realizzare una vera centralina di controllo atmosferica con sensori  multipli e condivisione dati via HTML.



# 1.2   Curriculum                                                 - blog in genere 

L'autore insieme al collega Sergio Rame cura il blog "www.robotdazero.it" attivo dal 2017 e incentrato sulla comune passione per l'IoT e la programmazione in C. Il blog contiene news e articoli introduttivi sull'ESP32 senza trascurare il capostipite Arduino e propone progetti con programmi totalmente free e servizi di elaborazione dati in cloud con il marchio "Kaspian". Il blog si sostenta con la vendita di prodotti stampati in 3D via il nostro ecommerce. Se volete restare aggiornati sulle novità del blog potete iscrivervi alla nostra newsletter e nel contempo usufruire di una agevolazione del 20% sul vostro primo acquisto.

1.3   Introduzione                                               - blog/esp32-i-segreti-del-suo-successo/
1.4   Cos'è l'ESP32                                              - blog/esp32-i-segreti-del-suo-successo/
1.5   Caratteristiche principali dell'ESP32                      - blog/esp32-i-segreti-del-suo-successo/
1.6   ESP32 vs Arduino                                           - blog/esp32-i-segreti-del-suo-successo/#un-breve...

## 1.7   Sommario     

In questo capitolo introduttivo abbiamo visto a fondo le potenzialità dell' ESP32 e accennato ad alcune prerogative di questa sorprendente scheda rispetto ai prodotti concorrenti. Nel resto del libro esploreremo ulteriormente queste peculiarità e vederemo quali accorgimento software sono stati predisposti dalla case madre Espressif per gestire la rete dati lungo raggio ESP-NOW e le modalità di connessione al Wi-Fi


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

2.1   Qualche breve nozione di elettronica                       - blog/introduzione-alla-elettronica/
2.2   La differenza tra corrente e tensione                      - blog/la-differenza-tra-corrente-e-tensione/
2.3   Cosa sono le resistenze                                    - blog/cosa-sono-le-resistenze-elettriche/ 
2.4   Il codice di colore delle resistenze                       - blog/cosa-sono-le-resistenze-elettriche/ 
2.5   I Transistor                                               - blog/introduzione-ai-transistor/
2.6   Il TIP120 per pilotare motori e lampade                    - blog/come-pilotare-un-motore-elettrico-usando-ESP32

## 2.7   Sommario                                                   - breve articolo

In questo paragrafo abbiamo illustrato le fondamentali nozioni elettronica senza le quali ogni ulteriore progresso sarebbe stato incerto e faticoso. Consigliamo i lettori di rileggere le parti sulla legge di Ohm come un principio fondamentale dell'elettronica. Inoltre sarebbe difficile sopravvalutare il ruolo delle resistenze nei moderni dei circuiti elettronici e per questo motivo i due argomenti sono il bagaglio necessario per passare ai circuiti a semiconduttore. La distinzione tra corrente e tensione, seppure banale in apparenza, riesce sempre ostica non appena si esce dalla teoria e si prova a calcolare le resistenza da utilizzare per limitare la tensione in un circuito reale. 

Consiglio vivamente di rileggere questo articolo anche dopo avere intrapreso la "fase" della programmazione in C++. 

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

## 3.1   Come alimentare l'ESP32                                    - breve articolo

Quando progettiamo un pur semplice circuito per ESP32 dobbiamo pianificare in anticipo la fonte di alimentazione (singola o lutipla) della scheda. Alcune applicaziojni come sistemi di apertura dei cancelli o axinamento di motorini elettrico possono certamente utilizzare la corrente destinata ai dispositivi ontrollati. Altrettanto semplice è la alimentazione dei dispositivi collegati al nostro PC. Ma non sempre la soluzione è così immediata: Dispositivi mobili come i droni impongono letteralmente l'utilizzo di accumulatori ai polimeri di litio con annessi circuiti di ricarica. Dei sensori a basso consumo possono accontentarsi di un banale *power bank* per smartphone. 


3.2   Alimentazione con presa USB                                - blog/esp32-e-la-sua-alimentazione/ 
3.3   Alimentazione tramite il pin VIN                           - blog/esp32-e-la-sua-alimentazione/
3.4   Come ridurre il consumo energetico                         - blog/esp32-e-la-sua-alimentazione/
3.5   La modalità “sleep” dell'ESP32                             - blog/esp32-e-la-sua-alimentazione/
## 3.6   Sommario    

In questo capitolo abbiamo visto principalmente come ridurre il consumo del controller ESP32 e quali tattiche progettuali adottare per lo stesso scopo. In linea di massima consigliamo di provare SEMPRe i vostri progetti con alimentazione USB con un semplice alimentatore per telefonino di buona qualità. Il motivo per cui adottare tale strategia risiede nella semplificazione dello sviluppo: Potete progettare programmi e circuiteria supponendo una tensione stabile a 5V e solo dopo preoccuparvi di integrare il dispositivo con accumulatori al litio o caricabatteria solari.


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


4.1   La manutenzione dell’ESP32                                 - blog/come-resettare-lesp32/
4.2   Reset immediato                                            - blog/come-resettare-lesp32/
4.3   Quando resettare completamente                             - blog/come-resettare-lesp32/
4.4   Come effettuare il reset completo                          - blog/come-resettare-lesp32/
4.5   Come cancellare la memoria FLASH                           - blog/come-resettare-lesp32/

## 4.6   Sommario    

Abbiamo visto in maniera estesa un aspetto estremamente sottovaluto nell'utilizzo dell'ESP32. La manutenzione di una scheda elettronica appare certamente molto "superflua" se si ignora la complessità di un dispositivi programmabile e le differenti memorie di cui dispone e i loro tipi di funzionamento. Nell'utilizzo reale della scheda infortuni con schede impossibili da programmare sono comuni e aldilà di casi semplici come un cavetto USB difettoso, in certi casi la soluzione migliore può essere il reset completo della scheda. Per i più esperti il controllo con multimetro e oscilloscopio costituisce un ulteriore grado di perizia necessario per un lavoro professionale, noi in questo libro ci siamo limitati ai casi più comuni. Anche la idea di sostutire immediatamente una scheda sospetta è una ipotesi realistica visto il suo bassissimo costo.




++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

## 5.1   Introduzione alla programmazione dell'ESP32  

Il cuore di questa pubblicazione è certamente lo sviluppo software in ambiente ESP32. NEl capitolo affronteremo tutte le tematiche e le soluzioni pratiche per agevolare il tuo percorso di crescita. Andremo a fondo nel descrivere i due possibili approcci alla programmazione in ambiente grafico e in modalità testo. fermo restando che si tratta di una utile semplificazione. Nulla impedisce di usare Arduino Ide dalla linea di comando così come PlatformIO funziona egregiamente con Visual Studio Code. Ti presenteremo le due alternative lasciando al lettore la preferenza. Spesso comunque le due modalità di lavoro tendono a divergere e chi preferisce la interfaccia grafica tende a mettere da parte il programma GIT da linea di comando. Secondo noi questo è un errore gravissimo perchè tende alla unga banalizzare l'utilizzo di GIT abbandonando le funzionalità avanzate come branching, merging, rebasing etc che possono fare la differenza nel lavoro di gruppo e non solo. Sta al lettore decidere l'approccio iniziale e sviluppare le sue competenze secondo i gusti e inclinazioni personali.



5.2   Come installare l'ambiente di sviluppo                     - blog/come-installare-lide-di-arduino/
5.3   Come eseguire alcuni semplici programmi con Arduino IDE    - breve articolo
5.4   Installiamo PlatformIO                                     - blog/come-installare-platformio/
5.5   Come compilare un programma con PlatformIO                 - blog/come-compilare-un-programma-con-platformio/
5.6   Come installare il programma GIT                           - blog/come-installare-il-programma-git
5.7   Come funziona il makefile di Platformio                    - blog/come-funziona-il-makefile-di-platformio
5.8   Alcuni semplici programmi per l'ESP32                      - breve testo
5.9   Come far lampeggiare il LED interno dell'ESP32             - blog/come-far-lampeggiare-il-led-interno-dellesp32
5.10  Come collegare un LED esterno ad ESP32                     - blog/come-collegare-un-led-esterno-ad-esp32 
5.11  Come leggere una porta analogica con ESP32                 - blog/come-leggere-una-porta-analogica-con-esp32/


## 5.12 Sommario   

Usare Arduino IDE per la programmazione IoT è l'approccio standard alla programmazione Iot e certamente questo tool ha  grandi doti di flessibilità e potenza. Detto questo, chi volesse usare GIT in maniera estesa vorrà come conseguenza provare anche PlatformIO la interfaccia a linea di comando. con PlatformIO abbiamo il grande vantaggio di "fissare" tipo e versione delle librerie usate dal programma. A tale scopo ci viene in aiuto il file di configurazione platformio.ini. Con platformio.ini possiamo letteralmente installare un programma facendo "copia e incolla" di tre righe di testo. Molte persone potrebbero essere attirate dalla semplicità di questa idea e abbandonare Arduino IDE.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

## 6.1   Primi passi con i sensori

Fino ad ora abbiamo visto quanto può essere immediato leggere un valore di tensione da una resistenza variabile o usare un transistor come un interruttore, ma tali compiti apparentemente misteriosi per un principiante si rivelano di facile soluzione grazie alle librerie standard di ESP32. Spesso la parte "attiva" di tali programmi si riduce ad una sola riga nel "setup()" del codice e una all'interno della funzione "loop()".

Molto diverso è l'approccio software verso i sensori per una serie di motivi. PEr iniziare alcuni funzionano in maniera intelligente e digitale, ma molti forniscono solo un valore di tensione da interpretare con delle istruzioni non semplicissime. Ad esempio misurare delle distanze con i sensori ad ultrasuoni è un compito tutt'altro che banale perchè coinvolge la velocità del suono al livello del mare. Nei casi più complicati che lasciamo ad altre pubblicazioni, il sensore potrebbe essere usato ad altezza e temperature fuori standard, fallendo la misurazione esatta!

In sensori di cui ci occuperemo sono soprattutto quelli relativi a gas e inquinamento di cui si sente la necessita assoluta nei nostri appartamenti, spesso attrezzati con serbatoi o impianti GPL, metano, propano. Nel capitolo vedremo come risolvere tutta la tematica relativa al loro utilizzo nei nostri programmi e nel progetto conclusivo useremo le conoscenze acquisite per costruire una centralina di controllo dalle caratteristiche professionali.




6.2   Come leggere un semplice sensore - DHT11                   - blog/come-leggere-il-sensore-dht11-con-esp32/
6.3   I sensori compatibili con l'ESP32                          - solo breve introduzione
6.4   Sensori di temperatura                                     - blog/i-sensori-di-temperatura-per-la-robotica/
6.5   Centralina multi sensore                                   - blog/una-centralina-multi-sensore-con-esp32/


## 6.6   Sommario

I sensori sono la parte principale di un impianto IoT perchè determinano le scelte che tendiamo a compiere sui comandi e interruttori. In caso di impianti controllati soltanto dalla Intelligenza Artificiale, ipotesi per nulla remota al giorno d'oggi, i sensori sarebbero la parte principale dell'impianto. La loro scelta, lettura e integrazione diventa in questo caso il "core" del programma, su cui spendere le nostre maggiori risorse di tempo, collaudi e controlli.



++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


## 7.1   Introduzione ad ESPNOW

Abbiamo altre volte sottolineato come la ESP32 rappresenti la scheda controller ideale in progetti dall connettività impegantiva e in questo capitolo vedremo come le peculiarità della cheda cinese (ma di progettazione made in USA) possono risolvere un proble annoso di tuule installazioni IoT, ovvero come comunicare su lunge distanza oltre i 40/50 metri sei normali router Wi-Fi. Il sistema ESP-NOW e il suo prootocollo di trasmissione ci aiuteranno ad amopliare le potenzialitò applicative della sched senza impare troppe cose nuove o perdere la compatibilità con la connessione Wi-Fi. Vedremo inoltre come si possa integrare senza problemi una ESP32CAM (una vesrione dotata di antenna radio) nel nostro progetto pratico senza modificare in alcun modo il programma sorgente.



7.2   Trovare indirizzo MAC di un ESP32                          - blog/come-iniziare-con-esp32-e-la-rete-mesh-esp-now/
7.3   Connettere due ESP32 via ESPNOW                            - blog/come-iniziare-con-esp32-e-la-rete-mesh-esp-now/
7.4   Il problema della connessione simultanea WIFI ed ESPNOW    - blog/la-connessione-simultanea-tra-wifi-ed-espnow/


## 7.5   Sommario       

Abbiamo visto come ESP-NOW sia un sistema facile e potente per aggirare le limitazione del Wi-Fi e come esso garantisca prestazioni accettabili lettalmente a costo zero, a parte l'acquisto opzionale di una piccola antenna. Con questa tecnologia specifica per ESP32 ma disponibile in formto sorgente su Github.com, possiamo evitare costi e complicazioni di altre soluzioni come le schede Lo.ra. e i router satellitari.

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


8.1   La gestione dei sensori ambientali con ESP32               - blog/i-sensori-ambientali-ed-esp32/
8.2   Come scrivere un server web con ESP32                      - blog/come-scrivere-un-server-web-con-esp32/
8.3   I sensori compatibili con l'ESP32                          - blog/i-sensori-compatibili-con-esp32/
8.4   Sensori di temperatura                                     - blog/i-sensori-di-temperatura-per-la-robotica/
8.5   Sensori di gas tossici                                     - MQ2/MQ135 da /blog/una-centralina-multi-sensore ...
8.6   Una stazione di monitoraggio ESPNOW + WIFI!!               - blog/una-centralina-meteo-con-esp32-esp-now-e-wi-fi/

## 8.7   Sommario  

In questo capitolo abbiamo visto le differenti categorie di sensori compatibili con ESP32 e come integrare due o più sensori nello stesso progetto. Abbiamo selezionato dei sensori a basso costo e basso consumo: Il progettino finale riesce sorprendentemente ad far funzionare tre sensori e l'ESP32 con una singola USB! Gli insight guadagnati nella lettura del capitolo ti aiuteranno a progettare da solo i tuoi apparati, una soddisfazione maggiore della semplice costruzione dei progetti. Se riuscirai a comprendere appieno questo e il prossimo capitolo (il nono) avrai a disposizione tutto il materiale per estrapolare le tue idee e creare dei dispositivi tuoi e originali.


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


9.1  I sensori ad ultrasuoni                                     - blog/usare-gli-ultrasuoni-con-i-robot/ 
9.2  Il sensore ad ultrasuoni HC-SR04                            - blog/il-sensore-ad-ultrasuoni-hc-sr04/
9.3  Scrivere su un display                                      - blog/come-scrivere-su-un-display-lcd-con-esp32/
9.4  Un Profondimetro digitale impermeabile                      - una-centralina-elettronica-per-controllare ...

## 9.5  Sommario   

I sensori ad ultrasuoni ormai onnipresenti nelle vetture e in realtà i migliori fra quelli in commercio sono versioni adattate dei sensori per paraurti. Anche le versioni impermeabili derivano stranamente dallo stesso tipo di sensore. Imparare a leggerne e intrpretare il valore ti darà un boost importante nel tuo hobby o nella tua carriera. Per utilizzarli nelle tue creazione ti basterà copiare la parte ade essi dedicata (variabili e istruzione) oppure molto più semlicemente potrai "riciclare" l'intero codice e modificarlo dove ritieni conveniente. L' uso combinato di sensori ad ultrasuino e della modalità "sleep" di ESP32 potrebbe portarti a comode realizzazione ad esempio nella sorveglianza di parchi o ingressi isolati.
Il sensore ad ultrasuino ad esempio riesce a "risvegliare" ESP32 dalla modalità ad ibernazione e magari inviar eun segnale con ESP-NOW o scattare una foto e salvarla su una Micro-SD. Gli utilizzi pratici di questa utilissime peculiarità di ESP32 sono limitate solo dalla tua fantasia!


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

10.1  Risorse aggiuntive                                          - solo il titolo
10.2  Link utili                                                  - migliori siti stranieri per IOT ma generici e basta
10.3  Il nostro account GITHUB                                    - breve articolo e link
10.4  Aiutaci a crescere sui social                               - breve articolo con link "X" e Linkedin

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

## 11.1  Conclusioni

In questo libro abbiamo voluto darti le informazuoni necessarie per partire con l'Iot ma soprattutto creare dei progetti originali per il tuo hobby o professione. Il nostro intento non era solo "spiegarti" dei pezzi di codice ma forniri dei programmi gia pronti e formalmente corretti da modificare ed ampliare a tuo piacere. Nn esisytono infatti limiti legali legati al codice fornito con il libro e sei libero di rivenderlo a terzi senza limitazioni.

Questa possibilità vale, secondo noi, l'intero prezzo del volume ma...
Per riuscire nel tuo legittimo intento potresti leggere e rileggere i capitoli tre e cinque dedicati rispettivamente alla alimentazione dell'ESP32 e ai tool di compilazione. Dalla nostra esperienza e per i molti errori che noi stessi abbimo commesso nell'utilizzo di ESP32, possiamo dirti con una qualche certezza che sono questio gli apsetti piu trascurati e insidiodi dell'IOT. In particolare l'amboente di sviluppo grafico o testuale tende a rallentare enormemente lo sviluppo dei programmi se non è stato compreso appieno. Il tempo che uerai per apprendere i tute le teniche di compilazione non sarà mai tempo perso ma risparmiato nella pratica reale. Vogliamo lasciarti con l'augurio di un buon lavoro e di migliori successi con il tuo ESP32!

11.2  In arrivo il nuovo ESP32-P4   


<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.000.1.0.1</p>
