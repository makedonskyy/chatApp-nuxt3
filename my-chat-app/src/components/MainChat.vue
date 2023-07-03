<template>
<!--  <div>-->
<!--    <div v-for="message in messages" :key="message.id">-->
<!--      {{ message }}-->
<!--    </div>-->
<!--    <form @submit.prevent="sendMessage">-->
<!--      <input v-model="newMessage" type="text" placeholder="Введите сообщение">-->
<!--      <button type="submit">Отправить</button>-->
<!--    </form>-->
<!--  </div>-->
</template>

<script setup>
// import { ref, onMounted } from 'vue'
const { $io } = useNuxtApp();

$io.on('connect', () => {
  console.log(':connect');
});
$io.on('disconnect', () => {
  console.log(':disconnect');
});

// export default {
//   setup() {
//     const messages = ref([])
//     const newMessage = ref('')
//
//     const sendMessage = () => {
//       if (newMessage.value) {
//         console.log('111111')
//         socket.emit('message', newMessage.value)
//         console.log(newMessage.value)
//         newMessage.value = ''
//         console.log(messages.value)
//       }
//     }
//
//     onMounted(() => {
//       socket.on('message', (data) => {
//         messages.value.push(data)
//       })
//     })
//
//     return {
//       messages,
//       newMessage,
//       sendMessage
//     }
//   }
// }
</script>
