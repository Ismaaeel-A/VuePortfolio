<template>
  <div class="container">
    <!--     <div v-if="EducationExperience?.length" class="row">
          <div v-for="(Edu, id) in EducationExperience" :key="id" class="eduxp">
            <h5 data-aos="zoom-out">{{ Edu.heading }}</h5>
            <p data-aos="zoom-out">{{ Edu.p }}</p>
          </div>
        </div>
    
        <Loader v-else /> -->
    <h3 data-aos="zoom-out">Education and Experience</h3>
    <h4>Experience</h4>
    
    
    <div class="row">
      <div class="row flexed">

        <div class="holder">
          <hr>
          <h5>Life Choices: Studio (Web Dev)</h5>
          <h6>Role: Intern</h6>
          <h6>September 2024 - Present</h6>
          <hr>
        </div>

      </div>
      
      <h4>Education</h4>

      <div class="row flexed">

        <div class="holder">
          <hr>
          <h5>Life Choices: Academy (Web Dev)</h5>
          <h6>Role: Student</h6>
          <h6>April 2024 - September 2024</h6>
          <hr>
        </div>
        
        
        <div class="holder">
          <hr>
          <h5>The Du Centre (Islamic Studies)</h5>
          <h6>Role: Student</h6>
          <h6>January 2023 - December 2023</h6>
          <hr>
        </div>
        
        <div class="holder">
          <hr>
          <h5>Rylands High School (Bachellors Pass)</h5>
          <h6>Role: Student</h6>
          <h6>January 2018 - December 2022</h6>
          <hr>
        </div>

      </div>

    </div>

  </div>
</template>

<script setup>
// import { computed, onMounted } from "vue";
// import { useStore } from "vuex";
// import Loader from "./LoaderComp.vue";

// const store = useStore();
// const EducationExperience = computed(() => store.state.EducationExperience);

// onMounted(() => {
  // store.dispatch("fetchEducationExperience");
  // console.log("EduExp Dispatch");
// });
</script>

<style scoped>
p{
  color: var(--background);
}

h4{
  margin-block: 1.5rem;
}

h4, h5, h6{
  color: var(--background);
  text-decoration: underline;
  text-decoration-color: var(--accent);
}

h3, h4, h5 ,h6{
  text-align: center;
}
.holder{
  width: 80%;
  max-width: 30rem;
  background: var(--primary);
  border-radius: 1rem;
  padding: 1.3rem;
  margin: 0.6rem;
  box-shadow: 0.3rem 0.2rem 0rem;
}

.flexed{
  display: flex;
  justify-content: space-evenly;
}
</style>
