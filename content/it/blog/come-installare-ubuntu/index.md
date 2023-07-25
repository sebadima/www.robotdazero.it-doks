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



<br/>

<div class="alert alert-doks d-flexflex-shrink-1" role="alert">
Una semplice guida in 8 step che ti guiderà nella installazione di Ubuntu.  Con Ubuntu in versione server puoi raccogliere il flusso di dati fornito da cam di sorveglianza e sensori di controllo riciclando vecchi PC da 1 o 2 GB di Ram. Praticamente a costo zero!  </strong>
</div>
  
#### <strong> Qualche cenno “storico” prima di partire con la guida in 8 STEP per installare Ubuntu </strong>
  
  <p>
    Anni orsono si consigliava di installare Linux/Ubuntu assieme a Windows per avere a disposizione entrambi i sistemi e magari disinstallare Linux senza problemi. E’ un approccio rispettabile e l’ho seguito anche io quando ero agli inizi. Il risultato? A volte ho cancellato per errore l’intera partizione di Windows <em>sbagliando</em><br /> ad usare parted ed fdisk, a volte non sono riuscito a leggere la partizione di Linux da Windows XP.
  </p>
  
  <p>
    Sebbene oggi sia molto più facile far convivere i 2 sistemi sullo stesso PC, io ti suggerisco invece di riciclare un vecchio PC messo da parte per questi motivi:
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
  
### <strong> COSA TI SERVIRÀ PER INSTALLARE UBUNTU </strong>
  
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
    Con questa procedura cancellerai tutti i dati presenti sul disco. Puoi salvarli se proprio lo desideri su un disco USB esterno o su Dropbox/Google Drive.
  </p>
  
### <strong> STEP 1 &#8211; FAI IL DOWNLOAD DI UBUNTU DAL SITO  </strong>
  
  <p>
    Prima di fare qualsiasi cosa devi scaricare Ubuntu. È disponibile come un singolo file ISO di circa 2 GB. Un file ISO è un’immagine del disco ed è necessario estrarla su una chiavetta USB o su un DVD. Puoi scaricare Ubuntu ISO dal suo <a href="https://ubuntu.com/download/desktop">sito web</a>, oppure se hai una connessione internet traballante puoi trovare i link di torrent nella <a href="https://ubuntu.com/download/alternative-downloads">pagina di download alternativa</a>.
  </p>
  
### <strong> STEP 2 &#8211; CREA UNA CHIAVETTA USB LIVE </strong>
  
  <p>
    Dopo aver scaricato il file ISO di Ubuntu, il passaggio successivo è creare una live USB di Ubuntu. La USB live ti consente di avviare Ubuntu da un’unità USB. Al limite potresti provare Ubuntu senza nemmeno installarlo. Noi in questa guida faremo invece la installazione completa di Ubuntu.
  </p>
  
  <p>
    Sono disponibili vari strumenti gratuiti per creare un USB live di Ubuntu come Rufus, <a href="https://unetbootin.github.io/">Unetbootin</a>, <a href="https://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/">Universal USB installer</a>. Io ti consiglio <a href="https://www.pendrivelinux.com/category/new-usb-linux-tutorials/">pendrivelinux</a> ma sono tutti molto simili.
  </p>
  
### <strong> STEP 3 &#8211; AVVIA IL PC USANDO LA USB LIVE  </strong>
  
  <p>
    Collega la chiavetta USB Ubuntu live al PC. Ora, devi assicurarti che il tuo sistema si avvii dal disco USB invece che dal disco rigido. Puoi farlo entrando nel BIOS e spostando l’USB verso l’alto nell’ordine di avvio.
  </p>
  
  <p>
    Come entrare nel BIOS: riavvia il PC e quando vedi un logo del produttore del tuo computer (HP, Dell, IBM, Acer ecc.), premi F2 o F10 o F12 per accedere alle impostazioni del BIOS. La schermata del BIOS potrebbe avere un aspetto diverso per il tuo computer.
  </p>
  
  <p>
    <img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1602690764/001/boot_order-BIOS_tbvs1r.jpg" alt="Ordine di avvio nel BIOS" />
  </p>
  
  <p>
    Adesso Modifica l’ordine di avvio del PC. Inserisci la USB (in inglese removable drive) all’inizio dell’ordine di avvio, salva le modifiche ed esci seguendo il menu.
  </p>
  
### <strong> STEP 4 &#8211; SCEGLI LA GIUSTA OPZIONE SU GRUB  </strong>
  
  <p>
    Adesso riavvia il PC e alla partenza ti dovrebbe apparire una schermata scura. E’ la schermata di avvio del programma <a href="https://wiki.ubuntu-it.org/AmministrazioneSistema/Grub">grub</a> che ti dà la possibilità di 1) provare Ubuntu senza installarlo o 2) di installarlo immediatamente sul disco fisso. Puoi scegliere la prima opzione, ma in questo tutorial selezioneremo “Installare Ubuntu”.
  </p>
  
  <p>
    <img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1602690772/001/ubuntu_live_install_screen_wzqugq.jpg" alt="Schermata di installazione live di Ubuntu" />
  </p>
  
### <strong> STEP 5 &#8211; MODIFICA LE IMPOSTAZIONI DI BASE DEL SO  </strong>
  
  <p>
    Dopo 20-30 secondi, dovrebbe apparire l’ambiente Ubuntu live; potresti aspettare di più se hai usato una USB di vecchia generazione. Quindi fai clic sull’icona “Installa Ubuntu”, quella in basso nella unica colonna del desktop.
  </p>
  
  <p>
    <img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1602783971/001/Desktop-Ubuntu-Live_fb53ji.jpg" alt="Schermata di installazione live di Ubuntu" />

<br /> 

Adesso usando la interfaccia grafica di Ubuntu puoi comodamente scegliere alcune opzioni fondamentali come la lingua e il layout della tastiera: usa quelli più appropriate per il tuo sistema.
  </p>
  
  <p>
    Seleziona la LINGUA (IT), poi scegli il layout della tastiera.
  </p>
  
  <p>
    Se sei connesso a Internet, avrai la possibilità di scaricare tutti gli ultimi aggiornamenti durante la installazione. Parlo del quadratino rosso circa a metà dello screenshot sulla sinistra. Nello screenshot appare evidenziato, ma ti consiglio di deselezionarlo: puoi benissimo aggiornare Ubuntu anche in un secondo momento.
  </p>
  
  <p>
    <img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1602690801/001/install_ubuntu_4_wdk85u.jpg" alt="Cancella il disco e installa Ubuntu Linux" />
  </p>
  
### <strong> STEP 6 &#8211; CANCELLA IL DISCO FISSO  </strong>
  
  <p>
    La schermata più pericolosa arriva in questo momento. Se sono installati altri sistemi operativi, potresti avere la possibilità di installare Ubuntu insieme a loro in dual boot, ma a noi interessa sovrascrivere tutto e perciò scegliamo “Cancella disco e Installa”.
  </p>
  
  > **Ti apparirà** il consueto avviso che stai per eliminare i dati, ignoralo e vai semplicemente avanti.
  
  <p>
    <img decoding="async" src="https://i1.wp.com/itsfoss.com/wp-content/uploads/2020/01/install_ubuntu_5.jpg?resize=800%2C471&ssl=1" alt="Avviso per la formattazione del disco durante l'installazione di Ubuntu" />
  </p>
  
  <p>
    Poi apparirà anche un altro avviso sulla formattazione e anche in questo caso andremo avanti senza problemi, dopotutto stiamo lavorando su un PC “messo da parte” o no?
  </p>
  
### <STRONG> STEP 7 &#8211; CONFIGURA L’ORARIO E LA TIMEZONE </STRONG>
  
  <p>
    <img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1603296292/001/installazione-ubuntu-pc-4_eejths.jpg" alt="Seleziona il fuso orario quando installi Ubuntu" />
  </p>
  
  <p>
    Quindi dovrai selezionare il fuso orario, creare un nome utente, scegliere il nome del PC e impostare la password del sistema.
  </p>
  
  <p>
    Dopo la fase delle credenziali la parte più impegnativa finisce e ti puoi un poco rilassare controllando la installazione dei files. Per ingannare l’attesa ti consiglio di guardare la bella presentazione.
  </p>
  
  <p>
    <img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1603296319/001/installazione-ubuntu-pc-6-bis_zixnmi.jpg" alt="Installa Ubuntu 9" />
  </p>
  
### <STRONG> STEP 8 &#8211; FINE DELLA INSTALLAZIONE! </STRONG>
  
  <p>
    Alla fine ti verrà chiesto di riavviare il sistema.
  </p>
  
  <p>
    <img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1603296330/001/installazione-ubuntu-pc-7_vajtr6.jpg" alt="Riavvia Ubuntu alla fine della installazione" />
  </p>
  
  <p>
    Dopo il riavvio potrebbe apparire una scritta che ti chiede di rimuovere il supporto di installazione e di premere Invio. Rimuovi la chiavetta USB e premi Invio. Il tuo sistema si riavvierà con Ubuntu al posto di di Windows.
  </p>
  
</div>
