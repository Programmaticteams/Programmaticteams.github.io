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
        Get Started ->
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
    <section class="flex gap-56">
      <section class="h-1 flex flex-col items-center" >
        <img
          class="img-style border rounded-sm border-black"
          src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="a picture of a person coding"
        />
        <h4 class="text-3xl text-center text-white font-bold my-5">
          Programming Classes
        </h4>
        <p class="content-center text-center font-semibold size text-white">
          Step into the exciting realm of coding with our range of programming
          classes at Programmatic. Dive into game development using Unity and
          master Python from beginner to advanced levels. Or, embark on tech
          adventures with Raspberry Pi and Python. Our instructors have hands-on
          experience and will guide you through projects to create a collaborative learning space for all skill levels.
          Join us now to fuel your passion for programming and open the door to
          endless opportunities.
        </p>
        <RouterLink to="/enroll"
          ><button
            class="bg-gray-600 hover:bg-gray-500 active:bg-gray-600 p-3 rounded shadow-md font-bold text-blue-300 m-8 flex-shrink-0"
            role="link"
          >
            Enroll Now
          </button></RouterLink
        >
      </section>
      <section class="flex flex-col items-center">
        <img
          class="img-style border rounded-sm border-black"
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="a picture of a person teaching someone"
        />
        <h4 class="text-3xl text-center text-white font-bold my-5">
          Volunteer oppotunity
        </h4>
        <p class="content-center text-center size text-yellow-50">
          Ready to make a meaningful impact while honing your skills? Our
          volunteering opportunities at Programmatics offer a chance to give
          back to the community and grow as an individual. Whether you're a
          coding enthusiast, a tech-savvy mentor, or just someone with a heart
          for helping, we welcome you to join our volunteer team.
        </p>
        <RouterLink to="/volunteer"
          ><button
            class="bg-gray-600 hover:bg-gray-500 active:bg-gray-600 p-3 rounded shadow-md font-bold text-green-300 m-8 flex-shrink-0"
            role="link"
          >
            Volunteer
          </button></RouterLink
        >
      </section>
    </section>
  </article>
  <footer class="flex flex-col justify-center my-28">
    <h4 class="text-center text-5xl font-extrabold text-white mt-24 mb-3">
      Contact us
    </h4>
    <p class="text-center text-2xl text-white m-5">
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
  background-image: url("https://img.freepik.com/free-vector/gradient-technology-symbols-background_23-2149110134.jpg?w=2000&t=st=1692487959~exp=1692488559~hmac=cdbe3ea73784aae2df972d3ae7b6233691632f91c147c58ac124c0db674354f5");
  background-repeat: no-repeat;
}
</style>
