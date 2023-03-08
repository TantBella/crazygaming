import { createRouter, createWebHashHistory } from 'vue-router'

import AboutView from './views/AboutView.vue'
import ContactView from './views/ContactView.vue'
import HomeView from './views/HomeView.vue'
import UserProfile from './views/UserView.vue'
import PrivCook from './views/CookiesView.vue'
import Products from './products/FilteredProducts.vue'
import Confirmation from './views/ConfirmationView.vue'
import ProductPage from './products/ProductPage.vue'
import AllGames from './products/AllGames.vue'
import CheckoutView from './views/CheckoutView.vue'
import RegisterUser from './views/RegisterUserView.vue'
import MyPages from './views/MyPagesView.vue'

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
    },
    {
      component: RegisterUser,
      path: '/register-user'
    },
    {
      component: AllGames,
      path: '/all-products'
    },
    {
      component: CheckoutView,
      path: '/checkout'
    },
    {
      component: MyPages,
      path: '/my-pages'
    }
  ],
  // https://router.vuejs.org/guide/advanced/navigation-guards.html
  scrollBehavior(t, f, s) {
    if (s) {
      return s
    } else {
      window.scrollTo(0, 0)
    }
  }
})
