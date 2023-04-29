<script setup lang="ts">
import AppFooter from '@/components/app/AppFooter.vue';
import AppNav from '@/components/app/AppNav.vue';
import AppNotification from '@/components/app/AppNotification.vue';
import AppSidebar from '@/components/app/AppSidebar.vue';
import { RouterView } from 'vue-router';

</script>

<template>
  
  <v-app>
    <app-nav />
    <app-sidebar />
    
    <v-main id="app-content">
      <app-notification />
      <v-container>
        <v-row justify="center">
          <v-col md="11">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  
    <app-footer />
  </v-app>
</template>

<style>
  #app-content {
    margin-bottom: 10vh;
  }

  @media (min-width: 600px) {
    #app-content {
      margin-bottom: 0;
    }
  }
</style>