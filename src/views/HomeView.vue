<script setup></script>

<template>
  <main class="bg--home irl flex-col justify-center text-center shadow-lg">
    <h3
      class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-3 font-extrabold text-7xl"
    >
      Welcome to
    </h3>
    <h1
      class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-500 mb-3 font-extrabold text-8xl pb-2"
    >
      Programmatic
    </h1>
    <!-- <RouterLink to="/about"
      ><button
        class="bg-gray-600 hover:bg-gray-500 active:bg-gray-600 p-3 rounded shadow-md font-bold text-green-300 m-8"
        role="link"
      >
        Why Us?
      </button></RouterLink
    > -->
    <RouterLink to="/enroll"
      ><button
        class="bg-gray-600 hover:bg-gray-500 active:bg-gray-600 p-3 rounded shadow-md font-bold text-blue-300 m-8"
        role="link"
      >
        Get Started &rarr;
      </button></RouterLink
    >
    <!-- <RouterLink to="/volunteer"
      ><button
        class="bg-gray-600 hover:bg-gray-500 active:bg-gray-600 p-3 rounded shadow-md font-bold text-green-300 m-8"
        role="link"
      >
        Volunteer
      </button></RouterLink
    > -->
  </main>
  <article class="flex-col flex justify-center items-center">
    <h2 class="text-5xl font-extrabold text-center text-white mt-24 mb-3">
      What We Offer:
    </h2>
    <hr class="mx-auto w-1/4 mb-12 border border-purple-700" />
    <section></section>
  </article>
  <footer class="flex flex-col justify-center my-28">
    <h4 class="text-center text-5xl font-extrabold text-white mt-24 mb-3">
      Contact us
    </h4>
    <p class="text-center text-2xl text-white m-5 cont-us">
      Got questions? Reach out to us! We're here to answer your inquiries,
      provide more information about our programming classes and volunteering
      opportunities, and guide you through the exciting journey ahead.
    </p>
    <h5 class="text-2xl text-center text-white font-thin">
      programmaticteams@gmail.com
    </h5>
  </footer>
</template>

<style scoped>
.bg--home {
  background-image: url("https://images.unsplash.com/photo-1625535163131-9d1fc30ea5f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2664&q=80");
  background-repeat: no-repeat;
}
</style>
