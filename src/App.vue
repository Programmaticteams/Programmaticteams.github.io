<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav
    class="navbar--main text-white justify-between shadow-md text-xl font-extrabold subpixel-antialiased flex fixed py-4 top-0 w-full px-20 bg-gradient-to-t from-black to-transparent"
  >
    <div class="flex gap-2 items-center">
      <RouterLink to="/" tag="img">
        <img class="w-10" src="./assets/logo.png" />
      </RouterLink>

      <RouterLink to="/">Programmatics</RouterLink>
    </div>

    <ul class="flex gap-7 items-center">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
      <li>
        <RouterLink to="/team">Our Team</RouterLink>
      </li>
      <li>
        <RouterLink to="/enroll">Enroll</RouterLink>
      </li>
      <li>
        <RouterLink to="/volunteer">Volunteer</RouterLink>
      </li>
      <li>
        <RouterLink to="/articles">Articles</RouterLink>
      </li>
    </ul>
  </nav>

  <RouterView />
</template>
<style src="./style.css"></style>
