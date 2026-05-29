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

const groupLabels = [{ name: 'Components' }];
const menuItems = [
  { name: 'Accordion', link: '/accordion' },
  { name: 'Alert', link: '/alert' },
  { name: 'Alert Dialog', link: '/alertDialog' },
  { name: 'Aspect Ratio', link: '/aspectRatio' },
  { name: 'Avatar', link: '/avatar' },
  { name: 'Badge', link: '/badge' },
  { name: 'Breadcrumb', link: '/breadcrumb' },
  { name: 'Button', link: '/button' },
  { name: 'Button Group', link: '/buttonGroup' },
  { name: 'Calendar', link: '/calendar' },
  { name: 'Card', link: '/card' },
  { name: 'carousel', link: '/carousel' },
  { name: 'Chart', link: '/chart' },
  { name: 'Checkbox', link: '/checkbox' },
  { name: 'Collapsible', link: '/collapsible' },
  { name: 'Combobox', link: '/combobox' },
  { name: 'Command', link: '/command' },
  { name: 'Context Menu', link: '/contaxtMenu' },
  { name: 'Data Table', link: '/dataTable' },
  { name: 'Date Picker', link: '/datePicker' },
  { name: 'Dialog', link: '/dialog' },
  { name: 'Drawer', link: '/drawer' },
  { name: 'Dropdown Menu', link: '/dropdownMenu' },
  { name: 'Empty', link: '/empty' },
  { name: 'Field', link: '/field' },
  { name: 'Form', link: '/form' },
  { name: 'Hover Card', link: '/hoverCard' },
  { name: 'Input', link: '/input' },
  { name: 'Input Group', link: '/inputGroup' },
  { name: 'Input OTP', link: '/inputOTP' },
  { name: 'Item', link: '/item' },
  { name: 'Kpd', link: '/kbd' },
  { name: 'Label', link: '/label' },
  { name: 'Menu Bar', link: '/menuBar' },
  { name: 'Native Select', link: '/nativeSelect' },
  { name: 'Navigation Menu', link: '/navigationMenu' },
  { name: 'Number Field', link: '/numberField' },
  { name: 'Pagination', link: '/pagination' },
  { name: 'Pin Input', link: '/pinInput' },
  { name: 'Popover', link: '/popover' },
  { name: 'Progress', link: '/progress' },
  { name: 'Radio Group', link: '/radioGroup' },
  { name: 'Range Calendar', link: '/rangeCalendar' },
  { name: 'Resizable', link: '/resizable' },
  { name: 'Scroll Area', link: '/scrollArea' },
  { name: 'Select', link: '/select' },
  { name: 'Separator', link: '/separator' },
  { name: 'Sheet', link: '/sheet' },
  { name: 'Sidebar', link: '/sidebar' },
  { name: 'Skeleton', link: '/skeleton' },
  { name: 'Slider', link: '/slider' },
  { name: 'Sonner', link: '/sonner' },
  { name: 'Spinner', link: '/spinner' },
  { name: 'Stepper', link: '/stepper' },
  { name: 'Switch', link: '/switch' },
  { name: 'Table', link: '/table' },
  { name: 'Tabs', link: '/tabs' },
  { name: 'Tags Input', link: '/tagsInput' },
  { name: 'Textarea', link: '/textarea' },
  { name: 'Toast', link: '/toast' },
  { name: 'Toggle', link: '/toggle' },
  { name: 'Toggle Group', link: '/toggleGroup' },
  { name: 'Tooltip', link: '/tooltip' },
  { name: 'Typography', link: '/typography' },
];
</script>
<template>
  <Sidebar>
    <SidebarContent>
      <SidebarGroup v-for="item in groupLabels" :key="item.name">
        <SidebarGroupLabel>{{ item.name }}</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <RouterLink v-for="item in menuItems" :key="item.name" :to="item.link">
                <SidebarMenuButton
                  class="pl-4 cursor-pointer text-slate-950 dark:text-white/95 hover:bg-slate-300/50 dark:hover:bg-white/20">
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
