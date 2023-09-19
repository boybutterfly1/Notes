<script setup>
import MyButton from '@/components/UI/MyButton.vue'
import NotesForm from '@/components/NotesForm.vue'
import { ref } from 'vue'

const modal = ref(false)
</script>

<template>
  <header>
    <h1 style="font-weight:900;">N o t e s</h1>
    <my-button
      style="height: 50px; width: 50px; border-radius: 100%;"
      @click="modal = true"
    >+</my-button>
  </header>
  <div class="modal" v-if="modal" @click="modal = false">
    <div class="modal-content" @click.stop>
      <notes-form/>
    </div>
  </div>
</template>

<style scoped>
header {
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    z-index: 10;
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
