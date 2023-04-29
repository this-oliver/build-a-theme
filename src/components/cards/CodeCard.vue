<script setup lang="ts">
import { useThemeStore } from '@/stores/theme-store';
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

const themeStore = useThemeStore();

const code = ref(props.code);

const extensions = computed(() => {
  const base = [ ];

  if(props.language === 'javascript'){
    base.push(javascript())
  }

  return base;
})

const color = computed(() => {
  return themeStore.dark ? 'grey-darken-3' : 'grey-lighten-4';
})

</script>

<template>
  <v-sheet
    class="pa-1"
    :color="color">
    <codemirror
      v-model="code"
      :disabled="true"
      :tab-size="2"
      :indent-with-tab="true"
      :extensions="extensions"/>
  </v-sheet>
</template>