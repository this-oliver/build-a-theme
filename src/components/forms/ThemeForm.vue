<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import { useClipboard } from '@/composables/useClipboard';
import type { Color } from '@/stores/theme-store';
import { useThemeStore } from '@/stores/theme-store';
import type { PropType } from 'vue';
import { computed, ref, watch } from 'vue';

const themeStore = useThemeStore();
const { copyToClipboard } = useClipboard();

const props = defineProps({
  color: {
    type: Object as PropType<Color>,
    required: true
  },
  readOnly: {
    type: Boolean,
    default: false
  }
});

const active = ref<boolean>(false);
const hex = ref<string>(props.color.value);

/**
 * `on-background` and `on-surface` are special cases that
 * should be black or white depending on the theme for
 * readability.
 */
const getColor = computed<string>(() => {
  switch (props.color.label) {
  case 'on-background':
    return themeStore.getColor('background')?.value || props.color.value;
    
  case 'on-surface':
    return themeStore.getColor('surface')?.value || props.color.value;
  
  default:
    return props.color.value;
  }
});

function setColor(){
  themeStore.setColor(props.color.label, hex.value);
  deactivate();
}

function toggleActivate(){
  active.value = !active.value;
}

function deactivate(){
  active.value = false;
  hex.value = props.color.value;
}

watch(() => props.color.value, (value) => {
  hex.value = value;
})
</script>

<template>
  <div>
    <v-card
      class="`mt-2 pa-2`"
      rounded="lg"
      elevation="0"
      density="compact"
      :color="getColor">
      <v-row
        no-gutters
        justify="space-between"
        align="center">
        <v-col>
          <v-card-title>{{ color.label }}</v-card-title>
        </v-col>

        <v-col
          class="text-end"
          cols="auto">
          <v-card-subtitle>
            <v-sheet
              :class="`clickable pa-1 rounded text-${themeStore.dark ? 'white' : 'black'}`"
              @click="copyToClipboard(color.value, `Copied '${color.label}' value (${color.value})`)">
              {{ color.value }}
              <v-icon
                :color="color.value"
                icon="mdi-circle"></v-icon>
            </v-sheet>
          </v-card-subtitle>
        </v-col>
        
        <v-col cols="12">
          <v-card-text>{{ color.description }}</v-card-text>
        </v-col>
      </v-row>

      <v-card-actions>
        <base-btn
          block
          class="mr-1"
          size="small"
          :disabled="props.readOnly"
          @click="toggleActivate">
          Change {{ color.label }}
        </base-btn>
      </v-card-actions>
    </v-card>
  
    <v-navigation-drawer
      :model-value="active"
      :permanent="true"
      location="left"
      width="100%"
      class="px-1"
      @update:modelValue="deactivate">
      <v-row
        align="center"
        justify="space-between"
        class="px-1">
        <v-col cols="auto">
          <h3>{{ props.color.label }}</h3>
        </v-col>
  
        <v-col cols="auto">
          <base-btn
            small
            @click="deactivate">
            <v-icon icon="mdi-close"></v-icon>
          </base-btn>
        </v-col>
      </v-row>
    
      <v-color-picker
        v-model="hex"
        mode="hexa"
        elevation="0"
        class="mt-2"/>

      <base-btn
        block
        :color="hex"
        class="mt-2"
        @click="setColor">
        Set Color
      </base-btn>
    </v-navigation-drawer>
  </div>
</template>

<style>
.clickable {
  cursor: pointer;
}
</style>