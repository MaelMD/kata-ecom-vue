<script setup>
import { useProducts } from "../composables/useProducts";

const { products, addToCart } = useProducts();
</script>

<template>
  <div class="product-list">
    <div v-for="product in products" :key="product.id" class="product-item">
      <img :src="product.image" :alt="product.title" />
      <h2>{{ product.title }}</h2>
      <p>${{ product.price }}</p>
      <button @click="addToCart(product)">Add to Cart</button>
    </div>
  </div>
</template>