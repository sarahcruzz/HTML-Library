<script setup>
import { ref, onMounted } from 'vue';
import PieChart from '@/components/PieChart.vue';
import BarChart from '@/components/BarChart.vue';
import axios from 'axios';

const userData = ref({
  totalUsers: 0,
  activeUsers: 0,
  inactiveUsers: 0,
});

const bookData = ref({
  totalBooks: 0,
  booksBorrowed: 0,
  booksAvailable: 0,
});

const fetchDashboardData = async () => {
  try {
    const usersResponse = await axios.get('http://localhost:3000/api/dashboard/users');
    const booksResponse = await axios.get('http://localhost:3000/api/dashboard/books');

    userData.value = usersResponse.data;
    bookData.value = booksResponse.data;
  } catch (error) {
    console.error('Erro ao carregar dados do dashboard:', error);
  }
};

onMounted(fetchDashboardData);
</script>

<template>
  <div>
    <h1>Dashboard de Status</h1>

    <section>
      <h2>Usuários</h2>
      <PieChart
        :chart-data="{
          labels: ['Ativos', 'Inativos'],
          datasets: [
            {
              data: [userData.activeUsers, userData.inactiveUsers],
              backgroundColor: ['#4caf50', '#f44336'],
            },
          ],
        }"
      />
    </section>

    <section>
      <h2>Livros</h2>
      <BarChart
        :chart-data="{
          labels: ['Emprestados', 'Disponíveis'],
          datasets: [
            {
              label: 'Livros',
              data: [bookData.booksBorrowed, bookData.booksAvailable],
              backgroundColor: ['#2196f3', '#ffc107'],
            },
          ],
        }"
        :chart-options="{
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top',
            },
          },
        }"
      />
    </section>
  </div>
</template>

<style>
section {
  margin-top: 2rem;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

h2 {
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>
