<script setup>
import AboutItem from './AboutItem.vue'

</script>

<template>
  <AboutItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Mission</template>

    Programmatic Blah blah blah
  </AboutItem>

  <AboutItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>The Team</template>

        We are blabskdfalskdhfj

  </AboutItem>


</template>