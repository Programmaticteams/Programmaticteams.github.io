<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav
    class="navbar--main text-white justify-between fixed shadow-md text-xl font-extrabold subpixel-antialiased flex py-4 top-0 w-full px-20 bg-gray-900"
  >
    <div class="flex items-center">
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
      <div class="inline-block w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
      <li>
        <a href="https://discord.gg/PGUc95ZRYk"> <img class="w-8" src="./assets/discord.png"></a>
      </li>
      <li>
        <a href="temp"> <img class="w-9" src="./assets/instagram.png"></a>
      </li>
    </ul>
  </nav>

  <RouterView />
</template>
<style src="./style.css"></style>
