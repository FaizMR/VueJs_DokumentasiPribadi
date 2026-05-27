<script setup lang="ts">
import { SidebarProvider } from '@/components/ui/sidebar';
import TheSidebar from '@/components/TheSidebar.vue';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RouterLink } from 'vue-router';

const mySidebar = [
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
  { name: 'Corousel', link: '/corousel' },
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
  <section class=" px-[3%] relative bg-slate-200/50 dark:bg-black/70 min-h-screen flex items-center justify-center">
    <SidebarProvider>
      <TheSidebar class="pt-17" />
      <div class="pt-18 pr-50">
        <Card class="border-0 shadow-transparent bg-transparent">
          <CardHeader>
            <CardTitle class="text-4xl text-slate-950 dark:text-white/80">
              Components
            </CardTitle>
            <CardDescription class="text-sm text-slate-950 dark:text-white/80">
              Disini kamu dapat menemukan semua komponen yang telah saya kumpulkan selama proses belajar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-5">
              <RouterLink v-for="item in mySidebar" :key="item.name" :to="item.link"
                class="hover:bg-slate-300/50 dark:hover:bg-white/20 rounded-md">
                <Button variant="ghost" class="cursor-pointer text-slate-950 dark:text-white/95 ">{{
                  item.name
                }}</Button>
              </RouterLink>
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarProvider>

  </section>
</template>
