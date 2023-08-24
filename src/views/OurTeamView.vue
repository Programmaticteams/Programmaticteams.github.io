<script setup>
import BioCard from "../components/BioCard.vue";
</script>

<template>
  <main class="flex gap-x-80 top-44">
    <section class="fixed">
      <h1 class="font-extrabold text-gray-200 text-6xl mt-32">Our Team:</h1>
      <h3 class="text-lg font-bold py-10 ourTeam-desc text-gray-300">
        This is the team of founders, developers, and teachers behind
        Programmatic: Our diverse and dynamic team is the driving force behind
        the continued development and improvment of Programmatic. With a perfect
        blend of visionary founders, brilliant developers, and creative minds,
        our team has a passion for providing excellent teaching material and
        classes for our students. We're united by our shared commitment to
        improving Programmatic and creating impactful experiences for our
        students. Meet the team:
      </h3>
    </section>
    <hr class="px-20" />
    <div class="border border-gray-600"></div>
    <section class="flex flex-col gap-20 mt-36 mb-10">
      <BioCard
        name="Ofir"
        pos="Founder, Front-End Developer, Teacher"
        desc=" Hi, I'm Ofir and im the founder of Programmatics. I have over 5 years of coding experience in Python and recently started working with Unity and Dart, making many practical applications."
        langs="Python, Dart, C#"
        discord="@.ofish"
        imgurl="discord.png"
      />
      <BioCard
        name="Zain"
        desc="Hello, my name is Zain. I am looking forward to teaching you all about programming! Currently, I have 3 years of experience in both Python and Raspberry Pi."
        langs="Python, Raspberry Pi"
        discord="@zaindaman"
        pos="Founder, Treasurer, Teacher, Web Dev"
        imgurl="zain.jpg"
      />

      <BioCard
        name="Adam"
        desc="Hello, I'm Adam. I have about 4 years of experience in Unity and making video games."
        langs="Python"
        discord="@yourmom"
        pos="Founder, Graphic Designer, Teacher"
        imgurl="discord.png"
      />

      <BioCard
        name="Ethan"
        desc="I have experience in many programming languages, and many important alogithms and datastructures. I also have experience creating applications, like Discord bots, backends, and more."
        langs="Lisp/Scheme, Python, C++, Java, JavaScript"
        discord="@yourmom"
        pos="Founder, Full-Stack Developer, Dev of the Programmatic Discord Bot"
        imgurl="discord.png"
      />
    </section>
  </main>
</template>
