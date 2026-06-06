<script setup lang="ts">
import TheSidebar from './TheSidebar.vue';
import { SidebarProvider } from './ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft } from '@lucide/vue'
import { Button } from './ui/button';
import { ChevronRight } from '@lucide/vue';
import { ref } from 'vue'
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from '@lucide/vue'
import { useMagicKeys, whenever } from '@vueuse/core'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command'
const open = ref(false)
const { meta_j } = useMagicKeys()
whenever(meta_j!, () => {
  open.value = true
})
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
                  Command
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Menu perintah yang cepat, dapat disusun, dan tanpa gaya untuk Vue.
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
                <Command class="rounded-lg border shadow-md">
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem value="calendar">
                        <Calendar />
                        <span>Calendar</span>
                      </CommandItem>
                      <CommandItem value="emoji">
                        <Smile />
                        <span>Search Emoji</span>
                      </CommandItem>
                      <CommandItem disabled value="calculator">
                        <Calculator />
                        <span>Calculator</span>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                      <CommandItem value="profile">
                        <User />
                        <span>Profile</span>
                        <CommandShortcut>⌘P</CommandShortcut>
                      </CommandItem>
                      <CommandItem value="billing">
                        <CreditCard />
                        <span>Billing</span>
                        <CommandShortcut>⌘B</CommandShortcut>
                      </CommandItem>
                      <CommandItem value="settings">
                        <Settings />
                        <span>Settings</span>
                        <CommandShortcut>⌘S</CommandShortcut>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
              <div class="border-2 h-16 rounded-md">
                <div class="text-center py-4 h-105">
                  <span>npx shadcn-vue@latest add command</span>
                </div>
                <div class="flex justify-end gap-2">
                  <RouterLink to="/combobox" class="pr-2">
                    <Button variant="ghost"
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                      <ChevronLeft class="w-6 h-6 text-white" />Combobox
                    </Button>
                  </RouterLink>
                  <RouterLink to="/contextMenu">
                    <Button variant="ghost"
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                      Context Menu
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
