<script setup>
import MyButton from '@/components/UI/MyButton.vue'
import NotesForm from '@/components/NotesForm.vue'
import { ref } from 'vue'

const modal = ref(false)
</script>

<template>
  <header class="navbar">
    <div 
      style="font-size:x-large; font-weight:900 ; cursor: pointer;"
      @click="$router.push('/')"
    >
    N o t e s
    </div>
    <button>About</button>
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
*{
  font-family: Avenir;
}
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
    z-index: 1000;
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
  .navbar {
    background-color: #361f36;
    color: #ffffff;
    padding: 10px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
}

</style>
