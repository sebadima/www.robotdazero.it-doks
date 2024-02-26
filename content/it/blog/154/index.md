---
title: "Come scrivere su un display LCD con ESP32"
description: "Come scrivere su un display LCD con ESP32"
excerpt: "In un mondo sempre più interconnesso, gli schermi a cristalli liquidi (LCD) giocano un ruolo fondamentale nell'Internet delle cose (IoT). Questa convergenza tra tecnologie tradizionali e moderne offre una vasta gamma di possibilità innovative e applicazioni pratiche. In questo articolo esploreremo il ruolo degli LCD nel mondo dell'IoT..."
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

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑 
<strong>I cristalli liquidi sono</strong>  una fase della materia che si trova tra lo stato solido e quello liquido. A differenza dei cristalli solidi, che hanno una struttura ordinata, i cristalli liquidi hanno una struttura disordinata. Tuttavia, a differenza dei liquidi, i cristalli liquidi hanno la capacità di allineare le loro molecole in un campo elettrico.<br>Nei display LCD le molecole di cristalli liquidi sono disposte tra due strati di materiale polarizzante. Quando un campo elettrico viene applicato alle molecole, esse si allineano in modo da ruotare la polarizzazione della luce che le attraversa. La luce ruotata, infine viene quindi "notata" da un osservatore.</div>

<br>

Fisicamente sono composti da almeno 4 diversi componenti principali:

- **Un pannello di vetro**: Il pannello di vetro fornisce una superficie di supporto per gli altri componenti del display.
- **Un filtro polarizzante**: Il filtro polarizzante polarizza la luce che attraversa il display.
- **Uno strato di cristalli liquidi*: Lo strato di cristalli liquidi modula la luce che lo attraversa in base al campo elettrico applicato.
- **Un altro filtro polarizzante**: Il secondo filtro polarizzante blocca la luce che non è stata ruotata dalle molecole di cristalli liquidi.

> *Nei display con retroilluminazione esiste un altro componente: Un **elettroluminescente (EL)**, in genere formato da più LED dello stesso colore, che fornisce la luce che illumina il display.*



##### I display LCD sono disponibili in diverse varietà, tra cui:

- Display LCD a matrice passiva: I display LCD a matrice passiva sono i più semplici e convenienti. Tuttavia, hanno un tempo di risposta più lento e un angolo di visione più ristretto rispetto ad altri tipi di display LCD.
- Display LCD a matrice attiva: I display LCD a matrice attiva offrono una migliore qualità dell'immagine e un angolo di visione più ampio rispetto ai display LCD a matrice passiva. Tuttavia, sono anche più costosi.


## Utilizzo dei display LCD nel mondo IoT
I display LCD sono ampiamente utilizzati nel mondo dell'Internet of Things (IoT) per visualizzare informazioni e dati in tempo reale da sensori, attuatori e altri dispositivi connessi. Il motivo si può trovare nella efficienza energetica di questo dispositivo che permette la alimentazione a batteria senzra gravare sui consumi ma anche nella economicitù del prodotto. I display LCD infatti sono diventati accessori comunissimi nei progetti IOT a basso costo, rendendoli il mezzo preferiro per la visualizzazione di informazioni testuali e grafiche.

Nella Domotica i display LCD possono mostrare dati su temperatura, umidità, consumo energetico e controllare dispositivi intelligenti e il loro utilizzo non si limita alle "abitazioni" civili ma si estende all cosiddetta "Industria 4.0": I display LCD possono visualizzare informazioni su macchinari, produzione e manutenzione in tempo reale.

E se questo non bastasse a giustificare l'interesse ti ricordo come nelgi ultimi anni gli Smartwatch che mostrano: Ora, la frequenza cardiaca, le notifiche e altri dati fitness sono diventati accessorio comune tra gli appassionati di sport all'aria aperta.

## Protocolli di comunicazione per i display LCD
I display LCD non comunicano con segnali elettrici "grezzi" o solo con la seriali ma hanno attrirato nel tempo la attenzione dei progettisti che li hanno dotato di molteplici *protocolli* di comunicazione standard, tra cui il più interessante è il protocollo I2C, sviluppato in Origine da Samsung per i suoi televisori "smart".

> *Il protocollo I2C nell'IoT
Il protocollo I2C (Inter-Integrated Circuit) è una tecnologia di comunicazione seriale a due fili ampiamente utilizzata nell'Internet of Things (IoT) per la comunicazione tra dispositivi a corto raggio.
<br>Il fattore chiave per la sua diffusione è stato certamente la semplicità di connessione: I2C richiede solo due fili di segnale (SDA e SCL) per la comunicazione, rendendolo facile da implementare e cablare.*


Inoltre I2C è un protocollo a basso costo, poiché non richiede componenti costosi o complessi, può essere utilizzato per collegare una varietà di dispositivi, come sensori, attuatori, display e memorie.
Possiede inoltre una elevata efficienza energetica che lo rende ideale per dispositivi alimentati a batteria.

#### Esempi di utilizzo di I2C

I2C viene utilizzato nell'IoT in questi settori:

**Smart home**: I2C viene utilizzato per collegare sensori e attuatori in sistemi di domotica intelligente, come termostati intelligenti, serrature intelligenti e luci intelligenti.
**Industria 4.0**: I2C viene utilizzato per collegare sensori e attuatori in sistemi industriali, come robot, sistemi di monitoraggio e controllo e sistemi di automazione.
**Wearables**: I2C viene utilizzato per collegare sensori e altri dispositivi a dispositivi indossabili, come smartwatch, fitness tracker e occhiali intelligenti.

Esistono altri protocolli di comunicazione per collegare i display LCD, come ad esempio l'SPI: Protocollo di comunicazione seriale a quattro fili, più veloce di I2C e l'UART: Un Protocollo di comunicazione seriale asincrono, adatto per lunghe distanze. 

Esistono diverse librerie e framework per semplificare l'utilizzo dei display LCD con l'IoT, come:

LiquidCrystal_I2C: Libreria per Arduino per la gestione di display LCD con interfaccia I2C.
U8g2: Libreria per la gestione di diversi tipi di display grafici.
Adafruit_GFX: Libreria per la gestione di display grafici con diverse interfacce.

Noi useremo il protocollo I2C per realizzare un progetto pilota per un sistema completo di monitoraggio ambientale a lunga distanza, basato sul protocollo ESP-Now.

## Come scrivere su un display LCD con I2C e ESP32
Per scrivere su un display LCD usando l'interfaccia I2C e ESP32, è necessario seguire questi passaggi:

1. Collega il display LCD ad ESP32:

- Collega il pin Vcc del display LCD al pin 5V di ESP32.
- Collega il pin GND del display LCD al pin GND di ESP32.
- Collega il pin SDA del display LCD al pin SDA (GPIO 23) di ESP32.
- Collega il pin SCL del display LCD al pin SCL (GPIO 18) di ESP32.
- Collega il pin di contrasto del display LCD a un pin analogico di ESP32 (ad esempio, A0).

#### La libreria LiquidCrystal_I2C

- Aprire l'IDE di Arduino.
- Cliccare su "Strumenti" -> "Gestisci librerie".
- Cercare la libreria "LiquidCrystal_I2C" e installarla.

- 3. Caricare il programma "main.ino"


Puoi utilizzare i metodi della classe LiquidCrystal_I2C per scrivere testo, numeri e simboli sul display.
Puoi anche posizionare il cursore, modificare la dimensione del carattere e attivare la retroilluminazione.


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


## Commento al programma

### Come compilare "main.ino" con Arduino IDE

Segui questi passaggi:

1. Apri Arduino IDE,
2. Crea un nuovo progetto cliccando su "File" > "Nuovo". Verrà creato un nuovo progetto vuoto,
3. Incolla il codice "main.ino" nell'area di testo principale, 
4. Clicca sul pulsante "Verifica" nella barra degli strumenti,
5. Se non ci sono errori collega la scheda Arduino al computer,
6. Seleziona la scheda Arduino corretta dal menu "Strumenti" > "Scheda",
7. Clicca sul pulsante "Carica" nella barra degli strumenti.

Adesso Il programma verrà caricato sulla scheda Arduino. Per leggere i valori dei sensori ti basta andare su "Strumenti" > "Monitor Seriale".

#### Un breve commento alle istruzioni del programma

##### La linea:

```bash
DHT dht(DHTPIN, DHTTYPE);
```

serve ad inizializzare nella RAM l'oggetto che rappresenta il *driver* per il DHT11. La istruzione *mappa* nella area "codice" di ESP32 funzioni e variabili interne tipiche della programmazione ad oggetti. A questi valori si può accedere solo usando i metodi di *interfaccia* tipici dei linguaggi "Object Oriented". Più in basso vedremo come il programma riesca ad usare l'oggetto "DHT dht()" per leggere istantaneamente la temperatura.


##### La linea:

```bash
  WRITE_PERI_REG(RTC_CNTL_BROWN_OUT_REG, 0); 
```

viene usata per disabilitare il controllo del *BROWNOUT* dell'ESP32.  Si tratta di un controllo elettrico voluto dai progettisti per segnalare anomalie nella tensione di alimentazione. Poichè stiamo usando l'ESP32 collegato al cavetto USB preferiamo disabilitarlo per evitare improbabili e inutili segnalazioni di errore. Nel caso di alimentazione a batteria probabilmente può avere un senso riabilitarlo.

##### Le linee:

```bash
  dht.begin();
  pinMode(Gas_1, INPUT);
  pinMode(Gas_2, INPUT);
```

servono la prima a lanciare la funzione di *start up* dell'oggetto "dht", mentre le due successive servono a segnalare all' ESP32 che deve usare i due *pin* 33 e 35 come input.

##### Le linee:

```bash
h   = dht.readHumidity();
t   = dht.readTemperature();  
```
servono a leggere umidità e temperatura usando le funzioni *di interfaccia* dell'oggetto "dht" ovvero le funzioni sicure pensate dai progettisti per nascondere la complessità del codice interno. Le funzioni sono introdotte dal "." come stabilito dalla sintassi del C++.

##### Le linee:

```bash
g_1 = analogRead(Gas_1);
g_2 = analogRead(Gas_2);
```
servono a leggere la tensione fornita dai pin 33 e 35 usando una funzione predefinita di Arduino: analogRead().
La interpretazione del valore viene lasciata al software e all'utente, a differenza di quanto riesce a fare il DHT11.

##### Infine le tre linee:

```bash
if (isnan(g_1) ) ...
if (isnan(g_2) ) ...
if (isnan(t) ) ...
```

sono usate per tracciare gli errori dei tre sensori, come ad esempio valori fuori scala o infiniti (NaN). 


### Risorse utili

Libreria LiquidCrystal_I2C: https://github.com/marcoschwartz/LiquidCrystal_I2C
Tutorial sull'utilizzo di I2C con ESP32: [URL non valido rimosso]
Suggerimenti:

Assicurati di Collega correttamente il display LCD ad ESP32.
Controlla l'indirizzo I2C del tuo display LCD.
Usa la funzione lcd.clear() per cancellare il contenuto del display.
Puoi utilizzare la funzione lcd.setCursor(0, 0) per posizionare il cursore all'inizio del display.






<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.154.0.8.0</p>
