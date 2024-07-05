<template>
  <div class="row text-center justify-content-center">
    <h3>Testimonials</h3>

    <div class="row justify-content-center" v-if="Testimonials?.length">
      <Card
        v-for="(Testimonial, id) in Testimonials"
        :key="id"
        id="card"
        data-aos="zoom-in-up"
      >
        <template #cardHeader>
          <img
            :src="Testimonial.image"
            :alt="Testimonial.personName"
            class="img-fluid"
          />
          <h5>{{ Testimonial.personName }}</h5>
        </template>

        <template #cardBody>
          <p>{{ Testimonial.comment }}</p>
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
const Testimonials = computed(() => store.state.Testimonials);

onMounted(() => {
  store.dispatch("fetchTestimonials");
  console.log("Testimonials Dispatch");
});
</script>

<style scoped>
h5 {
  padding-top: 1rem;
  text-decoration: underline;
}

#card {
  max-height: 35rem;
}

.container {
  border: 3px solid var(--font);
}
</style>
