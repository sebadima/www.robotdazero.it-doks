---
title: Come usare Arduino per far rinascere il Commodore 64
description: "Un articolo uscito su Instructables.com ci permette di scoprire il potente Raspberry PI. Scoprirai come collegarlo ad Arduino in un articolo dettagliatissimo e con istruzioni passo passo.."
excerpt: "Un articolo uscito su Instructables.com ci permette di scoprire il potente Raspberry PI. Scoprirai come collegarlo ad Arduino in un articolo dettagliatissimo e con istruzioni passo passo.."
date: 2020-11-04T09:19:42+01:00
lastmod: 2020-11-04T09:19:42+01:00
draft: true
weight: 50
images: ["images/arduino-per-il-commodore-64.jpg"]
categories: ["News"]
tags: ["rover", "performance", "SEO"]
contributors: ["sebadima"]
pinned: false
homepage: false
---


Un articolo uscito su Instructables.com ci permette di scoprire il potente Raspberry PI. Scoprirai come collegarlo ad Arduino in un articolo dettagliatissimo e con istruzioni passo passo.

&nbsp;

## Un interessante emulatore di Commodore 64 non solo per i nostalgici degli anni 80 {#un-interessante-emulatore-di-commodore-64-non-solo-per-i-nostalgici-degli-anni-80}

* * *

In questo interessante progetto un Raspberry Pi viene utilizzato come CPU assieme ad Arduino, usato solo per le connessioni hardware e la interfaccia USB.

Il Raspberry Pi dispone di maggiore potenza elaborativa rispetto ad Arduino ed è in grado di far girare molte piattaforme di emulazione compresa quello utilizzata nel progetto e chiamata [Retropie][1].

Il telaio del Commodore 64 viene completamente svuotato e la vecchia scheda madre sostituita con l’accoppiata Pi + Arduino.

<img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1601455334/001/FMUXQ20JZD6T9WY_pth6sk.jpg" alt="Commodore 64" /> Dei pezzi Lego vengono utilizzati per costruire l’alloggiamento interno del sistema. Il progetto include anche un interruttore di accensione per spegnere e riaccendere il Pi, sebbene ciò possa essere fatto anche tramite RetroPie. Fondamentalmente viene utilizzato un pulsante momentaneo, collegato ai pin GPIO sul Pi. Il software documentato nel progetto rileva la pressione di un pulsante e spegne il Pi.

<img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1601455328/001/FRDNQ0BJZD6TEO4_lny6u9.jpg" alt="Raspberry pi" /> 

L’autore del progetto su Instructables, la bibbia dell’autocostruzione consiglia di utilizzare un [Raspberry Pi 3B][2], con Arduino che traduce la **tastiera a matrice** Commodore 64 in una tastiera compatibile con la **interfaccia USB HID** usata dal Pi. Questo il [link][3] dell’articolo.

 [1]: https://www.raspberrypi.org/blog/retropie-for-raspberry-pi-4-video-game-emulation-on-our-fastest-ever-device/
 [2]: https://amzn.to/3cIC92G
 [3]: https://www.instructables.com/id/Commodore-64-Revamp-With-Raspberry-Pi-Arduino-and-/
