<script setup>
</script>
<template>
  <main class="bg--home irl flex-col justify-center text-center shadow-lg">
    <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-3 font-extrabold text-7xl">
      Welcome to
    </h3>
    <h1 class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-500 mb-3 font-extrabold text-8xl pb-2">
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
    <a href="/enroll"><button
        class="bg-gray-600 hover:bg-gray-500 active:bg-gray-600 p-3 rounded shadow-md font-bold text-blue-300 m-8"
        role="link">
        Get Started &rarr;
      </button></a>
  </main>
  <hr class="mx-auto w-5/6 mb-24 border border-slate-400 mt-10" />
  <article class="flex-col flex justify-center items-center">
    <h2 class="text-8xl font-extrabold text-center text-white mt-5 mb-3">
      Who Are We?
    </h2>
    <hr class="mx-auto w-1/4 mb-20 border border-purple-700" />
    <section class="flex flex-col justify-center gap-36">
      <div class="flex justify-center">
        <div>
          <p class="txt-custom mt-2 mb-4 text-lg text-gray-300 justify-center text-center">
            Programmatic is an organization dedicated to teaching prospective students how to program. Computer science is
            a subject that is growing more and more important by the day, and we want
            to make sure that kids are able to explore and learn in this field, to develop important skills like
            algorithmic thinking.
          </p>
          <a href="/about"
            class="text-blue-300 transition hover:text-purple-300 duration-500 text-xl text-center justify-center">About
            →</a>
        </div>
      </div>
    </section>
  </article>
  <hr class="mx-auto w-5/6 mb-24 border border-slate-400 mt-32" />
  <article class="flex-col flex justify-center items-center">
    <h2 class="text-8xl font-extrabold text-center text-white mt-24 mb-3">
      What Can We Offer?
    </h2>
    <hr class="mx-auto w-1/3 mb-24 border border-purple-700 mt-1" />
    <section class="flex flex-col justify-center gap-36">
      <div class="flex justify-center gap-24">
        <div class="image-container">
          <img class="w-custom rounded " src="src/assets/circuit.avif" alt="" />
        </div>
        <div>
          <h2 class="txt-custom text-5xl font-extrabold py-5 text-white mt-1">
            CS Classes
          </h2>
          <p class="txt-custom mt-4 py-1 mb-4 text-lg text-gray-300">
            CS is an incredibly important subject that isn't taught to it's fullest extent in most school districts. Computer science is the driving force
            behind some of the most influential projects, innventions, and applications in today's world, and now, more than ever, it becomes crucial
            that this subject is explored and taught. Programmatic offers 5 courses (with more on the way) for a variety of skill levels. 
          </p>
          <a href="/enroll" class="text-blue-300 transition hover:text-purple-300 duration-500 text-xl">Enroll →</a>
        </div>
      </div>

      
      <!--  -->
      <!--  -->
      <!--  -->

      <div class="flex justify-center gap-24">
        <div>
          <h2 class="txt-custom text-5xl font-extrabold py-5 text-white mt-1">
            Volunteer
          </h2>
          <p class="txt-custom mt-4 mb-4 py-1 text-lg text-gray-300">
            Want to help? Programmatic is the perfect spot for programmers and developers who are interested in teaching computer science.
            Not only can you gain experience in honing in your presentation and teaching ability, you can earn volunteer ours, and teach
            the next generation of students computer science. You can choose between 5 courses to teach or work on expanding and developing Programmatic.
          </p>
          <a href="/volunteer" class="text-blue-300 transition hover:text-purple-300 duration-500 text-xl">Volunteer →</a>
        </div>
        <div class="image-container">
          <img class="w-custom rounded " src="src/assets/discord.png" alt="" />
        </div>
      </div>
    </section>
  </article>
  <hr class="mx-auto w-5/6 mb-24 border border-slate-400 mt-32" />
  <footer class="flex flex-col justify-center mb-10">
    <h4 class="text-center text-5xl font-extrabold text-white mt-1  mb-10">
      Contact Us
    </h4>
    <p class="text-center text-2xl text-white m-5 cont-us ">
      Got questions? Reach out to us! We're here to answer your inquiries,
      provide more information about our programming classes and volunteering
      opportunities, and guide you through the exciting journey ahead.
    </p>
    <h5 class="text-2xl text-center text-white font-extrabold bg-slate-800">
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

.image-container {
  display: inline-block;
  position: relative;
  /* Required for positioning the light effect */
}

.image-container img {
  border: 10px solid transparent;

  box-shadow: 0 0 40px rgba(128, 0, 128, 0.7);

  transition: box-shadow 0.3s ease-in-out;
}

.image-container:hover img {
  box-shadow: 0 0 60px rgb(100, 0, 128);

}
</style>
