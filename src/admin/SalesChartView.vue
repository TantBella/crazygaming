<script>
  import { Bar } from 'vue-chartjs'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  } from 'chart.js'

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  )

  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: ['January', 'February', 'March'],
          datasets: [{ data: [80, 100, 134] }],
          Color: '#A020F0'
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
</script>

<template>
  <h1>Sales over the last three months</h1>
  <div>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<style scoped>
  #my-chart-id {
    background-color: aliceblue;
  }
</style>
