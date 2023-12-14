---
title: "Come convertire una lista in un dizionario usando Python"
description:  "Come convertire una lista in un dizionario usando Python"
excerpt: "000"
date: 2022-12-13T09:19:42+01:00
lastmod: 2022-12-13T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["python", "programmazione"]
contributors: ["sebadima"]
pinned: false
homepage: false
---



Come scrivere un programma Python per convertire l'elenco dato in un dizionario in modo tale che tutti gli elementi dispari abbiano la chiave e gli elementi numerici pari abbiano il valore. Poiché il dizionario Python non è ordinato, l'output può essere in qualsiasi ordine.

Esempio

Ingresso: ['a', 1, 'b', 2, 'c', 3]
Uscita: {'a': 1, 'b': 2,' c': 3}
Spiegazione: Nell'input abbiamo una lista di elementi che poi viene convocata in coppie di valori chiave di dictonary nell'output
Convertire una lista in Dizionario Python
Di seguito sono riportati i metodi che tratteremo in questo articolo:

Utilizzo di un loop
Utilizzo della comprensione dict
Utilizzo del metodo zip ()
Utilizzo della funzione Lambda
Utilizzando lista comprensione e Slicing
Utilizzo di Itertools
Convertire un elenco in un dizionario utilizzando un ciclo
Questo metodo funziona inizializzando un dizionario vuoto e quindi iterando l'elenco nel passaggio 2. In ogni iterazione, la coppia chiave-valore viene aggiunta al dizionario utilizzando l'elemento corrente come chiave e l'elemento successivo come valore. Infine, il dizionario viene restituito come risultato.


def convert(lst):
   res_dict = {}
   per i nell'intervallo (0, len (lst), 2):
       res_dict[lst[i]] = lst [i + 1]
   res_dict di ritorno
 
lst = ['a', 1, 'b', 2, 'c', 3]
stampa(converti(lst))
Uscita

{'a': 1, 'b': 2,' c': 3}
Complessità temporale: O (n), dove n è la lunghezza della lista di input. 
Spazio ausiliario: O (n), dove n è la lunghezza della lista di input.

Elenco di conversazione dizionario utilizzando dict comprensione
Per convertire una lista in dizionario, possiamo usare la comprensione dict e creare una coppia key: value di elementi consecutivi. Infine, typecase l'elenco di tipo dict. 


def Convert(lst):
    res_dct = {lst [i]: lst [i + 1] per i nell'intervallo (0, len (lst), 2)}
    _dct di ritorno
         
# Codice driver
lst = ['a', 1, 'b', 2, 'c', 3]
stampa(Converti(lst))
Uscita
{'a': 1, 'b': 2,' c': 3}


Complessità temporale: O (n), dove n è la lunghezza della lista di input.
Spazio ausiliario: O (n), dove n è la lunghezza della lista di input.

Convertire un elenco in un dizionario usando il metodo zip ()
Per prima cosa crea un iteratore e inizializzalo nella variabile "it". Quindi utilizzare il metodo zip, per comprimere chiavi e valori insieme. Infine typecast a dict tipo. 


def Convert (a):
    it = iter (a)
    res_dct = dict(zip(esso, esso))
    _dct di ritorno
 
 
# Codice driver
lst = ['a', 1, 'b', 2, 'c', 3]
stampa(Converti(lst))
Uscita
{'a': 1, 'b': 2,' c': 3}


Complessità temporale: O (n), dove n è la lunghezza della lista di input a. 
Spazio ausiliario: O (n), dove n è la lunghezza della lista di input a. 

Elenco di conversazione dizionario utilizzando la funzione Lambda
In primo luogo, creare una matrice di chiavi e valori utilizzando array slicing. Quindi utilizzare il metodo map con lambda per formare array di tuple con valore chiave paris. Infine typecast a dict tipo. 


def Convert(lst):
    res_dct = mappa (lambda i: (lst[i], lst[i+1]), intervallo (len (lst)-1) [:: 2])
    restituisce dict (res_dct)
 
 
# Codice driver
lst = ['a', 1, 'b', 2, 'c', 3]
stampa(Converti(lst))
Uscita
{'a': 1, 'c': 3,' b': 2}


Complessità temporale: O (n), dove n è il numero di coppie chiave-valore nel dizionario.
Spazio ausiliario: O (n), per memorizzare le chiavi e i valori nel dizionario.

Conversione di un elenco in un dizionario utilizzando la comprensione e il slicing dell'elenco
Tagliare l'elenco di input per ottenere un elenco di chiavi utilizzando lst [:: 2]. Questo richiederà ogni secondo elemento a partire dal primo elemento della lista.Tagliare l'elenco di input per ottenere un elenco di valori utilizzando lst[1:: 2]. Questo richiederà ogni secondo elemento a partire dal secondo elemento della lista. Creare un dizionario utilizzando una comprensione dizionario che itera sopra gli indici della lista chiavi e coppie ogni chiave con il suo valore corrispondente dalla lista valori.

Restituisce il dizionario risultante.


def convert(lst):
    keys = lst [:: 2] # taglia l'elenco per ottenere le chiavi
    values = lst[1::2] # taglia l'elenco per ottenere valori
    res_dict = {keys [i]: valori [i] per i nell'intervallo (len (keys))}
    res_dict di ritorno
lst = ['a', 1, 'b', 2, 'c', 3]
stampa(converti (lst)) # {'a': 1, 'b': 2, 'c': 3}
Uscita
{'a': 1, 'b': 2,' c': 3}


Complessità temporale: O (n)
Spazio ausiliario: O (n).

Convertire un elenco in dizionario utilizzando Itertools
Importare il modulo itertools.Utilizzare la funzione zip_longest () per creare un elenco di tuple dall'elenco originale. Questa funzione raggrupperà gli elementi in coppie, anche se la lunghezza della lista è dispari.Utilizzare una comprensione del dizionario per creare un dizionario dall'elenco di tuple.Restituisci il dizionario.

Di seguito è riportata l'implementazione dell'approccio di cui sopra:


importa itertools
 
def convert(lst):
    pairs = itertools.zip_longest (*[iter (lst)] * 2, fillvalue=None)
    dct = {key: valore per chiave, valore in coppie}
    ritorno dct
 
lst = ['a', 1, 'b', 2, 'c', 3]
stampa(converti(lst))
Uscita
{'a': 1, 'b': 2,' c': 3}
<br>
<br>
<p style="font-size: 0.75em;">Robotdazero.it -  post - R.135.0.5.0</p>  