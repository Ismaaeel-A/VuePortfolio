<template>

    <div class="row text-center">
      <h3>Testimonials</h3>

<div class="row justify-content-center">
  <Card v-for="(Testimonial, id) in Testimonials" :key="id">
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
    </div>

</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import Card from "./CardComp.vue";

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
</style>
