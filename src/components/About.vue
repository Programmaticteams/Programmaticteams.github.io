<script setup>
import AboutItem from "./AboutItem.vue";
</script>

<template>
  <AboutItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Who Are We?</template>

    We are a nonprofit organization committed to providing extensive free online
    education in computer science via Google Meet. We hope to expand to
    in-person/physical classes at libraries and schools at somepoint in the
    future. We offer many comprehensive courses in the hope that those who are
    interested in computer science will find opportunity to pursue their
    interests here. Meet
    <a class="text-blue-500" href="/enroll" type="link"
      ><br /><u> our team</u>.</a
    >
  </AboutItem>

  <AboutItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Goals</template>

    At the heart of our organization lies a mission: to help students develop
    curiosity for computer science, and equip them with essential skills to
    navigate an era fundamentally defined by computer science. We are dedicated
    to fostering a generation of individuals who can confidently embrace the
    digital landscape, unlocking countless opportunities for personal and
    professional growth.
  </AboutItem>
  <AboutItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Programs & Classes</template>

    Our classes at Programmatic are designed for anyone and are ideal for those
    eager to immerse themselves in programming. Parents who understand the
    significance of teaching their children with early technological and
    problem-solving skills will discover our offerings to be a valuable time
    investment. The comprehensive courses we offer include, Unity, Raspberry Pi,
    Python, and more! Find out more
    <a class="text-blue-500" href="/enroll" type="link"><br /><u>here</u>.</a>
  </AboutItem>
  <AboutItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Future</template>

    In our pursuit of empowering prospective computer science students
    worldwide, our future goals encompass expanding our organization, ensuring
    accessibility, while also broadening the scope of our curriculum to
    encompass a wider variety of programming concepts. In this way, we hope to
    cater to the varied interests and backgrounds of students.
  </AboutItem>
  <AboutItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Donations</template>

    Programmatic is a nonprofit organization, and we rely on donations to keep
    our organization running. If you would like to donate, please click
    <a
      class="text-blue-500"
      href="https://hcb.hackclub.com/donations/start/programmatic"
      type="link"
      ><u>here</u>.</a
    >
  </AboutItem>
</template>
