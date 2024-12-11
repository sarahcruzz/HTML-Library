<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

// Lista reativa para armazenar os livros
const livros = ref([]);

// Função para buscar os livros da API
const fetchLivros = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/books'); // URL da sua API
    livros.value = response.data;
  } catch (error) {
    console.error('Erro ao buscar livros:', error);
  }
};



// Chama a função ao montar o componente
onMounted(() => {
  fetchLivros();
});
</script>

<template>
    <DefaultLayout>
        <main>
        <div class="slide">
            <img src="../assets/banner.jpg" alt="" />
        </div>

        <div class="livros-home">
            <!-- Exibindo os primeiros 4 livros -->
            <div v-for="(livro, index) in livros.slice(0, 4)" :key="livro._id" class="conj-livro">
                <div class="livro">
                    <!-- Adicionar a imagem do livro aqui e fazer um link para o livro -->
                    <RouterLink :to="`/livro/${livro._id}`">
                    <img :src="`http://localhost:3000/${livro.imagem}`" alt="Capa do livro" />
                    </RouterLink>
                </div>

                <RouterLink :to="`/livro/${livro._id}`">
                    <p>{{ livro.titulo }}</p>
                </RouterLink>
            </div>
        </div>

        <div id="ver-mais">
            <RouterLink to="/lista-livros">Ver Mais</RouterLink>
        </div>
        </main>
    </DefaultLayout>
</template>
  

<style scoped>

main {
  display: flex;
  padding: 40px 180px 80px 180px;
  flex-direction: column;
  justify-content: space-around;
}

.slide {
  background-color: #dfdfdf;
  width: 100%;
  height: 320px;
  border-radius: 10px;
  overflow: hidden;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.livros-home {
  margin-top: 60px;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.livro {
  width: 200px;
  height: 250px;
  background-color: #dfdfdf;
  border-radius: 10px;
  overflow: hidden;
}

.livro img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#ver-mais {
  display: flex;
  justify-content: center;
  color: #ffff;
  align-items: center;
}

#ver-mais a {
  color: #ffff;
  text-decoration: none;
  background-color: #4aa0ef;
  padding: 10px 35px 10px 35px;
  border-radius: 50px;
  margin-top: 60px;
}

.conj-livro {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.conj-livro a{
  text-decoration: none;
  color: #000;
}


#genero {
  padding: 10px;
}

.filtro-titulo {
  display: flex;
  justify-content: space-between;
}
</style>
