<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import ContentCard from '@/components/cards/ContentCard.vue';
import { useThemeStore } from '@/stores/theme-store';
import { ref } from 'vue';

const themeStore = useThemeStore();

const loadBtn = ref<boolean>(false);
const outlineBtn = ref<boolean>(false);
const flatBtn = ref<boolean>(false);
const plainBtn = ref<boolean>(false);
const textBtn = ref<boolean>(false);
const disabledBtn = ref<boolean>(false);

const btnOptions = ref([
  {
    label: 'Loading',
    value: loadBtn
  },
  {
    label: 'Outlined',
    value: outlineBtn
  },
  {
    label: 'Flat',
    value: flatBtn
  },
  {
    label: 'Plain',
    value: plainBtn
  },
  {
    label: 'Text',
    value: textBtn
  },
  {
    label: 'Disabled',
    value: disabledBtn
  }
])

</script>

<template>
  <content-card title="Buttons">
    <template #options>
      <base-btn
        v-for="option in btnOptions"
        :key="option.label"
        :outlined="option.value"
        size="small"
        class="mr-1 mt-1"
        @click="option.value = !option.value">
        {{ option.label }}
      </base-btn>
    </template>

    <v-row>
      <v-col
        v-for="color in themeStore.colors"
        :key="color"
        md="3">
        <base-btn
          :color="color.value"
          :loading="loadBtn"
          :outlined="outlineBtn"
          :flat="flatBtn"
          :plain="plainBtn"
          :text="textBtn"
          :disabled="disabledBtn"
          class="button">{{ color.label }}</base-btn>
      </v-col>
    </v-row>
  </content-card>
</template>

<style scoped>
.button {
  width: 100%;
}
</style>