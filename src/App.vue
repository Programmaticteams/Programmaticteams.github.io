<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="fixed top-0">
    <nav class="navbar--main text-yellow-400">
      <ul class="navbar--item">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>
<style src="./style.css"></style>
