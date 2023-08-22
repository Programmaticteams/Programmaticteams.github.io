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
  </main>
  <article class="flex-col flex justify-center items-center">
    <h2 class="text-5xl font-extrabold text-center text-white mt-24 mb-3">
      What We Offer:
    </h2>
    <hr class="mx-auto w-1/4 mb-24 border border-purple-700" />
    <section class="flex flex-col justify-center gap-36">
      <div class="flex justify-center gap-24">
        <div>
          <img class="w-custom rounded" src="src/assets/discord.png" alt="" />
        </div>
        <div>
          <div
            class="w-12 h-12 rounded-xl mb-4 bg-gradient-to-br flex items-center justify-center text-white from-cyan-400 to-sky-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              ></path>
            </svg>
          </div>
          <h2 class="txt-custom text-xl font-bold text-white">
            Programming Classes
          </h2>
          <p class="txt-custom mt-2 mb-4 text-lg text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            quidem nesciunt et odio similique consectetur ducimus, corrupti
            totam recusandae, delectus perferendis natus ipsum? Numquam
            excepturi modi quod magni officiis autem aut quos.
          </p>
          <a
            href=""
            class="text-blue-300 transition hover:text-purple-300 duration-500 text-xl"
            >Enroll →</a
          >
        </div>
      </div>
      <!--  -->
      <!--  -->
      <!--  -->

      <div class="flex justify-center gap-24">
        <div>
          <div
            class="w-12 h-12 rounded-xl mb-4 bg-gradient-to-br flex items-center justify-center text-white from-cyan-400 to-sky-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
              ></path>
            </svg>
          </div>
          <h2 class="txt-custom text-xl font-bold text-white">
            Programming Classes
          </h2>
          <p class="txt-custom mt-2 mb-4 text-lg text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            quidem nesciunt et odio similique consectetur ducimus, corrupti
            totam recusandae, delectus perferendis natus ipsum? Numquam
            excepturi modi quod magni officiis autem aut quos.
          </p>
          <a
            href=""
            class="text-blue-300 transition hover:text-purple-300 duration-500 text-xl"
            >Enroll →</a
          >
        </div>
        <div>
          <img class="w-custom rounded" src="src/assets/discord.png" alt="" />
        </div>
      </div>
    </section>
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
  width: calc(100vw - (100vw - 100%));
}
</style>
