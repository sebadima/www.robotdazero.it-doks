---
title: Come scoprire l'indirizzo internet del tuo PC
description: "Come scoprire l'indirizzo internet del tuo PC"
excerpt: "Conoscere l’indirizzo IP del nostro computer è molto facile usando il browser ma sulla shell di Linux dobbiamo imparare altri sistemi. Scopriamo alcuni dei metodi più comuni ... "
date: 2019-03-12T09:19:42+01:00
lastmod: 2019-03-12T09:19:42+01:0
draft: false
weight: 50
images: ["images/indirizzo internet del pc.jpg"]
categories: ["News"]
tags: ["linux", ubuntu", "shell", "networking", "terminale"]
contributors: ["sergio rame"]
pinned: false
homepage: false
---

<br>

#### Conoscere l&#8217;indirizzo IP del nostro computer è molto facile usando il browser ma sulla shell di Linux dobbiamo imparare altri sistemi. Scopriamo alcuni dei metodi più comuni.
  
Per scoprire l’indirizzo internet del nostro computer in linea di massima potremmo usare il comando :
  
```bash
/sbin/ifconfig -a
```
  
per avere un quadro completo della situazione, ma questo è il risultato che ci potrebbe fornire la shell del nostro PC Linux:
  
> lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 94260  bytes 151349678 (151.3 MB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 94260  bytes 151349678 (151.3 MB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

##### Se cerchi su Google questa è probabilmente la prima soluzione che ti appare.  Come vedi districarsi tra tante righe di output è davvero complicato. Il risultato è così confuso da lasciare un poco interdetti. Io ti consiglio di usare questi metodi alternativi, molto piu semplici:
  
```bash
curl icanhazip.com
```

oppure usando wget:

```bash
wget -qO- icanhazip.com
```

##### Ecco un sito alternativo per sapere il tuo indirizzo IP in rete:
  
```bash
curl ifconfig.me/ip
```

e nella versione con wget:
  
```bash
 wget -qO- icanhazip.com
```

Ti consiglio di usare sempre questi comandi che si appoggiano a dei <strong>siti internet</strong> e di salvare il comando in un file script dandogli il nome “ipp” o un altro nome che ti riesce facile da ricordare.

