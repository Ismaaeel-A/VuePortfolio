<template>
  <div class="container">
    <div class="row">
      <div v-for="(Project, id) in Projects" :key="id">
        <h5>{{ Project.title }}</h5>
        <p>{{ Project.description }}</p>
        
        <a :href="Project.github" target="_blank"
          ><button type="button">Github</button>
        </a>
        <a :href="Project.vercel" target="_blank"
          ><button type="button">Vercel</button>
        </a>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();
const Projects = computed(() => store.state.Projects);

onMounted(() => {
  store.dispatch("fetchProjects");
  console.log("EduExp Dispatch");
});
</script>
