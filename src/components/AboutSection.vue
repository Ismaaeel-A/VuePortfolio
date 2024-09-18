<template>
  <div class="container">
    <div v-if="About?.length" class="row">
      <h3 data-aos="zoom-out">About</h3>
      <p data-aos="zoom-out">{{ About[0]?.p1 }}</p>

      <ul data-aos="zoom-out">
        <li>{{ About[0]?.li_1 }}</li>
        <li>{{ About[0]?.li_2 }}</li>
        <li>{{ About[0]?.li_3 }}</li>
        <li>{{ About[0]?.li_4 }}</li>
      </ul>

      <p data-aos="zoom-out">{{ About[0]?.p2 }}</p>
    </div>

    <Loader v-else />
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Loader from "./LoaderComp.vue";
const store = useStore();
const About = computed(() => store.state.About);

onMounted(() => {
  store.dispatch("fetchAbout");
  console.log("About Dispatch");
});
</script>

<style scoped>
p,
ul {
  margin-block: 1.5rem;
  color: var(--background);

  & li {
    margin-block: 1rem;
    color: var(--background);
  }
}
</style>
