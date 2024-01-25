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


Nei nostri progetti usiamo spesso PlatformIO per programmare l'ESP32 e pensiamo sia una valida alternativa as Arduino IDE, in particolare la struttura intuitiva dei file lo rende facile da usare nel Terminale tanto come estensione di Visual Code.

Se non sopporti che l'IDE di Arduino ti *richieda* la creazione di una certa directory, con PlatformIO avrai a disposizione un ambiente flessibile (funziona da GUI e da Terminale) con un file di configurazione in formato testo modificabile da qualsiasi editor VS Code compreso. In pratica basta fare copia e incolla di un progetto preesistente per crearne uno già configurato con parametri e librerie varie. Per molti programmatori un grosso vantaggio.


## Come installare PlatformIO su Windows 11

Puoi seguire in sequenza questi passi che valgono anche per Windows 10:

- apri il Microsoft Store e cerca "PlatformIO IDE".
- fai clic su "Installa" per installare l'estensione PlatformIO per Visual Studio Code.

Dopo l'installazione:

1. avvia Visual Studio Code.
2. nella barra laterale fai clic su "Estensioni".
3. digita "PlatformIO".
4. fai clic su "Installa"



## La installazione di PlatformIO su Ubuntu

Noi di Robotdazero consigliamo di installare Ubuntu tra le varie versione di Linux: i comandi seguenti funzioneranno su Debiane Ubuntu ma non u altre distro come Fedorala

1. Apri un terminale e digita:

```bash
sudo apt update
sudo apt install platformio
```


2. Dopo l'installazione avvia Visual Studio Code.
3. Nella barra laterale fai clic su "Estensioni".
4. Nella barra di ricerca,digita "PlatformIO".
5. Fai clic su "Installa"


Colami sistema precedente viene installata la versione di PlatformIO dispobibile nello "Store" di UbuntuNel sito ufficiale di PlatformIO puoi
Script di installazione (consigliato).
Avvertimento

PlatformIO opera senza la necessità di autorizzazioni amministrative o sudo. Si consiglia vivamente di eseguire l'installazione utilizzando l'account utente predefinito e senza autorizzazioni aggiuntive. Questo approccio garantisce un processo di installazione regolare e aiuta a mantenere un ambiente sicuro e controllato.

Nota

Per facilitare l'integrazione di PlatformIO Core con sistemi e contenitori di integrazione continua, consigliamo vivamente di installare PlatformIO Core direttamente dal gestore di pacchetti Python. Questo metodo non è solo il più veloce, ma anche il modo più semplice per garantire una configurazione senza soluzione di continuità.

Installare PlatformIO Core nell'ambiente virtuale Python utilizzando lo script di installazione.

Una posizione predefinita dell'ambiente virtuale Python è "core_dir / penv". Se hai problemi con PlatformIO Core, rimuovi questa cartella e esegui nuovamente lo script di installazione.

Super-veloce (macOS / Linux)

Scarica locale (macOS / Linux / Windows)

Super-veloce (macOS / Linux),
Per installare o aggiornare PlatformIO Core incollalo al prompt del terminale:

Usando curl

curl-fsSL-o get-platformio.py https://raw.githubusercontent.com/platformio/platformio-core-installer/master/get-platformio.py
pitone 3 get-platformio.py
o usando wget

wget-O get-platformio.py https://raw.githubusercontent.com/platformio/platformio-core-installer/master/get-platformio.py
pitone 3 get-platformio.py
Scarica locale (macOS / Linux / Windows),
Per installare o aggiornare PlatformIO Core, scaricare (salva con nome...) get-platformio.py copione. Quindi eseguire il seguente:

# cambia directory nella cartella in cui si trova scaricato "get-platformio.py"
cd / path-to-dir / dove si trova/get-platformio.py / 

# corri
python get-platformio.py
Sul sistema operativo Windows potrebbe essere simile a questo:

# cambia directory nella cartella in cui si trova scaricato "get-platformio.py"
cd C:/path-to-dir/where/get-platformio.py/is-located

# corri
python.exe get-platformio.py
Nota

Se hai bisogno di avere accesso a pio o pio.comandi exe da altre applicazioni o terminali nel sistema operativo, installare i comandi della shell.







Gestore di pacchetti Python
Avvertimento

È meglio attenersi a questo metodo SOLO SE hai a che fare con sistemi/contenitori di integrazione continua o se hai le autorizzazioni complete per configurare PlatformIO Core su tutto il tuo sistema operativo.

Per il proprio uso personale, e per evitare problemi quando si tratta di manutenzione e aggiornamenti, si CONSIGLIA VIVAMENTE di andare per lo script di installazione (consigliato). Questo script installa PlatformIO Core in un ambiente virtuale separato, mantenendolo isolato dal sistema operativo ed evitando qualsiasi impatto su di esso.

L'ultima versione stabile di PlatformIO Core può essere installata o aggiornata tramite Python Package Manager (pip) come segue:

python3-m pip installare-U platformio





Homebrew (macOS)
L'ultima versione stabile di PlatformIO può essere installata o aggiornata tramite macOS Homebrew Packages Manager (brew) come segue:

brew installare platformio








Installare i comandi della shell
PlatformIO Core (CLI) è costituito da 2 strumenti standalone in un sistema:

platformio o pio (alias breve) - Guida CLI

piodebuggdb-alias di pio debug

Se PlatformIO IDE è già installato, non è necessario installare PlatformIO Core (CLI) separatamente. Basta collegare questi strumenti con la shell:

Unix e Unix-like

Metodo 1

Metodo 2

Windows

Unix e Unix-like
Metodo 1
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

Windows
Si prega di leggere una di queste istruzioni Come posso impostare o modificare la variabile di sistema PATH?

È necessario modificare la variabile di ambiente di sistema chiamata Path e aggiungere C:\Users\UserName\.platformio \ penv \ Scripts \ path all'inizio di un elenco (sostituire il nome utente con il nome dell'account).

















## Titolo

<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it -  post - R.145.1.0.0</p>