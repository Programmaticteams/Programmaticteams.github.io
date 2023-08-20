<script setup>
import BioCard from "../components/BioCard.vue"
</script>

<template>
  <main class="flex gap-80 top-44"> 

    <section class="fixed justify-left ml-5"> 
      <h1 class="font-extrabold text-gray-200 text-6xl mt-32">Our Team</h1>
      <h3 class="text-lg font-bold py-10 ourTeam-desc">The constant development of Programmatic is led by a team of
        individuals, devoted to enhancing the Programmatic learning
        experience to the maximum extent possible. Meet our founders and developers: </h3> 
    </section>
    <hr class="px-10"> 
    <div class="border border-gray-600"></div> 
    <section class="flex flex-col gap-20 mt-36"> 
      <BioCard name="Ofir"
        desc="1000 year old developer invented c++ hacked nsa with a potato invented the internet more important than allen turing bricked your mom's windows 98"
        langs="Python" discord="@yourmom" imgurl="discord.png" />
      <BioCard name="Zain"
        desc="1000 year old developer invented c++ hacked nsa with a potato invented the internet more important than allen turing bricked your mom's windows 98"
        langs="Python" discord="@yourmom" imgurl="discord.png" />

      <BioCard name="Adam"
        desc="1000 year old developer invented c++ hacked nsa with a potato invented the internet more important than allen turing bricked your mom's windows 98"
        langs="Python" discord="@yourmom" imgurl="discord.png" />

      <BioCard name="Et"
        desc="1000 year old developer invented c++ hacked nsa with a potato invented the internet more important than allen turing bricked your mom's windows 98"
        langs="Python" discord="@yourmom" imgurl="discord.png" />
    </section>
  </main>
</template>

