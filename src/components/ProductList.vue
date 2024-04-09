<template>
  <div class="container mx-auto mt-4">
    <div class="mb-6 flex items-center justify-center">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search products..."
        class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
      />

      <select
        v-model="selectedCategory"
        class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none ml-4"
      >
        <option value="">All Categories</option>
        <option v-for="category in categories" :value="category" :key="category">{{ category }}</option>
      </select>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div v-for="product in filteredProducts" :key="product.id" class="card bg-[#182825] shadow-2xl my-2 hover:scale-[1.01]">
        <figure class="bg-white">
          <img
            :src="product.image"
            :alt="product.title"
            class="w-full h-64 object-contain p-3"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-white">{{ product.title }}</h2>
          <p class="text-white">${{ product.price }}</p>
          <div class="card-actions justify-end">
            <button class="btn bg-[#AFA98D] border-none" @click="addToCart(product)">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useProducts } from '../composables/useProducts';

const { products, addToCart } = useProducts();
const searchQuery = ref('');
const selectedCategory = ref('');
const categories = computed(() => [...new Set(products.value.map(product => product.category))]);

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesCategory = selectedCategory.value === '' || product.category === selectedCategory.value;
    return matchesSearch && matchesCategory;
  });
});
</script>
