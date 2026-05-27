<script setup lang="ts">
import TheSidebar from './TheSidebar.vue';
import { SidebarProvider } from './ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft } from '@lucide/vue'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDownIcon, SlashIcon } from '@lucide/vue'
import { Button } from './ui/button';
import { ChevronRight } from '@lucide/vue';
import { useMediaQuery } from '@vueuse/core'
import { ref } from 'vue'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

const items = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'Documentation' },
  { href: '#', label: 'Building Your Application' },
  { href: '#', label: 'Data Fetching' },
  { label: 'Caching and Revalidating' },
]
const ITEMS_TO_DISPLAY = 3
const open = ref(false)
const isDesktop = useMediaQuery('(min-width: 768px)')
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
                  Breadcrumb
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Menampilkan jalur ke sumber daya saat ini menggunakan hierarki tautan.
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
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/">
                        Home
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <DropdownMenu>
                        <DropdownMenuTrigger class="flex items-center gap-1">
                          <BreadcrumbEllipsis class="h-4 w-4" />
                          <span class="sr-only">Toggle menu</span>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                          <DropdownMenuItem>Documentation</DropdownMenuItem>
                          <DropdownMenuItem>Themes</DropdownMenuItem>
                          <DropdownMenuItem>GitHub</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/docs/components">
                        Components
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div class="border-2 h-16 rounded-md">
                <div class="text-center py-4 h-105">
                  <span>npx shadcn-vue@latest add breadcrumb
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
                  Custom Separator
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Pemisah kustom Gunakan komponen kustom sebagai anak untuk
                  &lt;BreadcrumbSeparator /&gt; untuk membuat pemisah kustom.
                </CardDescription>
              </div>
              <div>
                <CardTitle class="pt-8 text-xl text-slate-950 dark:text-white/80">
                  Dropdown
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Anda dapat menggabungkan
                  &lt;BreadcrumbItem /&gt; dengan
                  &lt;DropdownMenu /&gt; untuk membuat menu tarik-turun di breadcrumb.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink as-child>
                        <a href="/">Home</a>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <SlashIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbLink as-child>
                        <a href="/docs/components">Components</a>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <SlashIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink as-child>
                        <a href="/">Home</a>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <SlashIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <DropdownMenu>
                        <DropdownMenuTrigger
                          class="cursor-pointer flex items-center gap-1 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-3.5">
                          Components
                          <ChevronDownIcon />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                          <DropdownMenuItem class="cursor-pointer">Documentation</DropdownMenuItem>
                          <DropdownMenuItem class="cursor-pointer">Themes</DropdownMenuItem>
                          <DropdownMenuItem class="cursor-pointer">GitHub</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator>
                      <SlashIcon />
                    </BreadcrumbSeparator>
                    <BreadcrumbItem>
                      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card class="border-0 shadow-transparent bg-transparent">
          <CardHeader>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Collapsed
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Kami menyediakan komponen
                  &lt;BreadcrumbEllipsis /&gt; untuk menampilkan status yang dilipat ketika breadcrumb terlalu panjang.
                </CardDescription>
              </div>
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Link Component
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Untuk menggunakan komponen tautan kustom dari pustaka perutean Anda, Anda dapat menggunakan properti
                  `as-child` pada `
                  &lt;BreadcrumbLink /&gt;`.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink as-child>
                        <a href="/">Home</a>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbEllipsis />
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink as-child>
                        <a href="/docs/components">Components</a>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink as-child>
                        <RouterLink to="/">
                          Home
                        </RouterLink>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink as-child>
                        <RouterLink to="/docs/components">
                          Components
                        </RouterLink>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card class=" border-0 shadow-transparent bg-transparent">
          <CardHeader class="max-w-137.5">
            <CardTitle class="text-xl text-slate-950 dark:text-white/80">
              Responsive
            </CardTitle>
            <CardDescription class="text-sm text-slate-950 dark:text-white/80">
              Berikut contoh breadcrumb responsif yang menggabungkan
              &lt;BreadcrumbItem /&gt; dengan
              &lt;BreadcrumbEllipsis /&gt;,
              &lt;DropdownMenu /&gt;, dan
              &lt;Drawer /&gt;.
              <br><br>
              Breadcrumb ini menampilkan menu dropdown di desktop dan menu drawer di perangkat mobile.

            </CardDescription>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink as-child>
                        <RouterLink :to="items[0]?.href || '/'">
                          {{ items[0]?.label }}
                        </RouterLink>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <template v-if="items.length > ITEMS_TO_DISPLAY">
                      <BreadcrumbItem>
                        <template v-if="isDesktop">
                          <DropdownMenu v-model:open="open">
                            <DropdownMenuTrigger class="flex items-center gap-1" aria-label="Toggle menu">
                              <BreadcrumbEllipsis class="size-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                              <DropdownMenuItem v-for="(item, index) in items.slice(1, -2)" :key="index">
                                <RouterLink :to="item.href || '#'">
                                  {{ item.label }}
                                </RouterLink>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </template>
                        <template v-else>
                          <Drawer v-model:open="open">
                            <DrawerTrigger aria-label="Toggle Menu">
                              <BreadcrumbEllipsis class="h-4 w-4" />
                            </DrawerTrigger>
                            <DrawerContent>
                              <DrawerHeader class="text-left">
                                <DrawerTitle>Navigate to</DrawerTitle>
                                <DrawerDescription>
                                  Select a page to navigate to.
                                </DrawerDescription>
                              </DrawerHeader>
                              <div class="grid gap-1 px-4">
                                <RouterLink v-for="(item, index) in items.slice(1, -2)" :key="index"
                                  :to="item.href || '#'" class="py-1 text-sm">
                                  {{ item.label }}
                                </RouterLink>
                              </div>
                              <DrawerFooter class="pt-4">
                                <DrawerClose as-child>
                                  <Button variant="outline">
                                    Close
                                  </Button>
                                </DrawerClose>
                              </DrawerFooter>
                            </DrawerContent>
                          </Drawer>
                        </template>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                    </template>
                    <BreadcrumbItem v-for="(item, index) in items.slice(-ITEMS_TO_DISPLAY + 1)" :key="index">
                      <template v-if="item.href">
                        <BreadcrumbLink as-child class="max-w-20 truncate md:max-w-none">
                          <RouterLink :to="item.href">
                            {{ item.label }}
                          </RouterLink>
                        </BreadcrumbLink>
                        <BreadcrumbSeparator />
                      </template>
                      <template v-else>
                        <BreadcrumbPage class="max-w-20 truncate md:max-w-none">
                          {{ item.label }}
                        </BreadcrumbPage>
                      </template>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
              <div class="flex justify-end items-end gap-2">
                <RouterLink to="/badge" class="pr-2">
                  <Button variant="ghost"
                    class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                    <ChevronLeft class="w-6 h-6 text-white" />Badge
                  </Button>
                </RouterLink>
                <RouterLink to="/button">
                  <Button variant="ghost"
                    class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                    Button
                    <ChevronRight class="w-6 h-6 text-white" />
                  </Button>
                </RouterLink>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </SidebarProvider>
  </section>
</template>
