<script setup lang="ts">
import AppLogo from '@/components/app/AppLogo.vue';
import BaseBtn from '@/components/base/BaseBtn.vue';
import { useNavigationStore, useSidebarStore, useThemeStore } from '@/stores';
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

const drawer = useSidebarStore();
const navigation = useNavigationStore();
const themeStore = useThemeStore();

const { name } = useDisplay();

const isSmallScreen = computed(() => {
  return name.value === 'xs' || name.value === 'sm';
});

const color = computed(() => {
  return themeStore.colors.find((color) => color.label === 'primary')?.value;
})

</script>

<template>
  <v-app-bar
    app
    flat
    :color="color"
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
        <v-icon
          v-if="option.icon"
          :icon="option.icon"
          class="ml-1"></v-icon>
      </base-btn>
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

.plain {
  color: inherit;
  text-decoration: none;
}

@media (min-width: 800px) {
  .bar-container{
    padding: 0 2rem;
  }
}
</style>