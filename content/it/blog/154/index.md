---
title: "Come scrivere su un display LCD con ESP32"
description: "Come scrivere su un display LCD con ESP32"
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



## Cosa sono i display LCD?
I display a cristalli liquidi (LCD) sono una tecnologia di visualizzazione ampiamente utilizzata in un'ampia varietà di dispositivi, tra cui computer, smartphone, televisori e monitor. Funzionano sfruttando le proprietà ottiche dei cristalli liquidi per modulare la luce.

I cristalli liquidi sono una fase della materia che si trova tra lo stato solido e quello liquido. A differenza dei cristalli solidi, che hanno una struttura ordinata, i cristalli liquidi hanno una struttura disordinata. Tuttavia, a differenza dei liquidi, i cristalli liquidi hanno la capacità di allineare le loro molecole in un campo elettrico.

> Nei display LCD, le molecole di cristalli liquidi sono disposte tra due strati di materiale polarizzante. Quando un campo elettrico viene applicato alle molecole, esse si allineano in modo da ruotare la polarizzazione della luce che le attraversa. La luce ruotata può quindi essere vista da un osservatore.

I display LCD sono composti da diversi componenti principali:

Un pannello di vetro: Il pannello di vetro fornisce una superficie di supporto per gli altri componenti del display.
Un filtro polarizzante: Il filtro polarizzante polarizza la luce che attraversa il display.
Uno strato di cristalli liquidi: Lo strato di cristalli liquidi modula la luce che lo attraversa in base al campo elettrico applicato.
Un altro filtro polarizzante: Il secondo filtro polarizzante blocca la luce che non è stata ruotata dalle molecole di cristalli liquidi.
Un elettroluminescente (EL): L'elettroluminescente fornisce la luce che illumina il display.
I display LCD sono disponibili in diverse varietà, tra cui:

Display LCD a matrice passiva: I display LCD a matrice passiva sono i più semplici e convenienti. Tuttavia, hanno un tempo di risposta più lento e un angolo di visione più ristretto rispetto ad altri tipi di display LCD.
Display LCD a matrice attiva: I display LCD a matrice attiva offrono una migliore qualità dell'immagine e un angolo di visione più ampio rispetto ai display LCD a matrice passiva. Tuttavia, sono anche più costosi.
Display LCD transflective: I display LCD transflective sono progettati per essere utilizzati in ambienti con luce intensa. Riflettono la luce ambientale per migliorare la visibilità.
Display LCD a basso consumo: I display LCD a basso consumo sono progettati per consumare meno energia rispetto ad altri tipi di display LCD. Sono ideali per dispositivi alimentati a batteria.





## Utilizzo dei display LCD nel mondo IoT
I display LCD sono ampiamente utilizzati nel mondo dell'Internet of Things (IoT) per visualizzare informazioni e dati in tempo reale da sensori, attuatori e altri dispositivi connessi.

Vantaggi:

Flessibilità: I display LCD sono disponibili in diverse dimensioni, risoluzioni e colori, adattandosi a differenti esigenze di visualizzazione.
Efficienza energetica: I display LCD a basso consumo sono ideali per dispositivi alimentati a batteria, comuni nell'IoT.
Costo: I display LCD sono relativamente economici, rendendoli accessibili per progetti IoT a basso budget.
Interfaccia intuitiva: La visualizzazione di informazioni su un display LCD facilita la comprensione e l'interazione con un dispositivo IoT.
Applicazioni:

Domotica: I display LCD possono mostrare dati su temperatura, umidità, consumo energetico e controllare dispositivi intelligenti.
Industria 4.0: I display LCD possono visualizzare informazioni su macchinari, produzione e manutenzione in tempo reale.
Wearables: I display LCD possono mostrare dati su fitness, salute e notifiche su smartwatch e fitness tracker.
Monitoraggio ambientale: I display LCD possono mostrare dati su temperatura, inquinamento e altri parametri ambientali.
Esempi di utilizzo:

Termostato intelligente: Visualizza la temperatura ambiente e permette di regolare il setpoint.
Smartwatch: Mostra l'ora, la frequenza cardiaca, le notifiche e altri dati fitness.
Sensore di temperatura: Visualizza la temperatura ambiente in tempo reale.
Sistema di irrigazione intelligente: Mostra lo stato del sistema e permette di regolare l'irrigazione.
Integrazione con l'IoT:

I display LCD possono essere integrati con l'IoT utilizzando diversi protocolli di comunicazione, come:

I2C: Protocollo di comunicazione seriale a due fili, adatto per brevi distanze.
SPI: Protocollo di comunicazione seriale a quattro fili, più veloce di I2C.
UART: Protocollo di comunicazione seriale asincrono, adatto per lunghe distanze.
Wi-Fi: Permette la comunicazione wireless con altri dispositivi e server IoT.
Bluetooth: Permette la comunicazione wireless a corto raggio con altri dispositivi IoT.
Librerie e framework:

Esistono diverse librerie e framework per semplificare l'utilizzo dei display LCD con l'IoT, come:

LiquidCrystal_I2C: Libreria per Arduino per la gestione di display LCD con interfaccia I2C.
U8g2: Libreria per la gestione di diversi tipi di display grafici.
Adafruit_GFX: Libreria per la gestione di display grafici con diverse interfacce.







Scrivere su un display LCD con I2C e ESP32:
Per scrivere su un display LCD usando l'interfaccia I2C e ESP32, è necessario seguire questi passaggi:

1. Collega il display LCD ad ESP32:

- Collega il pin Vcc del display LCD al pin 5V di ESP32.
- Collega il pin GND del display LCD al pin GND di ESP32.
- Collega il pin SDA del display LCD al pin SDA (GPIO 23) di ESP32.
- Collega il pin SCL del display LCD al pin SCL (GPIO 18) di ESP32.
- Collega il pin di contrasto del display LCD a un pin analogico di ESP32 (ad esempio, A0).

2. Installare la libreria LiquidCrystal_I2C:

- Aprire l'IDE di Arduino.
- Cliccare su "Strumenti" -> "Gestisci librerie".
- Cercare la libreria "LiquidCrystal_I2C" e installarla.

- 3. Caricare il programma "main.ino"


Puoi utilizzare i metodi della classe LiquidCrystal_I2C per scrivere testo, numeri e simboli sul display.
Puoi anche posizionare il cursore, modificare la dimensione del carattere e attivare la retroilluminazione.

5. Risorse utili:

Libreria LiquidCrystal_I2C: https://github.com/marcoschwartz/LiquidCrystal_I2C
Tutorial sull'utilizzo di I2C con ESP32: [URL non valido rimosso]
Suggerimenti:

Assicurati di Collega correttamente il display LCD ad ESP32.
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
  lcd.setContrast(30); // Valore di contrasto (da 0 a 255)
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
