---
title: "Come costruire un rover guidato dalla Intelligenza Artificiale pt.2"
description: "La scelta dei motori per il nostro rover."
excerpt: "Il nostro rover richiede due motori di azionamento principali. All’inizio abbiamo considerato la ipotesi dei motori passo-passo, che si muovono di pochissimo ogni volta che vengono azionati dal driver, sono una soluzione sofisticata ma per la versione iniziale del nostro rover li abbiamo scartati; pensiamo di usarli in una una prossima evoluzione.."
date: 2020-11-04T09:19:42+01:00
lastmod: 2020-11-04T09:19:42+01:00
draft: false
weight: 50
images: ["ati-nasa-Perseverance-with-Adaptive-Caching-Assembly.jpg"]
categories: ["News"]
tags: ["rover", "performance", "SEO"]
contributors: ["sebadima"]
pinned: false
homepage: false
---

Un momento interessante nello sviluppo del rover: la scelta dei motori.


# Come costruire un rover guidato dalla Intelligenza Artificiale pt.2

## In questa primo articolo di una serie piuttosto lunga vedremo come costruire un rover guidato dalla intelligenza artificiale destinato a compiti di sorveglianza "reale".

quindi con la capacità di:

 1. muoversi da solo H24,

 2. ricaricarsi da solo collegandosi alla presa 220V o 12V,

 3. scattare foto di presunti intrusi, riconoscere voci e volti familiari,

 4. aprire e chiudere porte e cancelli, 

1. inviare sms o email in caso di pericolo. 
2. superare piccoli ostacoli non oltre i 6/10 cm grazie a grosse ruote o cingoli in gomma

In linea di massima in questi post  seguiremo questo percorso:

1. Progettazione del rover, compresa la scelta delle librerie Machine Learning
2. Acquisto dei componenti necessari
3. Costruzione del telaio e del sistema di guida
4. Installazione del sistema di alimentazione e ricarica
5. Installazione del sistema di sorveglianza e riconoscimento facciale / vocale
6. Programmazione dell'intelligenza artificiale
7. Test e debugging del rover

Il primo argomento che affronteremo sarà la scelta della libreria di Machine Learning per guidare il robot e in via preliminare abbiamo pensato a queste librerie;

- [TensorFlow Lite](https://www.tensorflow.org/lite)
- [Tiny ML](https://www.tinyml.org/)
- [Keras](https://keras.io/)

Tutte sono in grado di girare su una piattaforma “Raspberry PI 4” con le seguenti caratteristiche:

- RAM: 4GB,
- Processore: Broadcom BCM2711, quad-core Cortex-A72 (ARM v8) 64-bit SoC @ 1.5GHz
- Connettività: Gigabit Ethernet, Wi-Fi dual-band 802.11ac, Bluetooth 5.0, BLE
- Porte: 2 USB 3.0, 2 USB 2.0, 2 micro-HDMI, jack audio da 3,5 mm, GPIO a 40 pin
- Alimentazione: 5V DC tramite USB-C o GPIO


> Per controllare le prestazioni di Tensor Flow Lite abbiamo seguito questo [tutorial](https://github.com/EdjeElectronics/TensorFlow-Lite-Object-Detection-on-Android-and-Raspberry-Pi/blob/master/deploy_guides/Raspberry_Pi_Guide.md) su Github senza però installare Coral USB Accelerator: [qui](https://www.amazon.it/Google-Coral-USB-Accelerator-Edge/dp/B07S214S5Y) il link per acquistare Coral USB su Amazon. Per installare Tin ML su Raspberry abbiamo seguito questo [articolo](https://it.emcelettronica.com/deep-learning-con-keras-sul-raspberry-pi) in italiano su emcelettronica. Infine come terza opzione abbiamo testato Keras seguendo questo [tutorial](https://www.teknotut.com/install-tensorflow-and-keras-on-the-raspberry-pi/) su Teknotut.
> 

## I requisiti di mobilità

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

This guide provides a step-by-step approach to building an AI-guided rover for surveillance tasks. The rover will have the ability to move autonomously, recharge itself, take photos, recognize faces, and send notifications.

To begin, the first action item is to acquire suitable sensors for detecting the rover's position. The selection of appropriate sensors will depend on the specific requirements of the project. Once the sensors are in place, the next step is to process the sensor data and control the wheel motors. This can be achieved by using a microcontroller or microprocessor.

After the processing and control systems are in place, an algorithm for PID control needs to be implemented. The PID control system will regulate the rover's speed and direction based on the position detected by the sensors. This will ensure that the rover moves smoothly and accurately.

Once the hardware and software components are in place, the system must be tested. During the testing phase, the parameters of the PID control system should be adjusted to improve the performance of the rover. This will require careful calibration and fine-tuning to ensure optimal performance.

Completing these action items will result in a functioning AI-guided rover capable of performing surveillance tasks. Overall, this guide provides a valuable resource for anyone looking to build an advanced robotics project with the integration of AI and Machine Learning.

This project requires a significant amount of technical knowledge and expertise, but it is an excellent opportunity to learn about the integration of AI and Machine Learning in robotics. Moreover, it is a chance to create a unique and exciting project that can be used in various applications, such as security, exploration, and research.

In conclusion, building an AI-guided rover for surveillance tasks is a challenging but rewarding project. The process involves several action items, including selecting appropriate sensors, processing sensor data, implementing PID control, and testing and calibration. Completing these action items will result in a functional and advanced robotics project that can be used in various applications.
