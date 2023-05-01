<script setup lang="ts">
import { javascript } from '@codemirror/lang-javascript';
import { computed, ref } from 'vue';
import { Codemirror } from 'vue-codemirror';

const props = defineProps({
  code: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: 'javascript'
  }
})

const code = ref(props.code);

const extensions = computed(() => {
  const base = [ ];

  if(props.language === 'javascript'){
    base.push(javascript())
  }

  return base;
})

</script>

<template>
  <v-sheet
    class="pa-1"
    color="grey-lighten-4">
    <codemirror
      v-model="code"
      :disabled="true"
      :tab-size="2"
      :indent-with-tab="true"
      :extensions="extensions"/>
  </v-sheet>
</template>