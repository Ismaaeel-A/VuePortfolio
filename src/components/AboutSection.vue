<template>
  <div class="container">
    <div v-if="About?.length" class="row">
      <h3>About</h3>
      <p>{{ About[0]?.p1 }}</p>

      <ul>
        <li>{{ About[0]?.li_1 }}</li>
        <li>{{ About[0]?.li_2 }}</li>
        <li>{{ About[0]?.li_3 }}</li>
        <li>{{ About[0]?.li_4 }}</li>
      </ul>

      <p>{{ About[0]?.p2 }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const About = computed(() => store.state.About);

onMounted(() => {
  store.dispatch("fetchAbout");
  console.log("About Dispatch");
});
</script>
