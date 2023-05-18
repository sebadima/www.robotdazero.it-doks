---
title: I nuovi Sensori di Biossido di Carbonio con ESP32
description: "I nuovi Sensori di Biossido di Carbonio con ESP32"
excerpt: "Da un paio di giorni stiamo assemblando le nuove centraline con sensori di CO2 Sensirion SCD30 e controller ESP32. Sono destinate a monitorare la concentrazione di CO2 nella aule scolastiche e nelle palestre, cinema, e quant’altro…..."
date: 2023-04-02T09:19:42+01:00
lastmod: 2023-04-02T09:19:42+01:00
draft: false
weight: 50
images: ["sensori-biossido-di-carbonio.webp"]
categories: ["News"]
tags: ["CO2", "centraline", "progetti"]
contributors: ["sebadima"]
pinned: false
homepage: false
---

<style>
.x {
    transition:transform 0.60s ease;
}

.x:hover {
    -webkit-transform:scale(1.50); /* or some other value */
    transform:scale(1.50);
}
</style>

#### Da un paio di giorni stiamo assemblando le nuove centraline con sensori di CO<sub>2</sub> [Sensirion SCD30][1] e controller ESP32. Sono destinate a monitorare la concentrazione di [CO<sub>2</sub>][2] nella aule scolastiche e nelle palestre, cinema, e quant&#8217;altro&#8230;

**Perchè è utile conoscere la concentrazione di questo gas?**

> **Perchè l&#8217; Anidride Carbonica** (CO<sub>2</sub>) è strettamente correlata alla diffusione del Covid19. Non la facilita ma viene considerata un buon indicatore di luoghi troppo affollati e perciò a maggior rischio di contagio. Non è pericolosa in sè ma funziona da _semaforo_.

Nella foto puoi vedere la parte inferiore del box realizzata con una stampante 3d [Anycubic Kobra][3] con il sensore incastrato in basso a destra. Al centro della foto la solita breadboard un ESP32 a 38 pin che abbiamo scelto per il progetto.

I dati saranno raccolti sulla nostra piattaforma per IOT, e per l&#8217;output immediato useremo una corona i LED RGB **WS2812B** da 5 V 12-Bit. Se siete curiosi vi illustreremo _DAY by DAY_ lo sviluppo del progettino su questo Blog. Il prodotto finito sarà disponibile sul nostro [Ecommerce][4] entro la fine di Novembre. &#8212; agg.to 04/11/2022: Vi proponiamo intanto il semplice sorgente per calibrare e visualizzare i valori della anidride carbonica:

<script src="https://gist.github.com/sebadima/7889dd02f14832ac519f2c85cfce4dbb.js"></script>

### Migliorie e case definitivo

Lo sviluppo del sensore di CO2 procede con la versione **semidefinitva.** Abbiamo settato il livelli del primo LED giallo a **1300** parti per milione, leggermente superiore al livello di attenzione di 1200 PPM della normativa elvetica per gli uffici e le aule statali, il secondo led giallo si accende a **1450** di poco inferiore al valore di 1500 PPM previsto dalla normativa italiana. L&#8217;ultimo LED giallo si accende a **1600** PPM quando cioè viene _sicuramente_ superata la soglia prevista dalla normativa italiana. I LED gialli per come abbiamo inteso il sensore _suggeriscono_ che sarebbe il momento di ventilare il locale, mentre i LED rossi misurano un livello di rischio cui non si dovrebbe mai arrivare.


<img class="x" src="images/sensori-biossido-di-carbonio-img1.webp">

###### Nella immagine una versione di preserie del sensore con case 3D stampato in resina biodegradabile
 [1]: https://sensirion.com/products/catalog/SCD30/
 [2]: https://it.wikipedia.org/wiki/Anidride_carbonica
 [3]: https://www.amazon.it/ANYCUBIC-Pro-Stampante-materasso-riscaldante/dp/B07P7LTNHP/ref=sr_1_17?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=stampante+3d+economica&qid=1665576723&qu=eyJxc2MiOiI1LjU1IiwicXNhIjoiNC44MSIsInFzcCI6IjMuNTgifQ%3D%3D&s=industrial&smid=A3NMBXAME8GJMS&sr=1-17
 [4]: https://www.robotdazero.it/shop/
