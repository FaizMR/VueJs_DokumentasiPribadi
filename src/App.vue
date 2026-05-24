<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheNavbar from './components/TheNavbar.vue';
// import { SidebarProvider } from '@/components/ui/sidebar';
// import TheSidebar from '@/components/TheSidebar.vue';

const myNav = [
  { name: 'Components', link: '/components' },
  // { name: 'Style', link: '/styles' },
];
</script>

<template>

  <!-- <SidebarProvider>
    <TheSidebar />
    <main class="flex">
      <TheNavbar :menu-items="myNav" />
      <RouterView />
    </main>
  </SidebarProvider> -->

  <TheNavbar :menu-items="myNav" />
  <RouterView />
</template>
