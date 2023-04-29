<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import BaseCard from '@/components/base/BaseCard.vue';
import CodeCard from '@/components/cards/CodeCard.vue';
import { useNotification } from '@/composables/useNotification';
import type { Color } from '@/stores/theme-store';
import type { PropType } from 'vue';
import { computed } from 'vue';
import type { ThemeDefinition } from 'vuetify/lib/framework.mjs';

const { notify } = useNotification();

const props = defineProps({
  colors: {
    type: Object as PropType<Color[]>,
    required: true
  },
  dark: {
    type: Boolean,
    required: true
  }
})

const theme = computed<ThemeDefinition>(() => {
  const themeObj: ThemeDefinition = {
    dark: props.dark,
    colors: {}
  };

  props.colors.forEach((color) => {
    themeObj.colors![color.label] = color.value;
  });

  return themeObj;
});

const code = computed<string>(() => {
  return `const theme = ${JSON.stringify(theme.value, null, 2)};`;
});

function copyToClipboard() {
  navigator.clipboard.writeText(code.value);
  notify('Theme Builder', 'Copied to clipboard', 'success');
}
</script>

<template>
  <v-row>
    <v-col>
      <base-card>
        <code-card
          :code="code"
          language="javascript"
          class="mt-2"/>

        <base-btn
          block
          outlined
          class="mt-2"
          @click="copyToClipboard">
          <p>Copy <v-icon icon="mdi-content-copy"></v-icon></p>
        </base-btn>
      </base-card>
    </v-col>
  </v-row>
</template>
