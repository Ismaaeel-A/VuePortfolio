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
  <!--   <div class="row">
      <h3 class="mb-3 text-center">Certificates</h3>

      <div class="row">
  <div class="col-4 certbox">
    <nav id="navbar-example3" class="h-100 flex-column align-items-stretch pe-4 border-end">
      <nav class="nav nav-pills flex-column">
        <a class="nav-link" href="#item-1">AWS</a>
        <nav class="nav nav-pills flex-column">
          <a class="nav-link ms-3 my-1" href="#item-1-1">Introduction-to-the-AWS-cloud</a>
          <a class="nav-link ms-3 my-1" href="#item-1-2">Building-a-cloud-career</a>
        </nav>
        <a class="nav-link" href="#item-2">Item 2</a>
        <a class="nav-link ms-3 my-1" href="#item-2-1">Item 1-2</a>
      </nav>
    </nav>
  </div>

  <div class="col-8 certbox">
    <div data-bs-spy="scroll" data-bs-target="#navbar-example3" data-bs-smooth-scroll="true" class="scrollspy-example-2" tabindex="0">
      <div id="item-1">
        <h4>Item 1</h4>
        <p>...</p>
      </div>
      <div id="item-1-1">
        <h5>Introduction-to-the-AWS-cloud</h5>
        <p>...</p>
      </div>
      <div id="item-1-2">
        <h5>Building-a-cloud-career</h5>
        <p>...</p>
      </div>
      <div id="item-2">
        <h4>Item 2</h4>
        <p>...</p>
      </div>
      <div id="item-2-1">
        <h5>Item 2</h5>
        <p>...</p>
      </div>

    </div>
  </div>
      </div>
    </div> -->
    
    <h3 class="mb-3 text-center">Certificates</h3>
    <div class="row justify-content-center">
      <a href="https://drive.google.com/drive/folders/1mKCzo5kD3BFOpCqaLp12s1OZby-9xh9T?usp=drive_link" target="_blank">
        <button type="button" class="cert">AWS</button>
      </a>

      <!-- <a href="" target="_blank">
        <button type="button" class="cert">CISCO</button>
      </a> -->

    </div>
  
  </div>

<!-- <a href="https://ismaaeel-a.github.io/Certificates/AWS-certificates/Introduction-to-the-AWS-cloud.pdf" target="_blank"><button>cert</button></a> -->
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
  transform: scale(0.9);
}
}

h5 {
    color: var(--background);
    text-decoration: underline;
    text-decoration-color: var(--primary);
}

.cert{
  width: 10rem;
  border-radius: 20px;
  color: var(--font);
  padding: 1rem;
  font-size: larger;

  &:hover{
    background: var(--primary);
    /* color: var(--font); */
  }
}

a{
  width: fit-content;
}
/* .bg{
  background: linear-gradient( var(--background), var(--accent));
}

h3{
  color: var(--font);
} */

/* .certbox{
  max-height: 20rem;
  overflow-y: auto;
}

.certbox::-webkit-scrollbar {
  width: 8px;
}

.certbox::-webkit-scrollbar-thumb {
  background-color: var(--accent);
  border-radius: 10px;
}

.certbox::-webkit-scrollbar-track {
  background: transparent;
} */
</style>
