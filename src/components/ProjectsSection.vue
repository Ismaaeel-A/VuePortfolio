<template>
  <div class="row text-center justify-content-center">
    <h3>Projects</h3>

    <div class="row justify-content-center">
      <Card v-for="(Project, id) in Projects" :key="id">
        <template #cardHeader>
          <img :src="Project.img" :alt="Project.title" class="img-fluid" />
        </template>

        <template #cardBody>
          <h5>{{ Project.title }}</h5>
          <p>{{ Project.description }}</p>

          <div class="d-flex justify-content-evenly">
            <a :href="Project.github" target="_blank"
              ><button type="button">Github</button>
            </a>
            <a :href="Project.vercel" target="_blank"
              ><button type="button">Vercel</button>
            </a>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Card from "./CardComp.vue";

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
</style>
