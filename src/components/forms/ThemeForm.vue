<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import type { Color } from '@/stores/theme-store';
import { useThemeStore } from '@/stores/theme-store';
import type { PropType } from 'vue';
import { ref } from 'vue';

const themeStore = useThemeStore();

const props = defineProps({
  color: {
    type: Object as PropType<Color>,
    required: true
  }
});

const hex = ref<string>(props.color.value);
const active = ref<boolean>(false);

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
  <div>
    <div>
      <base-btn
        block
        :color="hex"
        @click="activate">
        {{ props.color.label }}
      </base-btn>
      <small>{{ hex }}</small>
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