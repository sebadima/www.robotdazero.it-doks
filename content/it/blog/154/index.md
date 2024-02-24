---
title: "Come scrivere su un display con ESP32"
description: "Come scrivere su un display con ESP32"
excerpt: "Per scrivere su un display LCD usando l'interfaccia I2C e ESP32, è necessario seguire questi passaggi..."
date: 2024-02-24T01:19:42+01:00
lastmod: 2024-02-24T01:19:42+01:00
draft: true
weight: 50
images: ["header.jpg"]
categories: ["News"]
tags: ["ESP32", "PlatformIO", "LCD", "Display"]
contributors: ["sebadima"]
pinned: false
homepage: false
mermaid: true
---



## Introduzione

Scrivere su un display LCD con I2C e ESP32:
Per scrivere su un display LCD usando l'interfaccia I2C e ESP32, è necessario seguire questi passaggi:

1. Collegare il display LCD ad ESP32:

Collegare il pin Vcc del display LCD al pin 5V di ESP32.
Collegare il pin GND del display LCD al pin GND di ESP32.
Collegare il pin SDA del display LCD al pin SDA (A4) di ESP32.
Collegare il pin SCL del display LCD al pin SCL (A5) di ESP32.
Collegare il pin di contrasto del display LCD a un pin analogico di ESP32 (ad esempio, A0).
2. Installare la libreria LiquidCrystal_I2C:

Aprire l'IDE di ESP32.
Cliccare su "Strumenti" -> "Gestisci librerie".
Cercare la libreria "LiquidCrystal_I2C" e installarla.
3. Caricare un esempio di sketch:

Aprire un nuovo sketch in ESP32.
Includere la libreria LiquidCrystal_I2C:
#include <LiquidCrystal_I2C.h>
Creare un'istanza della classe LiquidCrystal_I2C:
LiquidCrystal_I2C lcd(0x27, 16, 2); // Indirizzo I2C, numero di colonne e righe
Impostare il contrasto del display:
lcd.contrast(30); // Valore di contrasto (da 0 a 255)
Scrivere un messaggio sul display:
lcd.setCursor(0, 0); // Posizione del cursore (colonna, riga)
lcd.print("Ciao mondo!");
Caricare lo sketch su ESP32.
4. Personalizzare il tuo codice:

Puoi utilizzare i metodi della classe LiquidCrystal_I2C per scrivere testo, numeri e simboli sul display.
Puoi anche posizionare il cursore, modificare la dimensione del carattere e attivare la retroilluminazione.
5. Risorse utili:

Libreria LiquidCrystal_I2C: https://github.com/marcoschwartz/LiquidCrystal_I2C
Tutorial sull'utilizzo di I2C con ESP32: [URL non valido rimosso]
Suggerimenti:

Assicurati di collegare correttamente il display LCD ad ESP32.
Controlla l'indirizzo I2C del tuo display LCD.
Usa la funzione lcd.clear() per cancellare il contenuto del display.
Puoi utilizzare la funzione lcd.setCursor(0, 0) per posizionare il cursore all'inizio del display.






```bash
git clone git@github.com:sebadima/corso-esp32-scrittura-display-LCD.git
cd corso-esp32-scrittura-display-LCD/
make upload
platformio device monitor --baud 115200  --rts 0 --dtr 0
```


```bash
#include <LiquidCrystal_I2C.h>
#include <Wire.h>

#define I2C_SDA 23
#define I2C_SCL 18

LiquidCrystal_I2C lcd(0x27,16,2);

void setup() 
{
  Serial.begin(115200);
  Wire.begin(I2C_SDA, I2C_SCL, 10000); 
  lcd.init(); 
  lcd.clear();
  lcd.backlight();
  lcd.setCursor(0,0);  
  lcd.print("Inizio conteggio"); 
  delay(3000);  
 
  for (int ix=1; ix<=10; ix++) 
  {
    lcd.clear();
    Serial.println(ix);  
    lcd.print(ix); 
    delay(1000);  
  }

  lcd.clear();
  lcd.print("Fine conteggio"); 
}

void loop() 
{
}
```







<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.154.0.5.0</p>
