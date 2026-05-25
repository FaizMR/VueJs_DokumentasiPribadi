<script setup lang="ts">
import TheSidebar from './TheSidebar.vue';
import { SidebarProvider } from './ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircleIcon, CheckCircle2Icon, ChevronLeft, PopcornIcon } from '@lucide/vue'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert'
import { Button } from './ui/button';
import { ChevronRight } from '@lucide/vue';

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
                  Allert
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Menampilkan pemberitahuan untuk menarik perhatian pengguna.
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
                <div class="grid w-full max-w-xl items-start gap-4">
                  <Alert>
                    <CheckCircle2Icon />
                    <AlertTitle>Success! Your changes have been saved</AlertTitle>
                    <AlertDescription>
                      This is an alert with icon, title and description.
                    </AlertDescription>
                  </Alert>
                  <Alert>
                    <PopcornIcon />
                    <AlertTitle>This Alert has a title and an icon. No description.</AlertTitle>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertCircleIcon />
                    <AlertTitle>Unable to process your payment.</AlertTitle>
                    <AlertDescription>
                      <p>Please verify your billing information and try again.</p>
                      <ul class="mt-2 list-inside list-disc space-y-1">
                        <li>Check your card details</li>
                        <li>Ensure sufficient funds</li>
                        <li>Verify billing address</li>
                      </ul>
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
              <div class="border-2 h-16 rounded-md">
                <div class="text-center py-4 h-80">
                  <span>npx shadcn-vue@latest add alert</span>
                </div>
                <div class="flex justify-end gap-2">
                  <RouterLink to="/accordion" class="pr-2">
                    <Button variant="ghost"
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                      <ChevronLeft class="w-6 h-6 text-white" />Accordion
                    </Button>
                  </RouterLink>
                  <RouterLink to="/alertDialog">
                    <Button variant="ghost"
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">Alert
                      Dialog
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
