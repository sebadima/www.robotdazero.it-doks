---
title: "Come usare Python in Visual Studio Code"
description: "Visual Studio Code è un editor di codice open source gratuito e potente che può essere utilizzato per scrivere codice in una varietà di linguaggi, tra cui Python."
excerpt: "Visual Studio Code è un editor di codice open source gratuito e potente che può essere utilizzato per scrivere codice in una varietà di linguaggi, tra cui Python. In questo articolo, ti mostreremo..."
date: 2023-10-16T09:19:42+01:00
lastmod: 2023-16-01T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["python", "programmazione"]
contributors: ["sergio rame"]
pinned: false
homepage: false
---



##### Visual Studio Code è un editor di codice open source gratuito e potente che può essere utilizzato per scrivere codice in una varietà di linguaggi, tra cui Python. 

In questo articolo, ti mostreremo come installare e configurare Visual Studio Code per <a href="https://www.python.org/" target="_blank" rel="noopener">Python</a>, come scrivere ed eseguire codice Python e come utilizzare alcune delle funzionalità <a href="https://learn.microsoft.com/it-it/visualstudio/ide/writing-code-in-the-code-and-text-editor?view=vs-2022" target="_blank" rel="noopener">avanzate</a> di Visual Studio Code.

## INSTALLAZIONE

Per installare <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener">Visual Studio Code</a>, vai al sito web di Visual Studio Code e fai clic sul pulsante "Download". Una volta scaricato, installa Visual Studio Code sul tuo computer.

Per configurare Visual Studio Code per Python, apri l'editor e fai clic sul pulsante "Extensions" nell'angolo in alto a sinistra. Nella barra di ricerca, digita "Python" e fai clic sul pulsante "Install" per installare l'estensione "Python".

<img width="800" class="x figure-img img-fluid lazyload blur-up" src="images/101.png" alt="come configurare Visual Studio Code per Python">

Una volta installata l'estensione, Visual Studio Code sarà pronto per l'uso con Python.

## SCRITTURA ED ESECUZIONE DI CODICE PYTHON

Per scrivere codice Python in Visual Studio Code, crea un nuovo file con l'estensione ".py". Ad esempio, puoi creare un file chiamato "hello.py".

Inserisci il seguente codice nel file "hello.py":


```bash
print("Hello, world!")
```

Per eseguire il codice, fai clic con il pulsante destro del mouse sul file e seleziona "Run".
Il codice verrà eseguito e visualizzerà il seguente output:

> "Hello, world!"


## FUNZIONALITÀ AVANZATE

Visual Studio Code offre una serie di funzionalità avanzate per Python, tra cui:

- IntelliSense: <a href="https://code.visualstudio.com/docs/editor/intellisense" target="_blank" rel="noopener">IntelliSense</a> fornisce suggerimenti di completamento automatico e informazioni sui tipi di dati.
- Debug: Visual Studio Code include un <a href="https://it.wikipedia.org/wiki/Debugger" target="_blank" rel="noopener">debugger</a> integrato che ti consente di eseguire il debug del tuo codice Python.
- Linting: Il <a href="https://it.wikipedia.org/wiki/Lint_(software)" target="_blank" rel="noopener">lint</a> è un processo che analizza il tuo codice alla ricerca di errori e potenziali problemi.
- Test: Visual Studio Code supporta una varietà di <a href="https://www.develer.com/blog/data-driven-testing-con-python/" target="_blank" rel="noopener">framework di test</a> per Python.

Per saperne di più su queste funzionalità, consulta la <a href="https://code.visualstudio.com/docs" target="_blank" rel="noopener">documentazione</a> di Visual Studio Code.





























































## LA GUIDA PASSO PASSO PER INSTALLARE PYTHON SU VISUAL STUDIO CODE


Installazione di Python
Scaricare e installare l'ultima versione di Python è semplice. Vai a Python.org e scarica l'ultima versione per Windows. Il programma di installazione è disponibile anche per Linux / Unix, macOS e altre piattaforme. Dopo aver scaricato il programma di installazione, installare Python con le impostazioni predefinite.          

Scarica Python.png

Immagine da Python.org

Il modo più popolare di installare Python è attraverso la distribuzione Anaconda. Viene fornito con un pacchetto preinstallato e un software per iniziare a codificare senza singhiozzo. È disponibile per i sistemi operativi Windows, macOS e Linux. 

Scarica Anaconda Distribuzione.png

Foto di Anaconda

Dopo aver installato Python sul nostro sistema operativo, controlla se funziona correttamente digitando il seguente comando in CLI / Terminal.


python version versione

 OpenAI
Uscita:


Python 3.9.13

 OpenAI
Altri metodi di installazione Python
Possiamo anche installare Python utilizzando vari strumenti CLI o attraverso il Windows Store. 

Windows Store
Homebrew
Winget
Chocolatey Software
apt-get
Puoi consultare la nostra guida completa su come installare Python per maggiori dettagli. Allo stesso modo, il nostro corso interattivo Introduzione a Python ti aiuta a padroneggiare le basi della sintassi Python, elenchi, funzioni, pacchetti e Numpy.

Installazione di VSCode
L'installazione di VSCode è super semplice. Scarica e installa la build stabile dal sito ufficiale. Il programma di installazione è disponibile per tutti i tipi di sistemi operativi, compresi i browser Web. 

Scarica VSCode dal sito ufficiale.png

Immagine da Visual Studio Code

Altri metodi di installazione di VSCode
Possiamo installare utilizzando Microsoft Store, Snap Store e più strumenti CLI per Windows, Linux e macOS. 

Winget
Microsoft Store
Chocolatey Software
Scoop
Homebrew
Negozio Snap
APT
Esecuzione di Python in VSCode
Dopo aver installato Python e VSCode, è il momento di scrivere un codice semplice ed eseguire il file Python all'interno dell'IDE. 

Crea un nuovo file.png

Crea un nuovo file 

All'inizio, vedrai la nota di benvenuto. Ignoralo e vai su File > Nuovo file di testo o usa la scorciatoia da tastiera Ctrl + N per creare un nuovo file. Dopo di che, scrivere una semplice espressione di stampa per visualizzare " Ciao Mondo.”

Salva il file Python.png

Salva file Python

Salvare il file usando Ctrl + S. Selezionare la directory del file e digitare il nome del file. Assicurati di aggiungere'. py ' alla fine del nome del file. 

Selezionare Interprete.png

Selezionare l'interprete 

Per eseguire il file Python, è necessario selezionare l'interprete Python. Per impostazione predefinita, l'ambiente Anaconda viene fornito con Python versione 3.9.13.

Eseguire un file Python.png

Eseguire un file Python

Per eseguire il file Python, è sufficiente fare clic sul pulsante Esegui in alto a sinistra, come mostrato nell'immagine. Inizializzerà il terminale ed eseguirà il file Python per visualizzare l'output. 

Puoi anche digitare python test.py nel terminale per eseguire il file presente nella directory corrente. 

Installazione di estensioni essenziali VSCode Python
Le estensioni Python di VSCode ci forniranno le funzionalità di aiuto per la modifica del codice, docstrings, linting, formattazione, debug, test e selezione dell'ambiente. 

Come installare un'estensione VSCode 
Fare clic sull'icona della casella sulla barra delle attività o utilizzare una scorciatoia da tastiera: Ctrl + Maiusc + X per aprire il pannello di estensione. Digitare qualsiasi parola chiave nella barra di ricerca per esplorare tutti i tipi di estensioni. 

Installare l'estensione Python VSCode.png

Installare VSCode estensione Python

Nel nostro caso, digiteremo Python e installeremo l'estensione Python facendo clic sul pulsante Installa, come mostrato sopra. 

Elenco delle estensioni Python essenziali 
1. Python
L'estensione Python installa automaticamente le estensioni Pylance, Jupyter e isort. Viene fornito con una collezione completa di strumenti per la scienza dei dati, lo sviluppo web e l'ingegneria del software. 

Caratteristiche principali:

L'estensione Python viene fornita con IntelliSense, linting, debug, navigazione del codice, formattazione del codice, refactoring, esplora variabili e esplora test.

IntelliSense (completamento automatico del codice)
Linting (Pylint, Flake8)
Formattazione del codice (nero, autopep)
Debug
Test (unittest, pytest) 
Notebook Jupyter
Ambienti (venv, pipenv, conda)
Refactoring 
2. Rientro-arcobaleno
Indent-le estensioni rainbow ci forniscono un rientro colorato multilivello per una migliore leggibilità del codice. Otteniamo colori alternati su ogni passo e ci aiuta a evitare errori di indentazione comuni. 

3. Rientro Python
Estensione rientro Python ci aiuta con la creazione di rientranze. Premendo il tasto Invio, l'estensione analizzerà il file Python e determinerà come la riga successiva deve essere rientrata. È un risparmio di tempo. 

4. Jupyter Notebook Renderers
Jupyter Notebook Renderers fa parte del Jupyter Extension pack. Ci aiuta a renderizzare l'output plotly, vega, gif, png, svg e jpeg. 

5. autoDocstring
L'estensione autoDocstring ci aiuta a generare rapidamente docstring per le funzioni Python. Digitando le virgolette triple """ o "' all'interno della funzione, possiamo generare e modificare docstring. Scopri di più sulle stringhe doc seguendo il nostro tutorial su Python Docstrings.

Nota: la maggior parte delle estensioni e delle funzionalità di sviluppo Python sono dotate di estensioni Python. 

Visual Studio Codice Python per la scienza dei dati
Visual Studio Code consente agli utenti di eseguire semplicemente il codice di data science nel notebook Jupyter. Possiamo eseguire la cella e visualizzare il risultato all'interno di VSCode. Supporta tutti i tipi di linguaggi di programmazione e viene fornito con funzionalità integrate per imitare il notebook Jupyter basato su browser che tutti noi amiamo.

Scopri di più sui notebook Jupyter leggendo il nostro tutorial su Come utilizzare i notebook Jupyter.

Per utilizzare l'estensione Jupyter notebook, è necessario prima installare un notebook Jupyter. 


installazione pip jupyterlab

 OpenAI
O 


pip installare notebook

 OpenAI
Nota: Jupyter Notebook e Jupyter Lab sono dotati di distribuzione Anaconda, quindi non è necessario installare nulla. 

Installare l'estensione Jupyter.png

Installare l'estensione Jupyter

Successivamente, installare l'estensione Jupyter da Visual Studio Marketplace. 

Per creare un file Jupyter notebook, possiamo creare un nuovo file con .estensione ipynb o accedere alla tavolozza dei comandi (Ctrl + Maiusc + P) e selezionare Jupyter: Crea nuovo notebook Jupyter.

Scegli il kernel Ipython.png

Scegli il kernel Ipython

Per inizializzare il server Jupyter, dobbiamo selezionare il kernel facendo clic sul kernel picker in alto a destra del notebook, come mostrato nell'immagine.

Nota: Per impostazione predefinita, Anaconda viene fornito con Python versione 3.9.13. È possibile scaricare l'ultima versione di Python 3.11, ma non supporta tutti i pacchetti. 

Eseguire la cella Jupyter.png

Eseguire la cella Jupyter

Scrivi un'espressione di stampa per visualizzare "Ciao mondo" e premi il pulsante Esegui. 

Aggiungi un'altra cella.png

Aggiungi un'altra cella

È possibile utilizzare il tasto B o fare clic su + Codice per aggiungere una nuova cella ed eseguire la cella con Ctrl + Enter Invio. È possibile conoscere le scorciatoie da tastiera Jupyter su defkey.

Per gli utenti di lingua R, abbiamo un Notebook per R tutorial. Imparerai a usare R in un notebook Jupyter e funzioni utili.  

Nota: se stai cercando un modo semplice per utilizzare Jupyter Notebook, prova DataCamp Workspace. Viene fornito con librerie Python essenziali, un ambiente pre-build e supporta varie integrazioni di database. 

DataCamp Workspace
Salta il processo di installazione e inizia a usare Python sul tuo browser utilizzando DataCamp Workspace

collaborare.png
Configurazione di Linting e formattazione in VSCode
Linting
Linting evidenzia i problemi nel codice sorgente Python e ci fornisce suggerimenti. In genere mette in evidenza questioni sintattiche e stilistiche. Linting aiuta a identificare e correggere i problemi di codifica che possono portare a errori. 

È possibile selezionare il metodo di linting selezionando Python: Selezionare il comando Linter nella tavolozza dei comandi (Ctrl + Maiusc + P). È inoltre possibile attivare manualmente il metodo linting in impostazioni. 

Selezionare metodo linting.png

Selezionare il metodo di linting

Nel nostro caso, abbiamo selezionato il metodo flake8. È inoltre possibile rivedere l'elenco dei metodi di linting disponibili.

Enable / Disable Linting: selezionare Python: Enable / Disable Linting nella tavolozza dei comandi. 
Esegui Linting: tavolozza comandi (Ctrl + Maiusc + P) > Python: Esegui Linting.
Correggere l'errore.png

Correzione dell'errore

Dopo aver eseguito il linter Python, vedrai i problemi con i suggerimenti. 

Nota: Abilitando un linter diverso verrà richiesto di installare il pacchetto Python richiesto.

Formattare
La formattazione rende il codice leggibile. Segue regole specifiche per interlinea, rientri, spaziatura attorno agli operatori e parentesi di chiusura. L'estensione Python supporta tre metodi di formattazione Python: autopep8, black o yapf.

Leggendo su PEP-8: Python Naming Conventions & Code Standards, puoi imparare la guida allo stile di Python e le regole di formattazione.

Selezionare il formattatore Python.png

Selezionare il formatter Python

Per accedere all'opzione di formattazione, dobbiamo aprire il pannello delle impostazioni andando su Preferenze - > Impostazioni o usando la scorciatoia da tastiera: Ctrl +,. Successivamente, digita " python formatting provider "nella barra di ricerca e seleziona" nero " dal menu a discesa.

Configurare Python formatter.png

Configurare Python formatter

Per formattare il file Python su save, dobbiamo cercare format on save nelle Impostazioni e abilitare l'opzione Editor: Format on Save.

Debug e test in VSCode
Debug
L'estensione Python viene fornito con il debug per tutti i tipi di applicazioni come applicazioni multi-threaded, web e remote. Possiamo impostare punti di interruzione, ispezionare i dati ed eseguire programmi passo dopo passo. 

Selezionare una configurazione di debug.png

Selezionare una configurazione di debug

Avviare la scheda debug facendo clic sull'icona di debug sulla barra delle azioni o utilizzando la scorciatoia da tastiera Ctrl + Maiusc +D. Per personalizzare le opzioni di debug, fare clic su crea un avvio.file json e selezionare il file Python. 

Pannello di debug.png

Pannello Debug

Esegui il debug facendo clic sul pulsante blu Esegui e Debug, e verrà eseguito il file Python e ci mostrerà le variabili, Guarda, Stack di chiamate e punti di interruzione. 

Debug rapido.png

Debug rapido

Per il debug rapido, è sempre possibile fare clic sulla freccia giù accanto al pulsante Esegui e selezionare Debug Python File.

Test













































































##### Conclusione

Visual Studio Code è un editor di codice potente e <a href="https://code.visualstudio.com/learn" target="_blank" rel="noopener">versatile</a> che può essere utilizzato per scrivere codice Python. Con un po' di configurazione, puoi iniziare a scrivere e eseguire codice Python in Visual Studio Code in pochi minuti.

<br>
<br>
<p style="font-size: 0.85em;">R.115.2.0.0</p>