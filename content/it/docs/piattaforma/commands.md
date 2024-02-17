---
title: "Comandi principali"
description: "I comandi per più comuni"
lead: "Come eseguire alcuni semplici task"
date: 2020-10-13T15:21:01+02:00
lastmod: 2020-10-13T15:21:01+02:00
draft: false
images: []
menu:
  docs:
    parent: "piattaforma"
weight: 130
toc: true
---

<img width="150" class="x figure-img img-fluid lazyload blur-up"  src="/124/img01003.svg" alt="">

{{< alert icon="💡" text="Ubuntu richiede il comando `sudo` per eseguire codice con i permessi di root!" />}}

## Flake8

Per controllare il sorgente Python con flake8:

file: **server-check-code.sh**
```bash
flake8 > /tmp/linter
prospector >> /tmp/linter
vi /tmp/linter
```

## Pulire il disco 

Per pulire il disco dalle immagine inutilizzate di Docker:

file: **server-clean-disk.sh**
```bash
echo "** Use carefully, answer 'N' if you are unsure"
docker system prune --filter "until=24h" --filter "label!=keep"
```

## Creare i dati iniziali
Per creare i dati iniziali per la piattaforma:

file: **server-make-initial-data.sh**
```bash
# python manage.py dumpdata --natural-foreign --natural-primary -e contenttypes -e auth.Permission --indent 2 > ./kaspianapp/base/fixtures/kaspianapp.json

INSTANCE="$( docker ps | grep k4_app | awk 'NR==1{print $1}')"
echo $INSTANCE

docker exec -i $INSTANCE /venv/bin/python \
    manage.py dumpdata \
    auth.user \
    auth.group \
    wagtailusers.userprofile \
    wagtailimages.image \
    wagtailimages.rendition \
    wagtailimages.uploadedimage \
    wagtaildocs.document \
    mapi \
    --natural-foreign \
    --natural-primary \
    -e contenttypes \
    -e auth.Permission \
    --indent 2 >   kaspianapp/base/fixtures/kaspianapp.json
```

## Caricare i dati iniziali:

file: **server-load-initial-data.sh**
```bash
NSTANCE="$( docker ps | grep k4_app | awk 'NR==1{print $1}')"
echo $INSTANCE
docker exec -i $INSTANCE /venv/bin/python manage.py loaddata   kaspianapp/base/fixtures/kaspianapp.json
```

## Per rilanciare il server Django
file: **server-restart.sh**
```bash
NSTANCE="$( docker ps | grep k4_app | awk 'NR==1{print $1}')"
echo $INSTANCE
docker exec -i $INSTANCE /venv/bin/python manage.py loaddata   kaspianapp/base/fixtures/kaspianapp.json
```

## Per far ripartire il server senza fare il rebuild completo:

file: **server-start.sh**
```bash
docker-compose pull
docker-compose up --build -d
docker-compose logs -f
```

## Per settare i permessi delle directory:

file: **server-set-permissions.sh**
```bash
sudo chmod ugo+rw  ~/docker/kaspian-media/
```
