<script>
import Price from "./Price.vue";

export default {
  name: "product-list",
  components: { Price },
  props: ["products", "maximum"],
  computed: {
    showItem: function () {
      let max = this.maximum;
      return this.products.filter((item) => Math.trunc(item.price) <= max);
    },
  },
  methods: {
    before: function (el) {
      el.className = "d-none";
    },
    enter: function (el) {
      let delay = el.dataset.index * 100;
      setTimeout(function(){
        el.className =
          "row d-flex mb-3 align-items-center animated fadeInRight";
      }, delay);
    },
    leave: function (el) {
      let delay = el.dataset.index * 100;
      setTimeout(function(){
        el.className =
          "row d-flex mb-3 align-items-center animated fadeOutRight";
      }, delay);
    },
  },
};
</script>

<template>
  <transition-group
    name="fade"
    tag="div"
    @before-appear="before"
    @after-appear="enter"
    @leave="leave"
  >
    <div
      class="row mb-3 align-items-center"
      v-for="(item, index) in showItem"
      :key="index"
      :data-index="index"
    >
      <div class="col-1 m-auto">
        <button class="btn btn-success" @click="$parent.$emit('add', item)">
          +
        </button>
      </div>
      <div class="col-sm-4">
        <img :src="item.image" :alt="item.name" class="img-fluid d-block" />
      </div>
      <div class="col">
        <h3 class="text-success">{{ item.name }}</h3>
        <p class="mb-0">{{ item.description }}</p>
        <div class="h5 float-right">
          <price :value="Number(item.price)" :precision="2" />
        </div>
      </div>
    </div>
  </transition-group>
</template>
