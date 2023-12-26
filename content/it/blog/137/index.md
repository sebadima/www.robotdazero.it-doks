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


## Arduino e i dispostivi ad alto assorbimento

In molte applicazioni della Robotica ci troveemo ad usare dispositivi ad alto assorbimento, che richiedono correnti che i nostri controller possano pilotare. In questi casi, prima di passare ai relay dedicati potremo usare un transistor di media potenza come il TIP120.

<br>

> Uno dei malintesi più comuni tra chi inizia con la microelettronica è l’idea di pilotare motori elettrici, servocomandi o decine di Led usando solo le uscite di Arduino. Purtroppo questi e svariati altri dispositivi richiedono correnti e tensioni molto più alte di quelle erogabili da Arduino (40mA ~ 5.0V).

##### Solo per fare un esempio, il piccolo motore elettrico che useremo in questo progetto richiede correnti di 500mA (milliampere) per potere funzionare: pensate alla corrente che sarebbe necessaria per spostare un cancello automatico!

Detto questo, la soluzione ai problemi di corrente o tensione è davvero semplice: usare un transistor come interruttore o “switch”, e per questo compito non esiste nulla di meglio che usarne uno di tipo <a  target="_blank" href="https://it.wikipedia.org/wiki/Transistor_Darlington">Darlington</a> come ad esempio il TIP120.

<br>

> Non appena applichiamo una piccola tensione alla base di un transistor Darlington, il componente si attiva e permette alla corrente ad alto amperaggio di passare liberamente.

##### Se vuoi approfondire la differenza tra corrente e tensione ti consiglio di leggere questo [articolo](https://www.robotdazero.it/blog/la-differenza-tra-corrente-e-tensione) del blog.

Usando il **TIP120** come un interruttore velocissimo, possiamo regolare la velocità del motorino usando la tecnica <a  target="_blank" href = "https://it.wikipedia.org/wiki/Modulazione_di_larghezza_d%27impulso">PWM </a> o Modulazione a larghezza di impulso. Per applicare la PWM al nostro controller useremo la piccola tensione proveniente dal pin 9 di Arduino per attivare il Tip 120 in modo discontinuo. Con delle pause sempre più lunghe tra un impulso e l’altro possiamo rallentare la velocità del motorino, mentre con pause ridotte a zero possiamo mandarlo al massimo.

<br>

<img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1592550975/001/undefined_rr5hb0.png" alt="schema dei PIN del TIP120" />

<br>
<br>

> La cosa che ti darà più noia nell’usare il TIP120 è vedere nello schema teorico ufficiale la **base** al centro del transistor e nel componente fisico ritrovarla piazzata a sinistra! Perciò pensa solo ai PIN fisici, così disposti: B - C - E.

<br>

Nel circuito useremo anche un piccolo diodo, l'<a  target="_blank" href="https://en.wikipedia.org/wiki/1N400x_rectifier_diode">N4001</a> destinato a proteggere il transistor dalle correnti prodotte dal motorino quando, ad esempio, lo fai girare manualmente: il diodo serve appunto come una “conduttore a senso unico” e impedirà alle correnti parassite o in “reverse” di danneggiare il TIP120.

<div class="alert alert-doks d-flexflex-shrink-1" role="alert"> 👋
Il <a href="https://en.wikipedia.org/wiki/1N400x_rectifier_diode" target="_blank">diodo N4001</a> è un diodo di tipo NPN, con una tensione di soglia di circa 0,7 V. Questo significa che, se la tensione applicata al diodo è inferiore a 0,7 V, il diodo non condurrà corrente.
Se la tensione applicata al diodo è superiore a 0,7 V, il diodo inizierà a condurre corrente. La corrente che fluisce attraverso il diodo è proporzionale alla differenza di tensione tra le due estremità del diodo.
</div>

<br>

### Come proteggere un circuito dalle tensioni parassite

Se un circuito è alimentato da una batteria, è possibile utilizzare un diodo N4001 per proteggere il circuito dalla tensione inversa della batteria. La batteria ha una tensione inversa di circa 2 V. Se la tensione inversa della batteria supera la tensione di soglia del diodo N4001, il diodo inizierà a condurre corrente. Questa corrente limiterà la tensione inversa applicata al circuito, proteggendolo da danni.

> Un altro modo per utilizzare un diodo N4001 per proteggere un circuito è di collegarlo in parallelo al circuito. In questo modo, il diodo si accenderà in caso di sovraccarico del circuito. Il sovraccarico può essere causato da un aumento della corrente o della tensione applicata al circuito.
Quando il diodo si accende, limita la corrente che fluisce attraverso il circuito, proteggendolo da danni.


<br>
Ecco altri esempi specifici di come può essere utilizzato un diodo N4001 per proteggere un circuito:

- Protezione da tensione inversa: un diodo N4001 può essere utilizzato per proteggere un circuito alimentato da una batteria dalla tensione inversa della batteria.
- Protezione da sovraccarico di corrente: un diodo N4001 può essere utilizzato per proteggere un circuito da un sovraccarico di corrente.
- Protezione da sovraccarico di tensione: un diodo N4001 può essere utilizzato per proteggere un circuito da un sovraccarico di tensione.



##### Puoi scegliere il terminale 9 di Arduino perchè facilissimo da inviduare sulla scheda: se guardi altri progetti vedrai come molti abbiano fatto la stessa scelta. Non per esigenze tecniche dunque, ma solo per comodità.

### Lo schema

Segui attentamente la disposizione dei connettori, studia la foto e potrai collegare Il **TIP120** al tuo Arduino in pochi minuti.

<img decoding="async" src="https://res.cloudinary.com/sebadima/image/upload/v1592559023/001/screenshot-3_xzszcr.png" alt="schema del driver per motore elettrico con TIP120 per Arduino"/>

<br>
<br>

#### La tabella delle connessioni:
<pre class="prettyprint" style="border: 1px solid #d6d4d4;">     

  Breadboard               Arduino
  -  VCC            &lt;------&gt;  5V
  -  base Tip 120   &lt;------&gt;  Pin 9
  -  GND            &lt;------&gt;  GND
<br>
</pre>

### Il codice completo:

```bash
int pinMotorino = 9;

void setup() {
  Serial.begin(9600);
  pinMode(pinMotorino, OUTPUT);  
}

void loop() {
  Serial.print("LOOP\n");
    // accelerazione progressiva del motore
    for(int x = 0; x <= 255; x++)
      analogWrite(pinMotorino, x); 
      delay(20); 
    }    
  delay(1);
}
```

Fai copia e incolla nell'IDE di Arduino e quindi compila e fai l'upload programma. Dopo il reset dovresti sentire il motorino accellerare e rallentare ciclicamente...
<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it -  post - R.137.2.1.0</p>  