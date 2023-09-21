<script setup>
import NotesHeader from '@/components/NotesHeader.vue'
import NotesList from '@/components/NotesList.vue'
import { useNotesStore } from '@/store/index'
import { onMounted, ref } from 'vue';

const notesStore = useNotesStore();

onMounted(() => {
  notesStore.fetchNotes();
});
</script>

<template>
  <main>
      <input
        v-model="notesStore.searchQuery"
        placeholder="Search notes..."

      />
      <select
        v-model="notesStore.selectedSort"
      >
        <option disabled value="">Sort by</option>
        <option
          v-for="option in notesStore.sortOptions"
          :key="option.value"
          :value="option.value"
        >
        {{ option.text }}
        </option>
      </select>
      <notes-list
      :notes="notesStore.searchNotes"
      />
  </main>
</template>

<style scoped>
* {
  font-family: Avenir;
}
main {
  height: auto;
  width: 100vw;
  padding: 20px;
  box-sizing: border-box;
  background-color: #f5f5f5;
  color: #361f36;
}

header button {
  width: 50px;
  height: 50px;
  background-color: #361f36;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 100%;
  cursor: pointer;
  font-size: 1.2em;
  transition: background-color 0.2s;
}
header button:hover {
  background-color: #662d66;
}
.container {
  padding: 20px;
}
</style>
