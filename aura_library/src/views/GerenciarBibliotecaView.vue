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
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>João Silva</td>
                        <td>joao.silva@email.com</td>
                        <td>Ativo</td>
                        <td class="btn-atv-dtv">
                            <button class="button-activate">Ativar</button>
                            <button class="button-deactivate">Desativar</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>João Silva</td>
                        <td>joao.silva@email.com</td>
                        <td>Ativo</td>
                        <td class="btn-atv-dtv">
                            <button class="button-activate">Ativar</button>
                            <button class="button-deactivate">Desativar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
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
    border-bottom: 2px solid blue;
    color: blue;
    font-weight: bold;
}
</style>
