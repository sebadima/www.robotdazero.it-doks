---
title: "Un progetto per ESP32 e la rete di tipo mesh"
description: "Un progetto per ESP32 e la rete di tipo mesh"
excerpt: "..."
date: 2023-11-02T09:19:42+01:00
lastmod: 2023-11-02T09:19:42+01:00
draft: true
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["ESP32", "programmazione", "reti mesh", "ambiente"]
contributors: ["sebadima"]
pinned: false
homepage: false
---


#### Il codice sorgente main.ino per trovare l'indirizzo MAC di un ESP32

```bash
#include "WiFi.h"
 
void setup(){
  Serial.begin(115200);
  WiFi.mode(WIFI_MODE_STA);
  Serial.print("indirizzo MAC="); 
  Serial.println(WiFi.macAddress());
}
 
void loop(){ 

}
```


##### Il file platformio.ini associato

```bash
; PlatformIO Project Configuration File
;
;   Build options: build flags, source filter
;   Upload options: custom upload port, speed and extra flags
;   Library options: dependencies, extra library storages
;   Advanced options: extra scripting
;
; Please visit documentation for the other options and examples
; https://docs.platformio.org/page/projectconf.html

[env:esp32dev]
upload_port = /dev/ttyUSB0
platform = espressif32
board = esp32dev
framework = arduino
lib_deps = 
```







#### Il codice sorgente main.ino per trovare l'indirizzo MAC di un ESP32CAM

```bash
#include "WiFi.h"
 
void setup(){
  Serial.begin(115200);
  WiFi.mode(WIFI_MODE_STA);
  Serial.print("indirizzo MAC ESP32CAM="); 
  Serial.println(WiFi.macAddress());
}
 
void loop(){ 

}
```     

##### Il file platformio.ini associato, specifico per ESP32CAM

```bash
; PlatformIO Project Configuration File
;
;   Build options: build flags, source filter
;   Upload options: custom upload port, speed and extra flags
;   Library options: dependencies, extra library storages
;   Advanced options: extra scripting
;
; Please visit documentation for the other options and examples
; https://docs.platformio.org/page/projectconf.html

[env:esp32cam]
platform = espressif32
board = esp32cam
framework = arduino
monitor_speed=115200
lib_ldf_mode=deep
build_flags =
   -I../lib/esp32-camera

lib_deps =
```









22222222222222222222222222222222222222222222222222222222 sender 222222222222222222222222222222222222

```bash
```
```bash
```

222222222222222222222222222222222222222222222222222222 sender 222222222222222222222222222222222222
























33333333333333333333333333333333333333333333333333333333 receive 33333333333333333333333333333333


```bash
```

```bash
```

33333333333333333333333333333333333333333333333333333333 receive 33333333333333333333333333333333










<br>
<p style="font-size: 0.8em;">R.123.1.1.0</p>