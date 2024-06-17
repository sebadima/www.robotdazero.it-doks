---
title:       "Come correggere Errore 259 sui programmi ESP32 per Bluetooth"
description: "Come correggere Errore 259 sui programmi ESP32 per Bluetooth"
excerpt:     "L'esempio di Provisioning delle password Wi-FI via Bluetooth pare non funzionare correttamente su Platformio ed ESP32 nella ultima release delle librerie. Vediamo come correggere velocemente questo errore ..."

date:    2024-06-16T09:19:42+01:00
lastmod: 2024-06-16T09:19:42+01:00
draft:   false
weight:  50

images:       ["header.webp"]
categories:   ["News"]
tags:         ["MAC", "Bluetooth", "programmazione", "ESP32"]
contributors: ["sebadima"]

pinned:   false
homepage: false
mermaid:  false
---


## Descrizione generale

L'uso di esp_bt_controller_mem_release non sembra corretto in esp32-hal-misc.c. Nella funzione initArduino () se hai impostato BT_ENABLED in sdkconfig, chiamerà btInUse per determinare se rilasciare la memoria BT. Ci sono due problemi.

Innanzitutto, utilizzando lo schizzo di esempio riportato di seguito (una versione leggermente modificata dell'esempio di provisioning incluso in questa libreria) non sembra collegarsi correttamente. L'esempio non funzionerà correttamente poiché la memoria BT viene rilasciata in initArduino, quindi il tentativo di abilitare BT in seguito per il provisioning non riesce. Il collegamento debole non funziona come previsto.

### Un esempio dell'errore 259

```bash
### Debug Message

E (912) wifi_prov_scheme_ble: bt_mem_release of classic BT failed 259
I (920) phy_init: phy_version 4670,719f9f6,Feb 18 2021,17:07:07
I (1022) wifi:mode : sta (ac:0b:fb:6c:f4:8c)
I (1023) wifi:enable tsf
I (1024) wifi:Set ps type: 1

E (1027) simple_ble: simple_ble_start enable controller failed 259
E (1028) protocomm_ble: simple_ble_start failed w/ error code 0x103
E (1035) wifi_prov_scheme_ble: Failed to start protocomm BLE service
E (1041) wifi_prov_mgr: Failed to start service

```

In secondo luogo, anche questo modello sembra sbagliato. Il codice in initArduino() implicherebbe che si potrebbe avere CONFIG_BT_ENABLED ma btInUse () restituisce false che, per il codice, non sarebbe mai possibile. Se CONFIG_BT_ENABLED è sì allora esp32-hal-bt.c dichiara btInUse () per restituire sempre true. Quindi non c'è uno scenario in cui se la configurazione è abilitata btInUse() dovrebbe restituire false (anche se lo fa per il primo problema menzionato sopra).

Questo rende il seguente blocco di codice in esp32-hal-misc.c un poco sconcertante:



```bash
#ifdef CONFIG_BT_ENABLED
    if(!btInUse()){
        esp_bt_controller_mem_release(ESP_BT_MODE_BTDM);
    }
#endif
```

### Come risolvere l'Errore 259 su ESP32

> Per far funzionare il codice di esempio di provisioning, la chiamata a esp_bt_controller_mem_release **NON** deve essere chiamata in initArduino.

### Risoluzione dell'errore step by step

- Trova il file esp32-hal-misc.c 
- Lancia il tuo editor preferito
- Trova la riga 266
- Commenta con "//" la linea  "esp_bt_controller_mem_release(ESP_BT_MODE_BTDM);"
- Salva il file e ricompila i programmi errati su Platformio

```bash

    266 #ifdef CONFIG_BT_ENABLED
    267     if(!btInUse()){
    268         //esp_bt_controller_mem_release(ESP_BT_MODE_BTDM);
    269     }
    270 #endif
    271     init();
    272     initVariant();
    273 }
    274 

```


<br>
<br>
<p style="font-size: 0.80em;">Robotdazero.it - post - R.163.0.5.0</p>