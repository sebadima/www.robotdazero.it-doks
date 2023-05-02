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
---

<style>
.x {
    transition:transform 0.50s ease;
}

.x:hover {
    -webkit-transform:scale(1.25); /* or some other value */
    transform:scale(1.25);
}
</style>

### Stavolta ci occupiamo della scelta della CPU

<img class="x figure-img img-fluid lazyload blur-up" width="800" alt="" src="./images/consumi celeron.png">
<img class="x figure-img img-fluid lazyload blur-up" width="800" alt="" src="./images/Screenshot from 2023-04-30 17-26-25.resized.png">
<img class="x figure-img img-fluid lazyload blur-up" width="800" alt="" src="./images/Screenshot from 2023-04-30 17-47-37.resized.png">
<img class="x figure-img img-fluid lazyload blur-up" width="800" alt="" src="./images/Screenshot from 2023-04-30 17-50-34.resized.png">
<img class="figure-img img-fluid lazyload blur-up" width="800" alt="" src="./images/Screenshot from 2023-04-30 17-51-38.resized.png">
<img class="figure-img img-fluid lazyload blur-up" width="800" alt="" src="./images/Screenshot from 2023-04-30 17-56-04.resized.png">
<img class="figure-img img-fluid lazyload blur-up" width="800" alt="" src="./images/Screenshot from 2023-04-30 17-47-37.resized.png">
<img class="figure-img img-fluid lazyload blur-up" width="800" alt="" src="./images/Screenshot from 2023-04-30 18-06-55.resized.png">
<img class="figure-img img-fluid lazyload blur-up" width="800" alt="" src="./images/Screenshot from 2023-04-30 18-12-15.resized.png">
