<script>
import { defineComponent } from 'vue';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Doughnut } from 'vue-chartjs';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

export default defineComponent({
  name: 'PieChart',
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    Doughnut,
  },
});
</script>

<template>
  <Doughnut :data="chartData" :options="chartOptions" />
</template>
