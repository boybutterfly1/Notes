<script setup>
import MyButton from '@/components/UI/MyButton.vue'
import { useNotesStore } from '@/store/index'
import { ref } from 'vue'

const notesStore = useNotesStore();
const note = ref({
    title: '',
    body: '',
});

const addNote = () => {
    notesStore.addNote(
        {
            id: Date.now(),
            title: note.value.title,
            body: note.value.body,
            date: new Date().toLocaleString(),
        }
    );
    note.value.title = '';
    note.value.body = '';
}
</script>

<template>
    <div class="form">
        <input
            type="text"
            v-model="note.title"
            placeholder="Title"
        >
        <input
            type="text"
            v-model="note.body"
            placeholder="Content"
        >
        <my-button
            @click="addNote"
        >
            Add Note
        </my-button>
    </div>

</template>

<style scoped>
.form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
}
input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-family: Avenir;
}

</style>
