<template>
  <div>
    <h1>Resultados da Pesquisa</h1>
    <ul v-if="results.length">
      <li v-for="book in results" :key="book._id">
        <h3>{{ book.titulo }}</h3>
        <p><strong>Autor:</strong> {{ book.autor }}</p>
        <p><strong>Gênero:</strong> {{ book.genero }}</p>
      </li>
    </ul>
    <p v-else>Nenhum resultado encontrado para "{{ $route.query.q }}"</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      results: [],
    };
  },
  async created() {
    const query = this.$route.query.q || "";
    try {
      const response = await axios.get("http://localhost:3000/api/books/search", {
        params: { query },
      });
      this.results = response.data;
    } catch (error) {
      console.error("Erro ao buscar livros:", error);
    }
  },
};
</script>
