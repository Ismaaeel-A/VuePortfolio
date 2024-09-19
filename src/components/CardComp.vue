<template>
  <div class="card">
    <div class="card-header text-center">
      <slot name="cardHeader"></slot>
    </div>

    <div class="card-body text-center overflow">
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
.card {
  width: 18rem;
  padding-top: 0.8rem;
  /* height: 30rem; */
  margin: 1rem;
  background: linear-gradient( var(--background), var(--font));

  border: 5px solid var(--background);
  border-radius: 20px;
  box-shadow: 0 0 10px #242423;
}

.overflow {
  overflow-y: auto;
}
</style>
