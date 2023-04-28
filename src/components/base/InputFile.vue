<script setup lang="ts">
import { watch, ref } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: 'Upload'
  },
  multiple: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits([ 'input' ]);

const files = ref<File[]>([]);

watch(files, (files) => {
  if (files.length > 0) {
    if(props.multiple){
      emit('input', files);
    }else{
      emit('input', files[0]);
    }
  }
});

</script>

<template>
  <v-file-input
    v-model="files"
    :label="props.label"
    :multiple="props.multiple"
    :show-size="true" />
</template>
