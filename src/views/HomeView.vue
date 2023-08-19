<script setup></script>

<template>
  <main class="bg--home irl flex-col justify-center text-center">
    <h3
      class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-3 font-extrabold text-7xl"
    >
      Become a developer
    </h3>
    <h1
      class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-500 mb-3 font-extrabold text-8xl pb-2"
    >
      Programmatics
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
  <article class="flex-col flex justify-center">
    <h2 class="text-5xl font-extrabold text-center text-white mt-24 mb-3">
      what we offer
    </h2>
    <hr class="mx-auto w-1/4 mb-10 border border-purple-700" />
    <section class="flex gap-56">
      <section class="flex-col h-1">
        <img
          class="img-style"
          src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="a picture of a person coding"
        />
        <h4 class="text-3xl text-center text-white font-bold my-5">
          Programming classes
        </h4>
        <p class="content-center text-center size text-yellow-50">
          Step into the exciting realm of coding with our range of programming
          classes at Programmatics. Dive into game development using Unity,
          master Python from beginner to advanced levels, and embark on tech
          adventures with Raspberry Pi. Our expert instructors and hands-on
          projects create a collaborative learning space for all skill levels.
          Join us now to fuel your passion for programming and open the door to
          endless opportunities
        </p>
        <RouterLink to="/enroll"
          ><button
            class="bg-gray-600 hover:bg-gray-500 active:bg-gray-600 p-3 rounded shadow-md font-bold text-blue-300 m-8"
            role="link"
          >
            Enroll Now
          </button></RouterLink
        >
      </section>
      <section class="flex flex-col justify-center">
        <img
          class="img-style"
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
            class="bg-gray-600 hover:bg-gray-500 active:bg-gray-600 p-3 rounded shadow-md font-bold text-green-300 m-8"
            role="link"
          >
            Volunteer
          </button></RouterLink
        >
      </section>
    </section>
  </article>
  <footer></footer>
</template>

<style scoped>
.bg--home {
  background-image: url("https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80");
  background-repeat: no-repeat;
}
</style>
