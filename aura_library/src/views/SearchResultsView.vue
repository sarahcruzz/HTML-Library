<template>
  <div>
    <h1>Resultados da Pesquisa</h1>
    <ul>
      <li v-for="book in results" :key="book.id">
        <h2>{{ book.title }}</h2>
        <p>Autor: {{ book.author }}</p>
        <p>Descrição: {{ book.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [], // Armazena os resultados da pesquisa
    };
  },
  created() {
    // Obtém os resultados da pesquisa passados via state
    this.results = this.$route.state.results || [];
    console.log('Resultados recebidos:', this.results); // Para verificar os dados recebidos
  },
};
</script>

<style>
/* Adicione estilos conforme necessário */
</style>
