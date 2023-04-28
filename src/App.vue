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
