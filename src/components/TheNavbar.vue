<script setup lang="ts">
import { RouterLink } from 'vue-router'; // 1. Import RouterLink
import DarkModeToggle from './DarkModeToggle.vue';

defineProps<{
  menuItems: { name: string; link: string }[]
}>();

</script>

<template>
  <nav
    class="flex justify-between items-center py-4 p-2 px-[5%] border-b border-slate-200/50 dark:border-white/10 backdrop-blur-md fixed top-0 left-0 right-0 z-50 ">

    <RouterLink to="/" class="text-xl text-slate-950 uppercase dark:text-white/95">
      <span class="font-bold text-2xl">LV</span>Studio
    </RouterLink>

    <RouterLink v-for="item in menuItems" :key="item.name" :to="item.link"
      class="inline-block font-medium tracking-wide rounded-sm px-5 py-1.5 text-sm leading-normal text-slate-950 dark:text-white/95 hover:bg-slate-300/50 dark:hover:bg-white/20 ">
      {{ item.name }}
    </RouterLink>


    <div class="flex gap-2">
      <DarkModeToggle class="cursor-pointer" />
    </div>

  </nav>
</template>
