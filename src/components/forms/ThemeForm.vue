<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import type { Color } from '@/stores/theme-store';
import { useThemeStore } from '@/stores/theme-store';
import type { PropType } from 'vue';
import { computed, ref, watch } from 'vue';

const specialCases = [ 'on-background', 'on-surface' ]; // These colors that are used for text should be black or white depending on the theme

const themeStore = useThemeStore();

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

const hex = ref<string>(props.color.value);
const active = ref<boolean>(false);

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

const btnColor = computed<string>(() => {
  let color = props.color.value;

  if(specialCases.includes(props.color.label)){
    if(props.color.label === 'on-background'){
      // return background color
      color = themeStore.colors.find((color) => color.label === 'background')!.value;
    } else {
      // return surface color
      color = themeStore.colors.find((color) => color.label === 'surface')!.value;
    }
  }

  return color;
});

const textColor = computed<string>(() => {
  let color: string | undefined = undefined;

  if(specialCases.includes(props.color.label)){
    if(props.color.label === 'on-background'){
      // return background color
      color = themeStore.colors.find((color) => color.label === 'on-background')!.label;
    } else {
      // return surface color
      color = themeStore.colors.find((color) => color.label === 'on-surface')!.label;
    }
  }

  return color ? `text-${color}` : '';
});

watch(() => props.color.value, (value) => {
  hex.value = value;
})

</script>

<template>
  <div>
    <div>
      <base-btn
        block
        :class="`${textColor}`"
        :color="btnColor"
        :disabled="props.readOnly"
        @click="toggleActivate">
        {{ props.color.label }}
      </base-btn>
      <small>{{ props.color.value }}</small>
    </div>
  
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