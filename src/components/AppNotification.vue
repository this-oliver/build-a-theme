<script setup lang="ts">
import { ref } from 'vue';
import { Toaster } from 'vue-sonner'

type PositionType = 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

const position = ref<PositionType>('top-right');
const expand = ref<boolean>(false);

</script>

<template>
  <toaster
    :position="position"
    :expand="expand"/>
</template>