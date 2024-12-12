<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const emprestados = ref([]);
const errorMessage = ref('');

// Função para buscar livros emprestados
const fetchEmprestados = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/books/loaned');
    emprestados.value = response.data;
  } catch (error) {
    console.error('Erro ao carregar os livros emprestados:', error);
    errorMessage.value = 'Não foi possível carregar os livros emprestados. Tente novamente mais tarde.';
  }
};

// Chama a função ao montar o componente
onMounted(() => {
  fetchEmprestados();
});
</script>

<template>
  <div class="emprestados-container">
    <h1>Livros Emprestados</h1>

    <!-- Mensagem de erro caso não consiga carregar -->
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

    <!-- Lista de livros emprestados -->
    <div v-if="emprestados.length" class="livros-list">
      <div v-for="livro in emprestados" :key="livro._id" class="livro-card">
        <img :src="`http://localhost:3000/${livro.imagem}`" alt="Capa do livro" v-if="livro.imagem" />
        <div class="livro-info">
          <h2>{{ livro.titulo }}</h2>
          <p><strong>Autor:</strong> {{ livro.autor }}</p>
          <p><strong>Gênero:</strong> {{ livro.genero }}</p>
          <p><strong>ISBN:</strong> {{ livro.isbn }}</p>
          <p><strong>Ano:</strong> {{ livro.ano }}</p>
          <p><strong>Status:</strong> <span class="status">{{ livro.status }}</span></p>
        </div>
      </div>
    </div>

    <!-- Mensagem caso não tenha livros emprestados -->
    <p v-else class="no-books-message">Nenhum livro está emprestado no momento.</p>
  </div>
</template>

<style scoped>
.emprestados-container {
  padding: 40px;
  text-align: center;
}

.livros-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.livro-card {
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: left;
}

.livro-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.livro-info {
  padding: 20px;
}

.livro-info h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.status {
  color: red;
  font-weight: bold;
}

.no-books-message {
  margin-top: 20px;
  font-size: 18px;
  color: #666;
}

.error-message {
  color: red;
  font-size: 16px;
  margin-top: 20px;
}
</style>
