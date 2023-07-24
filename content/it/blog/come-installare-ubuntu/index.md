---
title: Come installare Ubuntu
description: "Come installare Ubuntu"
excerpt: "Con Ubuntu in versione server puoi raccogliere il flusso di dati fornito da cam di sorveglianza e sensori di controllo riciclando vecchi PC da 1 o 2 GB di Ram. Praticamente a costo zero..."
date: 2023-05-15T09:19:42+01:00
lastmod: 2023-05-15T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["ubuntu", "software", "sistemi"]
contributors: ["sergio rame "]
pinned: false
homepage: false
---
<p><a style="font-size: 14px" href="https://www.bing.com/images/create" target="_blank" rel="noopener">Immagine creata con Bing image creator</a></p>


## Una semplice guida in 8 step che ti guiderà nella installazione di Ubuntu

<div class="cms mw6">
  <h4 id="con-ubuntu-in-versione-server-puoi-raccogliere-il-flusso-di-dati-fornito-da-cam-di-sorveglianza-e-sensori-di-controllo-riciclando-vecchi-pc-da-1-o-2-gb-di-ram-praticamente-a-costo-zero">
    Con Ubuntu in versione server puoi raccogliere il flusso di dati fornito da cam di sorveglianza e sensori di controllo riciclando vecchi PC da 1 o 2 GB di Ram. Praticamente a costo zero!
  </h4>
  
  <hr />
  
  <h3 id="qualche-cenno-storico-prima-di-partire-con-la-guida-in-8-step-per-installare-ubuntu">
    Qualche cenno “storico” prima di partire con la guida in 8 Step per installare Ubuntu
  </h3>
  
  <p>
    Anni orsono si consigliava di <strong>installare Linux/Ubuntu assieme a Windows</strong> per avere a disposizione entrambi i sistemi e magari disinstallare Linux senza problemi. E’ un approccio rispettabile e l’ho seguito anche io quando ero agli inizi. Il risultato? A volte ho cancellato per errore l’intera partizione di Windows <em>sbagliando</em><br /> ad usare <strong>parted</strong> ed <strong>fdisk</strong>, a volte non sono riuscito a leggere la partizione di Linux da <strong>Windows XP</strong>.
  </p>
  
  <p>
    Sebbene oggi sia molto più facile far convivere i 2 sistemi sullo stesso PC, io ti suggerisco invece di <strong>riciclare un vecchio PC</strong> messo da parte per questi motivi:
  </p>
  
  <ol>
    <li>
      Non ti devi preoccupare di perdere o salvare i dati
    </li>
    <li>
      Un vecchio PC costa pochissimo su Ebay o nei mercatini
    </li>
    <li>
      Funzionerà splendidamente per raccogliere i dati di Arduino
    </li>
  </ol>
  
  <p>
    Se invece vuoi per forza far convivere Windows 10 e Linux puoi in alternativa <a href="https://docs.microsoft.com/en-us/windows/wsl/install-win10">abilitare</a> il subsytem con Linux e usarne il potente ambiente di sviluppo in pochi minuti!
  </p>
  
  <h2 id="cosa-ti-servirà-per-installare-ubuntu">
    Cosa ti servirà per installare Ubuntu
  </h2>
  
  <ul>
    <li>
      Una chiavetta USB di almeno 4 GB di capacità
    </li>
    <li>
      Un PC con processore dual core da 2 GHz
    </li>
    <li>
      Almeno 25 GB di spazio su disco rigido
    </li>
    <li>
      Almeno 1 GB di RAM per creare un server
    </li>
    <li>
      Almeno 4 GB di RAM se userai il desktop
    </li>
  </ul>
  
  <h3 id="fai-attenzione">
    Fai attenzione!
  </h3>
  
  <p>
    <strong>Con questa procedura cancellerai tutti i dati presenti sul disco</strong>. Puoi salvarli se proprio lo desideri su un disco USB esterno o su Dropbox/Google Drive.
  </p>
  
  <h3 id="step-1-fai-il-download-di-ubuntu-dal-sito">
    Step #1 &#8211; Fai il download di Ubuntu dal sito
  </h3>
  
  <p>
    Prima di fare qualsiasi cosa devi scaricare Ubuntu. È disponibile come un singolo file ISO di circa 2 GB. Un file ISO è un’immagine del disco ed è necessario estrarla su una chiavetta USB o su un DVD. Puoi scaricare Ubuntu ISO dal suo <a href="https://ubuntu.com/download/desktop">sito web</a>, oppure se hai una connessione internet traballante puoi trovare i link di torrent nella <a href="https://ubuntu.com/download/alternative-downloads">pagina di download alternativa</a>.
  </p>
  
  <h3 id="step-2-crea-una-chiavetta-usb-live">
    Step #2 &#8211; Crea una <strong>chiavetta USB live</strong>
  </h3>
  
  <p>
    Dopo aver scaricato il file ISO di Ubuntu, il passaggio successivo è creare una live USB di Ubuntu. <strong>La USB live ti consente di avviare Ubuntu da un’unità USB</strong>. Al limite potresti provare Ubuntu senza nemmeno installarlo. Noi in questa guida faremo invece la installazione <strong>completa</strong> di Ubuntu.
  </p>
  
  <p>
    Sono disponibili vari strumenti gratuiti per creare un USB live di Ubuntu come Rufus, <a href="https://unetbootin.github.io/">Unetbootin</a>, <a href="https://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/">Universal USB installer</a>. Io ti consiglio <a href="https://www.pendrivelinux.com/category/new-usb-linux-tutorials/">pendrivelinux</a> ma sono tutti molto simili.
  </p>
  
  <h3 id="step-3-avvia-il-pc-usando-la-usb-live">
    Step #3 &#8211; Avvia il PC usando la USB live
  </h3>
  
  <p>
    Collega la chiavetta USB Ubuntu live al PC. Ora, devi assicurarti che il tuo sistema si avvii dal disco USB invece che dal disco rigido. Puoi farlo entrando nel BIOS e spostando l’USB verso l’alto nell’ordine di avvio.
  </p>
  
  <p>
    Come entrare nel BIOS: riavvia il PC e quando vedi un logo del produttore del tuo computer (HP, Dell, IBM, Acer ecc.), <strong>premi F2 o F10 o F12 per accedere alle impostazioni del BIO</strong>S. La schermata del BIOS potrebbe avere un aspetto diverso per il tuo computer.
  </p>
  
  <p>
    <img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1602690764/001/boot_order-BIOS_tbvs1r.jpg" alt="Ordine di avvio nel BIOS" />
  </p>
  
  <p>
    <strong>Adesso Modifica l’ordine di avvio del PC</strong>. Inserisci la USB (in inglese removable drive) all’inizio dell’ordine di avvio, salva le modifiche ed esci seguendo il menu.
  </p>
  
  <h3 id="step-4-scegli-la-giusta-opzione-su-grub">
    Step #4 &#8211; Scegli la giusta opzione su GRUB
  </h3>
  
  <p>
    Adesso riavvia il PC e alla partenza ti dovrebbe apparire una schermata scura. E’ la schermata di avvio del programma <a href="https://wiki.ubuntu-it.org/AmministrazioneSistema/Grub">grub</a> che ti dà la possibilità di 1) provare Ubuntu senza installarlo o 2) di installarlo immediatamente sul disco fisso. Puoi scegliere la prima opzione, ma in questo tutorial selezioneremo “Installare Ubuntu”.
  </p>
  
  <p>
    <img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1602690772/001/ubuntu_live_install_screen_wzqugq.jpg" alt="Schermata di installazione live di Ubuntu" />
  </p>
  
  <h3 id="step-5-modifica-le-impostazioni-di-base-del-so">
    Step #5 &#8211; Modifica le impostazioni di base del SO
  </h3>
  
  <p>
    Dopo 20-30 secondi, dovrebbe apparire l’ambiente Ubuntu live; potresti aspettare di più se hai usato una USB di vecchia generazione. Quindi fai clic sull’icona “Installa Ubuntu”, quella in basso nella unica colonna del desktop.
  </p>
  
  <p>
    <img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1602783971/001/Desktop-Ubuntu-Live_fb53ji.jpg" alt="Schermata di installazione live di Ubuntu" />

<br /> 

Adesso usando la interfaccia grafica di Ubuntu puoi comodamente scegliere alcune opzioni fondamentali come la lingua e il layout della tastiera: usa quelli più appropriate per il tuo sistema.
  </p>
  
  <p>
    <strong>Seleziona la LINGUA (IT), poi scegli il layout della tastiera</strong>.
  </p>
  
  <p>
    Se sei connesso a Internet, avrai la possibilità di scaricare tutti gli ultimi aggiornamenti durante la installazione. Parlo del quadratino rosso circa a metà dello screenshot sulla sinistra. Nello screenshot appare evidenziato, ma ti consiglio di deselezionarlo: puoi benissimo aggiornare Ubuntu anche in un secondo momento.
  </p>
  
  <p>
    <img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1602690801/001/install_ubuntu_4_wdk85u.jpg" alt="Cancella il disco e installa Ubuntu Linux" />
  </p>
  
  <h3 id="step-6-cancella-il-disco-fisso">
    Step #6 &#8211; Cancella il disco fisso
  </h3>
  
  <p>
    La schermata più <strong>pericolosa</strong> arriva in questo momento. Se sono installati altri sistemi operativi, potresti avere la possibilità di installare Ubuntu insieme a loro in dual boot, ma a noi interessa sovrascrivere tutto e perciò scegliamo “Cancella disco e Installa”.
  </p>
  
  > **Ti apparirà** il consueto avviso che stai per eliminare i dati, ignoralo e vai semplicemente avanti.
  
  <p>
    <img decoding="async" src="https://i1.wp.com/itsfoss.com/wp-content/uploads/2020/01/install_ubuntu_5.jpg?resize=800%2C471&ssl=1" alt="Avviso per la formattazione del disco durante l'installazione di Ubuntu" />
  </p>
  
  <p>
    Poi apparirà anche un altro avviso sulla formattazione e anche in questo caso andremo avanti senza problemi, dopotutto stiamo lavorando su un PC “messo da parte” o no?
  </p>
  
  <h3 id="step-7-configura-l-orario-e-la-timezone">
    Step #7 &#8211; Configura l’Orario e la TimeZone
  </h3>
  
  <p>
    <img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1603296292/001/installazione-ubuntu-pc-4_eejths.jpg" alt="Seleziona il fuso orario quando installi Ubuntu" />
  </p>
  
  <p>
    Quindi dovrai selezionare il fuso orario, creare un nome utente, scegliere il nome del PC e impostare la password del sistema.
  </p>
  
  <p>
    Dopo la fase delle credenziali la parte <strong>più impegnativa finisce</strong> e ti puoi un poco rilassare controllando la installazione dei files. Per ingannare l’attesa ti consiglio di guardare la bella presentazione.
  </p>
  
  <p>
    <img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1603296319/001/installazione-ubuntu-pc-6-bis_zixnmi.jpg" alt="Installa Ubuntu 9" />
  </p>
  
  <h3 id="step-8-fine-della-installazione">
    Step #8 &#8211; Fine della installazione!
  </h3>
  
  <p>
    Alla fine ti verrà chiesto di riavviare il sistema.
  </p>
  
  <p>
    <img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1603296330/001/installazione-ubuntu-pc-7_vajtr6.jpg" alt="Riavvia Ubuntu alla fine della installazione" />
  </p>
  
  <p>
    Dopo il riavvio potrebbe apparire una scritta che ti chiede di rimuovere il supporto di installazione e di premere Invio. <strong>Rimuovi la chiavetta USB e premi Invio</strong>. Il tuo sistema si riavvierà con Ubuntu al posto di di Windows.
  </p>
  
</div>
