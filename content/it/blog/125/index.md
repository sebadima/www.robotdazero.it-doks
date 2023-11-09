---
title: "Perchè riavviare periodicamente il database di Wordpress"
description: "Perchè riavviare periodicamente il database di Wordpress"
excerpt: "Se utilizzi un server VPS come faccio io potresti occasionalmente ritrovarti con il Blog bloccato con il messaggio che vedi nello screenshot sopra. In genere accade su server dalla RAM troppo limitata o sottoposti a un attacco di “Forza Bruta” o DDOS..."
date:    2023-11-08T09:19:42+01:00
lastmod: 2023-11-08T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["Mysql", "programmazione", "sistemi"]
contributors: ["sergio rame"]
pinned: false
homepage: false
---



<hr>
<br>
<br>

## Perchè riavviare periodicamente Mysql può essere una buona idea

Se utilizzi un server "Cloud" come facciamo noi potresti occasionalmente ritrovarti con il Blog bloccato con dei messaggi tipo "Database not found" o "Mysql not found". In genere può accadere su dei server dalla RAM troppo limitata o sottoposti a un attacco di “Forza Bruta” o DDOS. 

La soluzione più ovvia sarebbe quella di aumentare la RAM del server o installare un firewall Premium come Wordfence, ma esiste una soluzione gratuita che funziona piuttosto bene: rilanciare in automatico il server Mysql quando va in errore!

## Come procedere:

- scrivi sul terminale:

```bash
sudo crontab -e
```     

- premi il tasto “i” per inserire il di codice sottostante:


```bash
  * * * * * service mysql status > /dev/null || service mysql start
```     

- premi “ESC”

- Premi “SHIFT” + zz per uscire 


<br>

La seconda parte del comando dopo ” | | ” viene eseguita solo nel caso la prima parte restituisca errore. In altre parole, se il primo comando su MySQL restituisce un codice di uscita maggiore di zero viene lanciato il secondo comando. 

Notare che stai usando il simbolo ” | | ” invece del più comune ” && “. 
Con questo semplice trucchetto sarai sicuro che i momenti di STOP del tuo blog non dureranno piu di un minuto e potrai dedicarti ad altre cose. Se non vuoi fare il controllo ogni minuto prova a impostarlo in questo modo:

```bash
*/5* * * * service mysql status > /dev/null || service mysql start
```

<hr>
<br>
<br>
<p style="font-size: 0.8em;">R.125.1.0.3</p>