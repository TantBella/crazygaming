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
import FavoriteList from './views/FavoriteList.vue'
import TrackOrder from './Userviews/TrackOrder.vue'
import MyPurchase from './Userviews/MyPurchase.vue'
import MemberDiscount from './Userviews/MemberDiscount.vue'
import DeleteAccount from './Userviews/DeleteAccount.vue'
import UserSettings from './Userviews/UserSettings.vue'

import Categories from './products/CategoriePage.vue'
// admin
import Admin from './admin/AdminView.vue'
import Orders from './admin/OrdersView.vue'
import Customerscart from './admin/CustomersCartView.vue'
import CustomersWishlist from './admin/CustomersWishlistView.vue'
import ProductsAdmin from './admin/ProductsAdminView.vue'
import Rating from './admin/RatingView.vue'
import Saleschart from './admin/SaleschartView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: DeleteAccount,
      path: '/deleteaccount'
    },
    {
      component: UserSettings,
      path: '/settings'
    },

    {
      component: MemberDiscount,
      path: '/Memberdiscount'
    },
    {
      component: MyPurchase,
      path: '/Purchases'
    },
    {
      component: TrackOrder,
      path: '/Trackorder'
    },
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
    },
    {
      component: FavoriteList,
      path: '/wishlist'
    },
    {
      component: Categories,
      path: '/categories'
    },
    {
      component: Admin,
      path: '/admin'
    },
    {
      component: Orders,
      path: '/admin-orders'
    },
    {
      component: Customerscart,
      path: '/admin-cart'
    },
    {
      component: CustomersWishlist,
      path: '/admin-wish'
    },
    {
      component: ProductsAdmin,
      path: '/admin-products'
    },
    {
      component: Rating,
      path: '/admin-rating'
    },
    {
      component: Saleschart,
      path: '/admin-sales'
    }
  ],
  // https://router.vuejs.org/guide/advanced/navigation-guards.html
  // https://router.vuejs.org/guide/advanced/scroll-behavior.html
  scrollBehavior(t, f, s) {
    if (s) {
      return s
    } else {
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 0)
    }
  }
})
