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

Il pin "VIN" della scheda ESP32 è un pin di alimentazione che fornisce l'alimentazione alla scheda. Il pin può accettare una tensione compresa tra 3,3 V e 12 V. La tensione nominale è di 5 V.

Il pin "VIN" è utilizzato per alimentare la scheda ESP32 quando non è possibile utilizzare l'alimentazione USB. Ad esempio, il pin "VIN" può essere utilizzato per alimentare la scheda ESP32 da una batteria o da un alimentatore esterno.

Il pin "VIN" è collegato al regolatore di tensione della scheda ESP32. Il regolatore di tensione converte la tensione in ingresso in una tensione di 3,3 V, che è la tensione di alimentazione utilizzata dai componenti interni della scheda ESP32.

Il pin "VIN" è un pin importante da conoscere quando si utilizza la scheda ESP32. È importante utilizzare una tensione di alimentazione appropriata per evitare di danneggiare la scheda.

Ecco alcuni dettagli tecnici sul pin "VIN" della scheda ESP32:

```bash
Tensione nominale: 5 V
Range di tensione: 3,3 V - 12 V
Corrente massima: 2 A
Impedenza: 200 ohm
```

Per utilizzare il pin "VIN" per alimentare la scheda ESP32, è necessario collegare un alimentatore esterno al pin. L'alimentatore esterno deve fornire una tensione compresa tra 3,3 V e 12 V.

Il pin "VIN" è situato sul bordo destro della scheda ESP32. Il pin è contrassegnato con la lettera "V" e un simbolo di freccia.

### POSSO USARE IL PIN VIN PER ALIMENTARE UN DISPOSITIVI ESTERNO?

Sì, è possibile usare il pin "VIN" della scheda ESP32 per alimentare dei dispositivi esterni. Il pin VIN è collegato a un regolatore di tensione integrato che fornisce una tensione di uscita di 3,3 V. La tensione di ingresso al pin VIN può essere compresa tra 5 V e 12 V.

Per alimentare un dispositivo esterno dal pin VIN della scheda ESP32, è necessario collegare il dispositivo al pin VIN e al pin GND della scheda. La tensione di ingresso al pin VIN deve essere sufficiente a fornire la potenza necessaria al dispositivo esterno.

Ecco una semplice schema di collegamento per alimentare un dispositivo esterno dal pin VIN della scheda ESP32:


{{< mermaid class="bg-light text-center" >}}
graph TD
  ESP32 -->|VIN| D[POSITIVO del disp.esterno]
  ESP32 -->|GND| E[negativo del disp.esterno]
{{< /mermaid >}}


In questo schema, il dispositivo esterno è collegato al pin VIN della scheda ESP32 tramite un cavo con due fili, uno per la tensione di ingresso e uno per la massa.

È importante notare che la corrente massima che può essere fornita dal pin VIN è di 2 A. Se il dispositivo esterno richiede una corrente maggiore di 2 A, è necessario utilizzare un alimentatore esterno per fornire la potenza necessaria.

Ecco alcuni suggerimenti per alimentare un dispositivo esterno dal pin VIN della scheda ESP32:

### COSA RICORDARE

- E' possibile "ricevere" una tensione di 5V dal pin "VIN"/"5V" presente sulla scheda, ma ricorda che la scheda non dovrebbe fornire più di 2.0A in modo continuativo.  

> Dovresti sempre usare un alimentatore esterno regolato per proteggere il dispositivo ESP32 da eventuali sovratensioni.
Verificare che la tensione di uscita dell'alimentatore esterno sia compresa tra 5 V e 12 V.
Assicurarsi che la corrente massima fornita dall'alimentatore esterno sia sufficiente a soddisfare le esigenze del dispositivo esterno.
