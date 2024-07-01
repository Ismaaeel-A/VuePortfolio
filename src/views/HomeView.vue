<template>
  <div class="container">
    <section class="row" id="landing">
      <LandingSection />
    </section>

    <section class="row" id="about">
      <AboutSection />
    </section>

    <section class="row" id="education">
      <EducationExperienceSection />
    </section>

    <section class="row" id="skills">
      <SkillsSection />
    </section>
      
    <section class="row" id="project">
      <ProjectsSection/>
    </section>

    <section class="row" id="testimonials">

    </section>

    <section class="row" id="reachMe">

    </section>
  </div>
</template>

<script>
import LandingSection from "../components/LandingSection.vue";
import AboutSection from "../components/AboutSection.vue";
import EducationExperienceSection from "../components/EducationExperienceSection.vue";
import SkillsSection from "../components/SkillsSection.vue";
import ProjectsSection from "../components/ProjectsSection.vue"



export default {
  name: "HomeView",
  components: {
    LandingSection,
    AboutSection,
    EducationExperienceSection,
    SkillsSection,
    ProjectsSection
  },
};
</script>
