<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import ColorCard from '@/components/cards/ColorCard.vue';
import type { Color } from '@/stores/theme-store';
import { useThemeStore } from '@/stores/theme-store';
import type { PropType } from 'vue';
import { ref, watch } from 'vue';

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

const active = ref<boolean>(false);
const hex = ref<string>(props.color.value);

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
    <color-card
      :color="props.color"
      class="`mt-2`">
      <template #actions>
        <base-btn
          block
          class="mr-1"
          size="small"
          :disabled="props.readOnly"
          @click="toggleActivate">
          Change {{ color.label }}
        </base-btn>
      </template>
    </color-card>
  
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
