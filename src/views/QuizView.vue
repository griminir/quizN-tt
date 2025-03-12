<script setup>
import { ref, onMounted } from 'vue';
import router from '@/router/index.js';
import fetchData from '@/composables/fetchData.js';

const questions = ref([]);

const currentQuestionIndex = ref(0);
const score = ref(0);

const answer = (svar) => {
  if (svar === 'yes' && score.value < questions.value.length) {
    score.value++;
  }
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++;
  } else {
    router.push({ name: 'result', query: { score: score.value.toString() } });
  }
};

const fetchAllQuestions = async () => {
  questions.value = await fetchData();
};

onMounted(() => {
  fetchAllQuestions();
});
</script>

<template>
  <h1>answer the questions</h1>
  <div v-if="questions.length">
    <p>{{ questions[currentQuestionIndex].text }}</p>
    <div>
      <button @click="answer('yes')">Yes</button>
      <button @click="answer('no')">No</button>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
}

div {
  text-align: center;
}

p {
  font-size: 1.5em;
  margin-bottom: 20px;
}

button {
  font-size: 1em;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #007BFF;
  color: white;
}

button:hover {
  background-color: #0056b3;
}
</style>
