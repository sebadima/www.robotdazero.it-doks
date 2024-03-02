---
title: "I sensori ambientali ed ESP32"
description: "I sensori ambientali ed ESP32"
excerpt: "Esplora  il Futuro Sostenibile con ESP32: Scopri come connettere il mondo della natura alla tecnologia avanzata con i nuovi Sensori Digitali ed ESP32 - Scopri come questa scheda sta rivoluzionando il Monitoraggio Ambientale e le Applicazioni Smart!..."
date: 2024-03-01T01:19:42+01:00
lastmod: 2024-03-01T01:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["ESP32", "Sensori"]
contributors: ["sebadima"]
pinned: false
homepage: false
mermaid: true
---



<!-- 
<a href="https://www.electrosoftcloud.com/en/esp32-wifi-and-esp-now-simultaneously/" target="_blank">link</a>
<a href="/blog/come-installare-platformio">post</a>
<a href="/zip/platformio-template.zip</a>
```bash
```     
<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑.</div>
-->



## Perchè parliamo di sensori ambientali ed ESP32

L'inquinamento atmosferico può avere gravi conseguenze sulla nostra salute. La esposizione prolungata a inquinanti come polveri sottili, ossidi di azoto, biossido di zolfo e ozono può causare importanti problemi respiratori oltre ad una serie di malattie specifiche di cui non ci occupiamo perchè estranee al nucleo delle nostre competenze.

Non possediamo i titoli per illustrare i risvolti medici del problema, ma come informatici vogliamo sottolineare un fatto: L'utilizzo esteso dei sensori per IoT permette di dare un contributo nuovo e decisivo al monitoraggio dell'ambiente. <br>
E ciò sta avvenendo per due motivi principali:

- La disponibilità di sensori elettronici di qualità a costo contenuto,
- Il successo dei programmi "Open Source" (free) per salvare, elaborare e mostrare sul WEB i dati dei sensori.

Per questo motivo ti guideremo passo passo alla realizzazione pratica di una centralina Multi Sensore con server Web integrato e connessione ESP-NOW per ESP32. Il protocollo di comunicazione ESP-NOW ci servirà a piazzare dei sensori anche in posizioni remote, mantenendo la connessione in tempo reale ed evitando la memorizzazione ed estrazione dei dati da una SD-Card.

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑
<strong>Al momento non esiste una funzionalità equivalente ad ESP-NOW sulle </strong>schede Arduino e per questo concentreremo la nostra attenzione solo sulla scheda di Espressif. Prossimamente pubblicheremo altri lavori compatibili "anche" con Arduino mediante l'uso di schede esterne di tipo LoRa.</div>

<br>

Abbiamo usato ESP-NOW per la nostra centralina Multi Sensore perchè in applicazioni reali come il controllo dei terreni agricoli o degli impianti, l'uso della rete Wi-Fi diventa improponibile per motivi di "range". Da pochi anni comunque  innovazioni proprietarie come quella di Espressif oppure "Open Hardware" come la scheda LoRa, hanno permesso di ampliare il raggio operativo dei dispositivi IoT a costi molto contenuti.

> <strong>Cosa sono le schede LoRa</strong> <br>LoRa è una tecnologia wireless che permette di comunicare su lunghe distanze e viene spesso utilizzata nell'ambito dell'IoT. <br>La sua impostazione di base privilegia aspetti come:<br>- la trasmissione dei dati su distanze estese (anche diversi chilometri)<br>- la efficienza di trasmissione in condizioni in cui altre tecnologie wireless potrebbero avere difficoltà, come ad esempio in ambienti urbani densamente popolati o in aree rurali.<br><br><strong>L'hardware delle schede LoRa</strong> <br>Fisicamente le schede sono dei dispositivi hardware che integrano un modulo radio insieme a un microcontroller (ad esempio un ESP32) e altri componenti necessari per la comunicazione wireless e il controllo dei sensori. Queste schede forniscono una piattaforma completa per creare dei dispositivi IoT che trasmettano da posizioni "lontane" verso un *gateway* centrale, a sua colta connesso ad un sistema satellitare e/o alla rete Wi-fi. 

## Come collegare i sensori ambientali ad ESP32

Collegare i sensori ambientali a una scheda ESP32 non è complicato ma richiede un minimo di accortezza nel classificare il tipo di sensore. Dal datasheet infatti in via preliminare dobbiamo controllare se il dispositivo ci fornisca  in uscita solo un valore di tensione e sia quindi un sensore <strong>analogico</strong> oppure riesca a fornire il dato numerico esatto e in tal caso possiamo parlare di sensore <strong>digitale</strong>.

In linea di massima per collegare un sensore "ignoto" all'ESP32 dovrai:

- Trovare il pin del segnale dati e quindi collegarlo a un pin digitale o analogico dell'ESP32. Dovrai  scegliere un pin appropriato in base alle specifiche del sensore e al tipo di segnale dati che fornisce.

- Trovare il pin della alimentazione (+V o Vcc) e collegarlo al pin di alimentazione dell'ESP32 (solitamente 5V o 3.3V, a seconda del sensore e della scheda ESP32 utilizzata).

- Identificare la massa (GND) del sensore e collegarla al pin GND dell'ESP32.

> Una scheda ESP32 di solito ha più di un pin di "massa", generalmente denominati GND o Ground. Il numero di pin è variabile  a seconda del produttore e del modello specifico della scheda. Tuttavia, in genere, ci si aspetta di trovare almeno 2 pin GND su una scheda ESP32 per garantire una distribuzione uniforme e affidabile della massa.

- E infine dovrai chiarire il ruolo delle resistenze di pull-up o pull-down: Alcuni sensori digitali e/o con protocollo di comunicazione I2C, possono richiedere resistenze di pull-up o pull-down sui pin dati. Consulta il datasheet del sensore per determinare se sono necessarie e dove posizionarle.

## Conclusione
Questo articolo offre una breve introduzione su come i nuovi sensori per IoT ed l'ESP32 possano trasformare il modo in cui monitoriamo e interagiamo con l'ambiente circostante. Mantenendo il giusto focus sull'efficienza energetica, l'accessibilità e le applicazioni pratiche, nelle prossime sezioni useremo tale hardware per un progetto "ambientale" abbastanza complesso.

<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.156.1.2.1</p>