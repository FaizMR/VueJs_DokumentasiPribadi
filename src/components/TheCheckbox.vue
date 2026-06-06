<script setup lang="ts">
import TheSidebar from './TheSidebar.vue';
import { SidebarProvider } from './ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft } from '@lucide/vue'
import { Button } from './ui/button';
import { ChevronRight } from '@lucide/vue';
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
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
                  Checkbox
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Kontrol yang memungkinkan pengguna untuk beralih antara checked and not checked.
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
                <div class="flex flex-col gap-6">
                  <div class="flex items-center gap-3">
                    <Checkbox id="terms" />
                    <Label for="terms">Accept terms and conditions</Label>
                  </div>
                  <div class="flex items-start gap-3">
                    <Checkbox id="terms-2" :default-value="true" />
                    <div class="grid gap-2">
                      <Label for="terms-2">Accept terms and conditions</Label>
                      <p class="text-muted-foreground text-sm">
                        By clicking this checkbox, you agree to the terms and conditions.
                      </p>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <Checkbox id="toggle" disabled />
                    <Label for="toggle">Enable notifications</Label>
                  </div>
                  <Label
                    class="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:border-blue-600 has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
                    <Checkbox id="toggle-2" :default-value="true"
                      class="data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700" />
                    <div class="grid gap-1.5 font-normal">
                      <p class="text-sm leading-none font-medium">
                        Enable notifications
                      </p>
                      <p class="text-muted-foreground text-sm">
                        You can enable or disable notifications at any time.
                      </p>
                    </div>
                  </Label>
                </div>
              </div>
              <div class="border-2 h-16 rounded-md">
                <div class="text-center py-4 h-105">
                  <span>npx shadcn-vue@latest add checkbox</span>
                </div>
                <div class="flex justify-end gap-2">
                  <RouterLink to="/chart" class="pr-2">
                    <Button variant="ghost"
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                      <ChevronLeft class="w-6 h-6 text-white" />Chart
                    </Button>
                  </RouterLink>
                  <RouterLink to="/collapsible">
                    <Button variant="ghost"
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                      Collapsible
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
