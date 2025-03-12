<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const result = computed(() => {
  if (route.query.score < 5) {
    return 'You are not a plant';
  } else if (route.query.score == 5) {
    return 'You are maybe a vegetable';
  } else {
    return 'You are a plant';
  }
});
</script>

<template>
  <h1>Result</h1>
  <p>{{ result }}</p>
  <div v-if="result === 'You are a plant'">
    <img src="../assets/plant.jpg" alt="Plant" />
  </div>
  <div v-else-if="result === 'You are maybe a vegetable'">
    <img src="../assets/maybe.jpg" alt="Plant" />
  </div>
  <div v-else class="img-container">
    <img src="../assets/bilde.png" alt="You are not a plant" />
  </div>

  <button @click="$router.push({ name: 'quiz' })">Take the quiz again</button>
</template>

<style scoped>
h1 {
  color: #4caf50;
  font-size: 2em;
  text-align: center;
  margin-top: 20px;
}
.img-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
p {
  font-size: 1.5em;
  text-align: center;
  color: #333;
  margin-top: 10px;
}

button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #4caf50;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

div {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}
</style>
