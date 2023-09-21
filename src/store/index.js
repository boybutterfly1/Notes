import { defineStore } from 'pinia'
import axios from 'axios'

export const useNotesStore = defineStore('notesStore', {
  state: () => ({
    notes: [],
    sortOptions: [
      { value: 'title', text: 'Title' },
      { value: 'body', text: 'Content' },
      { value: 'date', text: 'Date' }
    ],
    searchQuery: '',
    selectedSort: '',
  }),
  
  getters: {
    sortNotes() {
      return [...this.notes].sort((n1, n2) => n1[this.selectedSort]?.localeCompare(n2[this.selectedSort]))
    },
    searchNotes() {
      return this.sortNotes.filter(n => n.title.toLowerCase().includes(this.searchQuery.toLowerCase()) || n.body.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },

  actions: {
   addNote(note){
    this.notes.push(note)
  },
   deleteNote(note){
    this.notes = this.notes.filter(n => n.id !== note.id)
  },
   editNote(note, new_note_title, new_note_body){
    this.notes.forEach(n => {
      if (n.id === note.id) {
        n.title = new_note_title;
        n.body = new_note_body;
      }
    })
  },
  async fetchNotes() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
      response.data.forEach(n => n.date = new Date().toLocaleString())
      this.notes = response.data
    } catch (error) {
      alert(error)
    }
  },
}
})
