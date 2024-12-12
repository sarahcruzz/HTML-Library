<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const activeLoans = ref([]);

const fetchLoans = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/loans/active');
    activeLoans.value = response.data;
  } catch (error) {
    console.error('Erro ao buscar empréstimos:', error);
  }
};

onMounted(fetchLoans);
</script>

<template>
    <DefaultLayout>
        <div>
            <h1>Empréstimos Ativos</h1>
            <table>
            <thead>
                <tr>
                <th>Livro</th>
                <th>Usuário</th>
                <th>Data de Empréstimo</th>
                <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="loan in activeLoans" :key="loan._id">
                <td>{{ loan.bookId.title }}</td>
                <td>{{ loan.userId.username }}</td>
                <td>{{ new Date(loan.loanDate).toLocaleDateString() }}</td>
                <td>
                    <button @click="returnBook(loan._id)">Devolver</button>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
    </DefaultLayout>
        
</template>
