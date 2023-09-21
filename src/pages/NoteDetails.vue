<script setup>
import { useNotesStore } from '@/store/index'
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router'

const notesStore = useNotesStore()
const route = useRoute()
const noteId = ref(route.params.id)
const note = computed(() => notesStore.notes.find(n => n.id === noteId.value))
</script>

<template>
  <div>
    <span>{{ note.title }}</span>
  </div>
</template>

<style scoped>

</style>
