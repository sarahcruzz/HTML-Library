<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
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
                    <tr>
                        <td>1</td>
                        <td>Livro 1</td>
                        <td>1984988</td>
                        <td>Autor 1</td>
                        <td>Romance</td>
                        <td>2020</td>
                        <td><button>Excluir</button></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Livro 2</td>
                        <td>2628529</td>
                        <td>Autor 2</td>
                        <td>Terror</td>
                        <td>1995</td>
                        <td><button>Excluir</button></td>
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

.btn-add-livro{
    margin-top: 50px;
    display: flex;
    justify-content: center;
}

.btn-add-livro button{
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
