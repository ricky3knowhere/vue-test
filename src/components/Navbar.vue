<script>
import Price from "./Price.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "navbar",
  props: ["cart", "cartQyt", "cartTotal"],
  components: {
    Price,
    FontAwesomeIcon,
  },
  filters: {
    currencyFormat: (value) => "Rp" + Number.parseFloat(value).toFixed(2),
  },
};
</script>

<template>
  <nav class="navbar navbar-light sticky-top">
    <div class="navbar-text ml-auto d-flex">
      <button
        class="btn btn-sm btn-outline-success"
        @click="$parent.$emit('toggle')"
      >
        <font-awesome-icon icon="dollar-sign" />
      </button>

      <div class="dropdown">
        <button
          class="btn btn-success btn-sm dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          data-bs-auto-close="false"
          aria-expanded="false"
        >
          <span class="badge rounded-pill text-bg-light">{{ cartQyt }}</span>
          <i class="fas fa-shopping-cart mx-2" />
          <font-awesome-icon icon="shopping-cart" />
          <price :value="Number(cartTotal)" />
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <div v-for="(item, index) in cart" :key="index">
            <li>
              <a class="dropdown-item text-nowrap text-right" href="#!">
                <span
                  class="badge rounded-pill text-bg-warning align-top me-1"
                  >{{ item.qty }}</span
                >
                {{ item.product.name }}
                <b>{{ (item.qty * item.product.price) | currencyFormat }}</b>
                <span
                  href="#!"
                  class="badge text-bg-danger ms-2"
                  @click="$parent.$emit('delete', index)"
                >
                  -
                </span>
              </a>
            </li>
          </div>

          <router-link
            class="btn btn-sm btn-outline-success text-dark text-align-end me-2"
            to="/checkout"
            >Checkout</router-link
          >
        </ul>
      </div>
    </div>
  </nav>
</template>
