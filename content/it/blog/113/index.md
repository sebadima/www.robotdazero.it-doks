---
title: "Come usare il linguaggio Python per leggere e scrivere file di testo"
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
Per aprire un <a href="https://it.wikipedia.org/wiki/File_di_testo" target="_blank" rel="noopener">file di testo</a> in Python, usiamo la funzione open(). La funzione open() accetta due argomenti: il nome del file e la modalità. La modalità specifica come vogliamo aprire il file.

Questo codice di una sola linea mostra come aprire un file di testo in sola lettura:

```bash
f = open("file_esempio.txt", "r")
```

La modalità "r" indica che vogliamo aprire il file solo per la lettura. Se il file non esiste, la funzione open() genera un'eccezione.

## LEGGERE UN FILE DI TESTO
Una volta aperto un file di testo, possiamo leggerne il contenuto usando il metodo read(). Il metodo read() accetta un argomento facoltativo, n, che specifica il numero di byte da leggere. Se n non è specificato, il metodo read() leggerà l'intero file.

Il codice seguente mostra come leggere l'intero contenuto di un file di testo:


```bash
f = open("file_esempio.txt", "r")
contenuto_del_file = f.read()
```

La variabile contenuto_del_file conterrà l'intero contenuto del file come una stringa.

## SALVARE UN FILE DI TESTO
Per salvare un file di testo in Python, usiamo il metodo write(). Il metodo write() prende un argomento stringa, che è il dato che vogliamo scrivere nel file.

Il codice seguente mostra come salvare una stringa in un file di testo:



```bash
f = open("file_esempio.txt", "w")
f.write("Scritta di esempio nel file.")
f.close()
```


La modalità w indica che vogliamo aprire il file solo per la scrittura. Se il file non esiste, la funzione open() lo creerà. Se il file esiste già, il suo contenuto verrà sovrascritto.

> È importante chiudere il file dopo aver finito di scriverlo. Ciò garantisce che tutti i dati siano stati scritti nel file e che il file sia chiuso correttamente.

### UN ESEMPIO COMPLETO
Il seguente codice Python mostra come aprire, leggere e salvare un file di testo:



```bash
def esempio_completo():

    # Apre il file in lettura.
    f = open("file_esempio.txt", "r")

    # Ne legge il contenuto.
    contenuto_del_file = f.read()

    # Chiudi il file.
    f.close()

    # Riapri il file in scrittura
    f = open("file_destinazione.txt", "w")

    # Scrive il contenuro del primo file nel secondo.
    f.write(contenuto_del_file)

    # Close the new file.
    f.close()


if __name__ == "__main__":
    esempio_completo()
```

Questo codice aprirà il file file_esempio.txt per la lettura, leggere il suo contenuto, e salvarlo in un nuovo file chiamato file_destinazione.txt. In conclusione adesso sai come usare Python per aprire, leggere e salvare un file di testo, operazioni di base che sono essenziali per molti programmi Python nella Robotica.

<br>
<p style="font-size: 12px;">R.113.2.0.5</p>
<br>
