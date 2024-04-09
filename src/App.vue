<script>
export default {
  name: 'App'
}
</script>

<template>
  <div>
    <header>
      <nav class="bg-gray-800 text-white p-4">
        <div class="container mx-auto flex justify-between items-center">
          <h1 class="text-lg">KATA</h1>
          <div>
            <router-link to="/home" class="mr-4">Home</router-link>
            <router-link to="/cart">Cart</router-link>
          </div>
        </div>
      </nav>
    </header>

    <main class="mt-8">
      <router-view />
    </main>
  </div>
</template>