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
<strong>I cristalli liquidi sono una fase della materia che si trova tra lo stato solido e quello liquido</strong>. A differenza dei cristalli solidi, che hanno una struttura ordinata, i cristalli liquidi hanno una struttura disordinata. Tuttavia, a differenza dei liquidi, i cristalli liquidi hanno la capacità di allineare le loro molecole in un campo elettrico.<br>Nei display LCD le molecole di cristalli liquidi sono disposte tra due strati di materiale polarizzante. Quando un campo elettrico viene applicato alle molecole, esse si allineano in modo da ruotare la polarizzazione della luce che le attraversa. La luce ruotata, infine viene quindi "notata" da un osservatore.</div>

<br>

Fisicamente sono composti da almeno 4 diversi componenti principali:

- **Un pannello di vetro**: Il pannello di vetro fornisce una superficie di supporto per gli altri componenti del display.
- **Un filtro polarizzante**: Il filtro polarizzante polarizza la luce che attraversa il display.
- **Uno strato di cristalli liquidi**: Lo strato di cristalli liquidi modula la luce che lo attraversa in base al campo elettrico applicato.
- **Un altro filtro polarizzante**: Il secondo filtro polarizzante blocca la luce che non è stata ruotata dalle molecole di cristalli liquidi.

> *Nei display con retroilluminazione esiste un altro componente: Un **elettroluminescente (EL)**, in genere formato da più LED dello stesso colore, che fornisce la luce che illumina il display.*



##### I display LCD sono disponibili in diverse varietà, tra cui:

- **Display LCD a matrice passiva**: I display LCD a matrice passiva sono i più semplici e convenienti. Tuttavia, hanno un tempo di risposta più lento e un angolo di visione più ristretto rispetto ad altri tipi di display LCD.
- **Display LCD a matrice attiva**: I display LCD a matrice attiva offrono una migliore qualità dell'immagine e un angolo di visione più ampio rispetto ai display LCD a matrice passiva. Tuttavia, sono anche più costosi.


### Utilizzo dei display LCD nel mondo IoT
I display LCD sono ampiamente utilizzati nel mondo dell'Internet of Things (IoT) per visualizzare informazioni e dati in tempo reale da sensori, attuatori e altri dispositivi connessi. Il motivo si può trovare nella efficienza energetica di questo dispositivo che permette la alimentazione a batteria senza gravare sui consumi ma anche nella economicità del prodotto. I display LCD infatti sono diventati accessori comunissimi nei progetti IOT a basso costo, rendendoli il mezzo preferito per la visualizzazione di informazioni testuali e grafiche.

Nella Domotica i display LCD possono mostrare dati su temperatura, umidità, consumo energetico e controllare dispositivi intelligenti e il loro utilizzo non si limita alle "abitazioni" civili ma si estende alla cosiddetta "Industria 4.0": I display LCD possono visualizzare informazioni su macchinari, produzione e manutenzione in tempo reale.

E se questo non bastasse a giustificare l'interesse ti ricordo come negli ultimi anni gli Smartwatch che mostrano: Ora, la frequenza cardiaca, le notifiche e altri dati fitness sono diventati accessorio comune tra gli appassionati di sport.

### Protocolli di comunicazione per i display LCD
I moderni display LCD sono dispositivi sofisticati e non "comunicano" con segnali elettrici "grezzi" o solo con la interfaccia seriale, ma hanno attirato nel tempo la attenzione dei progettisti che li hanno dotato di molteplici *protocolli* di comunicazione. Tra questi cui il più interessante è il protocollo <a href="https://en.wikipedia.org/wiki/I%C2%B2C" target="_blank">I2C</a>, sviluppato in origine da Philips negli anni '80.

> *Il protocollo I2C nell'IoT
Il protocollo I2C (Inter-Integrated Circuit) è una tecnologia di comunicazione seriale a due fili ampiamente utilizzata nell'Internet of Things (IoT) per la comunicazione tra dispositivi a corto raggio.
<br>Il fattore chiave per la sua diffusione è stato certamente la semplicità di connessione: I2C richiede solo due fili di segnale (SDA e SCL) per la comunicazione, rendendolo facile da implementare e cablare.
<br><br>**Inoltre I2C è un protocollo a basso costo**, poiché non richiede componenti costosi o complessi, può essere utilizzato per collegare una varietà di dispositivi, come sensori, attuatori, display e memorie.
Possiede inoltre una elevata efficienza energetica che lo rende ideale per dispositivi alimentati a batteria.*

### Le caratteristiche elettriche di I2C

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">
<strong>Il bus Inter-Integrated Circuit (I2C)</strong> è un meccanismo di comunicazione seriale a livello di chip che opera su soli due fili. Alcuni sviluppatori pronunciano il nome del bus eye-two-see, altri eye-squared-see, ma entrambi si riferiscono alla stessa cosa. Dal 1982 è diventato uno standard de facto supportato da molti dispositivi come Arduino, ESP32 o Raspberry Pi. <br><strong>Il bus fisico</strong><br>I2C si compone di due fili. Una linea I2C trasmette i dati, l'altra i segnali di clock che sincronizzano la conversazione tra dispositivi. La linea dati è chiamata 'SDA‘, la linea di clock’SCL'.
<br><strong>Le resistenze di "pull-up"</strong><br>In genere, sia SDA che SCL sono collegati a una linea di alimentazione da 3,3 o 5 V attraverso una resistenza di "pull-up". L'aggiunta delle resistenze garantisce il preciso riconoscimento dei valori digitali  <strong>0</strong> e <strong>1</strong>.</div>

<br>Esistono altri protocolli di comunicazione per collegare i display LCD, come ad esempio l'SPI: Protocollo di comunicazione seriale a quattro fili, più veloce di I2C e l'UART: Un Protocollo di comunicazione seriale asincrono, adatto per lunghe distanze.

#### Il software per i display LCD

Esistono diverse librerie e *framework* per semplificare l'utilizzo dei display LCD con l'IoT, come ad esempio:

- *LiquidCrystal_I2C*: Una libreria per Arduino o ESP32 per l'uso dei display LCD con la **interfaccia I2C**.
- *U8g2*: Una libreria per la gestione di diversi tipi di display grafici.
Adafruit GFX: Libreria per la gestione di display grafici **con diverse interfacce**.


## Come scrivere su un display LCD con I2C e ESP32

Avendo illustrato quali librerie sono a disposizione per il funzionamento del software, vediamo adesso quali sono i collegamenti eletrici per testare le librerie.
Per scrivere su un display LCD usando l'interfaccia I2C e ESP32, puoi seguire questi passaggi:

##### Per collegare il display LCD ad ESP32 puoi procedere in questo modo in questo modo:

- Collega il pin Vcc del display LCD al pin 5V di ESP32.
- Collega il pin GND del display LCD al pin GND di ESP32.
- Collega il pin SDA del display LCD al pin SDA (GPIO 23) di ESP32.
- Collega il pin SCL del display LCD al pin SCL (GPIO 18) di ESP32.

Esaurita la parte dei collegamenti che puoi portare a termine usando semplice connettori Dupont femmina/femmina e senza breadboard, non ci resta che occuparci del software e di come compilarlo con PlatformIO e Arduino IDE.

### Come usare PlatformIO con LiquidCrystal_I2C

Per usare PlatformIO abbiamo predisposto la solita procedura copie e incolla che non richiedere alcun intervento manuale a condizione che tu abbia installato PlatformIO come spiegato in questo <a href="/blog/come-installare-platformio">post</a> del nostro blog.

Fai copia e incolla del testo in basso. Se sposti il mouse sopra la zona gialla apparirà la scritta "Copy" in rosso.
Vai sul CMD.exe o la PowerShell di Windows 10/11 oppure sul terminale di Linux e fai incolla.

```bash
git clone git@github.com:sebadima/corso-esp32-scrittura-display-LCD.git
cd corso-esp32-scrittura-display-LCD/
make upload
platformio device monitor --baud 115200  --rts 0 --dtr 0
```

Dopo avere premuto "INVIO" apparirà il *log* della compilazione e del *link* del programma come vedi nello specchietto in basso:

```bash
Cloning into 'corso-esp32-scrittura-display-LCD'...
remote: Enumerating objects: 18, done.
remote: Counting objects: 100% (18/18), done.
remote: Compressing objects: 100% (9/9), done.
remote: Total 18 (delta 4), reused 17 (delta 3), pack-reused 0
Receiving objects: 100% (18/18), done.
Resolving deltas: 100% (4/4), done.
pio -f -c vim run
Processing esp32dev (platform: espressif32; board: esp32dev; framework: arduino)
---------------------------------------------------------------------------------
Library Manager: Installing marcoschwartz/LiquidCrystal_I2C @ ^1.1.4
Unpacking  [####################################]  100%
Library Manager: LiquidCrystal_I2C@1.1.4 has been installed!
Verbose mode can be enabled via `-v, --verbose` option
CONFIGURATION: https://docs.platformio.org/page/boards/espressif32/esp32dev.html
PLATFORM: Espressif 32 (6.4.0) > Espressif ESP32 Dev Module
HARDWARE: ESP32 240MHz, 320KB RAM, 4MB Flash
DEBUG: Current (cmsis-dap) External (cmsis-dap, esp-bridge, esp-prog, iot-bus-jtag, jlink, minimodule, olimex-arm-usb-ocd, olimex-arm-usb-ocd-h, olimex-arm-usb-tiny-h, olimex-jtag-tiny, tumpa)
PACKAGES: 
 - framework-arduinoespressif32 @ 3.20011.230801 (2.0.11) 
 - tool-esptoolpy @ 1.40501.0 (4.5.1) 
 - toolchain-xtensa-esp32 @ 8.4.0+2021r2-patch5
Converting main.ino
LDF: Library Dependency Finder -> https://bit.ly/configure-pio-ldf
LDF Modes: Finder ~ chain, Compatibility ~ soft
Found 34 compatible libraries
Scanning dependencies...
Dependency Graph
|-- LiquidCrystal_I2C @ 1.1.4
|-- Wire @ 2.0.0
Building in release mode
Compiling .pio/build/esp32dev/src/main.ino.cpp.o
Building .pio/build/esp32dev/bootloader.bin
Generating partitions .pio/build/esp32dev/partitions.bin
esptool.py v4.5.1
Creating esp32 image...
Merged 1 ELF section
Successfully created esp32 image.
Compiling .pio/build/esp32dev/lib253/Wire/Wire.cpp.o
Compiling .pio/build/esp32dev/libe44/LiquidCrystal_I2C/LiquidCrystal_I2C.cpp.o
Compiling .pio/build/esp32dev/FrameworkArduino/Esp.cpp.o

...
...

Compiling .pio/build/esp32dev/FrameworkArduino/wiring_pulse.c.o
Compiling .pio/build/esp32dev/FrameworkArduino/wiring_shift.c.o
Archiving .pio/build/esp32dev/libFrameworkArduino.a
Indexing .pio/build/esp32dev/libFrameworkArduino.a
Linking .pio/build/esp32dev/firmware.elf
Retrieving maximum program size .pio/build/esp32dev/firmware.elf
Checking size .pio/build/esp32dev/firmware.elf
Advanced Memory Usage is available via "PlatformIO Home > Project Inspect"
RAM:   [=         ]   6.6% (used 21760 bytes from 327680 bytes)
Flash: [==        ]  21.5% (used 281933 bytes from 1310720 bytes)
Building .pio/build/esp32dev/firmware.bin
esptool.py v4.5.1
Creating esp32 image...
Merged 2 ELF sections
Successfully created esp32 image.

```

Il comando proseguirà inoltre a fare l'upload del file oggetto nella memoria dell'ESP32 e a lanciare il monitor seriale di PlatformIO. 


#### Il file "main.ino"

Questo è il programma completo per testare il funzionamento di software e hardware: Provvede a settare delle impostazioni standard per il display, a caricare la libreria e lanciare un semplice conteggio da uno a dieci. Puoi fare copia e incolla per usarlo con Arduino IDE. Se hai usato la procedura con Github e Platformio lo troverai già caricato nel tuo PC grazie al singolo comando:

```bash
git clone git@github.com:sebadima/corso-esp32-scrittura-display-LCD.git
```

## Il software completo per scrivere sul display LCD

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

### Come compilare "main.ino" con Arduino IDE

Se non hai usato PlaformIo come nell'esempio precedente puoi comunque compilare il file "main.ino" con il software di Arduino e per fare ciò fi basta seguire questi questi passaggi:

1. Apri Arduino IDE,
2. Crea un nuovo progetto cliccando su "File" > "Nuovo". Verrà creato un nuovo progetto vuoto,
3. Incolla il codice "main.ino" nell'area di testo principale, 
4. Clicca sul pulsante "Verifica" nella barra degli strumenti,
5. Se non ci sono errori collega la scheda Arduino al computer,
6. Seleziona la scheda Arduino corretta dal menu "Strumenti" > "Scheda",
7. Clicca sul pulsante "Carica" nella barra degli strumenti.

Adesso Il programma verrà caricato sulla scheda Arduino. Per leggere i valori dei sensori ti basta andare su "Strumenti" > "Monitor Seriale".

### Un breve commento alle istruzioni del programma


##### Le linee:

```bash
#include <LiquidCrystal_I2C.h>
#include <Wire.h>
```

.....

##### Le linee:

```bash
#define I2C_SDA 23
#define I2C_SCL 18
```

...

##### Le linee:

```bash
  dht.begin();
  pinMode(Gas_1, INPUT);
  pinMode(Gas_2, INPUT);
```

servono la prima a lanciare la funzione di *start up* dell'oggetto "dht", mentre le due successive servono a segnalare all' ESP32 che deve usare i due *pin* 33 e 35 come input.

##### Le linea:

```bash
Wire.begin(I2C_SDA, I2C_SCL, 10000); 
```

....


##### Le linee:

```bash
  lcd.init(); 
  lcd.clear();
  lcd.backlight();
  lcd.setContrast(30); // Valore di contrasto (da 0 a 255)
  lcd.setCursor(0,0);  

```

..................


##### Infine le linee:

```bash
for (int ix=1; ix<=10; ix++) 
{
    lcd.clear();
    Serial.println(ix);  
    lcd.print(ix); 
    delay(1000);  
}
```

servono a creare un loop ripetuto 10 volte dove, ad ogni ciclo 

,..........


## Altre risorse utili

<a href="Libreria LiquidCrystal_I2C: https://github.com/marcoschwartz/LiquidCrystal_I2C" target="_blank">LiquidCrystal_I2C</a> di Marco Schwartz.

Tutorial sull'utilizzo di I2C con ESP32: [URL non valido rimosso]
Suggerimenti:

Assicurati di Collega correttamente il display LCD ad ESP32.
Controlla l'indirizzo I2C del tuo display LCD.
Usa la funzione lcd.clear() per cancellare il contenuto del display.
Puoi utilizzare la funzione lcd.setCursor(0, 0) per posizionare il cursore all'inizio del display.

<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.154.1.0.1</p>