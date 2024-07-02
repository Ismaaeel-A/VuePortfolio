<template>
  <div class="container">
    <div class="row">
      <h3>Testimonials</h3>

      <Card v-for="(Testimonial, id) in Testimonials" :key="id">
        <template #cardHeader>
            <img :src="Testimonial.image" :alt="Testimonial.personName" class="img-fluid" />
        </template>

        <template #cardBody>
            <h5>{{ Testimonial.personName }}</h5>
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

<style>

</style>