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


.card{
  width: 18rem;
  /* height: 30rem; */
  margin: 1rem;
  background-color: #6D6053;

  border: 5px solid #CE9461;
  border-radius: 20px;
  box-shadow: inset 0 0 5px #6D6053;

}

.overflow{
    overflow-y:auto;
}
</style>
