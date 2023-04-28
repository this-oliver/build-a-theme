<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'image'
  },
  width: {
    type: [ Number, String ],
    default: 'auto'
  },
  height: {
    type: [ Number, String ],
    default: '100%'
  },
  maxHeight: {
    type: [ String, Number ],
    default: undefined
  },
  maxWidth: {
    type: [ String, Number ],
    default: undefined
  },
  aspectRatio: {
    type: [ String, Number ],
    default: undefined
  },
  size: {
    type: String,
    default: undefined
  },
  crop: {
    type: Boolean,
    default: false
  },
  scaleDown: {
    type: Boolean,
    default: false
  },
  lazy: {
    type: Boolean,
    default: false
  }
});

const getStyle = computed(() => {
  let width = props.width;
  let height = props.height;
  let objectFit = 'cover';

  if (props.crop) {
    height = props.height === 'auto' ? '200px' : props.height;
    width = props.width === '100%' ? '100%' : props.width;
  }

  if (props.scaleDown) {
    objectFit = 'scale-down;';
  }

  return ` width: ${width}; height: ${height}; object-fit: ${objectFit};`;
});
</script>

<template>
  <v-img
    v-if="lazy"
    :src="src"
    :lazy-src="src"
    :alt="alt"
    :height="height"
    :width="width"
    :max-height="maxHeight"
    :max-width="maxWidth"
    :aspect-ratio="aspectRatio"
    :style="getStyle" />
  <img
    v-else
    :src="src"
    :width="width"
    :height="height"
    :style="getStyle">
</template>