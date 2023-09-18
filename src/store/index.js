import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useNotesStore = defineStore('notesStore', {
  state: () => ({
    notes: [
      { id: 1, title: 'First note', content: 'This is the first note', date: '2021-01-01' }
    ],
    sortOptions: [
      { value: 'title', text: 'Title' },
      { value: 'content', text: 'Content' },
      { value: 'date', text: 'Date' }
    ],
    searchQuery: '',
    selectedSort: ''
  }),
  
  getters: {
    sortNotes() {
      return [...this.notes].sort((n1, n2) => n1[this.selectedSort]?.localeCompare(n2[this.selectedSort]))
    },
    searchNotes() {
      return getters.sortNotes.filter(n => n.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || n.content.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },

  actions: {
   addNote(note){
    this.notes.push(note)
  },
   deleteNote(note){
    this.notes = this.notes.filter(n => n.id !== note.id)
  },
   editNote(note){
    this.notes = this.notes.map(n => n.id === note.id ? note : n)
  }
}
})
