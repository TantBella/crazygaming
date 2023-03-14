<script>
  import axios from 'axios'
  export default {
    computed: {
      salePrices() {
        if (this.products === null) {
          return []
        }
        return this.products.filter((sales) => sales.sale_price > 0)
      }
    },
    created() {
      axios.get('/products.json').then((result) => {
        this.products = result.data.products
      })
    },
    data() {
      return {
        products: null
      }
    },
    methods: {
      categories(someString) {
        if (this.products === null) {
          return null
        }
        return this.products.filter((cat) => cat.category === someString)
      }
    }
  }
</script>

<template>
  <b-card no-body style="background-color: transparent">
    <b-tabs card align="center">
      <b-tab title="All Games" active>
        <div v-for="product in products" :key="product.id">
          <router-link :to="`/product/${product.id}`">
            <b-card-img :src="product.image" :alt="product.name" />
          </router-link>
          <p v-if="product.sale_price">
            {{ product.name }}
            <span class="sales">{{ product.sale_price }}€</span
            ><span class="line-throw">{{ product.price }}€</span>
          </p>
          <p v-else>
            {{ product.name }} <span>{{ product.price }}€</span>
          </p>
        </div>
      </b-tab>
      <b-tab title="Sales">
        <div v-for="sales in salePrices" :key="sales.id">
          <router-link :to="`/product/${sales.id}`">
            <b-card-img :src="sales.image" :alt="sales.name" />
          </router-link>
          <p class="sale">{{ sales.name }}</p>
          <p class="sales">
            {{ sales.sale_price }}€
            <span class="line-throw">{{ sales.price }}€</span>
          </p>
        </div>
      </b-tab>
      <b-tab title="Action">
        <div v-for="action in categories('Action')" :key="action.id">
          <router-link :to="`/product/${action.id}`">
            <b-card-img :src="action.image" :alt="action.name" />
          </router-link>
          <p v-if="action.sale_price">
            {{ action.name }}
            <span class="sales">{{ action.sale_price }}€</span
            ><span class="line-throw">{{ action.price }}€</span>
          </p>
          <p v-else>
            {{ action.name }} <span>{{ action.price }}€</span>
          </p>
        </div>
      </b-tab>
      <b-tab title="Adventure">
        <div v-for="adventure in categories('Adventure')" :key="adventure.id">
          <router-link :to="`/product/${adventure.id}`">
            <b-card-img :src="adventure.image" :alt="adventure.name" />
          </router-link>
          <p v-if="adventure.sale_price">
            {{ adventure.name }}
            <span class="sales">{{ adventure.sale_price }}€</span
            ><span class="line-throw">{{ adventure.price }}€</span>
          </p>
          <p v-else>
            {{ adventure.name }} <span>{{ adventure.price }}€</span>
          </p>
        </div>
      </b-tab>
      <b-tab title="Simulator">
        <div v-for="simulator in categories('Simulator')" :key="simulator.id">
          <router-link :to="`/product/${simulator.id}`">
            <b-card-img :src="simulator.image" :alt="simulator.name" />
          </router-link>
          <p v-if="simulator.sale_price">
            {{ simulator.name }}
            <span class="sales">{{ simulator.sale_price }}€</span
            ><span class="line-throw">{{ simulator.price }}€</span>
          </p>
          <p v-else>
            {{ simulator.name }} <span>{{ simulator.price }}€</span>
          </p>
        </div>
      </b-tab>
      <b-tab title="Sports">
        <div v-for="sport in categories('Sports')" :key="sport.id">
          <router-link :to="`/product/${sport.id}`">
            <b-card-img :src="sport.image" :alt="sport.name" />
          </router-link>
          <p v-if="sport.sale_price">
            {{ sport.name }}
            <span class="sales">{{ sport.sale_price }}€</span
            ><span class="line-throw">{{ sport.price }}€</span>
          </p>
          <p v-else>
            {{ sport.name }} <span>{{ sport.price }}€</span>
          </p>
        </div>
      </b-tab>
      <b-tab title="Roleplay">
        <div v-for="roleplay in categories('Roleplay')" :key="roleplay.id">
          <router-link :to="`/product/${roleplay.id}`">
            <b-card-img :src="roleplay.image" :alt="roleplay.name" />
          </router-link>
          <p v-if="roleplay.sale_price">
            {{ roleplay.name }}
            <span class="sales">{{ roleplay.sale_price }}€</span
            ><span class="line-throw">{{ roleplay.price }}€</span>
          </p>
          <p v-else>
            {{ roleplay.name }} <span>{{ roleplay.price }}€</span>
          </p>
        </div>
      </b-tab>
    </b-tabs>
  </b-card>
</template>

<style scoped>
  .tab-content > .active {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  :deep(.card-header) {
    border-bottom: 1px solid #fff;
  }

  img {
    width: 300px;
    height: 300px;
    margin-bottom: 10px;
    margin-right: 40px;
    margin-bottom: 20px;
  }

  .card {
    border: none;
  }

  :deep(.nav-link) {
    color: #fff;
  }

  p {
    color: #fff;
    margin-bottom: 0;
    padding-bottom: 15px;
    padding-left: 15px;
    width: 86%;
  }

  .sale {
    padding-bottom: 0;
  }
  .sales {
    color: red;
    padding-right: 5px;
  }
  .line-throw {
    text-decoration: line-through;
    color: #fff;
  }
</style>
