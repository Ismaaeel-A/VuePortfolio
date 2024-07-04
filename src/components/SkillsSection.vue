<template>
  <div class="container">
    <div class="row justify-content-center text-center">
      <h3 class="mb-3">Skills</h3>

      <div v-for="(Skill, id) in Skills" :key="id" class="col-3 d-flex justify-content-center my-5 skills">
<!--         <h5>{{Skill.heading}}</h5>
        <span>{{Skill.level}}</span>
        <p>{{Skill.p}}</p> -->

        <img :src="Skill.img" alt="Skill.name" class="img-fluid">
        <!-- <span>{{ Skill.name }}</span> -->
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


<style scoped>
img{
  width: 10rem;
}

.img-container{
  width: fit-content;
}
</style>