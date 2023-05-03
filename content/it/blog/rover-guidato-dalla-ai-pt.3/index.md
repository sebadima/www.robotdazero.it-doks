---
title: "Come costruire un rover guidato dalla Intelligenza Artificiale pt.3"
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
mermaid: true
---

<style>
.x {
    transition:transform 0.50s ease;
}

.x:hover {
    -webkit-transform:scale(1.75); /* or some other value */
    transform:scale(1.75);
}
</style>

## La scelta della CPU

In genere nella costuzione di robot mobili o di rover ci si orienta come prima scelta vero il Raspberry PI4 con 8GB di memoria. In alternativa si può usare una CPU della gamma Jetson Nvidia con simile capacità di memoria RAM ma con un coprocessore grafico molto più potente per sostenere il carico del riconoscimento delle immagini. Nel nostro Rover che sarà nella classe degli 8/10 Kg di peso al completo volevamo avere molta più liberta nella scelta della CPU perchè il consumo e il peso delle batterie sono meno importanti.

#### Una soluzione estrema ma funzionante...

A darci una prima intuizione è stato questo video su YT con poche centinaia di visualizzazioni che cmunque spiega benissmo la strada che vogliamo intraprendere. La CPU è un laptop Intel con lo schermo aperto!.
<br >
<br >
<img class="x figure-img img-fluid lazyload blur-up" width="800" alt="" src="./images/Screenshot from 2023-04-30 18-12-15.resized.png">

<img class="x figure-img img-fluid lazyload blur-up" width="800" alt="" src="./images/consumi celeron.png">
<img class="x figure-img img-fluid lazyload blur-up" width="800" alt="" src="./images/Screenshot from 2023-04-30 17-26-25.resized.png">
<img class="x figure-img img-fluid lazyload blur-up" width="800" alt="" src="./images/Screenshot from 2023-04-30 17-47-37.resized.png">
<img class="x figure-img img-fluid lazyload blur-up" width="800" alt="" src="./images/Screenshot from 2023-04-30 17-50-34.resized.png">
<img class="x figure-img img-fluid lazyload blur-up" width="800" alt="" src="./images/Screenshot from 2023-04-30 17-51-38.resized.png">
<img class="x figure-img img-fluid lazyload blur-up" width="800" alt="" src="./images/Screenshot from 2023-04-30 17-56-04.resized.png">
<img class="x figure-img img-fluid lazyload blur-up" width="800" alt="" src="./images/Screenshot from 2023-04-30 17-47-37.resized.png">
<img class="x figure-img img-fluid lazyload blur-up" width="800" alt="" src="./images/Screenshot from 2023-04-30 18-06-55.resized.png">

{{< mermaid class="bg-light text-center" >}}
graph TD
  A[Hard] -->|Text| B(Round)
  B --> C{Decision}
  C -->|One| D[Result 1]
  C -->|Two| E[Result 2]
{{< /mermaid >}}

