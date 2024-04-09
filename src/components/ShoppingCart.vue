<template>
  <section class="py-7 relative">
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
      <h2 class="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart</h2>
      
      <div class="hidden lg:grid grid-cols-2 py-6">
        <div class="font-normal text-xl leading-8 text-gray-500">Product</div>
        <div class="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
          <span class="w-full max-w-[200px] text-center">Delivery Charge</span>
          <span class="w-full max-w-[260px] text-center">Quantity</span>
          <span class="w-full max-w-[200px] text-center">Total</span>
        </div>
      </div>

      <div v-for="item in cartItems" :key="item.id" class="grid grid-cols-1 lg:grid-cols-2 gap-6 border-t border-gray-200 py-6">
        <div class="flex items-center flex-col lg:flex-row gap-3 lg:gap-6 w-full justify-center">
          <div class="img-box">
            <img :src="item.image" :alt="item.title" class="xl:w-[140px]">
          </div>
          <div class="pro-data w-full max-w-sm">
            <h5 class="font-semibold text-xl leading-8 text-black text-center">{{ item.title }}</h5>
            <p class="font-normal text-lg leading-8 text-gray-500 my-3 text-center">{{ item.category }}</p>
            <h6 class="font-medium text-lg leading-8 text-indigo-600 text-center">${{ item.price }}</h6>
          </div>
        </div>
        <div class="flex items-center lg:flex-row w-full lg:max-w-xl lg:mx-auto gap-2">
          <h6 class="font-manrope font-bold text-2xl leading-9 text-black w-full text-center">
            $15 <span class="text-sm text-gray-300 ml-3 lg:hidden">(Delivery Charge)</span>
          </h6>
          <div class="flex items-center w-1/3 mx-auto justify-center">
            <input type="number" class="form-input rounded-lg bg-gray-300 text-lg p-3 w-full" v-model.number="item.quantity" @change="updateCart(item)">
          </div>
          <h6 class="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full text-center">
            ${{ item.price * item.quantity }}
          </h6>
          <button class="text-red-500 text-sm w-1/5 text-center" @click="removeFromCart(item.id)">
            Remove
          </button>
        </div>
      </div>

      <div class="bg-gray-50 rounded-xl p-6 w-full mb-8">
        <div class="flex items-center justify-between w-full mb-6">
          <p class="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
          <h6 class="font-semibold text-xl leading-8 text-gray-900">${{ calculateTotal() }}</h6>
        </div>
        <div class="flex items-center justify-between w-full pb-6 border-b border-gray-200">
          <p class="font-normal text-xl leading-8 text-gray-400">Delivery Charge</p>
          <h6 class="font-semibold text-xl leading-8 text-gray-900">${{ cartItems.length * 15 }}</h6>
        </div>
        <div class="flex items-center justify-between w-full py-6">
          <p class="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
          <h6 class="font-manrope font-medium text-2xl leading-9 text-indigo-500">${{ calculateTotal() + cartItems.length * 15 }}</h6>
        </div>
      </div>

      <div class="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
        <button class="rounded-full py-4 w-full max-w-[280px] flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
          <span class="px-2 font-semibold text-lg leading-8 text-indigo-600">Add Coupon Code</span>
        </button>
        <button class="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700" @click="proceedToCheckout">
          Continue to Payment
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';
import { useProducts } from "../composables/useProducts";
import { useRouter } from 'vue-router';

const router = useRouter();

const proceedToCheckout = () => {
  router.push('/checkout');
};

const { getCartItems, calculateTotal } = useProducts();

const cartItems = computed(getCartItems);
const total = computed(calculateTotal);
</script>

