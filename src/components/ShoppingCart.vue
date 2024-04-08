<script setup>
import { useProducts } from "../composables/useProducts";

const { getCartItems, removeFromCart, updateCart, calculateTotal } =
  useProducts();

const cartItems = getCartItems();
const total = calculateTotal();
</script>

<template>
  <div class="shopping-cart">
    <h2>Shopping Cart</h2>
    <div v-for="item in cartItems" :key="item.id" class="cart-item">
      <img :src="item.image" :alt="item.title" class="cart-item-image" />
      <div class="cart-item-details">
        <h3>{{ item.title }}</h3>
        <p>${{ item.price }}</p>
        <input
          type="number"
          v-model.number="item.quantity"
          @change="updateCart(item)"
          min="1"
        />
        <button @click="removeFromCart(item.id)">Remove</button>
      </div>
    </div>
    <p>Total: ${{ total.toFixed(2) }}</p>
  </div>
</template>
