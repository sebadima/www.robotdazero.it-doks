---
title: Usare il pin VIN dell' ESP32 come uscita a 5V
description: Usare il pin VIN dell' ESP32 come uscita a 5V
excerpt: "Per alimentare un dispositivo esterno dal pin VIN della scheda ESP32, è necessario collegare il dispositivo al pin VIN e al pin GND della scheda. La tensione di ingresso al pin VIN deve essere sufficiente a fornire la potenza necessaria..."
date: 2023-09-15T09:19:42+01:00
lastmod: 2023-09-16T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["ESP32", "Elettronica", "Alimentazione"]
contributors: ["sebadima "]
pinned: false
mermaid: true
homepage: false
---
<hr>
<br>


### COSA È IL PIN "VIN" DELLA SCHEDA ESP32?

Il pin "VIN" della scheda ESP32 è un pin di alimentazione che fornisce l'alimentazione alla scheda. Il pin può accettare una tensione compresa tra 3,3 V e 12 V. La tensione nominale è di 5 V. Viene utilizzato per alimentare la scheda ESP32 quando non è possibile utilizzare l'alimentazione USB. Ad esempio, tramite il pin "VIN" si può alimentare la scheda ESP32 da una batteria o da un alimentatore esterno.

> Il pin "VIN" è collegato al regolatore di tensione della scheda ESP32. Il regolatore di tensione converte la tensione in ingresso in una tensione di 3.3V che è la tensione di alimentazione *nativa* dell'ESP32.

**E' un pin importante da conoscere quando si utilizza la scheda ESP32 perchè può funzionare anche come alimentatore per dispostivi esterni quando la scheda viene alimentata via presa USB.**

<img width="800" class="x figure-img img-fluid lazyload blur-up" src="images/101.jpg" alt="la immagine del pin VIN in evidenza sull'ESP32 dentro il quadrato rosso">

<br>
<br>
Il pin viene spesso chiamato "5V" come vedi in questa immagine: ricorda che VIN e 5V sono del tutto equivalenti.
Ecco alcuni dettagli tecnici sul pin "VIN" della scheda ESP32:

```bash
Tensione nominale: 5 V
Range di tensione: 3,3 V - 12 V
Corrente massima: 2 A
Impedenza: 200 ohm
```

Se ti serve invece utilizzare il pin "VIN" per fornire corrente all'ESP32, è necessario collegare un alimentatore esterno al pin. L'alimentatore esterno deve fornire una tensione compresa tra 3,3 V e 12 V.

### POSSO USARE IL PIN VIN PER ALIMENTARE UN DISPOSITIVI ESTERNO?

Sì, è possibile usare il pin "VIN" della scheda ESP32 per alimentare dei dispositivi esterni.

Per alimentare un dispositivo esterno dal pin VIN della scheda ESP32, è necessario collegare il dispositivo al pin VIN e al pin <a href="https://en.wikipedia.org/wiki/Ground_(electricity)" target="_blank" rel="noopener">GND</a> della scheda. La tensione di ingresso al pin VIN deve essere sufficiente a fornire la potenza necessaria al dispositivo esterno.

Ecco una semplice schema di collegamento per alimentare un dispositivo esterno dal pin VIN della scheda ESP32:


{{< mermaid class="bg-light text-center" >}}
graph TD
  ESP32 -->|VIN/V5| D[+ POSITIVO del dispositivo esterno]
  ESP32 -->|GND| E[-- negativo del dispositivo esterno]
{{< /mermaid >}}


In questo schema, il dispositivo esterno è collegato al pin VIN della scheda ESP32 tramite un cavo con due fili, uno per la tensione di ingresso e uno per la massa.

È importante notare che la corrente massima che può essere fornita dal pin VIN è di 2A. Se il dispositivo esterno richiede una corrente maggiore di 2A, è necessario utilizzare un alimentatore esterno per fornire la potenza necessaria.

Ecco alcuni suggerimenti per alimentare un dispositivo esterno dal pin VIN della scheda ESP32:

### COSA RICORDARE

- E' possibile "ricevere" una tensione di 5V dal pin "VIN"/"5V" presente sulla scheda, ma ricorda che la scheda non dovrebbe fornire più di 2.0A in modo continuativo.  

> Dovresti sempre usare un alimentatore esterno regolato per proteggere il dispositivo ESP32 da eventuali sovratensioni.
Verificare che la tensione di uscita dell'alimentatore esterno sia compresa tra 5 V e 12 V.
Inoltre la corrente massima fornita dall'alimentatore esterno deve essere sufficiente a soddisfare le esigenze del dispositivo esterno.

<br>
<p style="font-size: 12px;">107.R.1.2.6</p>
