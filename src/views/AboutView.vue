<script setup>
import about from "../components/About.vue";
</script>

<template>
  <div class="container gap-96">
    <div class="logo-container">
      <img
        alt="Programmatic logo"
        class="logo"
        src="../assets/logo.png"
        width="700"
        height="700"
      />
    </div>
    <header>
      <main>
        <div class="content">
          <about />
        </div>
      </main>
    </header>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

header {
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo-container {
  margin-top: auto;
  margin-bottom: auto;
}

.logo {
  display: block;
}

.content {
  flex: 1;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: stretch;
  }

  header {
    justify-content: center;
  }

  .logo-container {
    margin: 1rem 0;
  }
}
</style>

<!-- <header class="bg--about flex-col text-center shadow-lg">
    <h2
      class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 mb-3 font-extrabold text-8xl pb-2"
    >
      Who We Are
    </h2>
  </header>
  <main>
    <section class="flex justify-center content-center gap-32">
      <div class="flex flex-col justify-center gap-4">
        <h3 class="txt-custom text-5xl font-bold text-white">
          What is Programmatic?
        </h3>
        <p class="w-about-custom txt-custom mt-2 mb-4 text-lg text-gray-300">
          We are a nonprofit organization committed to providing extensive free
          online education in Scratch, Python, Raspberry Pi, and Unity. Through
          Google Meet, we connect with students from diverse backgrounds and
          geographical locations, offering comprehensive courses taught by
          experienced high school student instructors.
        </p>
      </div>
      <div>
        <img class="w-about-img-custom" src="public/logo_short.png" alt="" />
      </div>
    </section>
  </main>
  <footer class="mt-52 flex gap-24 mb-10 overflow-hidden">
    <section class="flex flex-col w-about-extra-custom">
      <h4 class="txt-custom text-3xl font-bold text-white">Future goals</h4>
      <p
        class="w-about-extra-custom txt-custom mt-2 mb-4 text-lg text-gray-300"
      >
        In our pursuit of empowering prospective computer science students
        worldwide, our future goals encompass expanding our organization,
        ensuring accessibility, while also broadening the scope of our
        curriculum to encompass a wider variety of programming concepts. By
        expanding, as well as incorporating a diverse range of programming
        concepts into our curriculum, we aspire to cater to the varied interests
        and career aspirations of our students.
      </p>
    </section>
    <section class="flex flex-col w-about-extra-custom">
      <h4 class="txt-custom text-3xl font-bold text-white">Our mission</h4>
      <p
        class="w-about-extra-custom txt-custom mt-2 mb-4 text-lg text-gray-300"
      >
        At the heart of our organization lies a mission: to nurture digital
        literacy among students and empower them with essential skills to not
        only navigate but thrive in an era fundamentally defined by computer
        science. We are dedicated to fostering a generation of individuals who
        can confidently embrace the digital landscape, unlocking countless
        opportunities for personal and professional growth.
      </p>
    </section>
    <section class="flex flex-col w-about-extra-custom">
      <h4 class="txt-custom text-3xl font-bold text-white">Who Can Benefit?</h4>
      <p
        class="w-about-extra-custom txt-custom mt-2 mb-4 text-lg text-gray-300"
      >
        Our programs at Programmatics cater to anyone and are ideal for those
        eager to immerse themselves in programming. Parents who understand the
        significance of teaching their children with early technological and
        problem-solving skills will discover our offerings to be a valuable
        investment. Whether your child is taking their first steps into coding
        or already has some coding experience, our curriculum ensures they
        progress confidently and skillfully.
      </p>
    </section>
  </footer> -->

<!-- <style scoped>
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

.w-about-custom {
  width: 600px;
}

.w-about-img-custom {
  width: 300px;
}

.w-about-extra-custom {
  width: 400px;
}
</style> -->
