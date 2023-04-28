<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import BaseCard from '@/components/base/BaseCard.vue';
import BasePage from '@/components/base/BasePage.vue';
import { onMounted, reactive, ref } from 'vue';
import { useTheme } from 'vuetify/lib/framework.mjs';

const vuetifyTheme = useTheme();

const colors = ref<string[]>([ 'primary', 'secondary', 'warning', 'info', 'success', 'error' ]);

const theme = reactive({
  primary: '' as string,
  secondary: '' as string,
  warning: '' as string,
  info: '' as string,
  success: '' as string,
  error: '' as string
});

const loadBtn = ref<boolean>(false);
const outlineBtn = ref<boolean>(false);
const flatBtn = ref<boolean>(false);
const plainBtn = ref<boolean>(false);
const textBtn = ref<boolean>(false);
const disabledBtn = ref<boolean>(false);

const loadCard = ref<boolean>(false);
const outlineCard = ref<boolean>(false);
const flatCard = ref<boolean>(false);
const plainCard = ref<boolean>(false);

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

function getColor(color: string) {
  return (theme as any)[color];
}

onMounted(() => {
  theme.primary = vuetifyTheme.current.value.colors.primary;
  theme.secondary = vuetifyTheme.current.value.colors.secondary;
  theme.warning = vuetifyTheme.current.value.colors.warning;
  theme.info = vuetifyTheme.current.value.colors.info;
  theme.success = vuetifyTheme.current.value.colors.success;
  theme.error = vuetifyTheme.current.value.colors.error;
});
</script>

<template>
  <base-page>
    <v-row>
      <v-col>
        <h2>Theme</h2>
      </v-col>

      <v-divider class="border-opacity-25"></v-divider>

      <v-col
        v-for="color in colors"
        :key="color">
        {{ color }}
        <v-color-picker v-model="(theme as any)[color]" />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h2>Buttons</h2>
      </v-col>

      <v-col cols="12">
        <base-btn
          v-for="option in btnOptions"
          :key="option.label"
          :outlined="option.value"
          size="small"
          class="mx-1"
          @click="option.value = !option.value">
          {{ option.label }}
        </base-btn>
      </v-col>

      <v-divider class="border-opacity-25"></v-divider>

      <v-col
        v-for="color in colors"
        :key="color">
        <base-btn
          :color="getColor(color)"
          :loading="loadBtn"
          :outlined="outlineBtn"
          :flat="flatBtn"
          :plain="plainBtn"
          :text="textBtn"
          :disabled="disabledBtn"
          class="button">{{ color }}</base-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h2>Cards</h2>
      </v-col>

      <v-col cols="12">
        <base-btn
          v-for="option in cardOptions"
          :key="option.label"
          :outlined="option.value"
          size="small"
          class="mx-1"
          @click="option.value = !option.value">
          {{ option.label }}
        </base-btn>
      </v-col>

      <v-divider class="border-opacity-25"></v-divider>

      <v-col
        v-for="color in colors"
        :key="color">
        <base-card
          :color="getColor(color)"
          :loading="loadCard"
          :outlined="outlineCard"
          :flat="flatCard"
          :plain="plainCard"
          class="card">
          <v-card-title>Title</v-card-title>
          <v-card-subtitle>Subtitle</v-card-subtitle>
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


  </base-page>
</template>

<style scoped>
.button {
  width: 100%;
}

.card {
  width: 100%;
}
</style>