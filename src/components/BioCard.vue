<script setup>
const props = defineProps({
  name: String,
  desc: String,
  langs: String,
  discord: String,
  imgurl: String
})


function getImageUrl() {
  return new URL(`../assets/${props.imgurl}`, import.meta.url)
}
</script>

 
<template>
  <div class="card border-4 border-red-500 flex justify-center">
    <div class="content border-4 border-blue-500 flex ">
      <img class="border-4 border-green-500 w-20 h-20 " :src="getImageUrl()" alt="a picture of a Programmatic member">
      <section>
        <h2 class="border-4 border-yellow-500">{{ name }}</h2>
        <p class="border-4 border-yellow-500">{{ desc }}</p>
        <p class="border-4 border-yellow-500">{{ thecs }}</p>
        <p class="border-4 border-yellow-500">{{ langs }}</p>
        <p class="border-4 border-yellow-500">{{ discord }}</p>
        <button class="button flex justify-center py-3 items-center">
          <div class="flex justify-center items-center">
            <p>Learn more</p> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              class="w-6 h-6"> 
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path>
            </svg>
          </div>
        </button>
      </section>
    </div>
  </div>
</template>


