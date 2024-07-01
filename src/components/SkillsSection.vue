<template>
  <div class="container">
    <div class="row">
      <div v-for="(Skill, id) in Skills" :key="id">
        <h5>{{Skill.heading}}</h5>
        <span>{{Skill.level}}</span>
        <p>{{Skill.p}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const Skills = computed(() => store.state.Skills);

onMounted(() => {
  store.dispatch("fetchSkills");
  console.log("EduExp Dispatch");
});
</script>
