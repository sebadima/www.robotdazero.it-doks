---
title: "Il problema della connessione simultanea WIFI ed ESP-NOW"
description: "Il problema della connessione simultanea WIFI ed ESP-NOW"
excerpt: "Il problema della connessione simultanea WIFI ed ESP-NOW..."
date: 2024-02-26T01:19:42+01:00
lastmod: 2024-02-26T01:19:42+01:00
draft: true
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["ESP32", "PlatformIO", "ESPNOW", "WIFI"]
contributors: ["sergio rame"]
pinned: false
homepage: false
mermaid: true
---



<!-- https://randomnerdtutorials.com/esp32-esp-now-wi-fi-web-server/  -->

## 

Ci sono alcune cose che dovete prendere in considerazione se si desidera utilizzare Wi-Fi per ospitare un server web e utilizzare ESP-NOW contemporaneamente per ricevere le letture dei sensori da altre schede:

Le schede mittente ESP32 devono utilizzare lo stesso canale Wi-Fi della scheda ricevente.
Il canale WiFi della scheda ricevente viene assegnato automaticamente dal router WiFi.
La modalità Wi-Fi della scheda ricevente deve essere access point e station (WIFI_AP_STA).
È possibile impostare manualmente lo stesso canale Wi-Fi, oppure è possibile aggiungere una semplice spinetta di codice sul mittente per impostare il proprio canale Wi-Fi sullo stesso della scheda ricevente.


> *.*

<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.155.0.3.0</p>