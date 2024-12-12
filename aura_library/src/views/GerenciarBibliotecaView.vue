<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Lista de usuários reativa
const users = ref([]);

// Função para buscar os usuários no backend
const fetchUsers = async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/auth/getAllUsers');
        users.value = response.data;
    } catch (error) {
        console.error('Erro ao buscar usuários:', error.response?.data?.error || 'Erro desconhecido');
        alert('Erro ao buscar usuários: ' + (error.response?.data?.error || 'Erro desconhecido'));
    }
};

// Função para ativar/desativar um usuário
const toggleUserStatus = async (userId, action) => {
    try {
        // Você precisará implementar endpoints no backend para ativar/desativar usuários.
        const endpoint = `http://localhost:3000/api/auth/${action}User/${userId}`;
        await axios.patch(endpoint);

        // Atualizar a lista de usuários após a ação
        fetchUsers();
        alert(`Usuário ${action === 'activate' ? 'ativado' : 'desativado'} com sucesso!`);
    } catch (error) {
        console.error(`Erro ao ${action} usuário:`, error.response?.data?.error || 'Erro desconhecido');
        alert(`Erro ao ${action} usuário: ` + (error.response?.data?.error || 'Erro desconhecido'));
    }
};

// Buscar os usuários ao carregar a página
onMounted(() => {
    fetchUsers();
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
                        <th>Nome</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user._id">
                        <td>{{ user._id }}</td>
                        <td>{{ user.username }}</td>
                        <td>{{ user.active ? 'Ativo' : 'Inativo' }}</td>
                        <td class="btn-atv-dtv">
                            <button
                                v-if="!user.active"
                                class="button-activate"
                                @click="toggleUserStatus(user._id, 'activate')"
                            >
                                Ativar
                            </button>
                            <button
                                v-if="user.active"
                                class="button-deactivate"
                                @click="toggleUserStatus(user._id, 'deactivate')"
                            >
                                Desativar
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </DefaultLayout>
</template>

<style>
/* O mesmo estilo do exemplo anterior, mantido */
</style>


<style>
.btn-atv-dtv {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.tabela {
    margin-top: 50px;
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
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
}

.user-livro a.router-link-exact-active {
    border-bottom: 2px solid #c6d4e1;
    color: rgb(0, 0, 0);
    font-weight: bold;
}

.user-livro a {
    text-decoration: none;
    color: #000;
}



</style>