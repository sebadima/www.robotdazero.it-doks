---
title: "Perchè usare il programma GIT"
description: "Perchè usare il programma GIT"
excerpt: "Il software Git è stato creato da Linus Torvalds, il famoso sviluppatore finlandese noto principalmente come creatore del kernel Linux. Torvalds ha creato Git nel 2005 per gestire lo sviluppo del kernel Linux stesso. Ha sviluppato Git come un sistema di controllo delle versioni distribuito, progettato per affrontare le esigenze specifiche del grande progetto open-source che è il kernel Linux..."
date: 2023-07-02T09:19:42+01:00
lastmod: 2020-07-02T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["git", "programmazione", "ubuntu"]
contributors: ["sergio rame "]
pinned: false
homepage: false
---
<style>
.x {
    transition:transform 0.40s ease;
    transition-delay: 0.60s;
}
.x:hover {
    -webkit-transform:scale(1.70); /* or some other value */
    transform:scale(1.70);
}
</style>
<a style="font-size: 13px" href="https://www.bing.com/images/create?FORM=GENILP" target="_blank" rel="noopener">immagine creata con software free di Intelligenza Artificiale</a>

## Perchè usare il comando GIT

Il software Git è stato creato da <a href="https://it.wikipedia.org/wiki/Linus_Torvalds" target="_blank" rel="noopener">Linus Torvalds</a>, il famoso sviluppatore finlandese noto principalmente come creatore del kernel Linux. Torvalds ha creato Git nel 2005 per gestire lo sviluppo del kernel Linux stesso. Ha sviluppato Git come un sistema di controllo delle versioni distribuito, progettato per affrontare le esigenze specifiche del grande progetto open-source che è il kernel Linux. 

## Cosa veniva usato prima dell'arrivo di GIT?


Prima del programma Git, i programmatori utilizzavano diversi sistemi per il controllo delle versioni e la gestione del codice sorgente. Alcuni dei sistemi più comuni erano:

1.    **RCS (Revision Control System)**: RCS è stato uno dei primi sistemi di controllo delle versioni, introdotto nel 1982. Era principalmente utilizzato per gestire le modifiche ai file di testo, mantenendo una singola versione del file in modo esplicito.

2.    **CVS (Concurrent Versions System)**: Introdotta nel 1986, CVS è un sistema di controllo delle versioni distribuito utilizzato per gestire progetti collaborativi. Era ampiamente utilizzato nei primi anni 2000 e consentiva a più sviluppatori di lavorare contemporaneamente sullo stesso progetto.

3.    **SVN (Subversion)**: SVN è stato introdotto nel 2000 ed è stato un sistema di controllo delle versioni molto popolare e un passo avanti rispetto a CVS. SVN forniva un modello di gestione delle versioni centralizzato e supportava la collaborazione tra sviluppatori.

4.    **Mercurial**: Mercurial è un sistema di controllo delle versioni distribuito simile a Git, ma è stato sviluppato indipendentemente da Git. È stato introdotto nel 2005 ed è stato utilizzato da molte comunità di sviluppatori.

5.    **Bazaar**: Bazaar è un altro sistema di controllo delle versioni distribuito che ha avuto una certa popolarità nella comunità open-source prima dell'avvento di Git. È stato sviluppato da Canonical e utilizzato per progetti come Ubuntu.

Questi sistemi di controllo delle versioni erano stati ampiamente utilizzati prima che Git diventasse ampiamente popolare grazie alla sua velocità, efficienza e capacità di gestire grandi progetti distribuiti in modo eccellente. 

#### Git è diventato ampiamente popolare e ora viene utilizzato per gestire lo sviluppo di numerosi altri progetti software in tutto il mondo.

<div class="alert alert-doks d-flexflex-shrink-1" role="alert"> 👉 
Il comando "git" è importante su Linux (e in generale su molti altri sistemi operativi) perché è uno strumento di controllo delle versioni ampiamente utilizzato e potente.
</div>

### Ecco alcuni motivi per cui dovresti usare Git su Linux:

1.    Controllo delle versioni: Git permette di tenere traccia delle modifiche apportate ai file nel tempo, consentendo di recuperare versioni precedenti di un progetto. Questo è utile per il backup, per ripristinare modifiche indesiderate o per collaborare con altri sviluppatori.

2.    Collaborazione: Git facilita la collaborazione tra sviluppatori. Consente a più persone di lavorare contemporaneamente sullo stesso progetto, integrando e gestendo facilmente le modifiche apportate da ciascun membro del team.

3. Branching e merging: Git offre funzionalità avanzate per creare nuovi "branch" (rami) di sviluppo, che consentono di lavorare su nuove funzionalità o correzioni di bug senza influire direttamente sulla versione principale del codice. Successivamente, i rami possono essere facilmente fusi (merged) per integrare le modifiche nella versione principale.

4. Gestione delle modifiche: Git consente di analizzare le modifiche apportate ai file, visualizzare le differenze tra versioni e ripristinare parti specifiche dei file. Questo rende più semplice individuare e risolvere problemi o errori nel codice.

5. Distribuzione e hosting: Git offre la possibilità di distribuire e condividere facilmente il codice sorgente attraverso servizi di hosting come GitHub, GitLab e Bitbucket. Questi servizi consentono agli sviluppatori di pubblicare i loro progetti, collaborare con altri, ricevere feedback e tenere traccia delle modifiche nel tempo.

<div class="alert alert-doks d-flexflex-shrink-1" role="alert"> 👉 
In sintesi, Git semplifica il processo di sviluppo del software, migliorando la gestione delle versioni, la collaborazione tra team di sviluppo e la distribuzione dei progetti. È diventato uno standard de facto nell'ambito dello sviluppo software ed è ampiamente utilizzato sia su Linux che su altri sistemi operativi.
</div>

{{< details "Puoi fare a meno di GIT?" >}}
Github e Gitlab prendono il nome da questo tool e in linea di massima sei obbligato ad usarlo. In certe occasioni potresti usare in alternativa il comando **wget**, ad esempio per scaricare i file binari di un progetto su github.com.
{{< /details >}}

#### Per installare Git su Ubuntu, puoi seguire questi passaggi:

Apri il terminale sul tuo sistema Ubuntu. Puoi farlo premendo Ctrl+Alt+T sulla tastiera o cercando "Terminal" nel menu delle applicazioni.

Aggiorna l'elenco dei pacchetti disponibili con il seguente comando:

```bash
$ sudo apt update
```

Installa Git utilizzando il comando:

```bash
$ sudo apt install git
```

Durante l'installazione, ti verrà chiesto di confermare l'installazione dei pacchetti. Digita "Y" e premi Invio per procedere.

Una volta completata l'installazione, puoi verificare se Git è stato installato correttamente digitando il seguente comando:

```bash
$ git --version
```

Verrà visualizzata la versione di Git installata sul tuo sistema.

Ora hai Git correttamente installato su Ubuntu e sei pronto per utilizzarlo nel terminale. Puoi iniziare a clonare repository, creare nuovi repository o gestire i tuoi progetti con Git.


### I Primi comandi su Git

I comandi di Git possono essere talvolta complicati ma per svolgere le operazioni di base la sintassi del comando è sempre intuitiva. Di seguito riportiamo i comandi indispensabili per iniziare.

1. **git init**
> Il comando git init viene usato per creare un archivio Git vuoto. Dopo il comando viene fisicamente creata una directory .git con alcuni files e delle sottodirectory. Continuando ad usare gli altri comandi Git, la directory si riempirà di altri files e directory. In linea di massima sono usati per contenere tutte le versioni del sofware sotto revisione.

2. **git add .**

> Il comando Add viene udato per aggiungere dei file al sistema di controllo di Git. Dopo questo comando Git terrà traccia delle modifiche e ne conserverà tutte le versioni.

3. **git commit -m "messaggio di commento"**

> Il comando commit permette di salvare i cambiamenti della directory locale. Tutti gli aggiornamenti finiscono nel repository di Git.
La opzione:  –m "<messaggio du commento>" ti permette di descrivere le modifiche al programma e il motivo in modo che siamo comprensibili ai collaboratori.


4. **git status**

> Questo comando fornisce lo status del repository in esame.  Il comando elenca il "branch" di lavoro, i files modificati e se esistono dei files resenti nella directory ma non sotto controllo di Git. 

5. **git clone** <remote_URL>

<div class="alert alert-doks d-flexflex-shrink-1" role="alert"> 👉 
Il comando clone è forse il più utile se volete usare software open source dal nostro sito o da internet. Il comando permette di scaricare un programma remoto in una directory locale mantenendo intatta la struttura dei file e salvando tutte le le revisioni. E' equivalente a **Git init** quando lavorate con dei repo remoti.
</div>
