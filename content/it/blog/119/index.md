---
title: "Come resettare l'ESP32"
description: "."
excerpt: " ..."
date: 2023-10-26T09:19:42+01:00
lastmod: 2023-26-01T09:19:42+01:00
draft: true
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["ESP32", "programmazione"]
contributors: ["sebadima"]
pinned: false
homepage: false
---


## Perchè resettare l'ESP32

L'ESP32 non richiede in genere alcun riavvio periodico quando esegue un programma, ma in certi casi, (es:utilizzo della funzione *millis*) può essere utile resettare automaticamente via software la CPU o essere costretti ad azionere il tasto di reset a mano.
Esistono due modi per resettare la scheda ESP32:

Reset hardware: Tenere premuto il pulsante RESET per almeno 3 secondi.
Reset software: Utilizzare il bootloader per cancellare la memoria flash dell'ESP32.


<img width="800" class="x figure-img img-fluid lazyload blur-up" src="images/101.webp" alt="il tasto di reset hardware dell'ESP32">



### Reset hardware

Il reset hardware è il modo più semplice per resettare la scheda ESP32. Basta tenere premuto il pulsante RESET per almeno 3 secondi. Questo farà sì che l'ESP32 si riavvii e inizi a eseguire il codice dal <a href="https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/bootloader.html" target="_blank" rel="noopener">bootloader</a>.

### Reset software

Il reset software è un modo più completo per resettare la scheda ESP32. Cancella la memoria flash dell'ESP32, quindi l'ESP32 inizierà a eseguire il codice dal bootloader.

Per eseguire un reset software, è necessario utilizzare il bootloader. Il bootloader è un programma incorporato nell'ESP32 che consente di caricare nuovo codice sull'ESP32.

##### Ecco i passaggi per eseguire un reset software:

- Connetti la scheda ESP32 al computer utilizzando un <a href="https://linuxhint.com/cable-used-for-esp32/" target="_blank" rel="noopener">cavo USB</a>.
- Apri un terminale e impostalo sulla porta seriale associata alla scheda ESP32.
- Esegui il seguente comando:





```bash
esptool.py --chip esp32 erase_flash
```

> Questo comando cancellerà la memoria flash dell'ESP32.
Riavvia la scheda ESP32.
Dopo il riavvio, l'ESP32 inizierà a eseguire il codice dal bootloader.

### Effetti del reset

Sia il reset SW che HW azionano una serie di operazioni nella CPU:
 che in dettagCome Arduino l'azionamento Il reset della scheda ESP32 ha i seguenti effetti:

- Cancella la memoria flash dell'ESP32.
- Ripristina l'ESP32 alle impostazioni di fabbrica.
- Cancella tutte le configurazioni e i dati memorizzati sull'ESP32.


## Quando resettare la scheda ESP32

Il reset della scheda ESP32 può essere utile in una serie di situazioni, ad esempio:

1. Se la scheda ESP32 è bloccata o non risponde.
2. Se si desidera cancellare tutte le configurazioni e i dati dall'ESP32.
3. Se si desidera installare una nuova versione del firmware sull'ESP32.



<br>
<p style="font-size: 12px;"> R.119.1.0.1 </p>
<br>
