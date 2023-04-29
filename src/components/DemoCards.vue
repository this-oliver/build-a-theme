<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import BaseCard from '@/components/base/BaseCard.vue';
import ContentCard from '@/components/cards/ContentCard.vue';
import { useThemeStore } from '@/stores/theme-store';
import { ref } from 'vue';

const themeStore = useThemeStore();

const loadCard = ref<boolean>(false);
const outlineCard = ref<boolean>(false);
const flatCard = ref<boolean>(false);
const plainCard = ref<boolean>(false);

const cardOptions = ref([
  {
    label: 'Loading',
    value: loadCard
  },
  {
    label: 'Outlined',
    value: outlineCard
  },
  {
    label: 'Flat',
    value: flatCard
  },
  {
    label: 'Plain',
    value: plainCard
  }
])
</script>

<template>
  <content-card title="Cards">
    <template #options>
      <base-btn
        v-for="option in cardOptions"
        :key="option.label"
        :outlined="option.value"
        size="small"
        class="mr-1 mt-1"
        @click="option.value = !option.value">
        {{ option.label }}
      </base-btn>
    </template>

    <v-row
      justify="center"
      justify-md="start">
      <v-col
        v-for="color in themeStore.colors"
        :key="color"
        cols="11"
        md="4">
        <base-card
          :color="color.value"
          :loading="loadCard"
          :outlined="outlineCard"
          :flat="flatCard"
          :plain="plainCard"
          style="width: 100%;">
          <v-card-title>{{ color.label }}</v-card-title>
          <v-card-subtitle>Card</v-card-subtitle>
          <v-card-text>
            Lorem ip sum dolor sit amet, consectetur adipiscing elit. Nullam
            vitae diam et dolor lobortis aliquam. Donec nec dolor vitae.
          </v-card-text>
          <v-card-actions>
            <base-btn>Action</base-btn>
          </v-card-actions>
        </base-card>
      </v-col>
    </v-row>
  </content-card>
</template>