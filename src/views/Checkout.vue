/* eslint-disable */
<script>
import Price from '@/components/Price.vue'

export default {
  name: 'checkout',
  props: ['cart', 'cartTotal'],
  components: {
    Price
  }
}
</script>
<template>
  <div class="checkout">
    <h1>Checkout</h1>
    <table class="table table-hover" v-if="cart.length">
      <caaption class="text-right h3"><b>Total:</b>
        <price class="d-block text-success font-weight-light" :value="Number(cartTotal)" />
      </caaption>
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Item</th>
          <th scope="col" class="text-center">Qty</th>
          <th scope="col" class="text-right">Price</th>
          <th scope="col" class="text-right">Sub-Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="item.product.id">
          <td class="text-center">
            <div class="btn-group" role="group" aria-label="Basix example">
              <button class="btn btn-success" @click="$emit('add', item.product)">+</button>
              <button class="btn btn-outline-success" @click="$emit('delete', index)">-</button>
            </div>
          </td>
          <td>{{ item.product.name }}</td>
          <td class="text-center">{{ item.qty }}</td>
          <td class="text-right">{{ Number(item.product.price) }}</td>
          <td class="text-right">{{ Number(item.product.price * item.qty) }}</td>
        </tr>
      </tbody>
    </table>
    <router-link class="btn btn-sm btn-outline-success text-dark" to="/">Back To Products</router-link>
  </div>
</template>
