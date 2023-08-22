<script setup>
import Zpattern1 from "../components/Zpattern-1.vue";
import Zpattern2 from "../components/Zpattern-2.vue";
// const open_btn = document.querySelector(".open-popup-btn");
// const close_btn = document.querySelector(".close-btn");
// const popup = document.querySelector(".popup");
// const main_popup = document.querySelector(".main-popup");

// open_btn.addEventListener("click", () => {
//   popup.style.display = "flex";
//   margin_popup.style.cssText =
//     "animation:slide-in .5s ease; animation-fill-mode: forwards;";
// });

// close_btn.addEventListener("click", () => {
//   margin_popup.style.cssText =
//     "animation:slide-out .5s ease; animation-fill-mode: forwards;";
//   setTimeout(() => {
//     popup.style.display = "none";
//   }, 500);
// });

// window.addEventListener("click", (e) => {
//   if (e.target == document.querySelector(".popup-overlay")) {
//     margin_popup.style.cssText =
//       "animation:slide-out .5s ease; animation-fill-mode: forwards;";
//     setTimeout(() => {
//       popup.style.display = "none";
//     }, 500);
//   }
// });
</script>

<template>
  <header class="bg--about flex-col text-center shadow-lg">
    <h2
      class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 mb-3 font-extrabold text-8xl pb-2"
    >
      Start Learning today!
    </h2>
    <button
      class="bg-gray-600 hover:bg-gray-500 active:bg-gray-600 p-3 rounded shadow-md font-bold text-blue-300 m-8 text-base open-popup-btn"
      role="link"
    >
      Enroll &rarr;
    </button>
  </header>
  <!--  -->
  <!--  -->
  <!--  -->
  <!--  -->
  <aside class="popup hidden w-full h-screen absolute justify-center">
    <div class="popup-overlay h-screen w-full absolute"></div>
    <div
      class="main-popup absolute right-0 h-screen w-1/2 bg-blue-400 py-8 px-5 leading-4 flex justify-center"
    >
      <div class="popup-content">
        <span
          class="close-btn absolute top-4 right-4 text-4x1 cursor-pointer border p-3 hover:bg-white hover:transform transition duration-500 ease-in-out text-black"
          >&times;</span
        >
        <h3>Lorem ipsum dolor sit.</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod est
          corporis assumenda neque, a quia explicabo aliquam, voluptatum quam
          quaerat minima soluta laudantium ea? Atque dolor veniam libero itaque
          assumenda doloribus. Aliquid?
        </p>
      </div>
    </div>
  </aside>
  <!--  -->
  <!--  -->
  <!--  -->
  <!--  -->
  <main class="flex gap-x-80 top-44">
    <section class="flex flex-col gap-36">
      <Zpattern1
        name="lore"
        desc="Programmatic is a community of developers, designers, and content creators who are passionate about creating and learning."
        icon="python icon"
        imgurl="discord.png"
      />
      <Zpattern2
        name="Programmatic"
        desc="Programmatic is a community of developers, designers, and content creators who are passionate about creating and learning."
        icon="python icon"
        imgurl="discord.png"
      />
      <Zpattern1
        name="Programmatic"
        desc="Programmatic is a community of developers, designers, and content creators who are passionate about creating and learning."
        icon="python icon"
        imgurl="discord.png"
      />
      <Zpattern2
        name="Programmatic"
        desc="Programmatic is a community of developers, designers, and content creators who are passionate about creating and learning."
        icon="python icon"
        imgurl="discord.png"
      />
      <Zpattern1
        name="Programmatic"
        desc="Programmatic is a community of developers, designers, and content creators who are passionate about creating and learning."
        icon="python icon"
        imgurl="discord.png"
      />
    </section>
  </main>
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

.popup-overlay {
  background-color: rgba(0, 0, 0, 0.575);
}

.main-popup {
  z-index: 1;
  transform: translateX(100%);
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
