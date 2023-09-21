<script setup>
  import NotesItem from '@/components/NotesItem.vue';
  import { defineProps } from 'vue';
  import { useNotesStore } from '@/store/index'
  
  const noteStore = useNotesStore();
  
  const props = defineProps({
    notes: {
      type: Array,
      required: true
    },
  });
</script>

<template>
    <div class="cards-container">
        <notes-item v-if="notes.length > 0"
            v-for="note in notes"
            :key="note.id"
            :note="note"
        />
        <div v-else>Notes not found...</div>
    </div>
</template>

<style scoped>
   .cards-container {
    display: flex;
    flex-wrap: wrap;
    }
</style>
