<script setup lang="ts">
import { ref } from 'vue';
import BasePage from '@/components/base/BasePage.vue';

const text = ref(generateRandomText({ wordCount: 1000 }))

/**
 * function that takes a config object (max words, max word length) and returns a random string
 */
function generateRandomText<T extends { wordCount: number }>(config?: T): string {
  const { wordCount } = config || {};
  
  const MAX_WORDS = wordCount || 100;

  const words = [];

  for (let i = 0; i < MAX_WORDS; i++) {
    const wordLength = Math.floor(Math.random() * 10) + 1;
    let word = '';

    for (let j = 0; j < wordLength; j++) {
      const charCode = Math.floor(Math.random() * 26) + 97;
      word += String.fromCharCode(charCode);
    }

    words.push(word);
  }

  return words.join(' ');
}
</script>

<template>
  <base-page title="about page">
    <p>{{ text }}</p>
  </base-page>
</template>