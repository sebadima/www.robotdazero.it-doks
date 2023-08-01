---
title: Come usare il modello di elaborazione “VGG16” con Tensorflow 2
description: Come usare il modello di elaborazione “VGG16” con Tensorflow 2
excerpt: "VGG16 è una rete neurale convoluzionale (CNN) profonda sviluppata dal Visual Geometry Group (VGG) del Dipartimento di Informatica dell'Università di Oxford. È stato presentato per la prima volta nel 2014 al concorso ImageNet Large Scale Visual Recognition Challenge (ILSVRC) 2014, dove ha ottenuto un punteggio di top-5 accuracy del 96,7%..."
date: 2023-08-01T09:19:42+01:00
lastmod: 2023-08-01T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["machine learning", "tensorflow", "raspberry", "ubuntu"]
contributors: ["sebadima "]
pinned: false
homepage: false
---



### In questo breve post vedremo come usare il modello di elaborazione "VGG16" con Tensorflow 2.13.0 e hardware Raspberry PI4/3


### COSA È IL MDELLO VGG16 NEL MACHINE LEARNING?

VGG16 è una rete neurale convoluzionale (CNN) profonda sviluppata dal Visual Geometry Group (VGG) del Dipartimento di Informatica dell'Università di Oxford. È stato presentato per la prima volta nel 2014 al concorso ImageNet Large Scale Visual Recognition Challenge (ILSVRC) 2014, dove ha ottenuto un punteggio di top-5 accuracy del 96,7%.

VGG16 è una rete deep, il che significa che ha molti strati. Ha 16 strati convoluzionali, 3 strati fully connected e 3 strati di classificazione. I livelli convoluzionali sono responsabili dell'estrazione di caratteristiche dalle immagini, mentre i livelli fully connected sono responsabili della classificazione delle immagini.

VGG16 è stato addestrato su un enorme set di dati di immagini chiamato ImageNet. ImageNet è un set di dati di oltre 14 milioni di immagini etichettate con 22.000 categorie. Allenare un modello su un set di dati così grande richiede molta potenza di elaborazione e tempo.

VGG16 è un modello molto potente per il riconoscimento delle immagini. Tuttavia, è anche molto complesso e richiede molta potenza di elaborazione per essere addestrato. Per questo motivo, VGG16 non è sempre la scelta migliore per i problemi di riconoscimento delle immagini. In alcuni casi, è possibile utilizzare modelli più semplici e meno potenti che possono essere addestrati più velocemente.

Nonostante la sua complessità, VGG16 è ancora un modello molto popolare per il riconoscimento delle immagini. È stato utilizzato in una varietà di applicazioni, tra cui la classificazione delle immagini, il rilevamento degli oggetti e la segmentazione delle immagini.

Ecco alcune delle caratteristiche di VGG16:

    È una rete deep con 16 strati.
    È stata addestrata su un enorme set di dati di immagini chiamato ImageNet.
    È molto potente per il riconoscimento delle immagini.
    È anche molto complesso e richiede molta potenza di elaborazione per essere addestrato.
    È ancora un modello molto popolare per il riconoscimento delle immagini.




### QUALI SONO I REQUISITI DI RAM E CPU DEL MODELLO VGG16?

I requisiti di RAM e CPU del modello VGG16 nel Machine Learning variano a seconda della piattaforma su cui viene eseguito il modello. In generale, VGG16 richiede almeno 4 GB di RAM e 4 core di CPU per essere eseguito in modo efficiente. Per l'addestramento, VGG16 richiede almeno 16 GB di RAM e 8 core di CPU.

Ecco alcuni esempi di piattaforme e requisiti di RAM e CPU per VGG16:

- TensorFlow: 4 GB di RAM, 4 core di CPU
- PyTorch: 4 GB di RAM, 4 core di CPU
- Keras: 4 GB di RAM, 4 core di CPU

È importante notare che questi sono solo requisiti minimi. I requisiti effettivi di RAM e CPU possono variare a seconda del set di dati utilizzato, della complessità del modello e della piattaforma su cui viene eseguito il modello.




```bash
from keras.applications.vgg16 import VGG16
from keras.preprocessing import image
from keras.applications.vgg16 import preprocess_input, decode_predictions
import numpy as np
#load imgenet vgg16 model

model = VGG16(weights='imagenet')
#load image and change size to 224*224
img_path = 'demo.jpg'
img = image.load_img(img_path, target_size=(224, 224))
#convert image to array
x = image.img_to_array(img)
x = np.expand_dims(x, axis=0)
x = preprocess_input(x)
#predict class for image
preds = model.predict(x)

print('Result:', decode_predictions(preds, top=1)[0])
```

<img class="x figure-img img-fluid lazyload blur-up" width="800" alt="" src="images/demo.jpg">

La foto "demo.jpg" che puoi scaricare direttamente dalla paginia facendo click destro e "salva con nome"...


### IL RISULTATO DEL PROGRAMMA

Dopo circa 30 secondi attesa il programma ha tirato fuori la risposta "airliner" cioè aereo di linea commerciale, con un livello di accuratezza dello 0.86 %. Un risultato accettabile ma forse inferiore alle attese. La posizione dell'aereo forse influise sul risultato.

```bash
2023-08-01 13:27:22.182028: W tensorflow/tsl/framework/cpu_allocator_impl.cc:83] Allocation of 411041792 exceeds 10% of free system memory.
2023-08-01 13:27:22.737930: W tensorflow/tsl/framework/cpu_allocator_impl.cc:83] Allocation of 411041792 exceeds 10% of free system memory.
2023-08-01 13:27:23.190633: W tensorflow/tsl/framework/cpu_allocator_impl.cc:83] Allocation of 411041792 exceeds 10% of free system memory.
2023-08-01 13:27:29.485538: W tensorflow/tsl/framework/cpu_allocator_impl.cc:83] Allocation of 411041792 exceeds 10% of free system memory.
1/1 [==============================] - 2s 2s/step
Result: [('n02690373', 'airliner', 0.86845803)]
```

Lo stesso programma su Raspberry Pi 3B+ con 1GB di RAM

```bash
2023-08-01 13:27:22.182028: W tensorflow/tsl/framework/cpu_allocator_impl.cc:83] Allocation of 411041792 exceeds 30% of free system memory.
2023-08-01 13:27:22.737930: W tensorflow/tsl/framework/cpu_allocator_impl.cc:83] Allocation of 411041792 exceeds 30% of free system memory.
2023-08-01 13:27:23.190633: W tensorflow/tsl/framework/cpu_allocator_impl.cc:83] Allocation of 411041792 exceeds 30% of free system memory.
2023-08-01 13:27:29.485538: W tensorflow/tsl/framework/cpu_allocator_impl.cc:83] Allocation of 411041792 exceeds 30% of free system memory.
1/1 [==============================] - 2s 2s/step
Result: [('n02690373', 'airliner', 0.86845803)]
```

