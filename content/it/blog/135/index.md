---
title: "Come convertire una lista in un dizionario usando Python"
description:  "Come convertire una lista in un dizionario usando Python"
excerpt: "Come scrivere un programma Python per convertire l’elenco dato in un dizionario in modo tale che tutti gli elementi dispari abbiano la chiave e gli elementi numerici pari abbiano il valore..."
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


```bash
def convert(lst):
   res_dict = {}
   for i in range(0, len(lst), 2):
       res_dict[lst[i]] = lst[i + 1]
   return res_dict
 
lst = ['a', 1, 'b', 2, 'c', 3]
print(convert(lst))
```

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">
👉 Output:
{'a': 1, 'b': 2,' c': 3}
</div>

### Elenco di conversazione dizionario utilizzando dict comprensione
### List to Dictionary Conversation using dict Comprehension

Per convertire una lista in dizionario, possiamo usare la comprensione dict e creare una coppia key: value di elementi consecutivi. Infine, typecase l'elenco di tipo dict. 


```bash

def Convert(lst):
    res_dct = {lst[i]: lst[i + 1] for i in range(0, len(lst), 2)}
    return res_dct
         
# Driver code
lst = ['a', 1, 'b', 2, 'c', 3]
print(Convert(lst))
```


<div class="alert alert-doks d-flexflex-shrink-1" role="alert">
👉 Output:
{'a': 1, 'b': 2,' c': 3}
</div>


### Convertire un elenco in un dizionario usando il zip()

Per prima cosa crea un iteratore e inizializzalo nella variabile "it". Quindi utilizzare il metodo zip, per comprimere chiavi e valori insieme. Infine typecast a dict tipo. 

```bash
def Convert(a):
    it = iter(a)
    res_dct = dict(zip(it, it))
    return res_dct
 
 
# Driver code
lst = ['a', 1, 'b', 2, 'c', 3]
print(Convert(lst))
```

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">
👉 Output:
{'a': 1, 'b': 2,' c': 3}
</div>



### Conversione di un dizionario utilizzando la funzione Lambda

In primo luogo, creare una matrice di chiavi e valori utilizzando array slicing. Quindi utilizzare il metodo map con lambda per formare array di tuple con valore chiave paris. Infine typecast a dict tipo. 


```bash
def Convert(lst):
    res_dct = map(lambda i: (lst[i], lst[i+1]), range(len(lst)-1)[::2])
    return dict(res_dct)
 
 
# Driver code
lst = ['a', 1, 'b', 2, 'c', 3]
print(Convert(lst))
```
<div class="alert alert-doks d-flexflex-shrink-1" role="alert">
👉 Output:
{'a': 1, 'c': 3,' b': 2}
</div>


<br>
<br>
<p style="font-size: 0.75em;">Robotdazero.it -  post - R.135.0.5.0</p>  