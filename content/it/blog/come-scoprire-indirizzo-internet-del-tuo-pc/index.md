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


<div class="cms mw6">
  <p>
    <em>Conoscere l&#8217;indirizzo IP del nostro computer è molto facile usando il browser ma sulla shell di Linux dobbiamo imparare altri sistemi. Scopriamo alcuni dei metodi più comuni.</em>
  </p>
  
  <h4 id="come-scoprire-l-indirizzo-internet-del-nostro-computer">
    Come scoprire l’indirizzo internet del nostro computer:
  </h4>
  
  <p>
    In linea di massima dovremmo usare il comando :
  </p>
  
  <blockquote>
    <p>
      /sbin/ifconfig -a
    </p>
  </blockquote>
  
  <p>
    per avere un quadro completo della situazione, ma questo è il risultato che ci fornisce il nostro Linux:
  </p>
  
  <hr />
  
    docker0 Link encap:Ethernet HWaddr inet addr:172.17.0.1 Bcast:172.17.255.255 Mask:255.255.0.0 UP BROADCAST MULTICAST MTU:1500 Metric:1 RX packets:0 errors:0 dropped:0 overruns:0 frame:0 TX packets:0 errors:0 dropped:0 overruns:0 carrier:0 collisions:0 txqueuelen:0 RX bytes:0 (0.0 B) TX bytes:0 (0.0 B)
    enp7s0 Link encap:Ethernet HWaddr UP BROADCAST MULTICAST MTU:1500 Metric:1 RX packets:0 errors:0 dropped:0 overruns:0 frame:0 TX packets:0 errors:0 dropped:0 overruns:0 carrier:0 collisions:0 txqueuelen:1000 RX bytes:0 (0.0 B) TX bytes:0 (0.0 B)
    lo Link encap:Local Loopback<br /> inet addr:127.0.0.1 Mask:255.0.0.0 inet6 addr: ::<sup>1</sup>⁄<sub>128</sub> Scope:Host UP LOOPBACK RUNNING MTU:65536 Metric:1 RX packets:61325 errors:0 dropped:0 overruns:0 frame:0 TX packets:61325 errors:0 dropped:0 overruns:0 carrier:0 collisions:0 txqueuelen:1000 RX bytes:13723605 (13.7 MB) TX bytes:13723605 (13.7 MB)
    wlp13s0 Link encap:Ethernet HWaddr inet addr:192.168.1.3 Bcast:192.168.1.255 Mask:255.255.255.0 inet6 addr: fe80::52f0:1f14:f3f3:<sup>16</sup>⁄<sub>64</sub> Scope:Link UP BROADCAST RUNNING MULTICAST MTU:1500 Metric:1 RX packets:8368760 errors:0 dropped:0 overruns:0 frame:0 TX packets:3468840 errors:0 dropped:0 overruns:0 carrier:0 collisions:0 txqueuelen:1000 RX bytes:11766200421 (11.7 GB) TX bytes:492953619 (492.9 MB)

  
##### Se cerchi su Google questa è probabilmente la prima soluzione che ti appare.  Come vedi districarsi tra tante righe di output è davvero complicato. Il risultato è così confuso da lasciare un poco interdetti. Io ti consiglio di usare questi metodi alternativi, molto piu semplici:
  
  <blockquote>
    <p>
      $   curl icanhazip.com
    </p>
  </blockquote>
  
  <p>
    oppure usando wget:
  </p>
  
  <blockquote>
    <p>
      $   wget -qO- icanhazip.com
    </p>
  </blockquote>
  
  <h4 id="altro-sistema-per-sapere-il-tuo-indirizzo-ip-in-rete">
    Altro sistema per sapere il tuo indirizzo IP in rete:
  </h4>
  
  <blockquote>
    <p>
      $    curl ifconfig.me/ip
    </p>
  </blockquote>
  
  <p>
    nella versione con wget:
  </p>
  
  <blockquote>
    <p>
      $    wget -qO- icanhazip.com
    </p>
  </blockquote>
  
  <p>
    Ti consiglio di usare sempre questi comandi che si appoggiano a dei <strong>siti internet</strong> e di salvare il comando in un file script dandogli il nome “ipp” o un altro nome che ti riesce facile da ricordare.
  </p>
</div>
