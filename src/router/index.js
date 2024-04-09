import { createRouter, createWebHistory } from 'vue-router';
import ShoppingCart from '../components/ShoppingCart.vue';
import CheckoutForm from '../components/CheckoutForm.vue';
import ProductList from '../components/ProductList.vue';

const routes = [
  { path: '/cart', component: ShoppingCart },
  { path: '/checkout', component: CheckoutForm },
  { path: '/home', component: ProductList },
  { path: '/checkout', component: CheckoutForm }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;