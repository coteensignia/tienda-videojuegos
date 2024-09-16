<template>
  <div class="container">
    <h1>Tienda 32 Bits</h1>
    <h2>Lista de Juegos</h2>
    <table>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(juego, index) in juegosStore.juegos" :key="juego.codigo">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
          <td>
            <button class="add-button" @click="agregarStock(index)">+</button>
            <button class="subtract-button" @click="disminuirStock(index)">-</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useJuegosStore } from '@/stores/juegos'
import { onMounted } from 'vue'

const juegosStore = useJuegosStore()

onMounted(() => {
  juegosStore.fetchGames()
})

function agregarStock(index) {
  juegosStore.agregarStockets(index)
}

function disminuirStock(index) {
  juegosStore.disminuirStockets(index)
}
</script>

<style scoped>
.container {
  text-align: center;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto; 
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: rgb(45, 111, 205);
  color: white;
}

h1, h2 {
  margin: 0;
  padding: 16px 0; 
}

button {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  color: white;
  cursor: pointer;
  margin: 5px;
}

.add-button {
  background-color: #4CAF50; /* Verde */
}

.subtract-button {
  background-color: #f44336; /* Rojo */
}
</style>
