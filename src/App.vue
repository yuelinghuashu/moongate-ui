<template>
  <Hero title="Where Moon Meets Code" description="...">
    <template #actions>
      <Button variant="filled" color="primary" size="lg" to="/docs">
        Access the Gate
        <template #icon>
          <Icon name="lucide:arrow-right" />
        </template>
      </Button>
    </template>
  </Hero>
</template>

<script setup lang="ts">
import Hero from "./components/Hero.vue"
import Button from "./components/Button.vue"
</script>
