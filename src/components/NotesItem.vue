<script setup>
  import MyButton from '@/components/UI/MyButton.vue';
  import { defineProps } from 'vue';
  import { useNotesStore } from '@/store/index'
  import { ref } from 'vue';
  
  const modal = ref(false);
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
    modal.value = false;
  };
</script>

<template>
  <div
    class="card"
    @click="$router.push(`/note/${note.id}`)"
  >
      
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
          <button
          @click="modal = true"
          >
            Edit
          </button>
          <button
            @click="deleteNote"  
          >
            Delete
          </button>
      <div class="modal" v-if="modal" @click="modal = false">
        <div class="modal-content" @click.stop>
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
              @click="editNote"
            >
              Submit
            </my-button>
          </div>
        </div>
      </div>
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
.modal {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.55);
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
  }

.modal-content {
    width: 750px;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 30px;
    position: relative;
    display: flex;
    flex-direction: column;
  }
</style>
