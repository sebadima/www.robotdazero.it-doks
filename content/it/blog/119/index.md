---
title: "Come resettare l'ESP32"
description: "."
excerpt: " ..."
date: 2023-10-26T09:19:42+01:00
lastmod: 2023-26-01T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["ESP32", "programmazione"]
contributors: ["sebadima"]
pinned: false
homepage: false
---



Esistono due modi per resettare la scheda ESP32:

Reset hardware: Tenere premuto il pulsante RESET per almeno 3 secondi.
Reset software: Utilizzare il bootloader per cancellare la memoria flash dell'ESP32.
Reset hardware

Il reset hardware è il modo più semplice per resettare la scheda ESP32. Basta tenere premuto il pulsante RESET per almeno 3 secondi. Questo farà sì che l'ESP32 si riavvii e inizi a eseguire il codice dal bootloader.

Reset software

Il reset software è un modo più completo per resettare la scheda ESP32. Cancella la memoria flash dell'ESP32, quindi l'ESP32 inizierà a eseguire il codice dal bootloader.

Per eseguire un reset software, è necessario utilizzare il bootloader. Il bootloader è un programma incorporato nell'ESP32 che consente di caricare nuovo codice sull'ESP32.

Ecco i passaggi per eseguire un reset software:

Connetti la scheda ESP32 al computer utilizzando un cavo USB.
Apri un terminale e impostalo sulla porta seriale associata alla scheda ESP32.
Esegui il seguente comando:
esptool.py --chip esp32 erase_flash
Questo comando cancellerà la memoria flash dell'ESP32.

Riavvia la scheda ESP32.
Dopo il riavvio, l'ESP32 inizierà a eseguire il codice dal bootloader.

Effetti del reset

Il reset della scheda ESP32 ha i seguenti effetti:

Cancella la memoria flash dell'ESP32.
Ripristina l'ESP32 alle impostazioni di fabbrica.
Cancella tutte le configurazioni e i dati memorizzati sull'ESP32.
Quando resettare la scheda ESP32

Il reset della scheda ESP32 può essere utile in una serie di situazioni, ad esempio:

Se la scheda ESP32 è bloccata o non risponde.
Se si desidera cancellare tutte le configurazioni e i dati dall'ESP32.
Se si desidera installare una nuova versione del firmware sull'ESP32.



<br>
<p style="font-size: 12px;"> R.119.1.0.1 </p>
<br>