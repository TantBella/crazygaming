import { createStore } from 'vuex'

const mutations = {
    increment(state) {
      state.counter += 1
    }
  },
  state = {
    counter: 0,
    products: []
  }

export default createStore({ mutations, state, strict: true })

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
