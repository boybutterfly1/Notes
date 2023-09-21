<script setup>
import { useNotesStore } from '@/store/index'
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router'

const notesStore = useNotesStore()
const route = useRoute()
const noteId = ref(Number(route.params.id))
const note = computed(() => notesStore.notes.find(n => n.id == noteId.value))
</script>

<template>
  <div class="card">
    <span class="title">{{ note.title }}</span>
    <span class="content">{{ note.body }}</span>
    <span class="date">{{ note.date }}</span>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: auto;
  margin: auto;
}
.card {
width: 250px;
height: 250px;
margin: 20px;
padding: 20px;
box-sizing: border-box;
background-color: #eaddea;
color: #361f36;
border-radius: 10px;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;

}
.card .title {
position: absolute;
top: 10px;
left: 10px;
font-size: 16px;
font-weight: bold;
}

.card .content {
font-size: 14px;
margin-top: auto;
}

.card .date {
position: absolute;
bottom: 10px;
left: 10px;
font-size: 12px;
}
</style>