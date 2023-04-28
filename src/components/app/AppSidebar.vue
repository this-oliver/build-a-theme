<script setup lang="ts">
import ThemeBtn from '@/components/btns/ThemeBtn.vue';
import { useNavigationStore, useSidebarStore } from '@/stores';

const drawer = useSidebarStore();
const navigation = useNavigationStore();

</script>

<template>
  <v-navigation-drawer v-model="drawer.visible">
    <v-list>
      <v-list-item
        v-for="option in navigation.options"
        :key="option.label"
        :to="option.to"
        @click="option.action">
        <template v-slot:prepend>
          <v-icon :icon="option.icon"></v-icon>
        </template>


        <v-list-item-title>{{ option.label }}</v-list-item-title>
      </v-list-item>
      
      <theme-btn list-mode />
    </v-list>
  </v-navigation-drawer>

</template>