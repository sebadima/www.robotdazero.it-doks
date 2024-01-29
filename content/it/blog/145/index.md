---
title: "Come installare PlatformIO"
description: "Come installare PlatformIO"
excerpt: "PlatformIO è il compilatore che usiamo di preferenza per l'ESP32. Esattamente Come l'IDE si Arduino può funzionare sia in modalità grafica (usando Visual Code) sia in modalità testo da terminale..."
date: 2024-01-23T09:19:42+01:00
lastmod: 2024-01-23T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["ESP32", "Arduino", "PlatformIO"]
contributors: ["sebadima"]
pinned: false
homepage: false
mermaid: true
---



<hr>
<br>

## Perchè usare PlatformIO

PlatformIO è il compilatore che usiamo di preferenza per l'ESP32. Esattamente come l'IDE di Arduino, funziona in modalità grafica (usando Visual Code) e in in modalità testo. Puoi scegliere indifferentemente l'uno o l'altro su computer di buona potenza, ma su computer dalle modeste prestazioni è consigliabile usare PlatformIO. E' scritto totalmente in Python e dispone delle stesse librerie di Arduino, ma su questo ha un grosso vantaggio: non usa la Java Virtual Machine.

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑
<strong>L'IDE di Arduino è scritto in Java</strong>, un linguaggio di programmazione orientato agli oggetti che è stato sviluppato da Sun Microsystems nel 1995. Java deve sempre appoggiarsi alla Java Virtual Machine (JVM) che traduce il codice Java in linguaggio macchina. In tal modo i programmi sorgente vengono eseguiti dall'hardware: senza la JVM il codice Java non potrebbe essere eseguito su nessun computer.</div>


### I problemi della Java Machine

Se Arduino usa la JVM, anche PlatformIO deve usare il runtime di Python ma...

La JVM è un software complesso che richiede una notevole quantità di risorse hardware. E la quantità di risorse dipende da tanti fattori, tra cui la complessità del codice Java da esguire, la versione della JVM e le librerie e i framework che vengono utilizzati. 

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑
In generale, la JVM richiede più risorse hardware rispetto ad altri linguaggi di programmazione, come C o Python.</div>

<br>
Ciò è dovuto al fatto che la JVM deve eseguire il codice Java in un ambiente virtuale. Su alcuni computer come il Raspberry PI la JVM tende a girare troppo lentamente!

<br>
<br>

> <strong>con PlatformIO avrai a disposizione un ambiente di sviluppo</strong> velocissimo e flessibile, con un solo file di configurazione. In pratica basta fare copia e incolla di un progetto preesistente per crearne uno nuovo già totalmente configurato con parametri e librerie. Per molti programmatori un grosso vantaggio rispetto alla gestione *condivisa* delle librerie di Arduino.


## Come installare PlatformIO su Windows 11

Puoi seguire in sequenza questi passi (che valgono anche per Windows 10):

- apri il Microsoft Store e cerca "PlatformIO IDE".
- fai clic su "Installa" per installare l'estensione PlatformIO per Visual Studio Code.

Dopo l'installazione:

1. avvia Visual Studio Code.
2. nella barra laterale fai clic su "Estensioni".
3. digita "PlatformIO".
4. fai clic su "Installa"



## La installazione su Linux

Noi di Robotdazero consigliamo di installare "Ubuntu" tra le molte *distro* di Linux: i comandi seguenti funzioneranno solo su "Debian" e Ubuntu ma non su altre distro come "Fedora" ad esempio.

1. Apri un terminale e digita:

```bash
sudo apt update
sudo apt install platformio
```


2. Dopo l'installazione avvia Visual Studio Code.
3. Nella barra laterale fai clic su "Estensioni".
4. Nella barra di ricerca digita "PlatformIO".
5. Fai clic su "Installa"


Con il sistema appena visto puoi installare la versione *binaria* di PlatformIO disponibile nello "Store" di Ubuntu, certamente funzionante ma talvolta non aggiornatissima. Nello stesso sito ufficiale di PlatformIO viene consigliato di usare il loro script universale per Linux.


### La installazione su Linux usando lo script originale

Per procedere con la installazione consigliata puoi scrivere su terminale:

#### Usando curl

```bash
curl -fsSL -o get-platformio.py https://raw.githubusercontent.com/platformio/platformio-core-installer/master/get-platformio.py
python3 get-platformio.py
```

#### Usando wget

```bash
wget -O get-platformio.py https://raw.githubusercontent.com/platformio/platformio-core-installer/master/get-platformio.py
python3 get-platformio.py
```

## Come usare Platformio da linea di comando

Terminata la semplicissima installazione puoi iniziare ad usare Platformio da Visual Code, ma per usare il compilatore dalla linea di comando devi abilitare i comandi su Windows quando su Linux.


### Abilitare i comandi testuali su Windows


È necessario modificare la variabile di ambiente di sistema chiamata Path e aggiungere C:\Users\UserName\.platformio \ penv \ Scripts \ path all'inizio di un elenco (sostituire il nome utente con il nome dell'account).


> La variabile PATH è una variabile di sistema utilizzata dal sistema operativo Windows per individuare gli eseguibili richiesti dalla riga di comando o dalla finestra del terminale. La variabile PATH è una stringa che contiene una serie di percorsi di directory, separati da punto e virgola. Quando si esegue un comando da riga di comando, Windows cerca l'eseguibile in ciascuna delle directory elencate nella variabile PATH.



Per modificare la variabile PATH in Windows 11 o 10, è possibile utilizzare il Pannello di controllo o l'Prompt dei comandi.


#### Come farlo dalla interfaccia di Windows 

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑
Apri il Pannello di controllo.
Fai clic su Sistema e sicurezza.
Fai clic su Sistema.
Nella parte sinistra della finestra, fai clic su Impostazioni avanzate di sistema.
Fare clic sulla scheda Avanzate.
Nella sezione Variabili di ambiente, fare clic su Variabili di sistema.
Nella sezione Variabili di sistema, individuare la variabile PATH.
Fare clic su Modifica.
Nella casella Valore della variabile, modificare il percorso della variabile PATH come desiderato.
Fare clic su OK.
Fare clic su OK per chiudere la finestra Variabili di sistema.
Fare clic su OK per chiudere la finestra Impostazioni di sistema avanzate.
</div>


#### Come farlo dal Prompt dei comandi



Apri l'Prompt dei comandi.
Digita il seguente comando:

```bash
setx PATH "percorso1;percorso2;..."
```
Sostituisci "percorso1" e "percorso2" con i percorsi delle directory che vuoi aggiungere alla variabile PATH.

3. Premi Invio.
Ad esempio, per aggiungere il percorso "C:\Program Files\Java" alla variabile PATH, è possibile utilizzare il seguente comando:

```bash
setx PATH "C:\Program Files\Java"
```

Per aggiungere più percorsi alla variabile PATH, è possibile separare i percorsi con un punto e virgola. Ad esempio, per aggiungere i percorsi "C:\Program Files\Java" e "C:\Program Files\Python", è possibile utilizzare il seguente comando:

```bash
setx PATH "C:\Program Files\Java;C:\Program Files\Python"
```

Dopo aver modificato la variabile PATH, è necessario riavviare il computer o aprire una nuova finestra della riga di comando per rendere effettive le modifiche.


### Abilitare i comandi testuali su Linux

Su Linux si possono creare dei collegamenti simbolici (symlinks) all'interno della directory: 

```bash
$HOME/.local/bin/ 
```

In questo modo si possono lanciare tutti gli eseguibili di PlatformIO dal terminale. Per iniziare devi esportare la directory  $HOME/.local/bin/ nella variabile di ambiente PATH. Se usi *Bash* come shell predefinita puoi editare il file **~/.profile** aggiungendo alla fine qusta linea:

```bash
export PATH=$PATH:$HOME/.local/bin
```
Se usi la shell *Zsh* come shell di default puoi modificare **~/.zprofile** e aggiungere lo stesso codice visto sopra.


Dopo tutto ciò puoi creare i link simbolici dal terminale facendo copia e incolla:

```bash
ln -s ~/.platformio/penv/bin/platformio ~/.local/bin/platformio
ln -s ~/.platformio/penv/bin/pio ~/.local/bin/pio
ln -s ~/.platformio/penv/bin/piodebuggdb ~/.local/bin/piodebuggdb
```

Fai ripartire il terminale facendo "*logout*" e "*login*"" nuovamente e puoi proseguire. Da questo monento in poi dovresti essere in gardo di usare tutti i comandi di PlatformIO dal terminale e senza fare restart del computer.

<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it -  post - R.145.1.0.0</p>