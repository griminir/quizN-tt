<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/quiz">Start Quiz</RouterLink>
    <RouterLink to="/result">Result</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

a {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 0.25rem;
  transition: background-color 0.3s;
}

a:hover {
  background-color: #0056b3;
}
</style>
