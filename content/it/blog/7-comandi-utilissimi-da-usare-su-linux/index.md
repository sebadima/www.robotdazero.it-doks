---
title: 7 comandi utilissimi da usare su Linux
description: "Se sviluppi progetti informatici in maniera professionale o come hobbista evoluto, conoscere Linux e la sua shell (Bash) ti darà enormi vantaggi rispetto al command prompt di Windows e per velocizzare il suo utilizzo ti propongo 7 comandi utilissimi da usare su Linux sin dall’inizio."
excerpt: "Se sviluppi progetti informatici in maniera professionale o come hobbista evoluto, conoscere Linux e la sua shell (Bash) ti darà enormi vantaggi rispetto al command prompt di Windows e per velocizzare il suo utilizzo ti propongo 7 comandi utilissimi da usare su Linux sin dall’inizio."
date: 2020-08-02T09:19:42+01:00
lastmod: 2020-08-02T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["terminale", "shell", "ubuntu", "linux"]
contributors: ["sergio rame "]
pinned: false
homepage: false
---



* * *
_Se sviluppi progetti informatici in maniera professionale o come hobbista evoluto, conoscere Linux e la sua shell (Bash) ti darà enormi vantaggi rispetto al command prompt di Windows e per velocizzare il suo utilizzo ti propongo 7 comandi utilissimi da usare su Linux sin dall&#8217;inizio._


### 1. COME TROVARE I FILES PIU' INGOMBRANTI IN UNA DIRECTORY

Mettiamo tu voglia liberare spazio su disco e ti serva sapere quali sono i file più ingombranti. Oppure che tu voglia dare una occhiata a una directory piena zeppa di programmi e ti serva sapere quali sono i più grossi: scrivi questo comando facendo copia e incolla e avrai in un attimo la risposta.

```bash
    du -a . | sort -n -r | head -n 20
```

Se vuoi invece editare tutti i file di una directory e di tutte le subdirectory con l’editor vi (VIM), disponibile su ogni versione di Linux, puoi fare copia e incolla di questo comando:

```bash
    find . -xtype f -exec vim {} +
```

Per uscire dall’editor vi ti basta premere ESC e scrivere :q + INVIO.

### 2. COME TROVARE UNA STRINGA ALL’INTERNO DEI FILES DI UNA DIRECTORY E APRIRLI IN AUTOMATICO CON SUBLIME TEXT {#COME-TROVARE-UNA-STRINGA-ALL-INTERNO-DEI-FILES-DI-UNA-DIRECTORY-E-APRIRLI-IN-AUTOMATICO-CON-SUBLIME-TEXT}

Se non ti piace l’editor **vi **e preferisci usare un editor moderno con interfaccia grafica come ad esempio [Sublime Text][1] puoi usare il prossimo programma di poche righe che fa le seguenti cose:

  * Cerca ricorsivamente (cioè anche nelle sottodirectory) tutti i files che contengono una determinata scritta, es: copyright
  * Lancia Sublime Text e apre una tacca diversa per ognuno dei files trovati.

Procediamo passo passo:  
Usa vi o Sublime Text per creare un file che chiamerai “trova“:

```bash
    vi trova
```

oppure, usando Sublime Text

```bash
    subl trova
```

Adesso fai copia e incolla del codice qui sotto:

```bash
do
grep --exclude-dir=public -lira $FILE1 * | xargs subl $FILE1
echo $FILE1
done
```
Salva tutto e scrivi sulla linea di comando:

```bash
    sudo chmod +x trova;    sudo cp trova /usr/bin>
```

A partire da adesso ogni volta che vorrai modificare un programma ma non sai esattamente quale file aprire, potrai scrivere:

```bash
    trova copyright
```

Sublime Text ti aprirà ogni singolo file che contiene la parola ‘copyright’ in una tab diversa. In questo modo potrai editarli tuti assieme senza cercarli singolarmente dal prompt dei comandi.

### 3. COME MODIFICARE UNA STRINGA ALL’INTERNO DI TUTTI I FILES DI UNA DIRECTORY E DI TUTTE LE SUE SOTTODIRECTORY CON UN SOLO COMANDO {#COME-MODIFICARE-UNA-STRINGA-ALL-INTERNO-DI-TUTTI-I-FILES-DI-UNA-DIRECTORY-E-DI-TUTTE-LE-SUE-SOTTODIRECTORY-CON-UN-SOLO-COMANDO}

Questo comando è potenzialmente _pericoloso_ e perciò ti consiglio di usarlo con attenzione:

```bash
    find . -type f -exec sed -i 's/en-us/it/g' {} +
```

Lanciando il comando all’interno di una directory ad esempio di un sito statico html possiamo cambiare tutte le occorrenze di “en-us” e sostituirle con il nostro italico “it” senza cercare dentro i files .html con l’editor. E poichè parliamo di di Linux e non di Windows 10 che è piuttosto limitato anche con la sua _Power Shell_  possiamo definire le stringhe usando le potenti wildcards delle [regular expressions][2].  
A tale proposito, se ti ostini ad usare ancora Windows per programmare, leggi questo [post][3] apparso sul forum di [Stackoverflow][4], la bibbia della programmazione:

> **Unlike many Unix shells**, the Windows command line processor does not expand wildcards automatically. It is each program’s responsibility to expand <a href="https://support.microsoft.com/en-us/office/examples-of-wildcard-characters-939e153f-bd30-47e4-a763-61897c87b3f4" target="_blank" rel="noopener">wildcards</a> as it sees fit. Many programs simply don’t support wildcards at all.
> 
> **Traduzione di Google Translate**: “_A differenza di molte shell Unix, il processore della riga di comando di Windows non espande automaticamente i caratteri jolly. È responsabilità di ogni programma espandere i caratteri jolly come meglio crede. Molti programmi semplicemente non supportano affatto i caratteri jolly._“

&nbsp;

### 4. COME USARE IL COMANDO RSYNC PER COPIARE DUE DIRECTORY VIA INTERNET {#COME-USARE-IL-COMANDO-RSYNC-PER-COPIARE-DUE-DIRECTORY-VIA-INTERNET}

Il comando **rsync** di Linux non ha un vero equivalente nel mondo Windows e comunque nulla che si avvicini alla sua flessibilità. L’unica vera difficoltà consiste nell’orizzontarsi tra le decine di opzioni della linea di comando e per questo ti mostro 2 esempi già pronti da usare quando serve:

Per copiare due directory sullo stesso computer (l’esempio più elementare) puoi scrivere:

```bash
    rsync -zarvh ./dir1/ ./dir2/
```

Per copiare due directory da un computer locale al tuo sito web (una specie di **FTP**) puoi scrivere invece:

```bash
    rsync -zarvh /home/utente/r utente@sitoweb.com:/home/utente/r/
```

In questo secondo esempio il comando **rsync **prende i files della cartella locale r e li incolla nella equivalente cartella r nel server sitoweb.com (un nome random…). E’ importante notare come con rsync venga saltata la fase di login/autenticazione del protocollo **SFTP**, con un vantaggio enorme per la sicurezza.

Infatti, usando rsync con utente@sitoweb.com ci autentichiamo presso il server web usando il protocollo ultrasicuro [SSH][5]: oltre alla sicurezza intrinseca delle chiavi SSH puoi così collegarti anche a server blindati con i login classici [utente/password] bloccati.

**Sotto vediamo (estratte dall’ help del comando) le opzioni che ho usato in questi esempi:**

  * -z, –compress compress file data during the transfer
  * -a, –archive archive files and directory
  * -r, –recursive sync files and directories recursively
  * -v, –verbose Verbose output
  * -h, –human-readable display the output numbers in a human readable format

### 5. COME VEDERE TUTTI I PROGRAMMI CHE GIRANO IN BACKGROUND DALLA SHELL DEL TUO LINUX {#COME-VEDERE-TUTTI-I-PROGRAMMI-CHE-GIRANO-IN-BACKGROUND-DALLA-SHELL-DEL-TUO-LINUX}

Scrivi il comando **htop** nella shell e poi premi _F6 _e seleziona, ad esempio _PERCENT_MEM_, per ordinare i programmi in base alla RAM che stanno usando. Quasi rempre il record negativo sarà di **mysqld**, il demon del database Mysql. Scrolla in basso per saltare mysqld e controlla gli altri processi (cioè programmi che girano sul sistema). Prendi nota dei 3 o 4 che occupano più memoria e decidi su puoi legittimamente bloccarli. Per sapere a quale utente appartengono scrivi:

```bash
    htop -u
```

<img class="x figure-img img-fluid lazyload blur-up" width="800" alt="" src="images/101.png">

Per trovare tutti gli utenti collegati al sistema scrivi:

```bash
    awk -F: '{ print $1}' /etc/passwd
```

oppure:

```bash
    getent passwd
```

A questo punto se abbiamo identificato qualche programma “fuori controllo” che secondo noi sta usando troppe RAM, vediamo come agire per bloccarlo.

### 6. COME BLOCCARE UTENTI O PROCESSI NON IMPORTANTI MA CHE OCCUPANO TROPPE RISORSE DEL SISTEMA {#COME-BLOCCARE-UTENTI-O-PROCESSI-NON-IMPORTANTI-MA-CHE-OCCUPANO-TROPPE-RISORSE-DEL-SISTEMA}

Per elencare i programmi ordinati per utente abbiamo già usato il comando:

```bash
    htop -u
```

se l’utente _riccardo_ ha lanciato e magari dimenticato troppi programmi, possiamo controllare la sua attività scrivendo:

```bash
    pgrep -u riccardo
```

e ci apparirà l’elenco dei programmi lanciati con il loro codice unico: se abbiamo deciso con scrupolo che dobbiamo bloccargli tutti i processi (programmi in esecuzione) senza andare a stopparli uno per uno scriviamo:

```bash
    sudo pkill -9 -u riccardo
```

Dopo qualche minuto magari ricontrolliamo ancora l’utente usando **pgrep -u riccardo**, e decidiamo se bloccare l’utente per qualche ora.

### 7. COME ELENCARE QUALI SERVIZI PARTONO IN AUTOMATICO SUL NOSTRO SISTEMA E COME BLOCCARLI TEMPORANEAMENTE {#COME-ELENCARE-QUALI-SERVIZI-PARTONO-IN-AUTOMATICO-SUL-NOSTRO-SISTEMA-E-COME-BLOCCARLI-TEMPORANEAMENTE}

Per elencare i servizi abilitati a partire in automatico sul nostro sistema possiamo scrivere:

```bash
    systemctl list-unit-files | grep enabled
```

Se notiamo delle anomalie o non ci serve qualche tipo di servizio p.e. **ufw** scriviamo:

```bash
    sudo systemctl stop ufw
```

Quindi scriviamo il comando **free** e controlliamo il risparmio di **RAM**: se il risparmio è limitato possiamo decidere di fare ripartire il servizio in questo modo:

```bash
    sudo systemctl restart ufw
```

La gestione dei servizi su Linux non è cosa semplicissima e per questo ti invito a non cambiare distro di Linux alla prima difficoltà ma di restare _fedele_ ad Ubuntu e al suo enorme ecosistema di forum e appassionati. Se vuoi ad esempio approfondire il comando **systemctl** puoi leggerti [questo][6] articolo su [Askubuntu][7].

 [1]: https://www.sublimetext.com/3
 [2]: https://www.guru99.com/linux-regular-expressions.html
 [3]: https://stackoverflow.com/questions/15537616/how-to-use-windows-command-line-regular-expressions
 [4]: https://stackoverflow.com/
 [5]: https://it.wikipedia.org/wiki/Secure_Shell
 [6]: https://askubuntu.com/questions/795226/how-to-list-all-enabled-services-from-systemctl
 [7]: https://askubuntu.com/
