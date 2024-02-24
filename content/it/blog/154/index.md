---
title: "Come scrivere su un display con ESP32"
description: "Come scrivere su un display con ESP32"
excerpt: "Per scrivere su un display LCD usando l'interfaccia I2C e Arduino, è necessario seguire questi passaggi..."
date: 2024-02-24T01:19:42+01:00
lastmod: 2024-02-24T01:19:42+01:00
draft: true
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["ESP32", "PlatformIO", "LCD", "Display"]
contributors: ["sebadima"]
pinned: false
homepage: false
mermaid: true
---



## Introduzione

Scrivere su un display LCD con I2C e Arduino:
Per scrivere su un display LCD usando l'interfaccia I2C e Arduino, è necessario seguire questi passaggi:

1. Collegare il display LCD ad Arduino:

Collegare il pin Vcc del display LCD al pin 5V di Arduino.
Collegare il pin GND del display LCD al pin GND di Arduino.
Collegare il pin SDA del display LCD al pin SDA (A4) di Arduino.
Collegare il pin SCL del display LCD al pin SCL (A5) di Arduino.
Collegare il pin di contrasto del display LCD a un pin analogico di Arduino (ad esempio, A0).
2. Installare la libreria LiquidCrystal_I2C:

Aprire l'IDE di Arduino.
Cliccare su "Strumenti" -> "Gestisci librerie".
Cercare la libreria "LiquidCrystal_I2C" e installarla.
3. Caricare un esempio di sketch:

Aprire un nuovo sketch in Arduino.
Includere la libreria LiquidCrystal_I2C:
#include <LiquidCrystal_I2C.h>
Creare un'istanza della classe LiquidCrystal_I2C:
LiquidCrystal_I2C lcd(0x27, 16, 2); // Indirizzo I2C, numero di colonne e righe
Impostare il contrasto del display:
lcd.contrast(30); // Valore di contrasto (da 0 a 255)
Scrivere un messaggio sul display:
lcd.setCursor(0, 0); // Posizione del cursore (colonna, riga)
lcd.print("Ciao mondo!");
Caricare lo sketch su Arduino.
4. Personalizzare il tuo codice:

Puoi utilizzare i metodi della classe LiquidCrystal_I2C per scrivere testo, numeri e simboli sul display.
Puoi anche posizionare il cursore, modificare la dimensione del carattere e attivare la retroilluminazione.
5. Risorse utili:

Libreria LiquidCrystal_I2C: https://github.com/marcoschwartz/LiquidCrystal_I2C
Tutorial sull'utilizzo di I2C con Arduino: [URL non valido rimosso]
Suggerimenti:

Assicurati di collegare correttamente il display LCD ad Arduino.
Controlla l'indirizzo I2C del tuo display LCD.
Usa la funzione lcd.clear() per cancellare il contenuto del display.
Puoi utilizzare la funzione lcd.setCursor(0, 0) per posizionare il cursore all'inizio del display.


<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.154.0.5.0</p>
