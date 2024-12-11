<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';

</script>

<template>
    <DefaultLayout>
        <div class="tabela">
            <table>
                <thead>
                    <tr>
                        <th>Imagem</th>
                        <th>Título</th>
                        <th>ISBN</th>
                        <th>Autor</th>
                        <th>Gênero</th>
                        <th>Ano</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Renderizando os livros -->
                    <tr v-for="livro in livros" :key="livro._id">
                        <td>{{ livro.imagem }}</td>
                        <td>{{ livro.titulo }}</td>
                        <td>{{ livro.isbn }}</td>
                        <td>{{ livro.autor }}</td>
                        <td>{{ livro.genero }}</td>
                        <td>{{ livro.ano }}</td>
                    </tr>
                </tbody>
            </table>
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
