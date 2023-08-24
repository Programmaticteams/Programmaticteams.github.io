<script setup>
import Zpattern1 from "../components/Zpattern-1.vue";
import Zpattern2 from "../components/Zpattern-2.vue";
import "../script.js";
</script>

<template>
  <header id="header" class="bg--about flex-col text-center shadow-lg">
    <h2
      class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 mb-3 font-extrabold text-8xl pb-2"
    >
      Start Learning today!
    </h2>
    <button
      id="open-popup-btn"
      class="bg-gray-500 hover:bg-gray-600 active:bg-gray-600 p-5 rounded shadow-md font-extrabold text-blue-200 m-8 text-base open-popup-btn"
      role="link"
    >
      Enroll Now &rarr;
    </button>
  </header>
  <!--  -->
  <!--  -->
  <!--  -->
  <!--  -->

  <aside id="formbar" class="bg-slate-700 shadow-lg">
    <button
      id="close-popup-btn"
      class="right-5 absolute top-5 hover:text-gray-300 focus:outline-none p-1 bg-white text-gray-900 rounded-lg"
    >
      Close
    </button>
    <div class="pt-16 px-6">
      <form id="inputForm" class="text-white">
        <div class="mb-6">
          <label for="name" class="block text-sm font-bold">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            class="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
          />
          <br />
          <br />
          <label for="email" class="block text-sm font-bold">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            class="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
          />
          <br />
          <br />
          <label for="enrolled" class="block text-sm font-bold">Class:</label
          ><br />
          <div class="ml-4 space-y-1">
            <label for="message1" class="flex items-center">
              <input
                type="radio"
                id="message1"
                name="message"
                value="Pico"
                required
                class="mr-2"
              />
              <span class="text-gray-100">Pico</span>
            </label>

            <label for="message2" class="flex items-center">
              <input
                type="radio"
                id="message2"
                name="message"
                value="PyBasic"
                required
                class="mr-2"
              />
              <span class="text-gray-100">Python Basic</span>
            </label>

            <label for="message3" class="flex items-center">
              <input
                type="radio"
                id="message3"
                name="message"
                value="PyAdv"
                required
                class="mr-2"
              />
              <span class="text-gray-100">Python Advanced</span>
            </label>

            <label for="message4" class="flex items-center">
              <input
                type="radio"
                id="message4"
                name="message"
                value="Scratch"
                required
                class="mr-2"
              />
              <span class="text-gray-100">Scratch</span>
            </label>

            <label for="message5" class="flex items-center">
              <input
                type="radio"
                id="message5"
                name="message"
                value="Unity"
                required
                class="mr-2"
              />
              <span class="text-gray-100">Unity</span>
            </label>
          </div>
        </div>

        <div class="flex justify-end">
          <button
            type="submit"
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </aside>

  <!-- <aside id=".main_popup" class="popup hidden w-full h-screen absolute justify-center">
    <div  class="popup-overlay h-screen w-full absolute"></div>
    <div  class="main-popup absolute right-0 h-screen w-1/2 bg-blue-400 py-8 px-5 leading-4 flex justify-center">
      <div class="popup-content">
        <span
          class="close-btn absolute top-4 right-4 text-4x1 cursor-pointer border p-3 hover:bg-white hover:transform transition duration-500 ease-in-out text-black">&times;</span>
        <h3>Lorem ipsum dolor sit.</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod est
          corporis assumenda neque, a quia explicabo aliquam, voluptatum quam
          quaerat minima soluta laudantium ea? Atque dolor veniam libero itaque
          assumenda doloribus. Aliquid?
        </p>
      </div>
    </div>
  </aside> -->
  <!--  -->
  <!--  -->
  <!--  -->
  <!--  -->
  <main id="main" class="flex gap-x-80 top-44 mb-10"></main>
</template>

<style scoped>
.bg--about {
  background-image: url("https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2662&q=80");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  max-width: 100vw;
  width: calc(100vw - (100vw - 100%));
  padding-top: 230px;
  padding-bottom: 230px;
  margin-bottom: 100px;
}

#overlay {
  opacity: 0;
  display: none;
  transition: opacity 0.5s ease-in-out;
}

#formbar {
  pointer-events: all;
  width: 400px;
  position: fixed;
  top: 0;
  right: -400px;
  height: 100vh;
  z-index: 50;
  transition: right 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.overflow-hidden-compensate {
  overflow: hidden;
  margin-right: calc(-1 * (100vw - 100%));
}

.popup {
  overflow: hidden;
}

@keyframes slide-in {
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(0%);
  }
}

@keyframes slide-out {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(100%);
  }
}
</style>
