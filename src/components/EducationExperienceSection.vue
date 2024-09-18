<template>
  <div class="container">
    <h3>Education and Experience</h3>

    <div v-if="EducationExperience?.length" class="row">
      <div v-for="(Edu, id) in EducationExperience" :key="id" class="eduxp">
        <h5 data-aos="zoom-out">{{ Edu.heading }}</h5>
        <p data-aos="zoom-out">{{ Edu.p }}</p>
      </div>
    </div>

    <Loader v-else />
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Loader from "./LoaderComp.vue";

const store = useStore();
const EducationExperience = computed(() => store.state.EducationExperience);

onMounted(() => {
  store.dispatch("fetchEducationExperience");
  console.log("EduExp Dispatch");
});
</script>

<style scoped>
p{
  color: var(--background);
}
</style>
