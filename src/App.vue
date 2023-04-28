<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNav from './components/AppNav.vue';
import AppSidebar from './components/AppSidebar.vue';
import AppNotification from './components/AppNotification.vue';
import AppFooter from './components/AppFooter.vue';

</script>

<template>
  
  <v-app>
    <app-nav />
    <app-sidebar />
    
    <v-main>
      <app-notification />
      <v-container>
        <v-row justify="center">
          <v-col
            cols="11"
            md="10">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  
    <app-footer />
  </v-app>
</template>
