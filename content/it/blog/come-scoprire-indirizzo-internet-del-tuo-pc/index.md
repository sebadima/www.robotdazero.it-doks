---
title: Come scoprire l'indirizzo internet del tuo PC
description: "ddddddd."
excerpt: "Conoscere l’indirizzo IP del nostro computer è molto facile usando il browser ma sulla shell di Linux dobbiamo imparare altri sistemi. Scopriamo alcuni dei metodi più comuni ... "
date: 2019-03-12T09:19:42+01:00
lastmod: 2019-03-12T09:19:42+01:0
draft: false
weight: 50
images: ["images/indirizzo internet del pc.webp"]
categories: ["News"]
tags: ["ESP32", "teoria", "alimentazione"]
contributors: ["sebadima"]
pinned: false
homepage: false
---

<br>

### Conoscere l&#8217;indirizzo IP del nostro computer è molto facile usando il browser ma sulla shell di Linux dobbiamo imparare altri sistemi. Scopriamo alcuni dei metodi più comuni.
  
Per scoprire l’indirizzo internet del nostro computer in linea di massima dovremmo usare il comando :
  
```bash
/sbin/ifconfig -a
```
  
per avere un quadro completo della situazione, ma questo è il risultato che ci fornisce il nostro Linux:
  
  
> docker0 Link encap:Ethernet HWaddr inet addr:172.17.0.1 Bcast:172.17.255.255 Mask:255.255.0.0 UP BROADCAST MULTICAST MTU:1500 Metric:1 RX packets:0 errors:0 dropped:0 overruns:0 frame:0 TX packets:0 errors:0 dropped:0 overruns:0 carrier:0 collisions:0 txqueuelen:0 RX bytes:0 (0.0 B) TX bytes:0 (0.0 B)
    enp7s0 Link encap:Ethernet HWaddr UP BROADCAST MULTICAST MTU:1500 Metric:1 RX packets:0 errors:0 dropped:0 overruns:0 frame:0 TX packets:0 errors:0 dropped:0 overruns:0 carrier:0 collisions:0 txqueuelen:1000 RX bytes:0 (0.0 B) TX bytes:0 (0.0 B)
    lo Link encap:Local 

  
##### Se cerchi su Google questa è probabilmente la prima soluzione che ti appare.  Come vedi districarsi tra tante righe di output è davvero complicato. Il risultato è così confuso da lasciare un poco interdetti. Io ti consiglio di usare questi metodi alternativi, molto piu semplici:
  


```bash
curl icanhazip.com
```

oppure usando wget:

```bash
wget -qO- icanhazip.com
```
  
##### Altro sistema per sapere il tuo indirizzo IP in rete:
  
```bash
curl ifconfig.me/ip
```
  
nella versione con wget:
  
```bash
wget ifconfig.me/ip
```

  
Ti consiglio di usare sempre questi comandi che si appoggiano a dei <strong>siti internet</strong> e di salvare il comando in un file script dandogli il nome “ipp” o un altro nome che ti riesce facile da ricordare.
