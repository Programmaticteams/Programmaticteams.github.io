<script setup></script>

<template>
  
  <main class="bg--home irl flex-col justify-center text-center">
    <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-3 font-extrabold text-7xl">Become a developer</h3>
    <h1 class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-500 mb-3 font-extrabold text-8xl pb-2">Programmatics</h1>
    <RouterLink to="/about"><button class="bg-gray-600 hover:bg-gray-500 active:bg-gray-600 p-3 rounded shadow-md font-bold text-green-300 m-8" role="link"> Why Us?</button></RouterLink>
    <RouterLink to="/about"><button class="bg-gray-600 hover:bg-gray-500 active:bg-gray-600 p-3 rounded shadow-md font-bold text-blue-300 m-8" role="link"> Get Started -> </button></RouterLink>
    <RouterLink to="/about"><button class="bg-gray-600 hover:bg-gray-500 active:bg-gray-600 p-3 rounded shadow-md font-bold text-green-300 m-8" role="link"> Volunteer</button></RouterLink>
  </main>
  
  <article></article>
  <footer></footer>
</template>

<style scoped>
.bg--home{
  background-image: url("https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
  background-repeat: no-repeat;
}
</style>