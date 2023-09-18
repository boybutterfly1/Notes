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
    <div>
        <notes-item
            v-for="note in notes"
            :key="note.id"
            :note="note"
        />
    </div>
</template>

<style scoped>

</style>
