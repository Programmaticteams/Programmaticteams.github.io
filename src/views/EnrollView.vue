<script setup>
import Zpattern1 from "../components/Zpattern-1.vue";
import Zpattern2 from "../components/Zpattern-2.vue";
import "../script.js"
</script>

<template>
  <header id="header" class="bg--about flex-col text-center shadow-lg">
    <h2
      class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 mb-3 font-extrabold text-8xl pb-2">
      Start Learning today!
    </h2>
    <button id="open-popup-btn"
      class="bg-gray-500 hover:bg-gray-600 active:bg-gray-600 p-5 rounded shadow-md font-extrabold text-blue-200 m-8 text-base open-popup-btn"
      role="link">
      Enroll Now &rarr;
    </button>
  </header>
  <!--  -->
  <!--  -->
  <!--  -->
  <!--  -->


  <aside id="formbar" class="bg-slate-700 shadow-lg">
    <button id="close-popup-btn"
      class="right-5 absolute top-5 hover:text-gray-300 focus:outline-none p-1 bg-white text-gray-900 rounded-lg"> Close
    </button>
    <div class="pt-16 px-6">


      <form id="inputForm" class="text-white">

        <div class="mb-6">
          <label for="name" class="block text-sm  font-bold">Name:</label>
          <input type="text" id="name" name="name" required
            class="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black">
          <br>
          <br>
          <label for="email" class="block text-sm font-bold">Email:</label>
          <input type="email" id="email" name="email" required
            class="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black">
          <br>
          <br>
          <label for="enrolled" class="block text-sm  font-bold">Class:</label><br>
          <div class="ml-4 space-y-1">
            <label for="message1" class="flex items-center">
              <input type="radio" id="message1" name="message" value="Pico" required class="mr-2">
              <span class="text-gray-100">Pico</span>
            </label>

            <label for="message2" class="flex items-center">
              <input type="radio" id="message2" name="message" value="PyBasic" required class="mr-2">
              <span class="text-gray-100">Python Basic</span>
            </label>

            <label for="message3" class="flex items-center">
              <input type="radio" id="message3" name="message" value="PyAdv" required class="mr-2">
              <span class="text-gray-100">Python Advanced</span>
            </label>

            <label for="message4" class="flex items-center">
              <input type="radio" id="message4" name="message" value="Scratch" required class="mr-2">
              <span class="text-gray-100">Scratch</span>
            </label>

            <label for="message5" class="flex items-center">
              <input type="radio" id="message5" name="message" value="Unity" required class="mr-2">
              <span class="text-gray-100">Unity</span>
            </label>
          </div>
        </div>

        <div class="flex justify-end">
          <button type="submit"
            class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300">Submit</button>
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
  <main id="main" class="flex gap-x-80 top-44 mb-10">
    <section class="flex flex-col gap-36">
      <Zpattern1 name="Scratch"
        desc="This course is designed for beginners with no background at all in computer science. Scratch is a dynamic block code language developed by MIT, designed to teach kids how to code. While Scratch is a far cry from the typical text based programming languages
        Scratch is excellent at teaching beginners how to think logically, introducing important concepts and letting students explore without the boilerplate of conventional languages."
          imgurl="scratch.png" />
      <Zpattern2 name="Python Basic"
        desc="Similarly to our Scratch course, this course is designed for prospective students with little to no experience programming. This course jumps right into a text based programming language: Python. Python is a general purpose language 
        developed by Guido van Rossum, and it is one of the easiest languages to learn. Despite its simpilicty, has been used in many important projects by expert developers (i.e. machine learning)."
          imgurl="python.png" />
      <Zpattern1 name="Python Advanced"
        desc="A follow up to our Python Basic course, this course aims to focus on more advanced applications of Python. Rather than simply learning Python as a language, students will get to understand that languages are only tools. We'll dive
         into advanced Python syntax (i.e. classes), data structures, algorithms, and real-world projects to become a proficient developer."
         imgurl="python.png" />
      <Zpattern2 name="Unity"
        desc="Get started with practical computer science by signing up for our Unity class. In this class, we'll take a look at Unity, an amazing cross-platform game engine that is used by many professionals to create popular games like 
        Call of Duty, Pokemon Go, and Beat Saber. In this class, you'll learn, yourself, how to use this tool to create amazing games and projects."
         imgurl="unity.jpg" />
      <Zpattern1 name="Pico & Raspberry Pi" desc="Embark on a journey into the world of Raspberry Pi and Pico. Along side software, learn to use electronics and hardware to create exciting projects with the Raspberry Pi and the new Raspberry Pi Pico microcontroller. This is about as practical as it gets:
        using software along side hardware to create real-world projects." icon="raspberrypi icon"
        imgurl="raspberrypi.png" />

    </section>

  </main>

  <h1 class="mb-20 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-200 text-3xl text-center">Enroll Now, By Clicking The Enroll Button At
    The Top Of The Page</h1>
  <div id="overlay" class="fixed inset-0 bg-black opacity-50 pointer-events-none z-49"></div>
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
  width: 99vw;
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
