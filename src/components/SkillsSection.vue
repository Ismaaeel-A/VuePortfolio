<template>
  <div class="container">
    <h3 class="mb-3 text-center">Skills</h3>

    <div class="row justify-content-center" v-if="Skills?.length">
      <div
        v-for="(Skill, id) in Skills"
        :key="id"
        class="d-flex justify-content-center col-md-3 col-sm-6 my-5 skills"
      >
        <img :src="Skill.img" alt="Skill.name" data-aos="fade-up" />
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
const Skills = computed(() => store.state.Skills);

onMounted(() => {
  store.dispatch("fetchSkills");
  console.log("EduExp Dispatch");
});
</script>

<style scoped>
img {
  min-width: 2rem;
  max-width: 12rem;
}

.img-container {
  width: fit-content;
}
</style>
