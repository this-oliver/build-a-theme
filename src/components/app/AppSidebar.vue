<script setup lang="ts">
import { useNavigationStore } from '@/stores/navigation-store';
import { useSidebarStore } from '@/stores/sidebar-store';

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
    </v-list>
  </v-navigation-drawer>

</template>