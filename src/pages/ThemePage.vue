<script setup lang="ts">
import BasePage from '@/components/base/BasePage.vue';
import ButtonDemo from '@/components/DemoButtons.vue';
import CardDemo from '@/components/DemoCards.vue';
import ThemeDemo from '@/components/DemoTheme.vue';

</script>

<template>
  <base-page>
    <theme-demo />
    <button-demo />
    <card-demo />
  </base-page>
</template>
