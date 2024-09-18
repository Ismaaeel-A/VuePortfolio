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
  /* height: 30rem; */
  margin: 1rem;
  background-color: #6d6053;

  border: 5px solid linear;
  border-radius: 20px;
  box-shadow: 0 0 10px #242423;
}

.overflow {
  overflow-y: auto;
}
</style>
