---
title: Come Pilotare un motore elettrico usando Arduino
description: "Come Pilotare un motore elettrico usando Arduino."
excerpt: "Nelle applicazioni industriali della Robotica ci troviamo in genere a lavorare con dispositivi ad alto assorbimento, assai più ostici di LED o piccoli servocomandi: nulla che i delicati circuiti della microelettronica potrebbero mai pilotare. Ci servono i muscoli dei transistor di grande e media potenza come il TIP120. ... "
date:    2019-12-09T09:19:42+01:00
lastmod: 2019-12-09T09:19:42+01:0
draft: false
weight: 50
images: ["images/motore elettrcico arduino.jpg"]
categories: ["News"]
tags: ["ESP32", "centraline", "automazione"]
contributors: ["sebadima"]
pinned: false
homepage: false
---

<br>

## Come azionare Robot, servomandi e luci ad alto assorbimento usando un semplice transistor di tipo darlington, il TIP120 collegato al tuo Arduino.

<br>

Nelle applicazioni industriali della Robotica ci troviamo in genere a lavorare con dispositivi ad alto assorbimento, assai più ostici di LED o piccoli servocomandi: nulla che i delicati circuiti della microelettronica potrebbero mai pilotare. Ci servono i muscoli dei transistor di grande e media potenza come il TIP120.

Uno dei malintesi più comuni tra chi inizia con la microelettronica e i Robots è l’idea di pilotare motori elettrici, servocomandi o decine di Led usando solo le uscite di Arduino. Purtroppo tutte queste e molte altre applicazioni richiedono correnti e tensioni molto più alte di quelle disponibili su Arduino (40mA ~ 5.0V).

Solo per fare un esempio, il piccolo motore elettrico che useremo in questo progetto richiede correnti di 500mA (milliampere) per potere funzionare: pensate alla corrente che sarebbe necessaria per spostare un cancello automatico!

Detto questo, la soluzione ai problemi di corrente o tensione è davvero semplice: usare un transistor come interruttore o “switch”, e per questo compito non esiste nulla di meglio che usarne uno di tipo [Darlington][1], come ad esempio il TIP120**.

> Non appena applichiamo una piccola tensione alla Base di un transistor Darlington, il componente si attiva e permette alla corrente ad alto amperaggio di passare liberamente.

Se vuoi approfondire la differenza tra corrente e tensione ti consiglio di leggere [questo articolo][2] del blog. Usando il **TIP120** come un interruttore velocissimo, possiamo regolare la velocità del motorino usando la tecnica [Pulse Width Modulation][3] o Modulazione a larghezza di impulso se preferisci leggere la pagina di wikipedia in italiano. **Per applicare la PWM al nostro controller useremo la piccola tensione proveniente dal pin 9 di Arduino per “attivare” il Tip 120 in modo discontinuo**. Con delle pause sempre più lunghe tra un impulso e l’altro possiamo rallentare la velocità del motorino, mentre con pause ridotte a zero possiamo mandarlo al massimo.

[<img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1592550975/001/undefined_rr5hb0.png" alt="schema dei PIN del TIP120" />][4]

> La cosa che ti darà più noia nell’usare il TIP120 è vedere nello schema teorico ufficiale la “Base” al CENTRO del transistor e nel componente fisico ritrovarla piazzata a SINISTRA! Perciò pensa solo ai PIN fisici, così disposti: B &#8211; C &#8211; E

**Nel circuito useremo anche un piccolo diodo, l&#8217; N4001 destinato a proteggere il transistor dalle correnti prodotte dal motorino quando, ad esempio, lo fai girare manualmente: il diodo serve appunto come una “conduttore a senso unico” e impedirà alle correnti parassite o in “reverse” di danneggiare il TIP120**.

Ho scelto il terminale 9 di Arduino non a caso ma perchè facilissimo da inviduare sulla scheda: se guardi altri progetti vedrai come in molti abbiano fatto la stessa scelta **ma non per esigenze tecniche**, ma solo perchè è estremamente comodo.

### Le parti richieste {#le-parti-richieste}

Ecco una lista delle cose che ti serviranno:

### Lo schema {#lo-schema}

Segui attentamente la disposizione dei connettori, studia la foto e potrai collegare Il **TIP120** al tuo Arduino in pochi minuti.

[<img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1592559023/001/screenshot-3_xzszcr.png" alt="schema del driver per motore elettrico con TIP120 pr Arduino" />][5]

###  {#e-infine-il-codice-completo}

* * *

<pre class="prettyprint" style="border: 1px solid #d6d4d4;">Breadboard     Arduino
  -  VCC            &lt;------&gt;  5V
  -  base Tip 120   &lt;------&gt;  Pin 9
  -  GND            &lt;------&gt;  GND
</pre>

&nbsp;

### e infine Il codice completo… {#e-infine-il-codice-completo}

  
[<img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1592550379/001/image_exus0r.png" alt="programma driver per motore elettrico" />][6]

Schermata del programma caricato sull'IDE di Arduino del mio Pc con Windows 10. (clicca sulla foto per ingrandire) Questo post è stato scritto usando Windows 10. In genere utilizzo solo Linux nei miei progetti per un motivi semplicissimo: se devo programmare delle schede di tipo Raspberry o  delle potenti CPU BeagleBone non è possibile installarci Windows neppure in linea di principio. Per questo motivo ti consiglio di installare subito Linux Debian o Ubuntu 18.04 (il mio preferito), non fosse altro che per conoscere il terminale a “Linea di Comando”.

In questo progetto “statico” dove la logica di comando sta tutta su Arduino senza CPU esterne, usare Windows o Linux non comportava alcuna differenza, ma in altri progetti del Blog useremo solo Linux.

 [1]: https://en.wikipedia.org/wiki/Darlington_transistor
 [2]: https://www.robotdazero.it/blog/007-la-differenza-tra-corrente-e-tensione/
 [3]: https://en.wikipedia.org/wiki/Pulse-width_modulation
 [4]: https://res.cloudinary.com/sebadima/image/upload/v1592550975/001/undefined_rr5hb0.png
 [5]: https://res.cloudinary.com/sebadima/image/upload/v1592559023/001/screenshot-3_xzszcr.png
 [6]: https://res.cloudinary.com/sebadima/image/upload/v1592550379/001/image_exus0r.png
