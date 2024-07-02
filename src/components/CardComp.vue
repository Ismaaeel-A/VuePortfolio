<template>
  <div class="card">
    <div class="card-header text-center">
      <slot name="cardHeader"></slot>
    </div>

    <div class="card-body text-center">
      <slot name="cardBody"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComp",
};
</script>

<style scoped>


.card{
  width: 18rem;
  margin: 1rem;
}
</style>
