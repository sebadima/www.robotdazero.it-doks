---
title: "Come costruire un Robot guidato dalla Intelligenza Artificiale pt.2 - I Motori"
description: "La scelta dei motori per il nostro rover."
excerpt: "Il nostro rover richiede due motori di azionamento principali. All’inizio abbiamo considerato la ipotesi dei motori passo-passo, che si muovono di pochissimo ogni volta che vengono azionati dal driver, sono una soluzione sofisticata ma per la versione iniziale del nostro rover li abbiamo scartati; pensiamo di usarli in una una prossima evoluzione..."
date: 2023-05-18T08:19:42+01:00
lastmod: 2023-05-18T08:19:42+01:00
draft: true
weight: 50
images: ["ati-nasa-Perseverance-with-Adaptive-Caching-Assembly.jpg"]
categories: ["News"]
tags: ["rover", "performance", "SEO"]
contributors: ["sebadima"]
pinned: false
homepage: false
---

# Come costruire un rover guidato dalla Intelligenza Artificiale pt.2
#### Un momento interessante nello sviluppo del rover: la scelta dei motori.



Ci sono diverse problematiche che possono sorgere durante lo sviluppo e l'aggiornamento dei motori di un robot terrestre. Ecco alcune delle principali:

Potenza e coppia: I motori devono essere sufficientemente potenti per muovere il robot e superare le resistenze al movimento, come l'attrito e la gravità. Devono anche essere in grado di fornire una coppia sufficiente per far fronte a situazioni di carico elevato o terreni accidentati.

Efficienza energetica: Un robot terrestre deve essere in grado di operare per lunghi periodi di tempo con una quantità limitata di energia. Pertanto, è importante progettare motori che siano efficienti dal punto di vista energetico, minimizzando le perdite di energia durante la conversione e il trasferimento dell'energia elettrica.

Controllo del moto: I motori devono essere controllati con precisione per consentire al robot di muoversi in modo accurato e coerente. Ciò richiede algoritmi di controllo sofisticati e sensori adatti per misurare il movimento, la velocità e la posizione del robot.

Affidabilità e durata: I motori dei robot terrestri devono essere affidabili e in grado di resistere a condizioni ambientali difficili, come vibrazioni, umidità, polvere e temperature estreme. Devono essere progettati per avere una lunga durata e richiedere una manutenzione minima nel corso del tempo.

Scalabilità: A seconda delle dimensioni e dell'applicazione del robot, possono essere necessari motori di diverse dimensioni e potenze. Pertanto, è importante che i motori siano progettati in modo scalabile per adattarsi alle esigenze specifiche del robot.

Sicurezza: I motori devono essere progettati tenendo conto della sicurezza sia per il robot stesso che per le persone che lo circondano. Ciò implica l'implementazione di meccanismi di sicurezza come sensori di rilevamento degli ostacoli, sistemi di arresto di emergenza e controlli di sicurezza adeguati.

Il nostro Rover dovrà essere in grado di:

1. superare ostacoli come piccole rocce e dislivelli
2. funzionare in condizioni meteorologiche avverse, come pioggia e neve
3. comunicare con il mondo esterno, inviando informazioni sulle sue attività e ricevendo comandi remoti se necessario. 
4. arrestare i motori e metterli in “stallo” in caso di blocco delle ruote o pendenze eccessive, 
5. rilevare consumi di corrente eccessivi e spegnere i motori per due secondi e riaccenderli subito dopo 
6. dimunire la alimentazione ai motori in caso di discese e aumentarla in caso opposto
7. usare un normale drive come **[L298N](https://lastminuteengineers.com/l298n-dc-stepper-driver-arduino-tutorial/)** DC Motor Driver almeno per il prototipo


# Come impostare il controller della velocità PID

Perchè ci serve un sistema PID?

> Il sistema di controllo PID (Proportional-Integral-Derivative) è un algoritmo di controllo automatico utilizzato per regolare un processo in modo preciso e affidabile. Questo sistema utilizza una combinazione di tre elementi di controllo: il termine proporzionale (P), il termine integrale (I) e il termine derivativo (D).
> 

Il termine proporzionale (P) è proporzionale all'errore corrente del processo, cioè alla differenza tra il valore desiderato e il valore attuale. Il termine integrale (I) tiene conto della storia dell'errore, integrando l'errore nel tempo. Infine, il termine derivativo (D) è proporzionale alla variazione dell'errore nel tempo.

Il controllo PID nel nostro rover dovrà regolare continuamente il processo in modo da minimizzare l'errore tra il valore desiderato e il valore effettivo.Il controllo PID è ampiamente utilizzato in molti settori, tra cui l'automazione industriale, il controllo di motori, il controllo della temperatura, il controllo del flusso e molto altro ancora.

con controllo PID per il rover, seguiremo questi passaggi:

1. Acquisire sensori adeguati per la rilevazione della posizione del rover (ad esempio, sensori di posizione ad ultrasuoni o magnetici).
2. Utilizzare un microcontrollore o un microprocessore per elaborare i dati dei sensori e controllare i motori delle ruote.
3. Implementare un algoritmo di controllo PID per regolare la velocità e la direzione del rover in base alla posizione rilevata dai sensori.
4. Testare il sistema di guida e regolare i parametri del controllo PID per migliorare le prestazioni.

### Perchè abbiamo sceltro [Raspberry PI](https://www.raspberrypi.org/) per il controllo dei sensori e la intelligenza artificiale e il controller ESP32 per la gestione dei motori e il sistema di guida

La ESP32-CAM (un controller ESP32S con una Cam OV2640) 


riesce perfettamente a rilevare ostacoli negli spazi aperti usando una versione ridotta di un [sistema](https://en.wikipedia.org/wiki/Computer_vision) di riconoscimento delle immagini, ma non può gestire altri compiti di ML o tantomeno far girare programmi in [MicroPython](https://docs.micropython.org/en/latest/library/index.html) a velocità accettabile. Durante le nostre [prove](https://www.hackster.io/mjrobot/esp32-cam-tinyml-image-classification-fruits-vs-veggies-4ab970) condotte con Tiny ML siamo riusciti a riconoscere volti, animali e oggetti precisi senza ncecessità di extra RAM o di risorse di CPU aggiuntive, ma

> allenare la ESP32 con molteplici modelli e immagini à semplicemente aldilà degli scopi di un controller
> 

Il controllo PID è un algoritmo di controllo di feedback che utilizza la regolazione proporzionale integrale e derivata per mantenere un valore di uscita vicino a un valore di riferimento desiderato. Nel caso di un sistema di guida per il rover, il valore di riferimento sarebbe la posizione desiderata del rover e il valore di uscita sarebbe la velocità e la direzione del rover.

Parliamo adesso dell’hardware;

i link utili che abbiamo usato per scegliere la tipologia di hardware:

[researchgate - Hardware and software architecture for a Rover robot](https://www.researchgate.net/publication/259487884_Hardware_and_software_architecture_for_a_Rover_robot)

[dronebotworkshop.com - robocar](https://dronebotworkshop.com/esp32cam-robot-car/)

La crittografia dei file sul disco rigido è una pratica essenziale per proteggere i dati sensibili e prevenire l'accesso non autorizzato ai tuoi file. Quando si tratta di informazioni personali o confidenziali, come password, dati bancari o informazioni sul lavoro, la crittografia può fornire un ulteriore livello di sicurezza.

La crittografia dei dati può essere eseguita utilizzando software di crittografia o hardware crittografico. Questi programmi utilizzano algoritmi di crittografia avanzati per "mescolare" i dati in modo tale che solo chi è autorizzato possa leggerli. In altre parole, i dati vengono trasformati in una forma illeggibile a meno che non si disponga della chiave di decrittazione corretta.

Inoltre, la crittografia dei file è importante anche per proteggere i dati da eventuali attacchi informatici o malware. Se un hacker o un virus informatico riesce ad accedere ai dati sensibili memorizzati sul tuo disco rigido, potrebbe causare danni irreparabili o estorcere informazioni in cambio di denaro. La crittografia rende molto più difficile per gli attaccanti accedere ai tuoi dati, anche se riescono a violare la sicurezza del tuo sistema.

Ci sono molti programmi di crittografia disponibili sul mercato, quindi è importante scegliere uno che soddisfi le tue esigenze di sicurezza e che sia compatibile con il tuo sistema operativo. Alcuni software di crittografia sono gratuiti, mentre altri richiedono un acquisto. In ogni caso, è importante scegliere un programma affidabile e di qualità che offra un alto livello di protezione.

In sintesi, la crittografia dei file sul disco rigido è un'importante misura di sicurezza per proteggere i dati sensibili da accessi non autorizzati o da attacchi informatici. Scegliere il giusto software di crittografia e utilizzarlo correttamente può prevenire problemi di sicurezza e fornire tranquillità. Inoltre, la crittografia dei dati è una pratica consigliata anche quando si tratta di dati non particolarmente sensibili, poiché può fornire un ulteriore livello di sicurezza per proteggere i tuoi file.

Questo documento descrive come costruire un rover guidato dall'intelligenza artificiale per compiti di sorveglianza, con la capacità di muoversi autonomamente, ricaricarsi, scattare foto, riconoscere volti e inviare notifiche. Il documento fornisce una panoramica dei passaggi necessari per costruire il rover, inclusa la scelta delle librerie di Machine Learning e l'implementazione di un sistema di controllo PID. Viene inoltre discusso l'utilizzo di Raspberry PI e ESP32 come hardware per il controllo dei sensori e dei motori.

<iframe width="560" height="315" src="https://www.youtube.com/embed/NOZZMsMAGh0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
