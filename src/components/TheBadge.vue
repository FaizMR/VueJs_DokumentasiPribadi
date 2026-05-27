<script setup lang="ts">
import TheSidebar from './TheSidebar.vue';
import { SidebarProvider } from './ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft } from '@lucide/vue'
import { BadgeCheckIcon } from '@lucide/vue'
import { Badge } from '@/components/ui/badge'
import { Button } from './ui/button';
import { ChevronRight } from '@lucide/vue';

</script>
<template>
  <section class=" px-[3%] relative bg-slate-200/50 dark:bg-black/70 min-h-screen flex items-center justify-center">
    <SidebarProvider>
      <TheSidebar class="pt-17" />
      <div class="pt-18 pr-50 grid grid-rows-2">
        <Card class="border-0 shadow-transparent bg-transparent">
          <CardHeader>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <CardTitle class="text-4xl text-slate-950 dark:text-white/80">
                  Badge
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Menampilkan lencana atau komponen yang menyerupai lencana
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
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <div class="flex flex-col items-center gap-2">
                  <div class="flex w-full flex-wrap gap-2">
                    <Badge>Badge</Badge>
                    <Badge variant="secondary">
                      Secondary
                    </Badge>
                    <Badge variant="destructive">
                      Destructive
                    </Badge>
                    <Badge variant="outline">
                      Outline
                    </Badge>
                  </div>
                  <div class="flex w-full flex-wrap gap-2">
                    <Badge variant="secondary" class="bg-blue-500 text-white dark:bg-blue-600">
                      <BadgeCheckIcon />
                      Verified
                    </Badge>
                    <Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums">
                      8
                    </Badge>
                    <Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="destructive">
                      99
                    </Badge>
                    <Badge class="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums" variant="outline">
                      20+
                    </Badge>
                  </div>
                </div>
              </div>
              <div class="border-2 h-16 rounded-md">
                <div class="text-center py-4 h-105">
                  <span>npx shadcn-vue@latest add badge
                  </span>
                </div>
                <div class="flex justify-end gap-2">
                  <RouterLink to="/avatar" class="pr-2">
                    <Button variant="ghost"
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                      <ChevronLeft class="w-6 h-6 text-white" />Avatar
                    </Button>
                  </RouterLink>
                  <RouterLink to="/breadcrumb">
                    <Button variant="ghost"
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                      Breadcrumb
                      <ChevronRight class="w-6 h-6 text-white" />
                    </Button>
                  </RouterLink>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card class="border-0 max-w-140 shadow-transparent bg-transparent">
          <CardHeader>
            <CardTitle class="text-2xl text-slate-950 dark:text-white/80">
              Link
            </CardTitle>
            <CardDescription class="text-sm text-slate-950 dark:text-white/80">
              Anda dapat menggunakan prop `as-child` untuk membuat komponen lain terlihat seperti lencana. Berikut
              contoh tautan yang terlihat seperti lencana.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
              <span>
                &lt;<span class="text-green-400">Badge</span> <span class="text-purple-400">as-child</span>&gt;<br>
                <span class="pl-4">
                  &lt;<span class="text-green-400">a</span> <span class="text-purple-400">href</span> =<span
                    class="text-blue-400">"#"</span>&gt;Badge&lt;/<span class="text-green-400">a</span>&gt;
                </span>
                <br>
                &lt;/<span class="text-green-400">Badge</span>&gt;
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarProvider>
  </section>
</template>
