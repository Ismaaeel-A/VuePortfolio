<template>
  <div class="container">
    <div v-if="EducationExperience?.length" class="row">
      <h3>Education and Experience</h3>

      <div v-for="(Edu, id) in EducationExperience" :key="id">
        <h5>{{ Edu.heading }}</h5>
        <p>{{ Edu.p }}</p>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const EducationExperience = computed(() => store.state.EducationExperience);

onMounted(() => {
  store.dispatch("fetchEducationExperience");
  console.log("EduExp Dispatch");
});
</script>
