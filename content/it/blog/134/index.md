---
title: "In arrivo il nuovo ESP32-P4"
description: "In arrivo il nuovo ESP32-P4"
excerpt: "Sistemi Espressif (SSE: 688018.SH) oggi annuncia l'imminente rilascio del suo ultimo SoC, ESP 32-P4. È alimentato da una CPU RISC-V dual-core con un'estensione delle istruzioni AI, un sottosistema di memoria avanzato e periferiche integrate ad alta velocità. ESP 32-P4 è progettato per ..."
date: 2023-12-13T09:19:42+01:00
lastmod: 2023-12-13T09:19:42+01:00
draft: false
weight: 50
images: ["header.png"]
categories: ["News"]
tags: ["ESP32"]
contributors: ["sebadima"]
pinned: false
homepage: false
---



## In arrivo l' ESP32-P4

Sistemi Espressif (SSE: 688018.SH) oggi annuncia l'imminente rilascio del suo ultimo SoC, ESP 32-P4. È alimentato da una CPU RISC-V dual-core con un'estensione delle istruzioni AI, un sottosistema di memoria avanzato e periferiche integrate ad alta velocità. ESP 32-P4 è progettato per applicazioni ad alte prestazioni che richiedono una forte sicurezza. In effetti, ESP32-P4 mira a soddisfare la prossima era di applicazioni embedded che si baseranno su un solido supporto per ricche interfacce uomo-macchina, un efficiente edge computing e maggiori requisiti di connettività IOT.



Notizia
Espressif presenta ESP32-P4: un MCU ad alte prestazioni con numerose funzioni di connettività e sicurezza IO
Shanghai, Cina
5 Gennaio 2023
Espressif sta espandendo il suo attuale portafoglio per soddisfare le esigenze di calcolo ad alte prestazioni di applicazioni ricche di IO, HMI e AIoT.
Sistemi Espressif (SSE: 688018.SH) oggi annuncia l'imminente rilascio del suo ultimo SoC, ESP32-P4. È alimentato da una CPU RISC-V dual-core con un'estensione delle istruzioni AI, un sottosistema di memoria avanzato e periferiche integrate ad alta velocità. ESP32-P4 è progettato per applicazioni ad alte prestazioni che richiedono una forte sicurezza. 


<div class="alert alert-doks d-flexflex-shrink-1" role="alert">
 👉 In effetti, ESP32-P4 mira a soddisfare la prossima era di applicazioni embedded che si baseranno su un solido supporto per ricche interfacce uomo-macchina, un efficiente edge computing e maggiori requisiti di connettività IO.
 </div>


## CPU ad alte prestazioni e sottosistema di memoria

Alimentato da una CPU RISC-V dual-core con fino a 400 MHz, ESP32-P4 supporta anche estensioni FPU e AI a precisione singola, fornendo così tutte le risorse computazionali necessarie. Inoltre, ESP32-P4 integra un LP-Core che può funzionare fino a 40 MHz. Questo è fondamentale in termini di supporto di applicazioni a bassissima potenza che possono occasionalmente richiedere un calcolo elevato. In tali scenari, i core HP possono essere tenuti fermi per la maggior parte del tempo, allo scopo di risparmiare energia.


### La SRAM on-chip
Il sistema ESP32-P4 HP core ha 768KB di SRAM on-chip, che può diventare accessibile come cache quando è disponibile PSRAM esterna. Inoltre, il sistema core HP ESP32-P4 ha 8KB di RAM TCM a attesa zero, che può essere utilizzata per buffer di dati veloci o sezioni di codice time-critical. Questo sistema di memoria ad alte prestazioni, insieme al supporto per PSRAM e Flash esterni, garantisce che la latenza di accesso alla memoria e le dimensioni disponibili della memoria non siano limitate.

### Lq Sicurezza

La sicurezza è al centro di ESP32-P4. Caratteristiche, come avvio sicuro, crittografia Flash,acceleratori crittografici, TRNG, ecc., fornisca tutti i componenti necessari per tenere il dispositivo assicurato e fidato. Con l'aiuto della periferica di firma digitale e di un'unità di gestione delle chiavi dedicata, ESP32-P4 garantisce che le chiavi private siano generate sul SoC stesso e non siano compromesse da alcun software in testo normale o da eventuali attacchi fisici. Il SoC supporta anche la protezione degli accessi hardware che facilita la gestione dei permessi di accesso e la separazione dei privilegi.



### Ricca interfaccia uomo-macchina

ESP32-P4 include il supporto per MIPI-CSI con ISP integrato e MIPI-DSI, consentendo così l'integrazione di una fotocamera ad alta risoluzione e un'interfaccia di visualizzazione. Per consentire una maggiore compatibilità, ESP32-P4 ha un display parallelo e un'interfaccia della fotocamera. Sono inclusi anche ingressi touch capacitivi e funzioni di riconoscimento vocale che rendono ESP32-P4 il SoC di scelta per qualsiasi applicazione basata su HMI.

Inoltre, ESP32-P4 integra acceleratori hardware per vari protocolli di codifica dei media, nonché protocolli di compressione per l'elaborazione delle immagini e lo streaming video, incluso il supporto per la codifica H. 264. Il SoC ha anche un hardware integrato Pixel Processing Accelerator (PPA), che è adatto per lo sviluppo di GUI.

<img img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/101.png" alt="">

### Periferiche altamente integrate

ESP32-P4 ha più di 50 GPIO programmabili, che è significativamente più di quelli di qualsiasi altro SOC Espressif fino ad oggi. ESP32-P4 supporta tutte le periferiche comunemente utilizzate, come SPI, I2S, I2C, LED PWM, MCPWM, RMT, ADC, DAC, UART e TWAITM. Inoltre, ESP32-P4 supporta USB OTG 2.0 HS, Ethernet e SDIO Host 3.0 per la connettività ad alta velocità.

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">
Se l'applicazione richiede connettività wireless, ESP32-P4 può facilmente connettersi, come un chip compagno wireless, a qualsiasi prodotto della serie ESP32-C/S/H su SPI/SDIO / UART, utilizzando le soluzioni ESP-Hosted o ESP-AT. 
</div>


##### ESP32-P4 può anche funzionare come MCU host per altre soluzioni di connettività, come ACK, AWS IoT ExpressLink,ecc.


ESP32-P4 sarà supportato attraverso ESP-IDF (Matured IoT Development Framework) di Espressif, in modo che i nostri clienti possano beneficiare della loro familiarità con la nostra piattaforma collaudata sul campo che già alimenta milioni di dispositivi connessi.

<br>
<br>
<p style="font-size: 0.75em;">Robotdazero.it -  post - R.134.0.5.0</p>  