<script setup>
import NotesForm from '@/components/NotesForm.vue'
import NotesList from '@/components/NotesList.vue'
import { useNotesStore } from '@/store/index'
import { ref } from 'vue';

const notesStore = useNotesStore();

</script>

<template>
  <main>
    <div class="container">
      <header>
        <h1 style="font-weight:900;">N o t e s .</h1>
        <button>+</button>
      </header>
      <notes-form>

      </notes-form>
      <notes-list
      :notes="notesStore.notes.value"
      />
    </div>
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
  text-align: center;
  color: #361f36;
}
header {
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin: 0 auto;
  padding: 20px;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
}
</style>
