<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

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

// Função para excluir um livro
const excluirLivro = async (id) => {
    try {
        // Fazendo a requisição DELETE
        await axios.delete(`http://localhost:3000/api/books/${id}`);
        
        // Remover o livro da lista de livros localmente após a exclusão
        livros.value = livros.value.filter(livro => livro._id !== id);

        alert('Livro excluído com sucesso');
    } catch (error) {
        console.error("Erro ao excluir livro:", error);
        alert('Erro ao excluir livro');
    }
};

// Chama a função ao montar o componente
onMounted(() => {
    fetchLivros();
});
</script>

<template>
    <DefaultLayout>
        <div class="user-livro">
            <RouterLink to="/gerenciarBiblioteca">Gerenciar Usuários</RouterLink>
            <RouterLink to="/gerenciarLivros">Gerenciar Livros</RouterLink>
        </div>

        <div class="tabela">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>ISBN</th>
                        <th>Autor</th>
                        <th>Gênero</th>
                        <th>Ano</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Renderizando os livros -->
                    <tr v-for="livro in livros" :key="livro._id">
                        <td>{{ livro._id }}</td>
                        <td>{{ livro.titulo }}</td>
                        <td>{{ livro.isbn }}</td>
                        <td>{{ livro.autor }}</td>
                        <td>{{ livro.genero }}</td>
                        <td>{{ livro.ano }}</td>
                        <td>
                            <button @click="excluirLivro(livro._id)">Excluir</button>
                            <button @click="atualizarLivro(livro._id)">Editar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="btn-add-livro">
            <RouterLink to="/cadastrarLivro"><button type="button"> + Adicionar Livro</button></RouterLink>
        </div>
    </DefaultLayout>
</template>

<style>
/* O estilo permanece igual */
.btn-atv-dtv {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.tabela {
    display: flex;
    justify-content: center;
}

table {
    width: 80%;
    border-collapse: collapse;
}

table,
th,
td {
    border: 1px solid #ddd;
}


.user-livro {
    display: flex;
    justify-content: space-around;
}

.user-livro a {
    text-decoration: none;
    color: #000;
}

.user-livro a.router-link-exact-active {
    border-bottom: 2px solid #c6d4e1;
    color: rgb(0, 0, 0);
    font-weight: bold;
}

.btn-add-livro {
    margin-top: 50px;
    display: flex;
    justify-content: center;
}

.btn-add-livro button {
    border-radius: 50px;
    border: none;
    width: 200px;
    height: 40px;
    font-size: 16px;
    color: #fff;
    background-color: #4AA0EF;
    cursor: pointer;
}
</style>
