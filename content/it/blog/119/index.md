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
In casi di freezing o anomalie occasionali dell'ESP32 esiste un mdo rapido per resettare la scheda: basta tenere premuto il pulsante RESET per almeno 3 secondi come si vede nella foto.

<img width="800" class="x figure-img img-fluid lazyload blur-up" src="images/101.webp" alt="il tasto di reset hardware dell'ESP32">

<br>
<br>

Il reset hardware è il modo più semplice per resettare la scheda ESP32. Dopo la pressione del tasto nella foto sopra l'ESP32 si riavvierà ed eseguirà il codice dal <a href="https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/bootloader.html" target="_blank" rel="noopener">bootloader</a> interno.


## QUANDO RESETTARE COMPLETAMENTE
Il reset della scheda ESP32 può essere utile in una serie di situazioni, ad esempio:

1. Se la scheda ESP32 è bloccata o non risponde.
2. Se si desidera cancellare tutte le configurazioni e i dati dall'ESP32.
3. Se si desidera installare una nuova versione del firmware sull'ESP32.

### COME RESETTARE ALLE CONDIZIONI DI FABBRICA

Per eseguire un reset di fabbrica ESP32, useremo esptool, che è “un'utilità basata su Python, open-source, indipendente dalla piattaforma per comunicare con il bootloader ROM nei chip Espressif.“

Per installare esptool, è necessario installare Python 3.7 o più recente sul sistema. Puoi scaricare e installare Python al seguente  <a href="https://www.python.org/downloads/" target="_blank" rel="noopener">link</a>(assicurati di scaricare il pacchetto giusto per il tuo sistema):

Scarica Python
Con Python 3 installato, aprire una finestra di terminale e installare l'ultima stabile esptool.py rilascio con pip:

pip installa esptool
Nota: con alcune installazioni Python quel comando potrebbe non funzionare e riceverai un errore. Se questo è il caso, provare a installare esptool.py con:

```bash
pip3 install esptool
python -m pip install esptool
pip2 install esptool
```
Setuptools è anche un requ


<br>
<p style="font-size: 12px;"> R.119.1.0.1 </p>
<br>
