<!-- Tabellen hämtad från  -->
<!-- https://vue-chartjs.org/guide/#installation -->

<template>
  <h1>Game sales over the last months</h1>
  <div>
    <Bar id="admin-chart" :options="chartOptions" :data="chartData" />
  </div>
</template>

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
          labels: ['December', 'January', 'February', 'March'],
          datasets: [
            {
              label: 'Products',
              data: [100, 120, 230, 300],
              backgroundColor: '#a724c8',
              Color: '#000000'
            }
          ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
</script>
<style scoped>
  div {
    display: flex;
    justify-content: center;
  }
  #admin-chart {
    background-color: white;
    color: black;
  }
</style>
