<template>
  <div class="body"> <!-- class="wrapper" -->
    <NavBar />
    <main class="container-fluid">
      <router-view />
    </main>
    <FooterComp/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import FooterComp from './components/Footer.vue'

export default {
  components: {
    NavBar,
    FooterComp
  }
}
</script>

<style src="./assets/css/style.css"></style>
