---
title: "Come usare fuser e netstat su Ubuntu"
description: "Come usare fuser e netstat su Ubuntu"
excerpt: "Iniziamo ad usare la shell di Ubuntu per gestire le installazioni di Domotica più evolute. Useremo Ubuntu per applicazioni complesse che non potrebbero mai girare su una semplice scheda Arduino."
date: 2020-08-02T09:19:42+01:00
lastmod: 2023-07-02T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["teoria", "shell", "ubuntu"]
contributors: ["sebadima"]
pinned: false
homepage: false
---



* * * 
### INIZIAMO AD USARE LA SHELL DI UBUNTU 

Useremo Ubuntu con dei comandi che non sono purtroppo disponibili su Windows e non potrebbero mai girare su una semplice scheda Arduino. In questo post vedremo come usare **fuser** nel terminale di Ubuntu.


### COME SCOPRIRE I PROGRAMMI CHE BLOCCANO UNA CERTA PORTA SU UBUNTU?

<div class="alert alert-doks d-flexflex-shrink-1" role="alert"> 👉 
Mettiamo che abbiate lanciato e dimenticato un programma proprio su una porta che vi serve. Ad esempio la porta 3000 di Nodejs o la 8000 di Python/Django. Come fare a trovare il programma preciso e a stopparlo?
</div>

<br>

Potremmo lanciare il comando **ps -ea** per andare a spulciare tra tutti i programmi in esecuzione ma perderemmo troppo tempo. 

<img class="x figure-img img-fluid lazyload blur-up" width="800" alt=" esemoio del comando ps su ubuntu" src="images/101.png">

<br>
<br>
Scriviamo invece sul prompt di Ubuntu (che si chiama SHELL) il comando seguente e otterremo in un instante il PID del programma:

```bash
$ fuser -i  :3000
```

oppure

```bash
$ fuser -i  :8000
```

facendo attenzione a lasciare uno spazio prima dei “due punti”.

Riceveremo un messaggio del tipo:


> **COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
node 16176 utente 22u IPv4 26591333 0t0 TCP :3000 (LISTEN)**

e da questo siamo in grado di capire che un server node sta girando in sottofondo (come demon) con un PID = 16176.
Per bloccarlo ci basta scrivere:

```bash
$ kill -9 16176 (o qualunque numero sia il PID)
```

facendo come sempre attenzione agli spazi.

### IL COMANDO NETSTAT

In alternativa puoi usare invece **netstat** insieme a **grep** per cercare il programma che occupa la porte 80 o 3000 o 8000.

```bash
sudo netstat -ltnp | grep 80
sudo netstat -ltnp | grep 3000
sudo netstat -ltnp | grep 8000
```

Dopo avere ottenuto il messaggio:

> **tcp 0 0 0.0.0.0:3000 0.0.0.0: LISTEN 16176/node**

possiamo procedere con il solito comando **kill -9 PID** per “stoppare” il programma che ci dà fastidio.


### PERCHÈ È IMPORTANTE USARE LA SHELL DI UBUNTU


- **La shell di Ubuntu è potente e flessibile**. Può essere utilizzata per eseguire un'ampia gamma di attività, dalla gestione di file e cartelle al controllo di processi e servizi.
- **La shell di Ubuntu è facile da imparare**. L'interfaccia della shell è semplice e diretta, e ci sono molte risorse disponibili per aiutarti a imparare a usarla.
- **La shell di Ubuntu è compatibile con una vasta gamma di software**. Puoi utilizzare la shell di Ubuntu per eseguire programmi che sono stati scritti per Linux, Windows e macOS.
- **La shell di Ubuntu è gratuita e open source**. Puoi utilizzarla e modificarla a tuo piacimento senza alcun costo.

Ecco alcuni esempi di come i programmatori evoluti possono utilizzare la shell di Ubuntu:

- **Per automatizzare le attività**. 
La shell di Ubuntu può essere utilizzata per creare script che eseguono automaticamente una serie di comandi. Questo può essere utile per automatizzare attività ripetitive o per eseguire attività che sono troppo difficili da eseguire manualmente.
- **Per risolvere i problemi**. 
La shell di Ubuntu può essere utilizzata per ottenere informazioni dettagliate sul sistema e sui processi in esecuzione. Questo può essere utile per diagnosticare e risolvere problemi di sistema.
- **Per sviluppare software**. La shell di Ubuntu può essere utilizzata per compilare codice, eseguire test e eseguire il debug di programmi. Questo può essere utile per sviluppatori di tutti i livelli di esperienza.

Se sei un programmatore evoluto, ti consiglio di dare un'occhiata alla shell di Ubuntu. È uno strumento potente e flessibile che può aiutarti a essere più produttivo e a risolvere i problemi più velocemente.



### ESISTE UN EQUIVALENTE SU WINDOWS?

<div class="alert alert-doks d-flexflex-shrink-1" role="alert"> 👉 
L'equivalente Linux del comando "fuser" è il comando "lsof". Il comando "lsof" viene utilizzato per elencare tutti i file e le porte aperte su un sistema. Questo comando può essere utilizzato per trovare i processi che stanno utilizzando determinati file o porte, o per trovare i file o le porte che sono in uso da più di un processo.
</div>

Ecco un esempio di come utilizzare il comando "lsof":

```bash
$ lsof -i
```

Questo comando elencherà tutti i file aperti su tutte le porte di rete. Puoi anche utilizzare il comando "lsof" per elencare i file aperti su una porta specifica, come ad esempio:

```bash
$ lsof -i :80
```

Questo comando elencherà tutti i file aperti sulla porta 80.

Il comando "lsof" può essere uno strumento utile per trovare file o porte che sono in uso da più di un processo, o per trovare processi che stanno utilizzando determinati file o porte.

