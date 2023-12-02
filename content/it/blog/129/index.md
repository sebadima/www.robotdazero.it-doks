---
title: "Come creare un ambiente di sviluppo con Python venv"
description: "Come creare un ambiente di sviluppo con Python venv"
excerpt: "..."
date: 2023-11-25T09:19:42+01:00
lastmod: 2023-11-25T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["python", "programmazione"]
contributors: ["sebadima"]
pinned: false
homepage: false
mermaid: true
---



<hr>

## Perchè creare un ambiente di sviluppo con Python?

Un ambiente virtuale crea un ambiente isolato per ogni progetto Python. Ciò significa che le dipendenze di un progetto non interferiscono con le dipendenze di altri progetti. Questo è particolarmente importante quando si lavora su progetti che richiedono versioni diverse di Python o di librerie Python.

### Gestione delle dipendenze

Un ambiente virtuale include un proprio pip, che è il gestore di pacchetti Python. Ciò significa che è possibile installare le dipendenze di un progetto in modo sicuro e senza interferire con le dipendenze di altri progetti.

### Compatibilità

Un ambiente virtuale può essere utilizzato per eseguire Python in una versione specifica. Ciò può essere utile per eseguire progetti che richiedono una versione di Python che non è installata sul sistema.

### I programmi utilizzabili

Esistono diversi programmi per creare ambienti di sviluppo virtualizzati con Python. Il programma più semplice è <a href="https://docs.python.org/3/library/venv.html" target="_blank" rel="noopener">VENV</a>, che è una funzionalità integrata di Python. Per creare un ambiente virtuale con VENV, è sufficiente eseguire il seguente comando da riga di comando:

```bash
python -m venv nome_ambiente
```
Ad esempio, per creare un ambiente virtuale chiamato "myproject", eseguire il seguente comando:

```bash
python -m venv myproject
```

Una volta creato l'ambiente virtuale, è necessario attivarlo per poterlo utilizzare. Per attivare un ambiente virtuale con VENV, è sufficiente eseguire il seguente comando:

```bash
source nome_ambiente/bin/activate
```

Ad esempio, per attivare l'ambiente virtuale "myproject", eseguire il seguente comando:

```bash
source myproject/bin/activate
```
Al termine del lavoro, è possibile disattivare l'ambiente virtuale eseguendo il seguente comando:

```bash
deactivate
```

Oltre a VENV, esistono altri programmi che possono essere utilizzati per creare ambienti di sviluppo virtualizzati con Python. Alcuni di questi programmi sono:

Pipenv: <a href="https://pipenv.pypa.io/en/latest/" target="_blank" rel="noopener">Pipenv</a> è un programma che consente di creare, gestire e distribuire ambienti virtuali Python.
Poetry: <a href="https://python-poetry.org/" target="_blank" rel="noopener">Poetry</a> è un altro programma che consente di creare, gestire e distribuire ambienti virtuali Python.
Anaconda: <a href="https://www.anaconda.com/" target="_blank" rel="noopener">Anaconda</a> è una distribuzione Python che include un gestore di ambienti virtuali integrato.

## Usiamo VENV per creare un ambiente con python 3

```bash
sudo apt-get install python-pip python3-pip # solo unix
pip install virtualenv
python3 -m venv w
cd w
source bin/activate
python -V
deactivate
```     

### Conclusione

> Un ambiente virtuale può migliorare le prestazioni dei progetti Python. Ciò è dovuto al fatto che il sistema operativo non deve caricare più volte le stesse librerie Python.

In generale, la creazione di un ambiente di sviluppo con Python è una buona pratica che può aiutare a migliorare la compatibilità, la sicurezza e le prestazioni dei progetti Python.

<br>

<p style="font-size: 0.8em;">R.129.1.2.2</p>
