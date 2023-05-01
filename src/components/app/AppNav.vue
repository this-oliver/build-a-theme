<script setup lang="ts">
import BaseBtn from '@/components/base/BaseBtn.vue';
import { useNavigationStore } from '@/stores/navigation-store';
import { useSidebarStore } from '@/stores/sidebar-store';
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

const drawer = useSidebarStore();
const navigation = useNavigationStore();

const { name } = useDisplay();

const isSmallScreen = computed(() => {
  return name.value === 'xs' || name.value === 'sm';
});

</script>

<template>
  <v-app-bar
    id="navbar"
    app
    flat>
    <v-app-bar-nav-icon
      v-if="isSmallScreen"
      @click="drawer.toggle" />

    <router-link
      class="pa-1"
      to="/">
      <span id="logo">
        <span id="logo-emoji">🖍️</span>
        <span id="logo-name">Build-A-Theme</span>
      </span>
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
#navbar {
  padding: 0 1rem;
}

#logo {
  font-size: 1.5rem;
}

#logo > * {
  padding: 0 0.5rem;
  vertical-align: middle;
}

#logo-emoji {
  font-size: 2rem;
}

#logo-name {
  font-weight: bold;
}

a {
  color: inherit;
  text-decoration: none;
}

@media (min-width: 800px) {
  #navbar {
    padding: 0 3rem;
  }

  #logo {
    font-size: 2rem;
  }
}
</style>