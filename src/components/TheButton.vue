<script setup lang="ts">
import TheSidebar from './TheSidebar.vue';
import { SidebarProvider } from './ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpIcon, ArrowUpRightIcon, ChevronLeft, CircleFadingArrowUpIcon, GitBranchIcon } from '@lucide/vue'
import { ChevronRight } from '@lucide/vue';
import { ref } from 'vue'
import { ArchiveIcon, ArrowLeftIcon, CalendarPlusIcon, ClockIcon, ListFilterPlusIcon, MailCheckIcon, MoreHorizontalIcon, TagIcon, Trash2Icon } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Spinner from './ui/spinner/Spinner.vue';

const label = ref('personal')
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
                  Button
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Menampilkan tombol atau komponen yang menyerupai tombol.
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
                <div class="flex flex-wrap items-center gap-2 md:flex-row">
                  <Button variant="outline">
                    Button
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Submit">
                    <ArrowUpIcon />
                  </Button>
                </div>
              </div>
              <div class="border-2 h-16 rounded-md">
                <div class="text-center py-4 h-105">
                  <span>npx shadcn-vue@latest add button
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
                  Size
                </CardTitle>
              </div>
              <div>
                <CardTitle class="pt-8 text-xl text-slate-950 dark:text-white/80">
                  Default
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <div class="flex flex-col items-start gap-8 sm:flex-row">
                  <div class="flex items-start gap-2">
                    <Button size="sm" variant="outline">
                      Small
                    </Button>
                    <Button size="icon-sm" aria-label="Submit" variant="outline">
                      <ArrowUpRightIcon />
                    </Button>
                  </div>
                  <div class="flex items-start gap-2">
                    <Button variant="outline">
                      Default
                    </Button>
                    <Button size="icon" aria-label="Submit" variant="outline">
                      <ArrowUpRightIcon />
                    </Button>
                  </div>
                  <div class="flex items-start gap-2">
                    <Button variant="outline" size="lg">
                      Large
                    </Button>
                    <Button size="icon-lg" aria-label="Submit" variant="outline">
                      <ArrowUpRightIcon />
                    </Button>
                  </div>
                </div>
              </div>
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <Button>
                  Default
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card class="border-0 shadow-transparent bg-transparent">
          <CardHeader>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Outline
                </CardTitle>
              </div>
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Secondary
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <Button variant="outline">
                  Outline
                </Button>
              </div>
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <Button variant="secondary">
                  Secondary
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card class="border-0 shadow-transparent bg-transparent">
          <CardHeader>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Ghost
                </CardTitle>
              </div>
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Destructive
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <Button variant="ghost">
                  Ghost
                </Button>
              </div>
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <Button variant="destructive">
                  Destructive
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card class="border-0 shadow-transparent bg-transparent">
          <CardHeader>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Link
                </CardTitle>
              </div>
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Icon
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <Button variant="link">
                  Link
                </Button>
              </div>
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <Button variant="outline" size="icon">
                  <CircleFadingArrowUpIcon />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card class="border-0 shadow-transparent bg-transparent">
          <CardHeader>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  With Icon
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Jarak antara ikon dan teks disesuaikan secara otomatis berdasarkan ukuran tombol. Anda tidak perlu
                  menambahkan margin pada ikon.
                </CardDescription>
              </div>
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Rounded
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Gunakan kelas rounded-full untuk membuat tombol menjadi bulat.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <Button variant="outline" size="sm">
                  <GitBranchIcon />
                  New Branch
                </Button>
              </div>
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <div class="flex flex-col gap-8">
                  <Button variant="outline" size="icon" class="rounded-full">
                    <ArrowUpIcon />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card class="border-0 shadow-transparent bg-transparent">
          <CardHeader>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Spinner
                </CardTitle>
              </div>
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Button Group
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <Button size="sm" variant="outline" disabled>
                  <Spinner class="animate-spin" />
                  Submit
                </Button>
              </div>
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <ButtonGroup>
                  <ButtonGroup class="hidden sm:flex">
                    <Button variant="outline" size="icon" aria-label="Go Back">
                      <ArrowLeftIcon />
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button variant="outline">
                      Archive
                    </Button>
                    <Button variant="outline">
                      Report
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button variant="outline">
                      Snooze
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger as-child>
                        <Button variant="outline" size="icon" aria-label="More Options">
                          <MoreHorizontalIcon />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" class="w-52">
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <MailCheckIcon />
                            Mark as Read
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ArchiveIcon />
                            Archive
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>
                            <ClockIcon />
                            Snooze
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <CalendarPlusIcon />
                            Add to Calendar
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <ListFilterPlusIcon />
                            Add to List
                          </DropdownMenuItem>
                          <DropdownMenuSub>
                            <DropdownMenuSubTrigger>
                              <TagIcon class="mr-2 size-4" />
                              Label As...
                            </DropdownMenuSubTrigger>
                            <DropdownMenuSubContent>
                              <DropdownMenuRadioGroup v-model="label">
                                <DropdownMenuRadioItem value="personal">
                                  Personal
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="work">
                                  Work
                                </DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="other">
                                  Other
                                </DropdownMenuRadioItem>
                              </DropdownMenuRadioGroup>
                            </DropdownMenuSubContent>
                          </DropdownMenuSub>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem variant="destructive">
                            <Trash2Icon />
                            Trash
                          </DropdownMenuItem>
                        </DropdownMenuGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </ButtonGroup>
                </ButtonGroup>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card class=" border-0 shadow-transparent bg-transparent">
          <CardHeader class="max-w-137.5">
            <CardTitle class="text-xl text-slate-950 dark:text-white/80">
              Link (asChild)
            </CardTitle>
            <CardDescription class="text-sm text-slate-950 dark:text-white/80">
              Anda dapat menggunakan prop `as-child` untuk membuat komponen lain terlihat seperti tombol. Berikut contoh
              tautan yang terlihat seperti tombol.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <span>
                  &lt;<span class="text-green-400">Button</span> <span class="text-purple-400">as-child</span>&gt;<br>
                  <span class="pl-4">&lt;<span class="text-green-400">a</span> <span class="text-purple-400">href</span>
                    =<span class="text-blue-400">"/Login"</span>&gt;Login&lt;/<span class="text-green-400">a</span>&gt;
                  </span> <br>
                  &lt;/<span class="text-green-400">Button</span>&gt;
                </span>
              </div>
              <div class="flex justify-end items-end gap-2">
                <RouterLink to="/breadcrumb" class="pr-2">
                  <Button variant="ghost"
                    class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                    <ChevronLeft class="w-6 h-6 text-white" />Breadcrumb
                  </Button>
                </RouterLink>
                <RouterLink to="/buttonGroup">
                  <Button variant="ghost"
                    class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                    Button Group
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
