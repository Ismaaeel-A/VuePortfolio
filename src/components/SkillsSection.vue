<template>
  <div class="container bg">
    <h3 class="mb-3 text-center">Skills</h3>

    <div class="row justify-content-center" v-if="Skills?.length">
      <h5 class="my-3 text-center">Soft skills</h5>

        <div class="d-flex justify-content-center flex-wrap">
          <span>Teamwork</span>
          <span>Communication</span>
          <span>Problem-solving</span>
          <span>Time Management</span>
          <span>Critical Thinking</span>
          <span>Emotional Intelligence</span>
        </div>

      <h5 class="my-3 text-center">Technical skills</h5>

      <div
        v-for="(Skill, id) in Skills"
        :key="id"
        class="d-flex justify-content-center align-content-center col-md-2 col-sm-6 flex-wrap skills"  data-aos="fade-up" 
      >
        <img :src="Skill.img" class="img-fluid rounded-circle" alt="Skill.name" loading="lazy"/>
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
  width: 6rem;
  height: 6rem;
  transition: transform 0.3s;

  &:hover{
    transform: scale(1.1);
  }
/*   min-width: 2rem;
  max-width: 10rem; */
}

.skills{
  border-radius: 100%;
  max-width: 10rem;
  aspect-ratio: 1;
  margin: 2rem;
  background: linear-gradient( var(--background), var(--accent));
  box-shadow: 0rem 0rem 0.8rem var(--primary);
  transition: transform 0.2s;

&:hover{
  transform: scale(0.95);
  & img{
    transform: scale(1.1);   
  }
}
}

span{
  background: linear-gradient( var(--background), var(--accent));
  color: var(--font);
  margin: 0.3rem;
  padding: 0.2rem;
  border-radius: 5px;
  transition: transform 0.2s;

  &:hover{
  transform: scale(1.1);
}
}

h5 {
    color: var(--background);
    text-decoration: underline;
    text-decoration-color: var(--primary);
}
/* .bg{
  background: linear-gradient( var(--background), var(--accent));
}

h3{
  color: var(--font);
} */
</style>
