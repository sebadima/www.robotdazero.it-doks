---
title: Come pilotare un motore elettrico usando Arduino
description: "Come Pilotare un motore elettrico usando Arduino."
excerpt: "Nelle applicazioni industriali della Robotica ci troviamo in genere a lavorare con dispositivi ad alto assorbimento, assai più ostici di LED o piccoli servocomandi: nulla che i delicati circuiti della microelettronica potrebbero mai pilotare. Ci servono i muscoli dei transistor di grande e media potenza come il TIP120.. "
date:    2018-06-15T09:19:42+01:00
lastmod: 2018-06-15T09:19:42+01:0
draft: false
weight: 50
images: ["images/motore elettrico arduino.jpg"]
categories: ["News"]
tags: ["motori", "arduino", "automazione"]
contributors: ["sergio rame"]
pinned: false
homepage: false
---

### Come azionare Robot, servomandi e luci ad alto assorbimento usando un semplice transistor di tipo darlington, il TIP120 collegato al tuo Arduino.

<br>
<br>

**Nelle** applicazioni industriali della Robotica ci troviamo in genere a lavorare con dispositivi ad alto assorbimento, assai più ostici di LED o piccoli servocomandi: nulla che i delicati circuiti della microelettronica potrebbero mai pilotare. Ci servono i muscoli dei transistor di grande e media potenza come il TIP120.

> Uno dei malintesi più comuni tra chi inizia con la microelettronica è l’idea di pilotare motori elettrici, servocomandi o decine di Led usando solo le uscite di Arduino. Purtroppo tutte queste e molte altre applicazioni richiedono correnti e tensioni molto più alte di quelle disponibili su Arduino (40mA ~ 5.0V).

Solo per fare un esempio, il piccolo motore elettrico che useremo in questo progetto richiede correnti di 500mA (milliampere) per potere funzionare: pensate alla corrente che sarebbe necessaria per spostare un cancello automatico!

Detto questo, la soluzione ai problemi di corrente o tensione è davvero semplice: usare un transistor come interruttore o “switch”, e per questo compito non esiste nulla di meglio che usarne uno di tipo <a href="https://it.wikipedia.org/wiki/Transistor_Darlington">Darlington</a> come ad esempio il TIP120.
<br>

> Non appena applichiamo una piccola tensione alla base di un transistor Darlington, il componente si attiva e permette alla corrente ad alto amperaggio di passare liberamente.

<br>

**Se vuoi approfondire la differenza tra corrente e tensione ti consiglio di leggere questo [articolo](https://www.robotdazero.it/blog/la-differenza-tra-corrente-e-tensione) del blog.**

Usando il **TIP120** come un interruttore velocissimo, possiamo regolare la velocità del motorino usando la tecnica <a href = "https://it.wikipedia.org/wiki/Modulazione_di_larghezza_d%27impulso">PWM </a> o Modulazione a larghezza di impulso. Per applicare la PWM al nostro controller useremo la piccola tensione proveniente dal pin 9 di Arduino per attivare il Tip 120 in modo discontinuo. Con delle pause sempre più lunghe tra un impulso e l’altro possiamo rallentare la velocità del motorino, mentre con pause ridotte a zero possiamo mandarlo al massimo.

<br>

<img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1592550975/001/undefined_rr5hb0.png" alt="schema dei PIN del TIP120" />

<br>
<br>

> La cosa che ti darà più noia nell’usare il TIP120 è vedere nello schema teorico ufficiale la **base** al centro del transistor e nel componente fisico ritrovarla piazzata a sinistra! Perciò pensa solo ai PIN fisici, così disposti: B - C - E.

<br>

Nel circuito useremo anche un piccolo diodo, l'<a href="https://en.wikipedia.org/wiki/1N400x_rectifier_diode">N4001</a> destinato a proteggere il transistor dalle correnti prodotte dal motorino quando, ad esempio, lo fai girare manualmente: il diodo serve appunto come una “conduttore a senso unico” e impedirà alle correnti parassite o in “reverse” di danneggiare il TIP120.

##### Ho scelto il terminale 9 di Arduino non a caso ma perchè facilissimo da inviduare sulla scheda: se guardi altri progetti vedrai come molti abbiano fatto la stessa scelta. Non per esigenze tecniche dunque, ma solo per comodità.

### Lo schema grafico {#lo-schema}

Segui attentamente la disposizione dei connettori, studia la foto e potrai collegare Il **TIP120** al tuo Arduino in pochi minuti.

<img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1592559023/001/screenshot-3_xzszcr.png" alt="schema del driver per motore elettrico con TIP120 per Arduino"/>

<br>
<br>

#### tabella delle connessioni:
<pre class="prettyprint" style="border: 2px solid #d6d4d4;">     Breadboard               Arduino
  -  VCC            &lt;------&gt;  5V
  -  base Tip 120   &lt;------&gt;  Pin 9
  -  GND            &lt;------&gt;  GND
</pre>

&nbsp;

#### e infine Il codice completo… {#e-infine-il-codice-completo}

<pre>
/* 
  Driver per motore elettrico brushed
  - pin 9 di Arduino collegato alla base del TIP120
*/
int pinMotorino = 9;

void setup() {
  Serial.begin(9600);
  pinMode(pinMotorino, OUTPUT);  
}

void loop() {
  Serial.print("LOOP\n");
    // accelerazione progressiva del motore
    for(int x = 0; x <= 255; x++)
      analogWrite(pinMotorino, x); delay(10); 
      delay(10);
    }    
  delay(1);
}

</pre>

Questo post è stato scritto usando Windows 10. In genere utilizzo solo Linux nei miei progetti per un motivi semplicissimo: se devo programmare delle schede di tipo Raspberry o  delle potenti CPU BeagleBone non è possibile installarci Windows neppure in linea di principio. 
Per questo motivo ti consiglio di installare subito Linux Debian o Ubuntu 22.04 se non altro che per conoscere il terminale a “Linea di Comando”.
