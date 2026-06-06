<script setup lang="ts">
import TheSidebar from './TheSidebar.vue';
import { SidebarProvider } from './ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft } from '@lucide/vue'
import { Button } from './ui/button';
import { ChevronRight } from '@lucide/vue';
import { ChevronsUpDown } from '@lucide/vue'
import { ref } from 'vue'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

const isOpen = ref(false)
</script>
<template>
  <section class=" px-[3%] relative bg-slate-200/50 dark:bg-black/70 min-h-screen flex items-center justify-center">
    <SidebarProvider>
      <TheSidebar class="pt-17" />
      <div class="pt-18 pr-50">
        <Card class="border-0 shadow-transparent bg-transparent">
          <CardHeader>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <CardTitle class="text-4xl text-slate-950 dark:text-white/80">
                  Collapsible
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Komponen interaktif yang memperluas/menyusutkan panel.
                </CardDescription>
              </div>
              <div>
                <CardTitle class="pt-2 text-2xl text-slate-950 dark:text-white/80">
                  Installation
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Saya melakukan installation menggunakan npm / npx
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md px-10 py-10">
                <Collapsible v-model:open="isOpen" class="flex w-[350px] flex-col gap-2">
                  <div class="flex items-center justify-between gap-4 px-4">
                    <h4 class="text-sm font-semibold">
                      @peduarte starred 3 repositories
                    </h4>
                    <CollapsibleTrigger as-child>
                      <Button variant="ghost" size="icon" class="size-8 cursor-pointer">
                        <ChevronsUpDown />
                        <span class="sr-only">Toggle</span>
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <div class="rounded-md border px-4 py-2 font-mono text-sm">
                    @radix-ui/primitives
                  </div>
                  <CollapsibleContent class="flex flex-col gap-2">
                    <div class="rounded-md border px-4 py-2 font-mono text-sm">
                      @radix-ui/colors
                    </div>
                    <div class="rounded-md border px-4 py-2 font-mono text-sm">
                      @stitches/react
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
              <div class="border-2 h-16 rounded-md">
                <div class="text-center py-4 h-105">
                  <span>npx shadcn-vue@latest add collapsible</span>
                </div>
                <div class="flex justify-end gap-2">
                  <RouterLink to="/checkbox" class="pr-2">
                    <Button variant="ghost"
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                      <ChevronLeft class="w-6 h-6 text-white" />Checkbox
                    </Button>
                  </RouterLink>
                  <RouterLink to="/combobox">
                    <Button variant="ghost"
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                      Combobox
                      <ChevronRight class="w-6 h-6 text-white" />
                    </Button>
                  </RouterLink>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarProvider>
  </section>
</template>
