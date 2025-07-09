import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import CartView from '../views/CartView.vue'
import AdminDashboard from '../views/AdminDashboard.vue'
import AddProduct from '../views/AddProduct.vue'
import EditProduct from '../views/EditProduct.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/produk', name: 'Produk', component: ProductList },
  { path: '/produk/:id', name: 'DetailProduk', component: ProductDetail },
  { path: '/keranjang', name: 'Keranjang', component: CartView },
  { path: '/login', name: 'Login', component: LoginView },
  {
    path: '/admin',
    children: [
      { path: '', name: 'AdminDashboard', component: AdminDashboard },
      { path: 'produk/tambah', name: 'AddProduct', component: AddProduct },
      { path: 'produk/edit/:id', name: 'EditProduct', component: EditProduct }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
  if (to.path.startsWith('/admin') && !isLoggedIn) {
    next('/login')
  } else {
    next()
  }
})

export default router
