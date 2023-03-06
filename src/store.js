import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 0,
      cartIsOpen: false,
      products: [],
      product: true
    }
  },

  mutations: {
    addToCart(state, inputProduct) {
      state.products.push(inputProduct)
    },
    openCart(state) {
      state.cartIsOpen = true
    },
    closeCart(state) {
      state.cartIsOpen = false
    },
    toggleCart(state) {
      state.cartIsOpen = !state.cartIsOpen
    },
    deleteProduct(state, product) {
      state.products = state.products.filter((pro) => {
        return pro != product
      })
    }
  }
})

export default store

// import { createStore } from 'vuex'

// const mutations = {
//     gameItems(state, products) {
//       state.products = products
//     }
//   },
//   state = {
//     products: []
//   }

// export default createStore({
//   mutations,
//   state,
//   strict: true
// })
