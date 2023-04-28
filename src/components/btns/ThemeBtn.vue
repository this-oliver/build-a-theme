<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import { useTheme } from '@/composables/useTheme';
import { computed } from 'vue';

const { dark } = useTheme();

const props = defineProps({
  listMode: {
    type: Boolean,
    default: false
  }
});

const icon = computed<string>(() => {
  return dark.value ? 'mdi-weather-night' : 'mdi-white-balance-sunny';
});

function toggleTheme() {
  dark.value = !dark.value;
}

</script>

<template>
  <v-list-item
    v-if="props.listMode"
    @click="toggleTheme">
    <v-list-item-title>
      Theme
    </v-list-item-title>

    <template v-slot:prepend>
      <v-icon :icon="icon"></v-icon>
    </template>
  </v-list-item>

  <base-btn
    v-else
    plain
    @click="toggleTheme"
    class="mx-1">
    <v-icon :icon="icon"></v-icon>
  </base-btn>
</template>