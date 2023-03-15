<template>
  <Bar :data="chartData" />
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
          labels: ['January', 'February', 'March'],
          datasets: [
            {
              label: 'Products sold per month',
              backgroundColor: '#f87979',
              data: [100, 90, 100]
            }
          ]
        }
      }
    }
  }
</script>
