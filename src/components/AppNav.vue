<script setup lang="ts">
import { useNavigationStore, useSidebarStore } from '@/stores';
import { computed } from 'vue';
import { useDisplay } from 'vuetify';
import AppLogo from './AppLogo.vue';
import BaseBtn from './base/BaseBtn.vue';
import ThemeBtn from './btns/ThemeBtn.vue';

const drawer = useSidebarStore();
const navigation = useNavigationStore();

const { name } = useDisplay();

const isSmallScreen = computed(() => {
  return name.value === 'xs' || name.value === 'sm';
});

</script>

<template>
  <v-app-bar
    app
    flat
    color="primary"
    class="bar-container">
    <v-app-bar-nav-icon
      v-if="isSmallScreen"
      @click="drawer.toggle" />

    <router-link
      class="bar-logo plain"
      to="/">
      <app-logo />
    </router-link>

    <v-spacer />

    <div v-if="!isSmallScreen" >
      <base-btn
        v-for="option in navigation.options"
        :key="option.label"
        plain
        :to="option.to"
        class="mx-1"
        @click="option.action">
        {{ option.label }}
      </base-btn>

      <theme-btn class="mx-1" />
    </div>
  </v-app-bar>
</template>

<style scoped>
.bar-container {
  position: relative;
}

.bar-logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

@media (min-width: 800px) {
  .bar-container{
    padding: 0 2rem;
  }
}
</style>