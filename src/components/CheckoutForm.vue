<script setup>
import { ref } from 'vue';

const orderDetails = ref({
  fullName: '',
  creditCardNumber: '',
  address: '',
  city: '',
  zip: ''
});

const submitOrder = () => {
  console.log("Order details:", orderDetails.value);
  alert('Order completed! Thank you for your purchase.');

  orderDetails.value = {
    fullName: '',
    creditCardNumber: '',
    address: '',
    city: '',
    zip: ''
  };
};
</script>

<template>
  <section class="py-7 relative">
    <div
      class="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto flex items-center justify-center"
    >
      <div
        class="bg-gray-50 rounded-xl p-6 w-1/2 mb-8 max-lg:max-w-xl max-lg:mx-auto"
      >
        <form @submit.prevent="submitOrder">
          <div class="mb-6">
            <label
              for="fullName"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Full Name:</label
            >
            <input
              type="text"
              id="fullName"
              v-model="orderDetails.fullName"
              class="form-input rounded-lg w-full bg-gray-200 text-gray-700 p-3"
              placeholder="John Doe"
              required
            />
          </div>

          <div class="mb-6">
            <label
              for="creditCardNumber"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Credit Card Number:</label
            >
            <input
              type="text"
              id="creditCardNumber"
              v-model="orderDetails.creditCardNumber"
              class="form-input rounded-lg w-full bg-gray-200 text-gray-700 p-3"
              placeholder="1234 5678 9012 3456"
              required
            />
          </div>

          <div class="mb-6">
            <label
              for="address"
              class="block text-gray-700 text-sm font-bold mb-2"
              >Address:</label
            >
            <input
              type="text"
              id="address"
              v-model="orderDetails.address"
              class="form-input rounded-lg w-full bg-gray-200 text-gray-700 p-3"
              placeholder="1234 Main St"
              required
            />
          </div>

          <div class="mb-6">
            <label for="city" class="block text-gray-700 text-sm font-bold mb-2"
              >City:</label
            >
            <input
              type="text"
              id="city"
              v-model="orderDetails.city"
              class="form-input rounded-lg w-full bg-gray-200 text-gray-700 p-3"
              placeholder="Anytown"
              required
            />
          </div>

          <div class="mb-6">
            <label for="zip" class="block text-gray-700 text-sm font-bold mb-2"
              >ZIP/Postal Code:</label
            >
            <input
              type="text"
              id="zip"
              v-model="orderDetails.zip"
              class="form-input rounded-lg w-full bg-gray-200 text-gray-700 p-3"
              placeholder="12345"
              required
            />
          </div>

          <button
            type="submit"
            class="rounded-full w-full py-4 text-center bg-indigo-600 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700"
          >
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
