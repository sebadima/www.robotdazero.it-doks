---
title:       "xxx"
description: "xxx"
excerpt:     "L'esempio fornito da Espressif per il Provisioning delle password Wi-FI con Bluetooth pare non funzionare correttamente su Platformio nella ultima release delle librerie. Vediamo come correggere velocemente questo errore ..."

date:    2024-09-08T09:19:42+01:00
lastmod: 2024-09-08T09:19:42+01:00
draft:   true
weight:  50

images:       ["header.webp"]
categories:   ["News"]
tags:         ["MAC", "Bluetooth", "programmazione", "ESP32"]
contributors: ["sebadima"]

pinned:   false
homepage: false
mermaid:  false
---

<style>

img {
  border: 2px solid #AAA;
}
</style>


# Preventivo programma "Gestione Commesse"


## Descrizione sintetica del Programma preesistente

Tabelle Archivi Principali:
1. Archivio Clienti
2. Archivio Fornitori
3. Archivio Risorse interne
4. Archivio Consulenti esterni
5. Archivio Commesse
6. Archivio Documenti
7. Tabella accessorie 

Movimenti per commessa
1. Controllo SAL
2. Emissione SAL
3. Emissione fatture
4. Incasso fatture
5. Acquisti beni materiali
6. Acquisti di consulenze
7. Acquisizione Contratti
8. Assegnazione risorse
9. Ore di lavoro Risorse
10. Numero d'ordine
11. Item della lavorazione
12. Descrizione della lavorazione

Report della procedura
1. Commesse Aperte
2. Stato Ordini
3. Scadenze Pagamenti Clienti 
4. Documenti Emesse
5. "Sal" e Pagamenti
6. Contabilità per Commessa
7. Scadenze Aperte per Fornitore
8. Riepilogo Preventivi Aperti
9. Report Ore Mensili per Dipendenti - valido per il consulente del lavoro

### Plus della Procedura


- Gestione personalizzata dei Menu, separati per tre livelli di sicurezza,
- Funzionamento già sperimentato con RDS (Accesso Remoto) con Windows server,
- Procedura molto leggera, installabile su PC a di prestazioni modeste,
- Possibilità di migrare gli archivi verso MS SQL server in caso di utilizzo massivo,
- Scritto in "Visual Basic" con Maschere in Access 2019: Tutti gli archivi sono esportabili verso Excel per successive elaborazioni tipo tabelle Pivot etc.

<br>
<br>

### Analisi della Aggiunte e delle Modifiche alla Procedura Preesistente

Sulla base dei Vs flussi di lavoro come specificati dai seguenti documenti Utip:
- Analisi dei dati (tipico)
- Registro Proposal (tipico)
- SAC (tipico)
- Specifiche software di gestione commesse
- UTIP Gest (tipico)

e sulla base del colloquio informale prezzo Vs sede, ritengo siano da implementare i seguenti punti:

- Flag per identificare se la commessa è una “PS-47”
- Possibilità di caricare il file pdf dell’ordine
- Eventuale numero di contratto quadro
- Possibilità di indicare la percentuale di smart-working per ogni disciplina
- Compilazione automatica del modulo “SAC
- Compilazione automatica di n.2 mail da inviare all’apertura di nuove commesse
- Compilazione “Analisi dei dati” necessaria per il Sistema di Gestione Qualità
- Interrogazione sul “maturato” della commessa: ore x costo orario (diverso per dipendenti)

## Preventivo Costi

La implementazione delle modifiche precedenti non comporta tempi di realizzazione elevati, tranne nel caso della Reportistica per la Qualità che è totalmente assente e verrà aggiunta sulla base delle vostre specifiche.

Per la Fornitura di 

1. Concessione in licenza della ns 
2. Implementazione delle modifiche











### Screenshots della Procedura

Menu iniziale della procedura
<img src="images/101.jpg" alt="Flowers in Chania">
<br>
<br>

Maschera "Gestione Commesse"
<img src="images/102.jpg" alt="Flowers in Chania">
<br>
<br>

Maschera "Inserimento Anagrafiche Partners"
<img src="images/103.jpg" alt="Flowers in Chania">
<br>
<br>

Maschera "Inserimento Ore"
<img src="images/104.jpg" alt="Flowers in Chania">
<br>
<br>

Maschera "Inserimento Ordini a Fornitori"
<img src="images/105.jpg" alt="Flowers in Chania">
<br>
<br>

Maschera "Inserimento Ordini a Clienti"
<img src="images/106.jpg" alt="Flowers in Chania">
<br>
<br>

Maschera "Inserimento Ore Dipendenti"
<img src="images/107.jpg" alt="Flowers in Chania">
<br>
<br>


Report "Commesse Aperte"
<img src="images/109.jpg" alt="Flowers in Chania">
<br>
<br>


Report "Stato Ordini"
<img src="images/111.jpg" alt="Flowers in Chania">
<br>
<br>

Maschera "Anagrafica Dipendente"
<img src="images/112.jpg" alt="Flowers in Chania">
<br>
<br>

Maschara per la "Gestione di Account e Password"
<img src="images/113.jpg" alt="Flowers in Chania">
<br>
<br>

Report "Scadenza Pagamento Clienti"
<img src="images/114.jpg" alt="Flowers in Chania">
<br>
<br>

Report "Documenti Emessi" in stile excel
<img src="images/115.jpg" alt="Flowers in Chania">
<br>
<br>

Maschera "Gestione Documenti"
<img src="images/116.jpg" alt="Flowers in Chania">
<br>
<br>

Menu di secondo livello della Procedura
<img src="images/117.jpg" alt="Flowers in Chania">
<br>
<br>

Report "Sal e Pagamenti" stile Excel 
<img src="images/118.jpg" alt="Flowers in Chania">
<br>
<br>

Report Analitico "Contabilità per Singola Commessa"
<img src="images/119.jpg" alt="Flowers in Chania">
<br>
<br>


Report "Scadenze Aperte per Fornitore"
<img src="images/120.jpg" alt="Flowers in Chania">
<br>
<br>

Maschera "Gestione Analitica delle Attività"
<img src="images/122.jpg" alt="Flowers in Chania">
<br>
<br>




Report "Riepilogo Preventivi Aperti"
<img src="images/123.jpg" alt="Flowers in Chania">
<br>
<br>

Esempio di Menu Limitato per "Funzionario Intermedio"
<img src="images/124.jpg" alt="Flowers in Chania">
<br>
<br>




Parte superiore del Report "Ore Mensili per Dipendente"
<img src="images/2001.jpeg" alt="Flowers in Chania">
<br>
<br>

Parte inferiore del Report "Ore Mensili per Dipendente"
<img src="images/2002.jpeg" alt="Flowers in Chania">
<br>
<br>



## Descrizione generale


<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.163.0.5.0</p>
