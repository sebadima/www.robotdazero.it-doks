---
title:        "Come implementare un server web con ESP32"
description:  "Come implementare un server web con ESP32"
excerpt:      "..."
date:         2024-03-01T01:18:42+01:00
lastmod:      2024-03-01T01:18:42+01:00
draft:        false
weight:       50
images:       ["header.jpeg"]
categories:   ["News"]
tags:         ["ESP32", "Sensori"]
contributors: ["sebadima"]
pinned:       false
homepage:     false
mermaid:      true
---



<!-- 
<img width="300" class="x figure-img img-fluid lazyload blur-up"  src="/images/154.png" alt="schema connessioni">
<strong>1</strong>. <span style="background-color:#eeeeee"> Controllo delle versioni</span>:
img width="70" class="x figure-img img-fluid lazyload blur-up"  src="/hog/inter.svg" alt="logo sezione"><br><br>

```bash
```     

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑.</div>
⚡️ 😎 👋 🔑 ( https://yaytext.com/emoji/ )   L&#8217;alimentazione   L&#8217;alimentazione 

-->



## Perchè implementare un server web con ESP32



### Gli header del programma

```bash
#include "ESPAsyncWebServer.h"
#include <WiFi.h>
```    

Le variabili statiche

```bash
constexpr char WIFI_SSID[] = "change-name";
constexpr char WIFI_PASS[] = "change-name";

IPAddress local_IP(192, 168, 1, 200);
IPAddress gateway(192, 168, 1, 1);
IPAddress subnet(255, 255, 0, 0);
IPAddress primaryDNS(8, 8, 8, 8);
IPAddress secondaryDNS(8, 8, 4, 4);
```

### Le variabili per il server web

```bash
AsyncWebServer server(80);

const char index_html[] PROGMEM = R"rawliteral(
<!DOCTYPE HTML><html>
<head>
  <title>Robotdazero - un semplice sito Statico</title>
</head>
<body>
  <p>Robotdazero - un semplice sito Statico</p>
</body>
</html>)rawliteral";
```


> La istruzione *rawliteral(* di Arduino...


### La connessione al WI-Fi

```bash
void initWiFi() {
    WiFi.mode(WIFI_MODE_STA);

    if(!WiFi.config(local_IP, gateway, subnet, primaryDNS, secondaryDNS)) {
      Serial.println("Non riesco a configurare la modalità station (STA)");
    }

    WiFi.begin(WIFI_SSID, WIFI_PASS);

    Serial.printf("In connessione a %s .", WIFI_SSID);
    while (WiFi.status() != WL_CONNECTED) { Serial.print("."); delay(200); }
    Serial.println("connesso!");

    IPAddress ip = WiFi.localIP();

    Serial.printf("SSID: %s\n", WIFI_SSID);
    Serial.printf("Canale: %u\n", WiFi.channel());
    Serial.printf("IP: %u.%u.%u.%u\n", ip & 0xff, (ip >> 8) & 0xff, (ip >> 16) & 0xff, ip >> 24);
}


```

### Il setup() e la funzioneloop()

```bash
```

<br><br><img width="70" class="x figure-img img-fluid lazyload blur-up"  src="/hog/inter.svg" alt="logo sezione"><br><br>


### Il programma con il monitor seriale

```bash
--- forcing DTR inactive
--- forcing RTS inactive
--- Terminal on /dev/ttyUSB0 | 115200 8-N-1
--- Available filters and text transformations: colorize, debug, default, direct, esp32_exception_decoder, hexlify, log2file, nocontrol, printable, send_on_enter, time
--- More details at https://bit.ly/pio-monitor-filters
--- Quit: Ctrl+C | Menu: Ctrl+T | Help: Ctrl+T followed by Ctrl+H
ets Jul 29 2019 12:21:46

rst:0x1 (POWERON_RESET),boot:0x13 (SPI_FAST_FLASH_BOOT)
configsip: 0, SPIWP:0xee
clk_drv:0x00,q_drv:0x00,d_drv:0x00,cs0_drv:0x00,hd_drv:0x00,wp_drv:0x00
mode:DIO, clock div:2
load:0x3fff0030,len:1184
load:0x40078000,len:13232
load:0x40080400,len:3028
entry 0x400805e4
In connessione a D-Link-3D1BBF000 .....
```     



<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.157.0.2.0</p>