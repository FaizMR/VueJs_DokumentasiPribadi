<script setup lang="ts">
import TheSidebar from './TheSidebar.vue';
import { SidebarProvider } from './ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from '@lucide/vue';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';
// Membuat directive untuk auto-highlight
const vHighlight = {
  mounted: (el: any) => {
    hljs.highlightElement(el);
  }
};

// Kode Anda disimpan sebagai string
const codeString = `<template>
  <Carousel
    :opts="{
      align: 'start',
      loop: true,
    }"
  >
    <CarouselContent>
      <CarouselItem>...</CarouselItem>
      <CarouselItem>...</CarouselItem>
      <CarouselItem>...</CarouselItem>
    </CarouselContent>
  </Carousel>
</template>
`;
</script>
<template>
  <section class=" px-[3%] relative bg-slate-200/50 dark:bg-black/70 min-h-screen flex items-center justify-center">
    <SidebarProvider>
      <TheSidebar class="pt-17" />
      <div class="pt-18 pr-50 ">
        <Card class="border-0 shadow-transparent bg-transparent">
          <CardHeader>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <CardTitle class="text-4xl text-slate-950 dark:text-white/80">
                  Carousel
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Sebuah carousel dengan gerakan dan geser yang dibangun menggunakan Embla.
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
              <div class="border-2 rounded-md items-center justify-center flex">
                <Carousel class="w-full max-w-xs">
                  <CarouselContent>
                    <CarouselItem v-for="i in 5" :key="i">
                      <div class="p-1">
                        <Card>
                          <CardContent class="flex aspect-square items-center justify-center p-6">
                            <span class="text-4xl font-semibold">{{ i }}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div class="border-2 h-16 rounded-md">
                <div class="text-center py-4">
                  <span>npx shadcn-vue@latest add carousel
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card class="border-0 shadow-transparent bg-transparent">
          <CardHeader>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <CardTitle class="text-2xl text-slate-950 dark:text-white/80">
                  Examples
                </CardTitle>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Sizes
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Untuk mengatur ukuran item, Anda dapat menggunakan kelas utilitas dasar pada
                  &lt;CarouselItem /&gt;.
                </CardDescription>
              </div>
              <div>
                <CardTitle class="pt-8 text-xl text-slate-950 dark:text-white/80">
                  Spacing
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Untuk mengatur jarak antar item, kita menggunakan utilitas pl-[VALUE] pada
                  &lt;CarouselItem /&gt; dan -ml-[VALUE] negatif pada
                  &lt;CarouselContent /&gt;.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <Carousel class="relative w-full max-w-xs" :opts="{
                  align: 'start',
                }">
                  <CarouselContent>
                    <CarouselItem v-for="(_, index) in 5" :key="index" class="md:basis-1/2 lg:basis-1/3">
                      <div class="p-1">
                        <Card>
                          <CardContent class="flex aspect-square items-center justify-center p-6">
                            <span class="text-3xl font-semibold">{{ index + 1 }}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <Carousel class="w-full max-w-sm" :opts="{
                  align: 'start',
                }">
                  <CarouselContent class="-ml-1">
                    <CarouselItem v-for="(_, index) in 5" :key="index" class="pl-1 md:basis-1/2 lg:basis-1/3">
                      <div class="p-1">
                        <Card>
                          <CardContent class="flex aspect-square items-center justify-center p-6">
                            <span class="text-2xl font-semibold">{{ index + 1 }}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card class="border-0 shadow-transparent bg-transparent">
          <CardHeader>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Orientation
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Gunakan properti orientation untuk mengatur orientasi carousel.
                </CardDescription>
              </div>
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Options
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Anda dapat memberikan opsi ke carousel menggunakan properti `opts`. Lihat dokumentasi Embla Carousel
                  untuk informasi lebih lanjut.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <Carousel orientation="vertical" class="relative w-full max-w-xs" :opts="{
                  align: 'start',
                }">
                  <CarouselContent class="-mt-1 h-50">
                    <CarouselItem v-for="(_, index) in 5" :key="index" class="p-1 md:basis-1/2">
                      <div class="p-1">
                        <Card>
                          <CardContent class="flex items-center justify-center p-6">
                            <span class="text-3xl font-semibold">{{ index + 1 }}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <pre><code v-highlight class="language-html bg-transparent">{{ codeString }}</code></pre>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card class=" border-0 shadow-transparent bg-transparent">
          <CardContent>
            <div class="flex justify-end items-end gap-2">
              <RouterLink to="/card" class="pr-2">
                <Button variant="ghost"
                  class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                  <ChevronLeft class="w-6 h-6 text-white" />Card
                </Button>
              </RouterLink>
              <RouterLink to="/chart">
                <Button variant="ghost"
                  class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                  Chart
                  <ChevronRight class="w-6 h-6 text-white" />
                </Button>
              </RouterLink>
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarProvider>
  </section>
</template>
