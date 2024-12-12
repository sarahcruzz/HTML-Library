<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const livro = ref(null);
const loanStatus = ref('');
const route = useRoute();
const livroId = route.params.id;

const fetchLivro = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/api/books/${livroId}`);
    livro.value = response.data;
  } catch (error) {
    console.error('Erro ao carregar o livro:', error);
  }
};

const emprestarLivro = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Você precisa estar logado para realizar esta ação.');
      return;
    }

    const response = await axios.post(
      `http://localhost:3000/api/books/${livroId}/loan`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    livro.value.status = 'Emprestado';
    loanStatus.value = response.data.message;
    alert(loanStatus.value);
  } catch (error) {
    console.error('Erro ao emprestar o livro:', error);
    loanStatus.value = error.response?.data?.error || 'Erro ao emprestar o livro. Tente novamente.';
    alert(loanStatus.value);
  }
};


onMounted(() => {
  fetchLivro();
});
</script>

<template>
  <DefaultLayout>
    <div class="conj-livro-unico">
      <img :src="livro?.imagem ? `http://localhost:3000/${livro.imagem}` : ''" alt="Imagem do livro" v-if="livro?.imagem" />

      <div class="info-livro">
        <h1>{{ livro?.titulo }}</h1>

        <span class="genero-estrelas">
          <p>Gênero: {{ livro?.genero }}</p>
          <span class="estrelinhas">
            <i class="pi pi-star" v-for="n in 5" :key="n" />
          </span>
        </span>

        <span class="info-detalhada">
          <p>ISBN: {{ livro?.isbn }}</p>
          <p>Publicado em: {{ livro?.ano }}</p>
          <p>Autor: {{ livro?.autor }}</p>
        </span>

        <span class="descricao-livro">
          <h3>Descrição</h3>
          <p>{{ livro?.descricao }}</p>
        </span>

        <div class="emprestar" v-if="livro?.status === 'Disponível'">
          <button type="button" @click="emprestarLivro">Emprestar</button>
      </div>
      <p v-else class="unavailable-status">Este livro já está emprestado.</p>

      </div>

      <span class="info-detalhada">
        <p>ISBN: {{ livro?.isbn }}</p>
        <p>Publicado em: {{ livro?.ano }}</p>
        <p>Autor: {{ livro?.autor }}</p>
        <p>Status: <strong>{{ livro?.status }}</strong></p>
      </span>


    </div>
  </DefaultLayout>
</template>

<style scoped>

.info-detalhada strong {
  color: green;
}

.info-detalhada strong:contains('Emprestado') {
  color: red;
}

.info-livro {
    width: 50%;
}

.conj-livro-unico {
    display: flex;
    padding: 40px;
    justify-content: center;
    gap: 120px;
}

.conj-livro-unico img {
    height: 500px;
    width: 375px;
    box-shadow: 5px 5px 7px #bcbcbc;
}

.genero-estrelas {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
}

.info-detalhada {
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 80px;
}

.descricao-livro h3 {
    margin-top: 40px;
}

.info-livro button {
    width: 180px;
    padding: 10px;
    border: none;
    background-color: #44749d;
    font-size: 16px;
    border-radius: 50px;
    color: white;
    cursor: pointer;
}

.emprestar {
    margin-top: 40px;
    display: flex;
    justify-content: end;
}

.loan-status {
    margin-top: 10px;
    font-weight: bold;
    color: green;
}
</style>
