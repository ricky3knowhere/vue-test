/* eslint-disable */
<script>
import ProductList from '@/components/ProductList.vue'
import PriceSlider from '@/components/PriceSlider.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'products',
  props: ['products', 'maximum', 'cart', 'cartQty', 'cartTotal', 'slideStatus', 'sliderStatus'],
  components: { Navbar, PriceSlider, ProductList }
}
</script>

<template>
  <main>
    <h1>VueShop</h1>
    <navbar :cart="cart" :cartQyt="cartQty" :cartTotal="cartTotal" />
    <price-slider :sliderStatus="sliderStatus" />
    <product-list :maximum="maximum" :products="products" />
  </main>
</template>
