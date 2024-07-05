<template>
  <q-page padding>
    <div class="row justify-center">
      <q-btn @click="fetchProducts" label="Fetch Products" />
    </div>
    <div v-if="products.length">
      <h2>Product List:</h2>
      <q-list bordered padding>
        <q-item v-for="product in products" :key="product.id">
          <q-item-section>
            <q-item-label>{{ product.name }}</q-item-label>
            <q-item-label caption>{{ product.description }}</q-item-label>
            <q-item-label caption>{{ product.price }} $</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        this.products = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
};
</script>

<style>
.row {
  margin-top: 20px;
}
</style>
