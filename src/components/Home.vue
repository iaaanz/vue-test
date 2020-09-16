<template>
  <v-container fluid>
    <v-form>
      <v-file-input 
      label="Selecione o arquivo com palavras"
      prepend-icon="mdi-message-text"
      append-outer-icon="mdi-send"
      outlined
      multiple 
      chips 
      v-model="files"
      @click:append-outer="processWords"/>
    </v-form>
    <div class="pills">
      <Pill v-for="word in groupedWords" :key="word.name"
      :name="word.name" :amount="word.amount"/>
    </div>
  </v-container>
</template>

<script>

import { ipcRenderer } from 'electron'
import Pill from './Pill'

export default {
  components: { Pill },
  data: function () {
    return {
      files: [],
      groupedWords: [
        { name: 'you', amount: 900},
        { name: 'he', amount: 800},
        { name: 'i', amount: 700},
      ]
    }
  },
  methods: {
    processWords() {
      console.log(this.files)

      ipcRenderer.send('eventoIpc', 'ping')
      ipcRenderer.on('eventoIpc', (event, resp) => {
        console.log(resp)
      })
    }
  }
}
</script>

<style>
  .pills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>