---
title: "Come usare ilinguaggio Python per leggere e scrivere file di testo"
description: "Python è un linguaggio di programmazione popolare che può essere utilizzato per una varietà di attività, tra cui lavorare con i file."
excerpt: "Python è un linguaggio di programmazione popolare che può essere utilizzato per una varietà di attività, tra cui lavorare con i file. In questo articolo, impareremo come usare Python per aprire, leggere e ..."
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



##### Python è un linguaggio di programmazione popolare che può essere utilizzato per una varietà di attività, tra cui lavorare con i file. In questo articolo, impareremo come usare Python per aprire, leggere e salvare un file di testo.

## APRIRE UN FILE DI TESTO
Per aprire un file di testo in Python, usiamo la funzione open (). La funzione open () accetta due argomenti: il nome del file e la modalità. La modalità specifica come vogliamo aprire il file.

Il codice seguente mostra come aprire un file di testo per la lettura:

```bash
f = open("my_file.txt", "r")
```


La modalità r indica che vogliamo aprire il file solo per la lettura. Se il file non esiste, la funzione open () genera un'eccezione.

## LEGGERE UN FILE DI TESTO
Una volta aperto un file di testo, possiamo leggerne il contenuto usando il metodo read (). Il metodo read () accetta un argomento facoltativo, n, che specifica il numero di byte da leggere. Se n non è specificato, il metodo read () leggerà l'intero file.

Il codice seguente mostra come leggere l'intero contenuto di un file di testo:


```bash
f = open("my_file.txt", "r")
file_contents = f.read()
```

La variabile file_contents conterrà l'intero contenuto del file come una stringa.

Salvataggio di un file di testo
Per salvare un file di testo in Python, usiamo il metodo write (). Il metodo write () prende un argomento stringa, che è il dato che vogliamo scrivere nel file.

Il codice seguente mostra come salvare una stringa in un file di testo:



```bash
f = open("my_file.txt", "w")
f.write("This is the contents of my file.")
f.close()
```


La modalità w indica che vogliamo aprire il file solo per la scrittura. Se il file non esiste, la funzione open () lo creerà. Se il file esiste già, il suo contenuto verrà sovrascritto.

È importante chiudere il file dopo aver finito di scriverlo. Ciò garantisce che tutti i dati siano stati scritti nel file e che il file sia chiuso correttamente.

## UN ESEMPIO COMPLETO
Il seguente codice Python mostra come aprire, leggere e salvare un file di testo:



```bash
def open_read_and_save_text_file():
    """Opens a text file, reads its contents, and saves it to a new file."""

    # Open the file for reading.
    f = open("my_file.txt", "r")

    # Read the entire contents of the file.
    file_contents = f.read()

    # Close the file.
    f.close()

    # Open a new file for writing.
    f = open("my_new_file.txt", "w")

    # Write the file contents to the new file.
    f.write(file_contents)

    # Close the new file.
    f.close()


if __name__ == "__main__":
    open_read_and_save_text_file()
```

Questo codice aprirà il file my_file.txt per la lettura, leggere il suo contenuto, e salvarlo in un nuovo file chiamato my_new_file.txt.

In conclusione adesso sai come usare Python per aprire, leggere e salvare un file di testo. Queste sono operazioni di file di base che sono essenziali per molti programmi Python.

<br>
<p style="font-size: 12px;">R.113.1.1.0</p>
<br>
