---
title:         "Come Pilotare un motore elettrico usando ESP32"
description:   "Come Pilotare un motore elettrico usando ESP32"
excerpt:       ""
date:          2024-03-16T09:19:42+01:00
lastmod:       2024-03-16T09:19:42+01:00
draft:         false
weight:        50
images:        ["header.webp"]
categories:    ["News"]
tags:          ["motori", "ESP32", "automazione"]
contributors:  ["sergio rame"]
pinned:        false
homepage:      false
mermaid:       true
---


Questo è il driver del motore più semplice che potrebbe essere costruito utilizzando un solo transistor NPN, che è controllato e guidato dalla scheda micro controller ESP32.

## Materiali e strumenti

- Microcontrollore ESP32
- Motore di CC
- Transistor NPN-BC337
- Resistenza 100Ω
- Diodo - N4148 Uso generale
- connettori Dupont
- Breadboard
2x ponticello


Fase 2: Collegamento del segnale
Collegamento del segnale
Collegare una resistenza da 100Ω al pin di base (centrale) del transistor NPN per proteggere la scheda EPS32 da sovratensione, quindi collegarla in serie a D5

Fase 3: Collegamento dell'alimentatore
Collegamento dell'alimentazione
Collegamento dell'alimentazione
Collegare il pin del collettore (a destra) a terra.
Collegare il perno dell'emettitore (a sinistra) al perno positivo del diodo per uso generale.
Collegare il pin negativo del diodo general purpose a 3.3 V.
Passo 4: Collegare il motore DC
Collegare il motore DC
Collegare uno dei pin a entrambe le estremità del diodo.
L'ordine non ha importanza, cambia solo la rotazione che è arbitraria e può essere codificata come alta attiva o bassa attiva.

Fase 5: Codifica
Codifica
Scegliere ESP32 come la scheda sotto strumenti,e collegarlo. Scegli la porta USB corrispondente etichettata ESP32, quindi carica il seguente codice sulla scheda.



## Il codice completo

```bash
const int motorPin = 5;
void setup()
{
  //set motorPin as OUTPUT
  pinMode(motorPin, OUTPUT);
}
void loop()
{
   motorOnThenOff();
}
// This function turns the motor on and off like the blinking LED.
// Try different values to affect the timing.
void motorOnThenOff()
{
  // milliseconds to turn the motor on
  int onTime = 3000;
  // milliseconds to turn the motor off
  int offTime = 3000; 
  // turn the motor on (full speed)
  digitalWrite(motorPin, HIGH); 
  // delay for onTime milliseconds
  delay(onTime);     
  // turn the motor off
  digitalWrite(motorPin, LOW);  
  // delay for offTime milliseconds
  delay(offTime);               
}```

<br>
<br>
<p style="font-size: 0.75em;">R.160.0.21</p>