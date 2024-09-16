import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useJuegosStore = defineStore('juegos', () => {
  const juegos = ref([])

  async function fetchGames() {
    try {
      const url = '/api/juegos.json' 
      const { data } = await axios.get(url)
      juegos.value = data
    } catch (error) {
      console.error("No encontramos ningun juego", error)
    }
  }

  function agregarStockets(i) {
    if (juegos.value[i]) {
      juegos.value[i].stock++
    }
  }

  function disminuirStockets(i) {
    if (juegos.value[i] && juegos.value[i].stock > 0) {
      juegos.value[i].stock--
    }
  }

  return { juegos, fetchGames, agregarStockets, disminuirStockets }
})
