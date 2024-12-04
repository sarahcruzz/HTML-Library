<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { useRouter } from 'vue-router';

const livros = ref([]);

// Função para buscar os livros da API
const fetchLivros = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/books'); // URL da sua API
        livros.value = response.data;
    } catch (error) {
        console.error("Erro ao buscar livros:", error);
    }
};

// Chama a função ao montar o componente
onMounted(() => {
    fetchLivros();
});

// Para navegar para a página do livro específico
const router = useRouter();
const navegarParaLivro = (id) => {
    router.push(`/livro/${id}`);  // Supondo que a rota para detalhes seja /livro/:id
};
</script>

<template>
    <DefaultLayout>
        <main>
            <div class="filtro-titulo">
                <h1>Livros</h1>
                <select name="genero" id="genero">
                    <option value="default">Filtrar por gênero</option>
                    <option value="romance">Romance</option>
                    <option value="terror">Terror</option>
                    <option value="suspense">Suspense</option>
                    <option value="ficcao">Ficção</option>
                </select>
            </div>

            <div class="livros-home">
                <!-- Exibindo os livros dinamicamente -->
                <div class="conj-livro" v-for="livro in livros" :key="livro._id">
                    <div class="livro" @click="navegarParaLivro(livro._id)">
                        <!-- A URL da imagem agora está concatenada corretamente -->
                        <img :src="`http://localhost:3000/${livro.imagem}`" alt="Capa do livro" />
                    </div>
                    <p>{{ livro.titulo }}</p>
                </div>
            </div>
        </main>
    </DefaultLayout>
</template>

<style scoped>

#genero{
    padding: 10px;  
}

.filtro-titulo{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

.livros-home {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.conj-livro {
    width: 200px;
    margin: 20px;
    text-align: center;
    cursor: pointer;
}

.livro {
    width: 100%;
    height: 300px;
    background-color: #f4f4f4;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.livro img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
}

main{
    padding: 50px;
}
</style>
