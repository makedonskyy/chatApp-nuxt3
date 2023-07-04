<template>
  <div class="flex justify-center gap-6">
    <div>
      <div
        v-for="message in messages"
        :key="message.id"
        class="w-full"
        v-html="message.replace(/\n/g, '<br/>')"
      />
      <form @submit.prevent="sendMessage">
        <textarea v-model="newMessage" type="text" class="w-full" placeholder="Введите сообщение" />
        <button
          type="submit"
          class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
        >
          Отправить
        </button>
      </form>
    </div>
    <div>
      <div
        v-for="message in messages"
        :key="message.id"
        class="w-full"
        v-html="message.replace(/\n/g, '<br/>')"
      />
      <form @submit.prevent="sendMessage">
        <textarea v-model="newMessage" type="text" class="w-full" placeholder="Введите сообщение" />
        <button
          type="submit"
          class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
        >
          Отправить
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const { $io } = useNuxtApp()

let messages = ref([])
const newMessage = ref('')

const sendMessage = () => {
  if (newMessage.value) {
    $io.emit('message', newMessage.value)
    messages.value.push(newMessage.value)
    newMessage.value = ''
  }
}

onMounted(() => {
  $io.on('connect', () => {
    console.log(':connect')
  })
  $io.on('disconnect', () => {
    console.log(':disconnect')
  })
  $io.on('sendMessage', (data) => {
    messages.value.push(data)
  })
})
</script>
