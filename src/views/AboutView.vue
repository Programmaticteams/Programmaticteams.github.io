<template>
  <header class="bg--about flex-col text-center shadow-lg">
    <h2
      class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500 mb-3 font-extrabold text-8xl pb-2"
    >
      Who we are?
    </h2>
  </header>
  <main>
    <section class="flex justify-center content-center gap-32">
      <div class="flex flex-col justify-center gap-4">
        <h3 class="txt-custom text-5xl font-bold text-white">Our mission</h3>
        <p class="w-about-custom txt-custom mt-2 mb-4 text-lg text-gray-300">
          At the heart of our organization lies a profound mission: to nurture
          digital literacy among students and empower them with essential skills
          to not only navigate but thrive in an era fundamentally defined by
          computers. We are dedicated to fostering a generation of individuals
          who can confidently embrace the digital landscape, unlocking countless
          opportunities for personal and professional growth.
        </p>
      </div>
      <div>
        <img class="w-about-img-custom" src="public/logo_short.png" alt="" />
      </div>
    </section>
  </main>
  <footer class="mt-52 flex gap-24 mb-10">
    <section class="flex flex-col w-about-extra-custom">
      <h4 class="txt-custom text-3xl font-bold text-white">Future goals</h4>
      <p
        class="w-about-extra-custom txt-custom mt-2 mb-4 text-lg text-gray-300"
      >
        In our pursuit of empowering learners worldwide, our future goals
        encompass expanding our teaching into other languages, ensuring
        accessibility to diverse communities, while also broadening the scope of
        our curriculum to encompass a wider variety of programming languages. By
        breaking language barriers and offering courses in multiple languages,
        we aim to create a more inclusive learning environment, enabling
        individuals from different linguistic backgrounds to benefit from our
        expert instruction. Simultaneously, by incorporating a diverse range of
        programming languages into our curriculum, we aspire to cater to the
        varied interests and career aspirations of our students.
      </p>
    </section>
    <section class="flex flex-col w-about-extra-custom">
      <h4 class="txt-custom text-3xl font-bold text-white">Lorem, ipsum.</h4>
      <p
        class="w-about-extra-custom txt-custom mt-2 mb-4 text-lg text-gray-300"
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos expedita,
        ut, provident harum officiis iure impedit accusantium pariatur, quo
        veniam labore obcaecati quod? A quasi maiores qui, tempora facere
        quibusdam voluptatem dolore consequatur. Dolor doloribus minus obcaecati
        ipsum eveniet, qui maxime! Consequuntur est reiciendis deserunt atque
        tempora ea nemo error officiis dolore inventore, temporibus dignissimos
        itaque aliquid aperiam totam id voluptatibus culpa laborum eius
        praesentium facilis quam harum! Amet suscipit, doloribus sequi
        repellendus ut dolorum! Ab sed voluptates impedit cum, commodi ex
        doloremque! Ea, accusantium voluptatibus omnis excepturi magnam eum
        porro necessitatibus sit. Quisquam numquam beatae aliquid eaque ea
        voluptatibus nesciunt praesentium consectetur esse eius cum consequuntur
        similique non saepe sapiente sunt nobis autem ratione quam alias, quidem
        placeat? Quasi error ex accusantium pariatur, atque quisquam deleniti
        iste.
      </p>
    </section>
    <section class="flex flex-col w-about-extra-custom">
      <h4 class="txt-custom text-3xl font-bold text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h4>
      <p
        class="w-about-extra-custom txt-custom mt-2 mb-4 text-lg text-gray-300"
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis iusto
        nemo natus, cupiditate explicabo rerum dicta nostrum soluta vitae
        provident recusandae repellat, quis modi exercitationem? Porro, sed nemo
        excepturi natus vitae unde nobis eum quae sequi quisquam hic eveniet
        impedit? Iusto, nobis?
      </p>
    </section>
  </footer>
  <!-- <div class="black-box">
    <div class="Aboutus-style">

      <h1 class="about-us-topic">What is Programmatic</h1>
      <p class="about-us-info">
        We are a nonprofit organization committed to providing extensive free online education in Scratch, Python,
        Raspberry Pi, and Unity. Through Google Meet, we connect with students from diverse backgrounds and geographical
        locations, offering comprehensive courses taught by experienced high school student instructors.</p>
      <h1 class="about-us-topic">Our mission</h1>
      <p class="about-us-info">At the heart of our organization lies a profound mission: to nurture digital literacy
        among students and empower them with essential skills to not only navigate but thrive in an era fundamentally
        defined by computers. We are dedicated to fostering a generation of individuals who can confidently embrace the
        digital landscape, unlocking countless opportunities for personal and professional growth.
      </p>
      <h2 class="about-us-topic">Future goals</h2>
      <p class="about-us-info">In our pursuit of empowering learners worldwide, our future goals encompass expanding our
        teaching into other languages, ensuring accessibility to diverse communities, while also broadening the scope of
        our curriculum to encompass a wider variety of programming languages. By breaking language barriers and offering
        courses in multiple languages, we aim to create a more inclusive learning environment, enabling individuals from
        different linguistic backgrounds to benefit from our expert instruction. Simultaneously, by incorporating a
        diverse range of programming languages into our curriculum, we aspire to cater to the varied interests and
        career aspirations of our students.
      </p>
      <div id="about-us-background-image"></div>
    </div>
  </div> -->
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

.w-about-custom {
  width: 500px;
}

.w-about-img-custom {
  width: 500px;
}

.w-about-extra-custom {
  width: 330px;
}
</style>
