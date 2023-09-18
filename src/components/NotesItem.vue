<script setup>
  import ItemButton from '@/components/UI/ItemButton.vue';
  import { defineProps } from 'vue';
  
  const props = defineProps({
    note: {
      type: Object,
      required: true
    },
  });
</script>

<template>
    <div class="card">
        <p>{{ note.title }}</p>
        <p>{{ note.content }}</p>
        <p>{{ note.date }}</p>
    </div>
    
</template>

<style scoped>
.card {
  width: 200px;
  height: 200px;
  margin: 20px;
  padding: 20px;
  box-sizing: border-box;
  background-color: #eaddea;
  text-align: center;
  color: #361f36;
  border-radius: 10px;
}

</style>
