<script setup lang="ts">
import TheSidebar from './TheSidebar.vue';
import { SidebarProvider } from './ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft } from '@lucide/vue'
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar'
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
                  Avatar
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Elemen gambar dengan alternatif untuk mewakili pengguna.
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
                <div class="flex flex-row flex-wrap items-center gap-12">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                  <div
                    class="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src="https://github.com/evilrabbit.png" alt="@evilrabbit" />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
              <div class="border-2 h-16 rounded-md">
                <div class="text-center py-4 h-105">
                  <span>npx shadcn-vue@latest add avatar
                  </span>
                </div>
                <div class="flex justify-end gap-2">
                  <RouterLink to="/aspectRatio" class="pr-2">
                    <Button variant="ghost"
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                      <ChevronLeft class="w-6 h-6 text-white" />Aspect Ratio
                    </Button>
                  </RouterLink>
                  <RouterLink to="/badge">
                    <Button variant="ghost"
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                      Badge
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
