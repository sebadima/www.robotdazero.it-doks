---
title: "Quick Start"
description: "Come iniziare velocemente con la nostra piattaforma in Machine Learning Kaspian."
lead: "Come iniziare velocemente con la nostra piattaforma in ML/AI Kaspian"
date: 2020-11-16T13:59:39+01:00
lastmod: 2020-11-16T13:59:39+01:00
draft: false
images: []
menu:
  docs:
    parent: "prologue"
weight: 110
toc: true
---

## Cosa serve prima di iniziare

- Server Linux ospitato su Linode, Digital Ocean, Amazon AWS o simili
- Coppia di chiavi SSH per accedere a Github dal terminale di Linux
- [Git](https://git-scm.com/) installato sul server Linux 
- Account attivo su [Github](https://www.github.com/)

{{< details "Perchè usare GIT?" >}}
<a href="https://www.robotdazero.it/blog/perch%C3%A8-usare-il-programma-git/" target="_blank" rel="noopener">Git</a> è il software più usato per il controllo e il download dei programmi in versione sorgente. Github e Gitlab prendono il nome da questo tool, in alternativa poreste usare  il comando <a href="https://en.wikipedia.org/wiki/Wget" target="_blank" rel="noopener">wget</a> per scaricare i file zippati da Terminale.
{{< /details >}}


## Come installare la nostra piattaforma sul vostro server Linux

Kaspian funziona con la tecnologia a microkernel e si appoggia a docker e docker-compose: è necessario installare entrambi i tools per poi lanciare le routine di build

### Come installare Docker e docker-compose

```bash
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common`
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

```bash
sudo apt update
apt-cache policy docker-ce
mkdir -p ~/.docker/cli-plugins/
curl -SL https://github.com/docker/compose/releases/download/v2.3.3/docker-compose-linux-x86_64 -o ~/.docker/cli-plugins/docker-composee
```

```bash
$ chmod +x ~/.docker/cli-plugins/docker-compose
$ curl -SL https://github.com/docker/compose/releases/download/v2.3.3/docker-compose-linux-x86_64 -o ~/.docker/cli-plugins/docker-composee
```
Infine si deve installare il pacchetto di Docker

```bash
$ sudo apt install docker-ce
```

Docker adesso dovrebbe essere installato con il daemon attivo e settato per ripartire in automatico dopo ogni reboot. Per controllare basta eseguire: 

```bash
$ sudo systemctl status docker
```

e dovrebbe apparire un output del tipo 👉

```bash

docker.service - Docker Application Container Engine
     Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
     Active: active (running) since Tue 2023-07-04 09:51:25 UTC; 1 weeks 0 days ago
TriggeredBy: ● docker.socket
       Docs: https://docs.docker.com
   Main PID: 747 (dockerd)
      Tasks: 92
     Memory: 84.9M
     CGroup: /system.slice/docker.service
             ├─   747 /usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock
             ├─  1018 /usr/bin/docker-proxy -proto tcp -host-ip 0.0.0.0 -host-port 9000 -container-ip 172.19.0.2 -container-port 9000
             ├─  1022 /usr/bin/docker-proxy -proto tcp -host-ip :: -host-port 9000 -container-ip 172.19.0.2 -container-port 9000
             ├─  1079 /usr/bin/docker-proxy -proto tcp -host-ip 0.0.0.0 -host-port 8004 -container-ip 172.19.0.2 -container-port 8004
             ├─  1091 /usr/bin/docker-proxy -proto tcp -host-ip :: -host-port 8004 -container-ip 172.19.0.2 -container-port 8004
             ├─  8370 /usr/bin/docker-proxy -proto tcp -host-ip 0.0.0.0 -host-port 443 -container-ip 172.18.0.8 -container-port 443
             ├─  8375 /usr/bin/docker-proxy -proto tcp -host-ip :: -host-port 443 -container-ip 172.18.0.8 -container-port 443
             ├─  8390 /usr/bin/docker-proxy -proto tcp -host-ip 0.0.0.0 -host-port 80 -container-ip 172.18.0.8 -container-port 80
             ├─  8395 /usr/bin/docker-proxy -proto tcp -host-ip :: -host-port 80 -container-ip 172.18.0.8 -container-port 80
             ├─921235 /usr/bin/docker-proxy -proto tcp -host-ip 0.0.0.0 -host-port 8005 -container-ip 172.18.0.11 -container-port 8005
             └─921240 /usr/bin/docker-proxy -proto tcp -host-ip :: -host-port 8005 -container-ip 172.18.0.11 -container-port 8005" />}}
```


Per le vedere le opzioni dispinbili basta scrivere:
```bash
$ docker docker-subcommand --help
```

e per le impostazione di sistema:
```bash
$ docker info
```

Docker è disponibile in varie versioni e potete selezionare la più aggiornata in questa [pagina](https://docs.docker.com/engine/release-notes/23.0/) del sito. 

#### Installare docker-compose

Per installare docker-compose oltre a Docker funzionante serve:

- Intended for minor customizations
- [Easily update npm packages]({{< relref "how-to-update" >}}) — __including__ [Doks](https://www.npmjs.com/package/@hyas/doks)

```bash
git clone https://github.com/h-enk/doks-child-theme.git my-doks-site
```

#### Starter theme

- Intended for intermediate to advanced users
- Intended for major customizations
- [Easily update npm packages]({{< relref "how-to-update" >}})

```bash
git clone https://github.com/h-enk/doks.git my-doks-site
```

{{< details "Help me choose" >}}
Not sure which one is for you? Pick the child theme.
{{< /details >}}

### Fare il rebuild di Kaspian con Docker

```bash
docker-compose down
docker-compose rm -f
docker-compose pull
docker-compose up --build -d
docker-compose logs -f
```

### Install dependencies

```bash
npm install
```

## Controllare la installazione

La creazione della piattaforma è gestita interamente con docker, ma prima di collegare sensori e altro è necessario testare il sistema, in particolare il software di cache REDIS e il database Postgres.


come iniziare:


### La filosofia di base di Kaspian
Vogliamo permettere a chiunque di creare la propria piattaforma di elaborazione dati senza dipendere da servizi esterni tipo amazon AWS o Google Cloud ma di effettuare in PROPRIO la analisi dei dati usando software open source.

### L'Hosting
1. innanzi tutto vi servirà un servizio di hosting tipo Linode/Digital Ocean/Amazon AWS per ospitare il software e dati.
perche affidarsi a as un computer opsitato suall 'esterno:

Non potert realmente garantire la continuita della piattaforma usando un computer locale, anche se dotato di ridondanza hardware e con soluzioni multiple di backup.

### Perchè usiamo solo software Open Source
il motivo sta più nella qualità che bel costo: le soluzoni open source tipo Nginx o MariaDB o ROS2 sono comuni anche nella applicazioni industriali ad a alta sicurezza. Ad eesempio nel campo dell'IOT Node-REDd viene continuamente spinto anche da un colosso tipo la Siemens.

### Stampa 3D
La stampa 3D è un elemento esseniziale dello sviluppo della robotica e dovreste certamente prevedere di stampare da soli piccoli e medi pezzi per assemblare i vostri prototipi. in caso contrario dovrete sempre fare riferimento ad Amazon e alla fornitura continua di pezzi e ricambi, una cosa che ci ha rallentato molti in passato.

### Start development server 222
La matematica.
Affidarsi ad un matematico o ad un ingegnere prr progettare la parte piu complessa del vs robot non è per noi una soluzione plausile:
Dovrete sempre dipendere dal progettista iniziale per CAPIRE come modificar il robot a vostro vantaggio e come farl evolver.
 Vi sritroverete SEMPRE con delle soluzione chiuse e delle Expertise specifiche del vostro ingegnere o fisico. Una o opizone per noi improponibile.


Consigliamo invede di usare Matematicaopens ource inglobaa nel progetto ROS2 e nei prodotti dell ecosiistema ROS che e ingrado di superare mole delle dificolta di calcolo della traiettori, gestione dei motori, rilevzioni di oggetti in movimento, utilizzo di matrici e tensori che in teoria vi obbligherebbero a ricorrere ad un aiuto esterno .

non fate queso errore. sate le routine piu semolici e potenti di ROS e estite d soli gli aggiornamenti e le modifiche.

5. impararGIT:
Git è un pogramma a linea di comando che vi consente di gestiore Versioni e aggiornamrnti e condivisone dei dati e del software.
Eun prodotto open source come notrs abitudine ed e un prodotto altamente affidabile e a nostro avviso non avete motivo di uarr alternatice commerciali.
 impararare git e' la chiave per sdganciarvi dai blog tipo wordpresse dalle difficilta di coordinae i vpostri ptogrammatori





