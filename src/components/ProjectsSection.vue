<template>
  <div class="row text-center justify-content-center">
    <h3>Projects</h3>

    <div class="row justify-content-center" v-if="Projects?.length">
      <Card v-for="(Project, id) in Projects" :key="id" data-aos="flip-left">
        <template #cardHeader>
          <img :src="Project.img" :alt="Project.title" class="img-fluid" />
        </template>

        <template #cardBody>
          <h5>{{ Project.title }}</h5>

          <div class="d-flex justify-content-evenly">
            <a :href="Project.github" target="_blank"
              ><button type="button"><i class="bi bi-github"></i></button>
            </a>
            <a :href="Project.vercel" target="_blank"
              ><button type="button"><i class="bi bi-play-fill"></i></button>
            </a>
          </div>

          <p>{{ Project.description }}</p>
        </template>
      </Card>
    </div>

    <Loader v-else />
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Card from "./CardComp.vue";
import Loader from "./LoaderComp.vue";

const store = useStore();
const Projects = computed(() => store.state.Projects);

onMounted(() => {
  store.dispatch("fetchProjects");
  console.log("Projects Dispatch");
});
</script>

<style scoped>
img {
  width: 100%;
}

button {
  border-radius: 100px;
}
</style>
