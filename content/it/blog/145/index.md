---
title: "Come installare PlatformIO"
description: "Come installare PlatformIO"
excerpt: "..."
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

<a href="https://www.robotdazero.it/blog/in-arrivo-il-nuovo-esp32-p4/" target="_blank">ESP32-P4</a>
<a href="https://www.robotdazero.it/blog/la-differenza-tra-corrente-e-tensione">articolo</a>
 
<img img width="800" class="x figure-img img-fluid lazyload blur-up"  src="images/101.png" alt="">

<img img width="800" style="border: 2px solid #999;" class="x figure-img img-fluid lazyload blur-up"  src="images/201.webp" alt="">

```bash
<div class="alert alert-doks d-flexflex-shrink-1" role="alert">🔑.</div>

⚡️ 😎 👋 🔑 ( https://yaytext.com/emoji/ )   L&#8217;alimentazione   L&#8217;alimentazione 

-->

<hr>
<br>





## Perchè usare PlatformIO

PlatformIO è scritto in Python e funziona (in linea di massima) su tutti i sitemi dove può girare la versione 3.6 di Python, tra cui alcuni micro-computer basati su ARM come il Raspberry Pi. I sistemi operativi utilizzabili sono davvero molti:

- Windows, 
- macOS, 
- Linux (Ubuntu e Debian ovviamente ma anche FreeBSD e Linux ARMv6+ (la versione Raspberry )


Nei nostri progetti usiamo spesso PlatformIO per programmare l'ESP32 e pensiamo sia una valida alternativa as Arduino IDE, in particolare la struttura intuitiva dei file lo rende facile da usare sia nel Terminale che in Visual Code.

Se non sopporti che l'IDE di Arduino ti *richieda* la creazione di una certa directory, con PlatformIO avrai a disposizione un ambiente di sviluppo flessibile con un solo file di configurazione modificabile da qualsiasi editor. In pratica basta fare copia e incolla di un progetto preesistente per crearne uno nuovo già configurato con parametri e librerie. Per molti programmatori un grosso vantaggio.


## Come installare PlatformIO su Windows 11

Puoi seguire in sequenza questi passi (che valgono anche per Windows 10):

- apri il Microsoft Store e cerca "PlatformIO IDE".
- fai clic su "Installa" per installare l'estensione PlatformIO per Visual Studio Code.

Dopo l'installazione:

1. avvia Visual Studio Code.
2. nella barra laterale fai clic su "Estensioni".
3. digita "PlatformIO".
4. fai clic su "Installa"



## La installazione di PlatformIO su Ubuntu

Noi di Robotdazero consigliamo di installare Ubuntu tra le varie versione di Linux: i comandi seguenti funzioneranno su Debiane Ubuntu ma non su altre distro come Fedora.

1. Apri un terminale e digita:

```bash
sudo apt update
sudo apt install platformio
```


2. Dopo l'installazione avvia Visual Studio Code.
3. Nella barra laterale fai clic su "Estensioni".
4. Nella barra di ricerca,digita "PlatformIO".
5. Fai clic su "Installa"


Con il sistema appena visto puoi installare la versione *binaria* di PlatformIO dispobibile nello "Store" di Ubuntu, certamente funzionnate ma mnon necessariamente aggiornatissima. Nello stesso sito ufficiel di PlatformIO consigliano per i più esperti di installarlo con uno script:


##### Usando curl
```bash
curl-fsSL-o get-platformio.py https://raw.githubusercontent.com/platformio/platformio-core-installer/master/get-platformio.py
pitone 3 get-platformio.py
```

##### Usando wget

```bash
wget-O get-platformio.py https://raw.githubusercontent.com/platformio/platformio-core-installer/master/get-platformio.py
pitone 3 get-platformio.py
```

### Come usare Platformio da linea di comando

Se vuoi avere accesso ai comandi da CMD.exe o da Terminale devi:

Installare PlatformIO IDE come visto prima e cewaew dei link agli eseguibili di PlatformIO:


#### Abilitare i comandi testuali su Windows

Si prega di leggere una di queste istruzioni Come posso impostare o modificare la variabile di sistema PATH?

È necessario modificare la variabile di ambiente di sistema chiamata Path e aggiungere C:\Users\UserName\.platformio \ penv \ Scripts \ path all'inizio di un elenco (sostituire il nome utente con il nome dell'account).


Nei sistemi Unix e Unix-like, è possibile creare collegamenti simbolici (link simbolici) nel proprio HOME HOME/.directory/bin / locale per gli eseguibili Platform necessari. Questo vi permetterà di eseguire i comandi platformio da qualsiasi emulatore di terminale fino a quando si è connessi come l'utente PlatformIO è installato e configurato per.

Innanzitutto, se non è già il caso, dovresti esportare il tuo HOME HOME/.directory locale / bin / alla variabile ambientale PATH. Se usi Bash come shell predefinita, puoi farlo modificando ~/.profilo o ~/.bash_profile e aggiungendo la seguente riga:

esporta PERCORSO=PATH PERCORSO:HOME HOME/.locale / bin
Se si utilizza Zsh, è possibile modificare ~/.zprofile e aggiungi il codice sopra, o per supportare entrambi, Bash e Zsh, puoi prima modificare ~/.profilo e aggiungere il codice sopra, quindi modificare ~/.zprofile e aggiungere la seguente riga:

emula sh-c'. ~/.profilo'
Se non conosci la differenza tra i due, controlla questa pagina.

Ora che è fatto, o se HOME HOME/.local / bin / è già stato esportato nella variabile ambientale PATH, è possibile creare i collegamenti simbolici aprendo l'app del terminale di sistema e incollare questi comandi.

ln-s ~/.platformio / penv / bin /platformio~/.locale / bin / platformio
ln-s ~/.platformio / penv/bin /pio~/.locale / bin / pio
ln-s ~/.platformio / penv/bin /piodebuggdb~/.locale / bin / piodebuggdb
Dopo che tutto è stato fatto, riavvia la sessione (esci e accedi di nuovo) e sei a posto.

Metodo 2
È possibile creare collegamenti simbolici a livello di sistema. Questo metodo non è raccomandato se hai più utenti sul tuo computer perché i collegamenti simbolici saranno interrotti per altri utenti e otterranno errori durante l'esecuzione dei comandi PlatformIO. Se questo non è un problema, apri l'app terminale di sistema e incolla questi comandi. (PROBABILMENTE richiede l'accesso amministratore sudo):

mkdir-p/usr / locale / bin
ln-s ~/.platformio / penv / bin / platformio / usr / local / bin / platformio
ln-s ~/.platformio / penv / bin / pio / usr / locale / bin / pio
ln-s ~/.platformio / penv / bin / piodebuggdb / usr / locale / bin / piodebuggdb
Dopodiché, dovresti essere in grado di eseguire PlatformIO dal terminale. Non è necessario riavviare.


















## Titolo

<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it -  post - R.145.1.0.0</p>