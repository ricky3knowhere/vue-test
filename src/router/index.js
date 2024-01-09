import VueRouter from 'vue-router'
import ProductsVue from '@/views/Products.vue'
import CheckoutVue from '@/views/Checkout.vue'

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductsVue
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutVue

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    }
  ]
})

export default router
