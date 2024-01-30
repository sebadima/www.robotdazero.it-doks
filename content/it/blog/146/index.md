---
title: "Come compilare un breve programma con PlatformIO"
description: "Come compilare un breve programma con PlatformIO"
excerpt: "PlatformIO è il compilatore che usiamo di preferenza per l'ESP32. Esattamente Come l'IDE si Arduino può funzionare sia in modalità grafica (usando Visual Code) sia in modalità testo da terminale..."
date: 2024-01-29T09:19:42+01:00
lastmod: 2024-01-29T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["ESP32", "Arduino", "PlatformIO"]
contributors: ["sergio rame"]
pinned: false
homepage: false
mermaid: true
---



<!--

-->

<hr>
<br>

## Prepara i files per la compilazine

Ti serviranno tre file per partire con Platformio, ma per fortuna li trovi hià pront in uno ZIP "template" che trovi più avanti. Per il momento vediamo in line adi massima come procedere e quindo vedremo i files in dettaglio.

### Il codice sorgente

Si tratta del file dove inserirai le istruzioni in C++, un esempio lo trovi qua sotto. Il brevissimo file di esempio serve ad ottenere l'indirizzo MAC di un ESP32, un dato che ti servirà sempre quando lo usi in una rete MESH o semplicemente per progetti di networking vari.


#### File: main.ino

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

Ti servirà inoltre un file di configurazione chiamato "platformio.ini". Questo è il file di configurazione principale per il tuo progetto. Puoi specificare qui la piattaforma hardware, l'ambiente di sviluppo, le librerie utilizzate, ecc. Ad esempio:


#### File: platformio.ini

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

Opzioni avanzate: Puoi passare varie opzioni al comando platformio run per personalizzare il processo di compilazione, ad esempio, specificare la directory di output, abilitare/disabilitare la generazione di mappe dei simboli, ecc.
Nel mio caso ho specificato la opezione "upload_port = /dev/ttyUSB0" perchè volevo usare una specifica porta del mio Raspberry PI.


Il terzo file (ricorda che più avanti) li troverai già pronti in formato zippato) è un classico di Linux, si chiama "Makefile" con il primo carattere maiuscolo. Makefile deve essere presente nella directory e non richiede nessuna modifica per adattarlo ai diversi progetti.

#### File: Makefile

```bash
# Uncomment lines below if you have problems with $PATH
#SHELL := /bin/bash
#PATH := /usr/local/bin:$(PATH)

all:
	pio -f -c vim run

upload:
	pio -f -c vim run --target upload

clean:
	pio -f -c vim run --target clean

program:
	pio -f -c vim run --target program

uploadfs:
	pio -f -c vim run --target uploadfs

update:
	pio -f -c vim update
```

La cartella già pronta all'uso la trovi a questo <a href="/zip/platformio-template.zip">link</a> in formato ZIP.
Dopo il download la troverai nella cartella di default del tuo browser e potrai copiarla dove preferisci, ad esempio in una cartella di lavoro. quindi fai click destro da Windows/Linux e scegli "scompatta" o "estrai". Se stai usando un terminale a linea di comando scrivi:

```bash
unzip platformio-template.zip
```

Il programma "unzip" potrebbe non essere installato di default su Linux, in questo caso basta copiare e incollare questa singola riga:

```bash
sudo apt-get install unzip
```

### La compilazione dal terminale

Dopo avere estratto i tre files puoi digitare:


```bash
make upload
```

per caricare il programma su Esp32 o Arduino. 


<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑
make upload

pio -f -c vim run --target upload

Processing esp32dev (platform: espressif32; board: esp32dev; framework: arduino)
Verbose mode can be enabled via `-v, --verbose` option
CONFIGURATION: https://docs.platformio.org/page/boards/espressif32/esp32dev.html
PLATFORM: Espressif 32 (6.4.0) > Espressif ESP32 Dev Module
HARDWARE: ESP32 240MHz, 320KB RAM, 4MB Flash
DEBUG: Current (cmsis-dap) External (cmsis-dap, esp-bridge, esp-prog, iot-bus-jtag, jlink, minimodule, olimex-arm-usb-ocd, olimex-arm-usb-ocd-h, olimex-arm-usb-tiny-h, olimex-jtag-tiny, tumpa)
PACKAGES: 
 - framework-arduinoespressif32 @ 3.20011.230801 (2.0.11) 
 - tool-esptoolpy @ 1.40501.0 (4.5.1) 
 - tool-mkfatfs @ 2.0.1 
 - tool-mklittlefs @ 1.203.210628 (2.3) 
 - tool-mkspiffs @ 2.230.0 (2.30) 
 - toolchain-xtensa-esp32 @ 8.4.0+2021r2-patch5
Converting main.ino
LDF: Library Dependency Finder -> https://bit.ly/configure-pio-ldf
LDF Modes: Finder ~ chain, Compatibility ~ soft
Found 33 compatible libraries
Scanning dependencies...
Dependency Graph
|-- WiFi @ 2.0.0
Building in release mode
Compiling .pio/build/esp32dev/src/main.ino.cpp.o
Retrieving maximum program size .pio/build/esp32dev/firmware.elf
Checking size .pio/build/esp32dev/firmware.elf
Advanced Memory Usage is available via "PlatformIO Home > Project Inspect"
RAM:   [=         ]  12.9% (used 42320 bytes from 327680 bytes)
Flash: [=====     ]  54.3% (used 712333 bytes from 1310720 bytes)
Configuring upload protocol...
AVAILABLE: cmsis-dap, esp-bridge, esp-prog, espota, esptool, iot-bus-jtag, jlink, minimodule, olimex-arm-usb-ocd, olimex-arm-usb-ocd-h, olimex-arm-usb-tiny-h, olimex-jtag-tiny, tumpa
CURRENT: upload_protocol = esptool
Looking for upload port...
Using manually specified: /dev/ttyUSB0
Uploading .pio/build/esp32dev/firmware.bin
esptool.py v4.5.1
Serial port /dev/ttyUSB0
Connecting.....
Chip is ESP32-D0WD-V3 (revision v3.1)
Features: WiFi, BT, Dual Core, 240MHz, VRef calibration in efuse, Coding Scheme None
Crystal is 40MHz
MAC: 08:d1:f9:99:2d:84
Uploading stub...
Running stub...
Stub running...
Changing baud rate to 460800
Changed.
Configuring flash size...
Flash will be erased from 0x00001000 to 0x00005fff...
Flash will be erased from 0x00008000 to 0x00008fff...
Flash will be erased from 0x0000e000 to 0x0000ffff...
Flash will be erased from 0x00010000 to 0x000bffff...
Compressed 17536 bytes to 12203...
Writing at 0x00001000... (100 %)
Wrote 17536 bytes (12203 compressed) at 0x00001000 in 0.4 seconds (effective 351.9 kbit/s)...
Hash of data verified.
Compressed 3072 bytes to 146...
Writing at 0x00008000... (100 %)
Wrote 3072 bytes (146 compressed) at 0x00008000 in 0.0 seconds (effective 969.1 kbit/s)...
Hash of data verified.
Compressed 8192 bytes to 47...
Writing at 0x0000e000... (100 %)
Wrote 8192 bytes (47 compressed) at 0x0000e000 in 0.0 seconds (effective 1489.9 kbit/s)...
Hash of data verified.
Compressed 718080 bytes to 466296...
Writing at 0x00010000... (3 %)
Writing at 0x0001c12a... (6 %)
Writing at 0x00027041... (10 %)
...
Writing at 0x000b7350... (96 %)
Writing at 0x000bcbca... (100 %)
Wrote 718080 bytes (466296 compressed) at 0x00010000 in 10.7 seconds (effective 539.3 kbit/s)...
Hash of data verified.

Leaving...
Hard resetting via RTS pin...

sebadima@raspberrypi:~/esp32/esp_now_ESP32_mac_address $ 

</div>

Sopo avere compilato e fatto l'upload del programma possiamo lanciare il monitor per vedere i messaggi della sched e leggere l'indirzzo MAC, lo scopo finale del programmino...

```bash
platformio device monitor --baud 115200  --rts 0 --dtr 0
```

Il risultato sul terminale sarà:


<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑

platformio device monitor --baud 115200  --rts 0 --dtr 0
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
indirizzo MAC=indirizzo MAC=08:D1:F9:99:2D:84

</div>

Come vedi alla fine delle compilazione ho lanciato il comando:

```bash
platformio device monitor --baud 115200  --rts 0 --dtr 0
```

Per vedere l'outup del programmino anche in remoto senza usare l'IDE di Visual studio Code o di Arduino. E' importante non omettere i flag: "--rts 0 --dtr 0" perchè avresti molti problemi nel visualizzare il "monitoring" dell'ESP32-CAM

<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it -  post - R.146.0.5.0</p>