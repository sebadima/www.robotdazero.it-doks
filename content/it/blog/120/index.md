---
title: "Cosa è la \"psram\" dell'ESP32"
description: "."
excerpt: " ..."
date: 2023-10-26T09:19:42+01:00
lastmod: 2023-26-01T09:19:42+01:00
draft: false
weight: 50
images: ["header.jpeg"]
categories: ["News"]
tags: ["ESP32", "programmazione"]
contributors: ["sebadima"]
pinned: false
homepage: false
---



La PSRAM è una memoria non volatile integrata nell'ESP32. È una memoria EEPROM che può essere utilizzata per memorizzare dati che devono essere conservati anche quando l'ESP32 è spento. La PSRAM è di 8 KB di dimensioni e può essere utilizzata per memorizzare dati come configurazioni, certificati e dati sensibili.

La PSRAM è accessibile tramite il driver I2C. Per accedere alla PSRAM, è necessario prima inizializzarla. L'inizializzazione della PSRAM può essere eseguita utilizzando la seguente funzione:

C
esp_err_t psram_init(void);
Use code with caution. Learn more
Una volta inizializzata la PSRAM, è possibile accedervi utilizzando le seguenti funzioni:

C
esp_err_t psram_read(uint32_t offset, uint8_t *data, size_t len);
esp_err_t psram_write(uint32_t offset, const uint8_t *data, size_t len);
Use code with caution. Learn more
La funzione psram_read() legge len byte da offset nella PSRAM e li memorizza in data. La funzione psram_write() scrive len byte da data in offset nella PSRAM.

Ecco un esempio di come utilizzare la PSRAM:

C
#include <esp_log.h>
#include <esp_system.h>
#include <esp_psram.h>

static const char *TAG = "psram_example";

void app_main(void)
{
  // Inizializza la PSRAM
  esp_err_t err = psram_init();
  if (err != ESP_OK) {
    ESP_LOGE(TAG, "Errore durante l'inizializzazione della PSRAM: %d", err);
    return;
  }

  // Scrivi alcuni dati nella PSRAM
  uint8_t data[10] = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
  err = psram_write(0, data, sizeof(data));
  if (err != ESP_OK) {
    ESP_LOGE(TAG, "Errore durante la scrittura nella PSRAM: %d", err);
    return;
  }

  // Leggi i dati dalla PSRAM
  uint8_t read_data[sizeof(data)];
  err = psram_read(0, read_data, sizeof(read_data));
  if (err != ESP_OK) {
    ESP_LOGE(TAG, "Errore durante la lettura dalla PSRAM: %d", err);
    return;
  }

  // Verifica che i dati letti siano corretti
  for (int i = 0; i < sizeof(data); i++) {
    if (read_data[i] != data[i]) {
      ESP_LOGE(TAG, "Dati letti dalla PSRAM non corretti");
      return;
    }
  }

  ESP_LOGI(TAG, "I dati sono stati scritti e letti correttamente dalla PSRAM");
}
Use code with caution. Learn more
Questo esempio scrive un array di 10 byte nella PSRAM e poi legge gli stessi dati dalla PSRAM. Se i dati letti sono uguali ai dati scritti, l'esempio termina con successo.

Ecco alcuni limiti della PSRAM:

La PSRAM è una memoria EEPROM, quindi i dati memorizzati in essa possono essere cancellati solo un numero limitato di volte.
La PSRAM è accessibile solo tramite il driver I2C.
La PSRAM è di 8 KB di dimensioni, quindi è possibile memorizzare solo una piccola quantità di dati.
<br>
<p style="font-size: 12px;"> R.120.1.0.1 </p>
<br>