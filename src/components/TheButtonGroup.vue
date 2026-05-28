<script setup lang="ts">
import TheSidebar from './TheSidebar.vue';
import { SidebarProvider } from './ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRightIcon, ChevronLeft, MinusIcon, PlusIcon, SearchIcon, AudioLinesIcon, VolumeOffIcon, CheckIcon, UserRoundXIcon, ShareIcon, CopyIcon, TrashIcon, ChevronDownIcon, BotIcon, AlertTriangleIcon } from '@lucide/vue'
import { ChevronRight } from '@lucide/vue';
import { ref } from 'vue'
import { ArchiveIcon, ArrowLeftIcon, CalendarPlusIcon, ClockIcon, ListFilterPlusIcon, MailCheckIcon, MoreHorizontalIcon, TagIcon, Trash2Icon } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import Textarea from './ui/textarea/Textarea.vue';
import { Separator } from '@/components/ui/separator'
import ButtonGroupSeparator from './ui/button-group/ButtonGroupSeparator.vue';

const CURRENCIES = [
  {
    value: '$',
    label: 'US Dollar',
  },
  {
    value: '€',
    label: 'Euro',
  },
  {
    value: '£',
    label: 'British Pound',
  },
]
const currency = ref('$')
const voiceEnabled = ref(false)
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
                  Button Group
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Sebuah wadah yang mengelompokkan tombol-tombol terkait bersama-sama dengan gaya yang konsisten.
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
              <div class="border-2 h-16 rounded-md">
                <div class="text-center py-4 h-105">
                  <span>npx shadcn-vue@latest add button-group
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
                  Orientation
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Atur properti orientasi untuk mengubah tata letak grup tombol.
                </CardDescription>
              </div>
              <div>
                <CardTitle class="pt-8 text-xl text-slate-950 dark:text-white/80">
                  Size
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Kontrol ukuran tombol menggunakan properti `size` pada masing-masing tombol.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <ButtonGroup orientation="vertical" aria-label="Media controls" class="h-fit">
                  <Button variant="outline" size="icon">
                    <PlusIcon />
                  </Button>
                  <Button variant="outline" size="icon">
                    <MinusIcon />
                  </Button>
                </ButtonGroup>
              </div>
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <div class="flex flex-col items-start gap-8">
                  <ButtonGroup>
                    <Button variant="outline" size="sm">
                      Small
                    </Button>
                    <Button variant="outline" size="sm">
                      Button
                    </Button>
                    <Button variant="outline" size="sm">
                      Group
                    </Button>
                    <Button variant="outline" size="icon-sm">
                      <PlusIcon />
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button variant="outline">
                      Default
                    </Button>
                    <Button variant="outline">
                      Button
                    </Button>
                    <Button variant="outline">
                      Group
                    </Button>
                    <Button variant="outline">
                      <PlusIcon />
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button variant="outline" size="lg">
                      Large
                    </Button>
                    <Button variant="outline" size="lg">
                      Button
                    </Button>
                    <Button variant="outline" size="lg">
                      Group
                    </Button>
                    <Button variant="outline" size="icon-lg">
                      <PlusIcon />
                    </Button>
                  </ButtonGroup>
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
                  Nested
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Komponen &lt;ButtonGroup&gt; untuk membuat grup tombol dengan jarak tertentu.
                </CardDescription>
              </div>
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Separator
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Komponen ButtonGroupSeparator secara visual membagi tombol dalam sebuah grup.
                  <br>
                  Tombol dengan varian outline tidak memerlukan pemisah karena sudah memiliki border. Untuk varian
                  lainnya, pemisah disarankan untuk meningkatkan hierarki visual.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <ButtonGroup>
                  <ButtonGroup>
                    <Button variant="outline" size="sm">
                      1
                    </Button>
                    <Button variant="outline" size="sm">
                      2
                    </Button>
                    <Button variant="outline" size="sm">
                      3
                    </Button>
                    <Button variant="outline" size="sm">
                      4
                    </Button>
                    <Button variant="outline" size="sm">
                      5
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button variant="outline" size="icon-sm" aria-label="Previous">
                      <ArrowLeftIcon />
                    </Button>
                    <Button variant="outline" size="icon-sm" aria-label="Next">
                      <ArrowRightIcon />
                    </Button>
                  </ButtonGroup>
                </ButtonGroup>
              </div>
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <ButtonGroup>
                  <Button variant="secondary" size="sm">
                    Copy
                  </Button>
                  <ButtonGroupSeparator />
                  <Button variant="secondary" size="sm">
                    Paste
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card class="border-0 shadow-transparent bg-transparent">
          <CardHeader>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Split
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Buat grup tombol terpisah dengan menambahkan dua tombol yang dipisahkan oleh ButtonGroupSeparator.
                </CardDescription>
              </div>
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Input
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Bungkus komponen Input dengan tombol.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <ButtonGroup>
                  <Button variant="secondary">
                    Button
                  </Button>
                  <ButtonGroupSeparator />
                  <Button size="icon" variant="secondary">
                    <PlusIcon />
                  </Button>
                </ButtonGroup>
              </div>
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <ButtonGroup>
                  <Input placeholder="Search..." />
                  <Button variant="outline" aria-label="Search">
                    <SearchIcon />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card class="border-0 shadow-transparent bg-transparent">
          <CardHeader>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Input Group
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Gunakan komponen InputGroup untuk membuat tata letak input yang kompleks.
                </CardDescription>
              </div>
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Dropdown Menu
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Buat grup tombol terpisah dengan komponen DropdownMenu.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <ButtonGroup class="[--radius:9999rem]">
                  <ButtonGroup>
                    <Button variant="outline" size="icon" aria-label="Add">
                      <PlusIcon />
                    </Button>
                  </ButtonGroup>
                  <ButtonGroup class="flex-1">
                    <InputGroup>
                      <InputGroupInput :placeholder="voiceEnabled ? 'Record and send audio...' : 'Send a message...'"
                        :disabled="voiceEnabled" />
                      <InputGroupAddon align="inline-end">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger as-child>
                              <InputGroupButton :data-active="voiceEnabled"
                                class="data-[active=true]:bg-orange-100 data-[active=true]:text-orange-700 dark:data-[active=true]:bg-orange-800 dark:data-[active=true]:text-orange-100"
                                :aria-pressed="voiceEnabled" size="icon-xs" aria-label="Voice Mode"
                                @click="() => voiceEnabled = !voiceEnabled">
                                <AudioLinesIcon />
                              </InputGroupButton>
                            </TooltipTrigger>
                            <TooltipContent>Voice Mode</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </InputGroupAddon>
                    </InputGroup>
                  </ButtonGroup>
                </ButtonGroup>
              </div>
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <ButtonGroup>
                  <Button variant="outline">
                    Follow
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                      <Button variant="outline" size="icon">
                        <ChevronDownIcon />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" class="[--radius:1rem]">
                      <DropdownMenuGroup>
                        <DropdownMenuItem>
                          <VolumeOffIcon />
                          Mute Conversation
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CheckIcon />
                          Mark as Read
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <AlertTriangleIcon />
                          Report Conversation
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <UserRoundXIcon />
                          Block User
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <ShareIcon />
                          Share Conversation
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CopyIcon />
                          Copy Conversation
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem variant="destructive">
                          <TrashIcon />
                          Delete Conversation
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </ButtonGroup>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card class="border-0 shadow-transparent bg-transparent">
          <CardHeader>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Select
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Pasangkan dengan komponen Select.
                </CardDescription>
              </div>
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Popover
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Gunakan dengan komponen Popover.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <ButtonGroup>
                  <ButtonGroup>
                    <Select v-model="currency">
                      <SelectTrigger class="font-mono w-14">
                        {{ currency }}
                      </SelectTrigger>
                      <SelectContent class="min-w-24">
                        <SelectItem v-for="item in CURRENCIES" :key="item.value" :value="item.value">
                          {{ item.value }}
                          <span class="text-muted-foreground">{{ item.label }}</span>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="10.00" pattern="[0-9]*" />
                  </ButtonGroup>
                  <ButtonGroup>
                    <Button aria-label="Send" size="icon" variant="outline">
                      <ArrowRightIcon />
                    </Button>
                  </ButtonGroup>
                </ButtonGroup>
              </div>
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <ButtonGroup>
                  <Button variant="outline">
                    <BotIcon /> Copilot
                  </Button>
                  <Popover>
                    <PopoverTrigger as-child>
                      <Button variant="outline" size="icon" aria-label="Open Popover">
                        <ChevronDownIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent align="end" class="p-0 text-sm rounded-xl">
                      <div class="px-4 py-3">
                        <div class="text-sm font-medium">
                          Agent Tasks
                        </div>
                      </div>
                      <Separator />
                      <div class="p-4 text-sm">
                        <Textarea placeholder=" Describe your task in natural language." class="mb-4 resize-none" />
                        <p class="font-medium pt-2">
                          Start a new task with Copilot
                        </p>
                        <p class="text-muted-foreground pt-2">
                          Describe your task in natural language. Copilot will work in the
                          background and open a pull request for your review.
                        </p>
                      </div>
                    </PopoverContent>
                  </Popover>
                </ButtonGroup>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card class=" border-0 shadow-transparent bg-transparent">
          <CardContent>
            <div class="flex justify-end items-end gap-2">
              <RouterLink to="/button" class="pr-2">
                <Button variant="ghost"
                  class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                  <ChevronLeft class="w-6 h-6 text-white" />Button
                </Button>
              </RouterLink>
              <RouterLink to="/calendar">
                <Button variant="ghost"
                  class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                  Calendar
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
