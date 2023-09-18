import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useNotesStore = defineStore('notesStore', () => {
  const notes = ref([
    { id: 1, title: 'First note', content: 'This is the first note', date: '2021-01-01' }
  ]);
  const sortOptions = ref([
    { value: 'title', text: 'Title' },
    { value: 'content', text: 'Content' },
    { value: 'date', text: 'Date' }
  ]);
  const searchQuery = ref('');
  const selectedSort = ref('')

  const addNote = (note) => {
    notes.value.push(note)
  }
  const deleteNote = (note) => {
    notes.value = notes.value.filter(n => n.id !== note.id)
  }
  const editNote = (note) => {
    notes.value = notes.value.map(n => n.id === note.id ? note : n)
  }

  const sortNotes = computed(() => {
    return [...notes.value].sort((n1, n2) => n1[selectedSort.value]?.localeCompare(n2[selectedSort.value]))
  });
  const searchNotes = computed(() => {
    return sortNotes.value.filter(n => n.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || n.content.toLowerCase().includes(searchQuery.value.toLowerCase()))
  });

  return {
    notes,
    sortOptions,
    searchQuery,
    addNote,
    deleteNote,
    editNote,
    sortNotes,
    searchNotes,
    selectedSort
  }
})
