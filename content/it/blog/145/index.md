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



<!--
https://community.platformio.org/t/platformio-ide-messes-up-path-with-incorrect-default-folders-windows-10/22006/3
-->

<hr>
<br>

## Perchè usare PlatformIO

PlatformIO è il compilatore che usiamo di preferenza per l'ESP32. Esattamente come l'IDE di Arduino, funziona in modalità grafica (usando Visual Studio Code) e in in modalità testo. Puoi scegliere indifferentemente l'uno o l'altro su computer di buona potenza, ma su computer dalle modeste prestazioni è consigliabile usare PlatformIO. E' scritto totalmente in Python e dispone delle stesse librerie di Arduino, ma su questo ha un grosso vantaggio: non usa la Java Virtual Machine.

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑
<strong>L'IDE di Arduino è scritto in Java</strong>, un linguaggio di programmazione orientato agli oggetti che è stato sviluppato da Sun Microsystems nel 1995. Java deve sempre appoggiarsi alla Java Virtual Machine (JVM) che traduce il codice Java in linguaggio macchina. In tal modo i programmi sorgente vengono eseguiti dall'hardware: senza la JVM il codice Java non potrebbe essere eseguito su nessun computer.</div>


### I problemi della Java Machine

Se Arduino usa la JVM, anche PlatformIO deve usare il runtime di Python ma...

La JVM è un software complesso che richiede una notevole quantità di risorse hardware. E la quantità di risorse dipende da tanti fattori, tra cui la complessità del codice Java da esguire, la versione della JVM e le librerie e i framework che vengono utilizzati. 

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑
In generale, la JVM richiede più risorse hardware rispetto ad altri linguaggi di programmazione, come C o Python.</div>

<br>
Su alcuni computer come il Raspberry PI, Orange PI o ODROID N2+ la JVM tende a girare troppo lentamente: per questo ti consigliamo di adottare delle soluzione software alternative che non consumino CPU e RAM.

<br>
<br>

> <strong>con PlatformIO avrai a disposizione un ambiente di sviluppo</strong> velocissimo e flessibile, con un solo file di configurazione. In pratica basta fare copia e incolla di un progetto preesistente per crearne uno nuovo già totalmente configurato con parametri e librerie. Per molti programmatori un grosso vantaggio rispetto alla gestione *condivisa* delle librerie di Arduino.


## Come installare PlatformIO su Windows 11

Puoi seguire in sequenza questi passi (che valgono anche per Windows 10):

- apri il Microsoft Store e cerca "PlatformIO IDE".
- fai clic su "Installa" per installare l'estensione PlatformIO per Visual Studio Code.

Dopo l'installazione:

<strong>1</strong>. avvia Visual Studio Code.

<strong>2</strong>. nella barra laterale fai clic su "Estensioni".

<strong>3</strong>. digita "PlatformIO".

<strong>4</strong>. fai clic su "Installa"



## La installazione su Linux

Noi di Robotdazero consigliamo di scegliere "Ubuntu" tra le molte *distro* di Linux: i comandi seguenti funzioneranno solo su "Debian" e Ubuntu ma non su altre distro come "Fedora" ad esempio.

<strong>1</strong>. Apri un terminale e digita:

```bash
sudo apt update
sudo apt install platformio
```


<strong>2</strong>. Dopo l'installazione avvia Visual Studio Code

<strong>3</strong>. Nella barra laterale fai clic su "Estensioni"

<strong>4</strong>. Nella barra di ricerca digita "PlatformIO"

<strong>5</strong>.. Fai clic su "Installa"


Con questo sistema puoi installare la versione *binaria* di PlatformIO disponibile nello "Store" di Ubuntu: certamente funzionante ma talvolta non aggiornatissima. Nello stesso sito ufficiale di PlatformIO viene consigliata una installazione alternativa che usa il loro *script* universale per Linux.


### La installazione su Linux usando lo script originale

Per procedere con la installazione consigliata puoi scrivere su terminale:

#### Usando curl:

```bash
curl -fsSL -o get-platformio.py https://raw.githubusercontent.com/platformio/platformio-core-installer/master/get-platformio.py
python3 get-platformio.py
```

#### Usando wget:

```bash
wget -O get-platformio.py https://raw.githubusercontent.com/platformio/platformio-core-installer/master/get-platformio.py
python3 get-platformio.py
```

<br>

## Come usare Platformio da linea di comando

Terminata questa semplice installazione puoi iniziare ad usare Platformio da Visual Studio Code: ma per usare il compilatore dalla linea di comando devi *abilitarne* i comandi su Windows o Linux, a secondo dell'OS che vuoi usare.


### Abilitare i comandi testuali su Windows


In questyo caso è necessario modificare la variabile di ambiente di sistema chiamata "Path" e aggiungere 

```bash
C:\Users\UserName\.platformio\penv\Scripts\
```

all'inizio della lista. Ricorda di sostituire "UserName" con il tuo nome utente.


> La variabile PATH è una variabile di sistema utilizzata dal sistema operativo Windows per individuare gli eseguibili richiesti dalla riga di comando. La variabile PATH è una stringa che contiene una serie di percorsi di directory, separati da punto e virgola. Quando si esegue un comando da riga di comando, Windows cerca l'eseguibile in ciascuna delle directory elencate nella variabile PATH.



Per modificare la variabile PATH in Windows 11 o 10, è possibile utilizzare il Pannello di controllo o l'Prompt dei comandi.


#### Come farlo dalla interfaccia di Windows:

<strong>1.</strong> Apri il Pannello di controllo

<strong>2.</strong> Fai clic su Sistema e sicurezza

<strong>3.</strong> Fai clic su Sistema

<strong>4.</strong> Nella parte sinistra della finestra, fai clic su Impostazioni avanzate di sistema

<strong>5.</strong> Fai clic sulla scheda Avanzate

<strong>6.</strong> Nella sezione Variabili di ambiente, fai clic su Variabili di sistema

<strong>7.</strong> Nella sezione Variabili di sistema, individua la variabile PATH

<strong>8.</strong> Fai clic su Modifica

<strong>9.</strong> Nella casella Valore della variabile, modifica il percorso della variabile PATH come desiderato

<strong>A.</strong> Fai clic su OK

<strong>B.</strong> Fai clic su OK per chiudere la finestra Variabili di sistema

<strong>C.</strong> Fai clic su OK per chiudere la finestra Impostazioni di sistema avanzate



#### Come farlo dal Prompt dei comandi:



Apri il Prompt dei comandi e digita il seguente comando:

```bash
setx PATH "percorso1;percorso2;..."
```
Sostituisci "percorso1" e "percorso2" con i percorsi delle directory che vuoi aggiungere alla variabile PATH.

Ad esempio per aggiungere il percorso<br> "C:\Users\\\<user>\\\.platformio\penv\Scripts;" alla variabile PATH, è possibile utilizzare il seguente comando:

```bash
setx PATH "C:\Users\<user>\.platformio\penv\Scripts;"
```


> Dopo aver modificato la variabile PATH, è necessario riavviare il computer Al riavvio potresti lanciare il seguente comando per controllare la corretta installazione:

```bash
run pio system info 
```

### Abilitare i comandi testuali su Linux

Su Linux si possono creare dei collegamenti simbolici (symlinks) all'interno della directory: 

```bash
$HOME/.local/bin/ 
```

In questo modo si possono lanciare tutti gli eseguibili di PlatformIO dal terminale. Per iniziare devi esportare la directory  $HOME/.local/bin/ nella variabile di ambiente PATH. Se usi *Bash* come shell predefinita puoi editare il file **~/.profile** aggiungendo alla fine questa linea:

```bash
export PATH=$PATH:$HOME/.local/bin
```
Se usi la shell *Zsh* come shell di default puoi modificare **~/.zprofile** e aggiungere lo stesso codice visto sopra.


Puoi adesso creare i link simbolici dal terminale facendo copia e incolla:

```bash
ln -s ~/.platformio/penv/bin/platformio ~/.local/bin/platformio
ln -s ~/.platformio/penv/bin/pio ~/.local/bin/pio
ln -s ~/.platformio/penv/bin/piodebuggdb ~/.local/bin/piodebuggdb
```

Fai ripartire il terminale facendo "*logout*" e "*login*"" nuovamente e puoi proseguire. Da questo momento in poi dovresti essere in grado di usare tutti i comandi di PlatformIO dal terminale e senza fare "restart" del computer.

<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it -  post - R.145.1.0.0</p>