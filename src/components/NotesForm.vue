<script setup>
import ItemButton from '@/components/UI/ItemButton.vue'
import { useNotesStore } from '@/store/index'
import { ref } from 'vue'

const noteStore = useNotesStore();
const note = ref({
    title: '',
    content: '',
});

const addNote = () => {
    noteStore.addNote(
        {
            id: Date.now(),
            title: note.value.title,
            content: note.value.content,
            date: new Date().toLocaleString(),
        }
    );
    note.value.title = '';
    note.value.content = '';
}
</script>

<template>
    <div class="form">
        <input
            type="text"
            v-model="note.value.title"
            placeholder="Title"
        >
        <input
            type="text"
            v-model="note.value.content"
            placeholder="Content"
        >
        <item-button
            @click="addNote"
        >
            Add Note
        </item-button>
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
