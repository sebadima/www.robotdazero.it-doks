---
title: "Come resettare l'ESP32"
description: "."
excerpt: "Esistono due modi per resettare la scheda ESP32: Reset hardware: Tenere premuto il pulsante RESET per almeno 3 secondi. Reset software: Utilizzare il bootloader..."
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



<hr>

## RESET IMMEDIATO
In casi di freezing o anomalie occasionali dell'ESP32 esiste un modo rapido per resettare la scheda: basta tenere premuto il pulsante RESET per almeno 3 secondi come si vede nella foto.

<img width="800" class="x figure-img img-fluid lazyload blur-up" src="images/101.webp" alt="il tasto di reset hardware dell'ESP32">

<br>
<br>

Il reset hardware è il modo più semplice per resettare la scheda ESP32. Dopo la pressione del tasto l'ESP32 si riavvierà ed eseguirà il codice dal <a href="https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/bootloader.html" target="_blank" rel="noopener">bootloader</a> interno.


## QUANDO RESETTARE COMPLETAMENTE
Il reset della scheda ESP32 può essere utile in una serie di situazioni, ad esempio:

1. Se la scheda ESP32 è bloccata o non risponde.
2. Se si desidera cancellare tutte le configurazioni e i dati dall'ESP32.
3. Se si desidera installare una nuova versione del firmware sull'ESP32.

### COME EFFETTUARE IL RESET
Per eseguire un reset di fabbrica ESP32, useremo <a href="https://github.com/espressif/esptool" target="_blank" rel="noopener">ESPTOOL</a>, che è una utility open source basata su Python usata per comunicare con il bootloader ROM nei chip Espressif.

Per installare esptool, è necessario installare Python 3.8 o una versione più recente. Puoi scaricare e installare Python al seguente <a href="https://www.python.org/downloads/" target="_blank" rel="noopener">link</a> ma assicurati di scaricare il pacchetto giusto per il tuo sistema.

Con Python 3 installato, apri una finestra di terminale e installa l'ultima versione stabile di esptool.py con <a href="https://pip.pypa.io/en/stable/" target="_blank" rel="noopener">PIP</a>:

```bash
pip installa esptool
```

> Nota: con alcune installazioni Python questo comando potrebbe non funzionare e riceverai un errore. In questo caso, provare a installare esptool.py con:

```bash
pip3 install esptool
```
oppure
```bash
python -m pip install esptool
```
oppure infine
```bash
pip2 install esptool
```

Se hai problemi con PIP puoi installare il comando con:
```bash
pip install setuptools
```







Dopo l'installazione, esptool.py dovrebbe essere presente nella directory predefinita degli eseguibili Python: a quesro punto siamo in grado di eseguirlo con il comando esptool. Nella finestra del terminale, eseguire il seguente comando:

```bash
python -m esptool
```


### Cancellare il flash ESP32
Seguire i passaggi successivi per cancellare il flash ESP32:

1) Collegare il ESP32 al computer;

2) Aprire una finestra Terminale sul computer;

3) Tenere premuto il pulsante di avvio ESP32;

```bash
python -m esptool --chip esp32 erase_flash
```

Quando inizia il processo di "Cancellazione“, è possibile rilasciare il pulsante” BOOT/FLASH". Dopo alcuni secondi, la memoria flash ESP32 verrà cancellata.

<br>
<p style="font-size: 12px;"> R.119.1.0.1 </p>
<br>
