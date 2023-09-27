---
title: Come convertire i numeri in stringhe con Python
description: "Convertire i numeri in stringhe con Python è una delle operazioni più comuni della scrittura di un programma, eppure in alcuni casi può suscitare perplessità e incertezze."
excerpt: "Convertire i numeri in stringhe con Python è una delle operazioni più comuni della scrittura di un programma, eppure in alcuni casi può suscitare perplessità e incertezze."
date:    2018-07-03T09:19:42+01:00
lastmod: 2018-07-03T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["Python", "Programmazione", "Automazione"]
contributors: ["sebadima"]
pinned: false
homepage: false
---

<br>
<div>
  Convertire i numeri in stringhe con Python è una delle operazioni più comuni della scrittura di un programma, eppure in alcuni casi può suscitare perplessità e incertezze. Ad esempio I numeri posso essere interi o float (con virgola e numeri decimali) con diverse istruzioni per convertirli. Oggi parliamo velocemente dei più semplici, i numeri interi. <span style="font-size: 1rem;">Poichè non vengono usati quasi mai nei calcoli, ci concentriamo sul loro utiliizzo assieme alle stringhe. Le stringhe sono delle semplicissime sequenze di caratteri chiuse da delle virgolette e sono onnipresenti in tutti i linguaggi.</span>
</div>

<div class="cms mw6">
  <strong><span style="font-size: 1rem;">Per usare dei numeri interi assieme alle stringhe bisogna convertirli in formato string e questo è possibile con la funzione: </span>str()<span style="font-size: 1rem;">.</span></strong>
</div>

<div class="cms mw6">
  <h2 id="la-funzione-str">
    Convertire i numeri in stringhe con Python usando str()
  </h2>
  
  <blockquote>
    <p>
      print(str(3+1))
    </p>
  </blockquote>
  
  <h3 id="risultato-4">
    risultato = “4”.
  </h3>
  
  <p>
    In Python, per fortuna, possiamo convertire non solo i numeri interi ma anche altri tipi di dati usando <strong><code>str()</code></strong>. <strong>str()</strong> è una funzione <strong>interna</strong> del linguaggio Python e perciò si può usare senza ricorrere ad una import di libreria.
  </p>
  
  <h2 id="convertire-un-numero-intero-in-una-stringa">
    Convertire un numero intero in una stringa
  </h2>
  
  <p>
    Proviamo a convertire il numero <strong>87</strong> in una stringa: basta semplicemente preporre <strong>“str(”</strong> prima del numero e chiudere la parentesi <strong>”)”</strong> come in questo breve esempio:
  </p>
  
  <pre><code>variabile = str(87)
type(variabile)

&lt;strong>risposta: &lt;type 'str'&gt;
&lt;/strong></code></pre>
  
  <p>
    La funzione <code>type()</code> ci indica che abbiamo ottenuto correttamente un oggetto di tipo stringa.
  </p>
  
  <h2 id="come-unire-string-e-numeri-interi">
    Come unire string e numeri interi
  </h2>
  
  <p>
    Per ottenere delle frasi <em>leggibili</em> e di senso compiuto all’interno del nostro software, dobbiamo spesso mescolare numeri e parole. Non è un lavoro difficile, ma se sei all’inizio anche il prossimo breve esempio potrebbe lasciarti perplesso.
  </p>
  
  <h4 id="la-chiave-per-unire-le-stringhe-fra-loro-è-usare-l-operatore-ma-se-lo-usi-in-modo-sbagliato-avrai-questo-risultato">
    La chiave per unire le stringhe fra loro è usare l’operatore <strong>”+”</strong> ma se lo usi in modo sbagliato avrai questo risultato:
  </h4>
  
  <pre><code>porte = 4
auto = "Ford"
print("Una " +  auto + " a " + porte + " porte")

&lt;strong>**Traceback (most recent call last):
File "&lt;stdin&gt;", line 1, in &lt;module&gt;&lt;/strong>
&lt;strong>TypeError: cannot concatenate 'str' and 'int' objects**
&lt;/strong></code></pre>
  
  <p>
    Per aggiustare il codice comunque basta convertire il numero intero in una stringa usando <code>str()</code>:
  </p>
  
  <p>
    &nbsp;
  </p>
  
  <pre><code>porte = 4
auto = "Ford"
print("Una " +  auto + " a " + str(porte) + " porte")

&lt;strong>Una Ford a 4 porte
&lt;/strong></code></pre>
  
  <p>
    L’errore si nota facilmente confrontando la <strong>terza riga</strong> del primo riquadro e la <strong>terza riga</strong> del secondo. Puoi provare Python installandolo sul tuo computer, ti basta andare a <a href="https://www.python.org/download">questo</a> indirizzo.
  </p>
  
  <p>
    &nbsp;
  </p>
</div>
