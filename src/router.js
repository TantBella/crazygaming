import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'
import ProductView from './views/ProductView.vue'
import ShoppingCart from './views/ShoppingCart.vue'
import UserProfile from './views/UserProfile.vue'
import Categories from './views/CategoryView.vue'
import PrivCook from './views/PrivCook.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: PrivCook,
      path: '/cookies'
    },
    {
      component: HomeView,
      path: '/'
    },
    {
      component: Categories,
      path: '/categories'
    },
    {
      component: ShoppingCart,
      path: '/shoppingcart'
    },
    {
      component: UserProfile,
      path: '/user'
    },
    {
      component: AboutView,
      path: '/about'
    },
    {
      component: ContactView,
      path: '/contact'
    },
    {
      component: ProductView,
      path: '/products'
    }
  ]
})
