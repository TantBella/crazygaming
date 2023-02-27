import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ContactView from './contact/ContactView.vue'
import HomeView from './views/HomeView.vue'
import CheckOut from './shopping/CheckOut.vue'
import UserProfile from './views/UserView.vue'
import PrivCook from './views/CookiesView.vue'
import Products from './products/FilteredProducts.vue'
import Confirmation from './contact/ConfirmationView.vue'
import ProductPage from './products/ProductPage.vue'

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
      component: CheckOut,
      path: '/checkout'
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
      component: Products,
      path: '/products/:brand'
    },
    {
      component: Confirmation,
      path: '/confirmation'
    },
    {
      component: ProductPage,
      path: '/product/:id'
    }
  ]
})
