<script setup lang="ts">
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { RouterLink } from 'vue-router'; // 1. Import RouterLink

defineProps<{
  groupLabels: { name: string }[]
  menuItems: { name: string; link: string }[]
}>();
</script>
<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup v-for="item in groupLabels" :key="item.name">
        <SidebarGroupLabel class="text-sm">{{ item.name }}</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <RouterLink v-for="item in menuItems" :key="item.name" :to="item.link">
                <SidebarMenuButton
                  class="cursor-pointer text-slate-950 dark:text-white/95 hover:bg-slate-300/50 dark:hover:bg-white/20">
                  {{ item.name }}
                </SidebarMenuButton>
              </RouterLink>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
</template>
