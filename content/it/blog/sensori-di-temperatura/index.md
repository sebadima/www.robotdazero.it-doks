---
title: "I sensori di temperatura per la robotica"
description: "I sensori di temperatura per la robotica"
excerpt: "Leggere la temperatura con Arduino è un compito facile e utilissimo. Esiste in commercio a poco prezzo un varietà di sensori di temperatura con delle caratteristiche spesso molto diverse e applicazioni sorprendenti. Nel post vi vogliamo presentare quelli che abbiamo usato personalmente e usiamo tuttora nelle installazioni più facili e redditizie.."
date: 2020-11-04T09:19:42+01:00
lastmod: 2023-07-14T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpg"]
categories: ["News"]
tags: ["sensori", "arduino", "automazione", "elettronica", "esp32"]
contributors: ["sebadima"]
pinned: false
homepage: false
mermaid: true
---

<style>
.x {
    transition:transform 0.50s ease;
}

.x:hover {
    -webkit-transform:scale(1.75); /* or some other value */
    transform:scale(1.75);
}
</style>










## Gli 8 sensori di temperatura che dovresti immediatamente usare nei tuoi apparati di controllo.

_Arduino con l’aggiunta di un singolo sensore che vi presentiamo in questo post può diventare una stazione di controllo allo stato dell’arte, rivendibile e installabile con profitto anche se siete solo dei principianti._

Leggere la temperatura con Arduino è un compito facile e utilissimo. Esiste in commercio a poco prezzo un varietà di sensori di temperatura con delle caratteristiche spesso molto diverse e applicazioni sorprendenti. Nel post vi vogliamo presentare quelli che abbiamo usato personalmente e usiamo tuttora nelle installazioni più facili e redditizie: il **controllo della temperatura nelle celle frigorifere e nei laboratori lattiero-casieari**. Il costo dei componenti è come sempre basso e il prezzo cui potrete vendere la installazione completa (con allarme via email o Telegram) è davvero interessante.


## **1. DHT11** {#1-dht11}

<img class="x figure-img img-fluid lazyload blur-up" width="180" alt="sensore di temperatura DHT11" src="images/sensore di temperatura DHT11.jpg">

<br>
<br>

Il **DHT11** è un sensore che misura sia temperatura che umidità relativa. Contiene un chip che converte il segnale analogico in digitale e invia in binario i valori ai pin di Arduino o Raspberry. In questo modo vi evita le conversione che sono necessarie ad esempio nei sensori ad ultrasuoni, come spiegato in questo nostro <a href="https://www.robotdazero.it/blog/011-usare-gli-ultrasuoni-per-dirigere-il-tuo-robot/" target="_blank" rel="noopener">post sul sensore HC-SR04</a>.

Questa la tabella delle specifiche del sensore:

|                                 | **DHT11**                                                                                                                                                                                                                                |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Protocollo di Comunicazione** | one wire (a filo singolo)                                                                                                                                                                                                                |
| **Alimentazione**               | da 3 a 5.5 V                                                                                                                                                                                                                             |
| **Temperature misurabili**      | da 0º a 50 ºC +/-2 ºC                                                                                                                                                                                                                    |
| **Range Umidità**               | dal 20 al 90% +/-5%                                                                                                                                                                                                                      |
| **Frequenza campionamento**     | 1 secondo                                                                                                                                                                                                                                |
| **Librerie Arduino**            | <a href="https://github.com/adafruit/DHT-sensor-library" target="_blank" rel="noopener">Adafruit DHT Library</a><a href="https://github.com/adafruit/Adafruit_Sensor" target="_blank" rel="noopener">Adafruit Unified Sensor Library</a> |
| **Dove acquistarlo?**           | <a href="https://www.amazon.it/s?k=DHT11&__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss_2" target="_blank" rel="noopener">Controlla i prezzi su Amazon</a>                                                            |
|                                 |                                                                                                                                                                                                                                          |
|                                 |                                                                                                                                                                                                                                          |

## **2. DHT22** {#2-dht22}

<img class="x figure-img img-fluid lazyload blur-up" width="180" alt="sensore di temperatura DHT22" src="images/sensore di temperatura DHT22.jpg">

<br>
<br>

Il sensore **DHT22** è (chiaramente) molto simile al DHT11. Misura temperatura e umidità come il gemello ma è molto più preciso e permette di registrare anche le temperature al di sotto dello zero (-40 ºC) e per questo lo usiamo di routine per il controllo delle celle frigorifere – automezzi compresi.

Il prezzo è di poco superiore al DHT11 ma questo per voi non deve essere mai un problema: la qualità è superiore e il maggior prezzo che riuscirete a spuntare nei vostri lavori ripagherà il maggior costo.

Questa la tabella delle specifiche del sensore:

|                                   | **DHT22**                                                                                                                                                                                                                                    |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Protocollo di comunicazione  ** | one wire (filo singolo)                                                                                                                                                                                                                      |
| **Range di alimentazione**        | da 3 a 6 V                                                                                                                                                                                                                                   |
| **Temperatura misurabile**        | da -40º a 80 ºC +/-0.5ºC                                                                                                                                                                                                                     |
| **Umidità misurabile**            | da 0 al 100% +/-2%                                                                                                                                                                                                                           |
| **Campionamento**                 | ogni 2 secondi                                                                                                                                                                                                                               |
| **Librerie software per Arduino** | <a href="https://github.com/adafruit/DHT-sensor-library" target="_blank" rel="noopener">Adafruit DHT Library</a><a href="https://github.com/adafruit/Adafruit_Sensor" target="_blank" rel="noopener">Adafruit Unified Sensor Library</a>     |
| **Dove acquistarlo?**             | <a href="https://www.amazon.it/s?k=dht22+arduino&__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2H1NHQ8KVG42X&sprefix=dht22%2Caps%2C206&ref=nb_sb_ss_i_3_5" target="_blank" rel="noopener">Controlla i prezzi su Amazon</a> |

&nbsp;

## **3. LM35DZ** {#3-lm35dz}
<br>
<img class="x figure-img img-fluid lazyload blur-up" width="180" alt="sensore di temperatura LM35" src="images/sensore di temperatura LM35.jpg">

<br>
<br>

L’ **LM35DZ** è un sensore di temperatura a rilevazione lineare calibrato in gradi Celsius. L’uscita è analogica ed è direttamente proporzionale alla temperatura: 10 mV per aumento o diminuzione di temperatura. State attenti a comprare esattamente questo sensore con la sigla che finisce in DZ: esistono altre due versioni del chip (si chiamano **LM335** e **LM34**) calibrate in gradi Kelvin e in gradi Fahrenheit.

> Evitate di complicarvi la vita e e comprate solo la versione DZ, i prezzi sono identici!

E ora la solita tabella, fate attenzione all ottima precisione:

|                                 | **LM35DZ**                                                                                                                                                                     |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Protocollo di comunicazione** | uscita analogica                                                                                                                                                               |
| **Range di alimentazione**      | da 4 a 30 V                                                                                                                                                                    |
| **Temperatura misurabile**      | da -55º a 150ºC                                                                                                                                                                |
| **Precisione**                  | +/-0.3ºC (a 25ºC)                                                                                                                                                              |
| **lettura da Arduino**          | con istruzioni del tipo: **analogRead()**                                                                                                                                      |
| **Dove acquistarlo?**           | <a href="https://www.amazon.it/s?k=LM35DZ&__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss_2" target="_blank" rel="noopener">controlla i prezzi su Amazon</a> |

&nbsp;

## **4. BMP180** {#4-bmp180}

<img class="x figure-img img-fluid lazyload blur-up" width="180" alt="sensore di temperatura BMP180" src="images/sensore di temperatura BMP180.jpg">

<br>
<br>

Il **BMP180** viene presentato soprattutto come sensore barometrico, ma è anche un sensore di temperatura e quindo molto comodo per controllare le condizioni atmosferiche. Con un sensore di umidità atmosferica può diventare una centralina di rilevamento a basso costo e dalla buona precisione. Un sensore da provare il prima possibile.

Questa la tabella delle specifiche del sensore:

|                                 | **BMP180**                                                                                                                                                                   |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Protocollo di comunicazione** | uscita analogica                                                                                                                                                             |
| **Range di alimentazione**      | da 1.8 a 3.6 V                                                                                                                                                               |
| **Temperatura misurabile**      | da 0º a 65ºC                                                                                                                                                                 |
| **Precisione**                  | +/-0.5ºC (a 25ºC)                                                                                                                                                            |
|                                 |                                                                                                                                                                              |
| **Dove acquistarlo?**           | <a href="https://www.amazon.it/s?k=BMP180&__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss" target="_blank" rel="noopener">controlla i prezzi su Amazon</a> |

## **5. TMP36** {#5-tmp36}

<img class="x figure-img img-fluid lazyload blur-up" width="180" alt="sensore di temperatura TMP36" src="images/sensore di temperatura TMP36.jpg">

<br>
<br>

Il **TMP36** è un sensore di temperatura analogico piuttosto affidabile e robusto. Come per gli altri sensori analogici restituisce una tensione proporzionale alla temperatura rilevata. E’ perciò molto simile al **LM35DZ** di cui abbiamo parlato prima.

Questa la tabella delle specifiche del sensore:

|                                 | **TMP36**                                 |
| ------------------------------- | ----------------------------------------- |
| **Protocollo di comunicazione** | uscita analogica                          |
| **Range di alimentazione**      | da 2.7 a 5.5 V                            |
| **Temperatura misurabile**      | -40ºC to +125ºC                           |
| **Precisione**                  | +/-1.0ºC (a 25ºC)                         |
| **lettura da Arduino**          | con istruzioni del tipo: **analogRead()** |

**Dove acquistarlo?**                    <a href="https://www.amazon.it/s?k=tmp36+sensore+temperatura&__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=F5Y9UXKB5SSP&sprefix=tmp36%2Caps%2C206&ref=nb_sb_ss_i_3_5" target="_blank" rel="noopener">controlla i prezzi su Amazon</a>

&nbsp;

## **6. LM75** {#6-lm75}

<img class="x figure-img img-fluid lazyload blur-up" width="180" alt="sensore di temperatura LM75" src="images/sensore di temperatura LM75.jpg">

<br>
<br>

L’ **LM75** è un altro utilissimo sensore di temperaura. Funziona usando la comunicazione I2C, cioè comunica con Arduino usando i pin SDA e SCL e soprattutto ha un costo bassissimo che gli permette di essere esposto a temperature molto pericolose (125ºC) senza troppe ansie: costa appena 2€!

Questa la tabella delle specifiche del sensore:

|                                 | **LM75**                                                                                                                                                                                       |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Protocollo di comunicazione** | I2C                                                                                                                                                                                            |
| **Range di alimentazione**      | da 3.0 a 5.5V                                                                                                                                                                                  |
| **Temperatura misurabile**      | da -55ºC a 125ºC                                                                                                                                                                               |
| **Precisione**                  | +/-2.0ºC (at -55 to 125ºC range))                                                                                                                                                              |
| **Librerie per Arduino**        | <a href="https://www.arduinolibraries.info/libraries/i2-c-temperature-sensors-derived-from-the-lm75" target="_blank" rel="noopener">Librerie I2C per LM75</a>                                  |
| **Dove acquistarlo**            | <a href="https://www.amazon.it/s?k=lm75+sensore+temperatura&__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss" target="_blank" rel="noopener">controlla i prezzi su Amazon</a> |
|                                 |                                                                                                                                                                                                |

## **7. DS18B20** {#7-ds18b20}

<img class="x figure-img img-fluid lazyload blur-up" width="180" alt="sensore di temperatura DS18B20" src="images/sensore di temperatura DS18B20.png">

<br>
<br>

Il chip **DS18B20** è un sensore di temperatura del tipo “one-wire” come il DHT11 che abbiamo visto all’inizio del post. Perciò necessita di una linea dati con tensione positiva e di una massa (GND) per comunicare con Arduino. Con il DS18B20 è estremamente facile leggere la temperatura in punti multipli perchè ognuno di questi sensori possiede un codice numerico univoco (un pò come il codice IMEI degli smartphone) e basta collegarli ai pin digitali di arduino e leggere in sequenza tutti i sensori collegati.

Questa la tabella delle specifiche del sensore:

|                                 | **DS18B20**                                                                                                                                                                                                                     |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Protocollo di comunicazione** |   a filo singolo                                                                                                                                                                                                                |
| **Range di alimentazione**      |  da 3.0 a 5.5V                                                                                                                                                                                                                  |
| **Temperatura misurabile**      |  da -55ºC to +125ºC                                                                                                                                                                                                             |
| **Precisione**                  | +/-0.5 ºC (nell’intervallo -10ºC ~ 85ºC)                                                                                                                                                                                        |
| **Librerie Arduino**            | <a href="https://github.com/milesburton/Arduino-Temperature-Control-Library" target="_blank" rel="noopener">DallasTemperature</a><a href="https://github.com/PaulStoffregen/OneWire" target="_blank" rel="noopener">OneWire</a> |
| **Dove acquistarlo?**           | <a href="https://www.amazon.it/s?k=DS18B20+sensore+temperatura&__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&ref=nb_sb_noss" target="_blank" rel="noopener">Controlla i prezzi su Amazon</a>                               |
|                                 |                                                                                                                                                                                                                                 |

## **8. DS18B20 tenuta stagna** {#8-ds18b20-tenuta-stagna}

<img class="x figure-img img-fluid lazyload blur-up" width="180" alt="sensore di temperatura DS18B20 impermeabile" src="images/sensore di temperatura DS18B20 impermeabile.jpg">

<br>
<br>

Il DS18B20 è disponibile anche in versione impermeabile (a tenuta stagna) e questo gli permette di controllare la temperatura dei liquidi nello stesso range della versione “normale”.
