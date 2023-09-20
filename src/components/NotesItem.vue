<script setup>
  import MyButton from '@/components/UI/MyButton.vue';
  import { defineProps } from 'vue';
  import { useNotesStore } from '@/store/index'
  import { ref } from 'vue';
  
  const notesStore = useNotesStore();
  const props = defineProps({
    note: {
      type: Object,
      required: true
    },
  
  });
  const more = ref(false);

  const deleteNote = () => {
    notesStore.deleteNote(props.note);
  };

  const editNote = () => {
    notesStore.editNote(props.note);
  };
</script>

<template>
  <div class="card">
      <span class="title">{{ note.title }}</span>
      <span class="content">{{ note.body }}</span>
      <span class="date">{{ note.date }}</span>
      <my-button class="more-button"
        @click="more = true"
      >
        <span class="more-span">...</span>
      </my-button>
      <div v-if="more" class="more-tab" @click="more = false">
        <div class="more-content" @click.stop>
          <button>Edit</button>
          <button
            @click="deleteNote"  
          >Delete</button>
        </div>
      </div>
  </div>
</template>

<style scoped>
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
.card .more-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 12px;
  padding: 5px;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.more-span{
  margin-bottom: 6px;
}
.more-tab {
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  z-index: 10;
}

.more-content {
  display: flex;
  flex-direction: column;
  position: relative;
}
</style>

