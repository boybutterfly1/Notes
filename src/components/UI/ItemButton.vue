<script setup>

</script>

<template>
    <button class="btn">
      <slot></slot>
    </button>
</template>

<style scoped>
.btn {
  padding: 10px 15px;
  border: none;
  background-color: #361f36;
  color: aliceblue;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s;
  font-family: Avenir;
}
.btn:hover {
  background-color: #662d66;
}

</style>
