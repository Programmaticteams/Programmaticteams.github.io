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
        pos="Founder"
        desc=" Hi, I'm Ofir and im the founder of Programmatics. I have over 5 years of coding experience in Python and recently started working with Unity and dart."
        langs="Python, Dart, C#"
        discord="@.ofish"
        imgurl="discord.png"
      />
      <BioCard
        name="Zain"
        desc="1000 year old developer invented c++ hacked nsa with a potato invented the internet more important than allen turing bricked your mom's windows 98"
        langs="Python"
        discord="@yourmom"
        pos="hacking and kali linux"
        imgurl="discord.png"
      />

      <BioCard
        name="Adam"
        desc="1000 year old developer invented c++ hacked nsa with a potato invented the internet more important than allen turing bricked your mom's windows 98"
        langs="Python"
        discord="@yourmom"
        pos="hacking and kali linux"
        imgurl="discord.png"
      />

      <BioCard
        name="Et"
        desc="1000 year old developer invented c++ hacked nsa with a potato invented the internet more important than allen turing bricked your mom's windows 98"
        langs="Python"
        discord="@yourmom"
        pos="hacking and kali linux"
        imgurl="discord.png"
      />
    </section>
  </main>
</template>
