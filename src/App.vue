<script setup>
import NotesHeader from '@/components/NotesHeader.vue'
import NotesList from '@/components/NotesList.vue'
import { useNotesStore } from '@/store/index'
import { ref } from 'vue';

const notesStore = useNotesStore();

</script>

<template>
  <main>
      <notes-header />
      <select disabled value="">Sort by
        <option v-for="option in sortOptions"></option>
      </select>
      <notes-list
      :notes="notesStore.notes"
      />
  </main>
</template>

<style scoped>
* {
  font-family: Avenir;
}
main {
  height: 100vh;
  width: 100vw;
  margin: auto;
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
