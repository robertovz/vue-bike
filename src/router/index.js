import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from "@/components/Products/ProductList/ProductList"
import Details from "@/components/Products/Details";
import Cart from "@/components/Cart/Checkout";
import About from "@/components/About";
import notFound from "@/components/NotFound";
Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/products', name: "products", component: Products },
  { path: '/details/:p_name/:p_id', name: "details", component: Details },
  { path: '/checkout', name: 'Cart', component: Cart },
  { path: '/about', name: 'About', component: About },
  { path: '*', name: 'notFound', component: notFound },
]


const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
})

export default router;


Vue.component('navbar', require('../components/Navbar.vue').default);
Vue.component('add-to-cart', require('../components/Cart/AddToCart.vue').default);
Vue.component('add-to-compare', require('../components/Compare/AddToCompare.vue').default);
Vue.component('navbar', require('../components/Navbar.vue').default);
Vue.component('products-component', require('../components/Products/ProductList/Products.vue').default);
Vue.component('footer-component', require('../components/Footer.vue').default);
Vue.component('miniCart', require('../components/Cart/MiniCart.vue').default);
Vue.component('miniList', require('../components/Compare/MiniList.vue').default);
Vue.component('compareList', require('../components/Compare/CompareList.vue').default);
Vue.component('productsCategory', require('../components/Products/ProductsCategory.vue').default);
