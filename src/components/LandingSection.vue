<template>
  <div class="container">
    <div class="row landingSec align-items-center text-center">
      <div class="col">
        <img
          src="https://ismaaeel-a.github.io/allimages/Images/Profile.png"
          alt="profile"
          loading="lazy"
          class="img-fluid"
          data-aos="fade-right"
        />
      </div>

      <div class="col">
        <div class="details">
          <h1 class="display-1" data-aos="fade-up"
          data-aos-anchor-placement="top-bottom">Ismaa'eel Ahmed</h1>
          <h4 data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"><span>Aspiring Developer</span></h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

onMounted(async () => {
  AOS.init({ duration: 1500, once: false });
});
</script>

<style scoped>
img {
  min-width: 15rem;
  width: 30rem;
  max-width: 100%;
}
</style>
