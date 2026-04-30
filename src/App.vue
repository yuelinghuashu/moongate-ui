<template>
  <div class="demo-wrapper">
    <Header sticky>
      <Container>
        <div style="padding: 1rem 0">Header Container</div>
      </Container>
    </Header>

    <Main>
      <Container>
        <div style="padding: 2rem 0">Main Content</div>
        <div style="padding: 2rem 0">Main Content</div>
        <div style="padding: 2rem 0">Main Content</div>
        <div style="padding: 2rem 0">Main Content</div>
        <div style="padding: 2rem 0">Main Content</div>
        <div style="padding: 2rem 0">Main Content</div>
        <div style="padding: 2rem 0">Main Content</div>
        <div style="padding: 2rem 0">Main Content</div>
        <div style="padding: 2rem 0">Main Content</div>
        <div style="padding: 2rem 0">Main Content</div>
        <div style="padding: 2rem 0">Main Content</div>
        <div style="padding: 2rem 0">Main Content</div>
      </Container>
    </Main>

    <Footer>
      <Container>
        <div
          style="
            padding: 1.5rem 0;
            text-align: center;
            color: var(--ui-text-dim);
          "
        >
          Footer Container
        </div>
      </Container>
    </Footer>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue"
import Main from "./components/Main.vue"
import Footer from "./components/Footer.vue"
import Container from "./components/Container.vue"
</script>

<style scoped>
.demo-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
