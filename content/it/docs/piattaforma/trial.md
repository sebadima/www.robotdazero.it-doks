---
title: "Prova la nostra piattaforma"
description: "Kaspian è una piattaforma per costruire sistemi di controllo e sorveglianza sicuri, semplici e facili da personalizzare, basata su software Open Source ampiamente documentato e affidabile."
lead: "Kaspian è una piattaforma per costruire sistemi di controllo e sorveglianza sicuri, semplici e facili da personalizzare, basata su software Open Source ampiamente documentato e affidabile."
date: 2020-10-06T08:48:57+00:00
lastmod: 2023-08-04T08:48:57+00:00
draft: false
images: []
menu:
  docs:
    parent: "piattaforma"
weight: 220
toc: true
---



<style>

.bz-form {width: 684px; margin: 200px auto 0; }

.bz-container {
  width: 100%;
  background-color: #fff;
  padding: 30px 40px 20px;
  border-radius: 5px;
  border: 1px solid gray;
}

.bz-btmmargin {
  margin-bottom: 14px !important;
}

.bz-topmargin {
  margin-top: 6px !important;
}

.bz-left {float: left; width: 49%; padding-right: 2%; min-width: 300px;}
.bz-right {float: left; width: 49%; min-width: 300px;}
.bz-clear {clear: both;}

input[type='text'], input[type='email'] {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  outline: 0;
  display: block;
  width: 100%;
  padding: 7px;
  border: 0;
  border-bottom: 1px solid #ddd;
  background: transparent;
  margin-bottom: 10px;
  height: 45px;
}

input[type='submit'] {
  float: right;
  font-size: 20px;
}

@media only screen and (max-width: 600px) {
  .bz-container {padding: 10px;}
  .bz-form {width: 100%;}
  .bz-left, .bz-right { width: 100%; padding: 0 10px;}
  input[type='submit'] {margin-left: 10px;}
}

</style>



<img width="25%" class="x figure-img img-fluid lazyload blur-up" src="/114.svg" alt="">

<div class="bz-container">

#### Puoi provare la nostra app senza carta di credito e senza impegno per 30 giorni. Ti basta fornire il numero di telefono e dopo una breve telefonata di verifica riceverai le credenziali via mail.

  <form action="https://formspree.io/f/xqkveyej" method="POST">
    <div class="bz-left">
      <input type="hidden" name="_language" value="it"/>
      <input class="bz-btmmargin" type="text" id="nome"     name="nome"     placeholder="Nome"     required/>
      <input class="bz-btmmargin" type="text" id="telefono" name="telefono" placeholder="Telefono" required/>
      <input class="bz-btmmargin" type="text" id="email"    name="email"    placeholder="Email"    required/>
    </div>
    <div class="bz-clear"></div>
    <input class="btn btn-primary btn-lg px-4 mb-2" type="submit" value="Invia">
    <div class="bz-clear"></div>
  </form>

</div>

<br>

## FAQ
### Quali sensori di gas posso collegare alla piattaforma?
Puoi collegare tutti i sensori di gas della serie  MQ-2 MQ-3 MQ-4 MQ-5 MQ-6 MQ-7 MQ-8 MQ-9 MQ-135.
In generale puoi collegare tutti i sensori di gas, temperatura, suono, GPS, magnetici, amperometrici etc. compatibili con Arduino.

### Posso usare la piattaforma Kaspian sullo smartphone?
Sì, puoi adoperare ogni tipo di dispositivo perchè la risoluzione dello schermo si adatta all'hardware adoperato. Un tablet con risoluzione di almeno 1024px potrebbe essere la soluzione migliore per la portabilità. La versione desktop funziona ovviamente con ogni schermo.

### Su che tipo di server è attualmente ospitato Kaspian?
Attualmente la piattaforma gira su due server Ubuntu 22.04 - 4GB Ram - 2 CPU.<br>
i vostri dati sono al sicuro perchè replicati sui servizi *Amazon S3* e *Amazon Glacier* in due centri geografici differenti.

#### Posso ospitare la piattaforma software sul mio server personale?
Sì, puoi copiare il software della piattaforma Kaspian ed usarlo senza pagare nulla. Se hai già esperienza nella manutenzione di server Linux può essere la scelta migliore. Per chi non è sistemista o non vuole sobbarcarsi la gestione degli aggiornamenti e del backup, acquistare la nostra versione cloud potrebbe essere la soluzione più ecomomica.
