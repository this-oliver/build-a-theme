<script setup lang="ts">
import type { Color } from '@/stores/theme-store';
import { useThemeStore } from '@/stores/theme-store';
import type { PropType } from 'vue';
import { computed, ref } from 'vue';
import BaseBtn from '../base/BaseBtn.vue';
import BaseCard from '../base/BaseCard.vue';

const themeStore = useThemeStore();

const props = defineProps({
  color: {
    type: Object as PropType<Color>,
    required: true
  }
});

const hex = ref<string>(props.color.value);
const active = ref<boolean>(false);

const label = computed<string>(() => {
  return `${props.color.label} ${hex.value}`;
})

function setColor(){
  themeStore.setColor(props.color.label, hex.value);
}

function activate(){
  active.value = true;
}

function deactivate(){
  active.value = false;
  hex.value = props.color.value;
}

</script>

<template>
  <base-card v-if="active">
    <v-row
      align="center"
      justify="space-between">
      <v-col cols="auto">
        <span>{{ label }}</span>
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

    <v-card-actions>
      <base-btn
        block
        :color="hex"
        @click="setColor">
        Set Color
      </base-btn>
    </v-card-actions>
  </base-card>

  <div v-else>
    <base-btn
      block
      :color="hex"
      @click="activate">
      {{ props.color.label }}
    </base-btn>
    <small>{{ hex }}</small>
  </div>
</template>