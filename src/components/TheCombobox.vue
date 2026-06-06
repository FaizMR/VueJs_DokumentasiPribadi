<script setup lang="ts">
import TheSidebar from './TheSidebar.vue';
import { SidebarProvider } from './ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft } from '@lucide/vue'
import { Button } from './ui/button';
import { ChevronRight } from '@lucide/vue';
import { CheckIcon, ChevronsUpDownIcon } from '@lucide/vue'
import { computed, ref } from 'vue'
import { cn } from '@/lib/utils'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
]
const open = ref(false)
const value = ref('')
const selectedFramework = computed(() =>
  frameworks.find(framework => framework.value === value.value),
)
function selectFramework(selectedValue: string) {
  value.value = selectedValue === value.value ? '' : selectedValue
  open.value = false
}
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
                  Combobox
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
                  Untuk Combobx, saya menginstall menggunakan gabungan dari
                  <RouterLink to="/popover"><Button variant="link"
                      class="cursor-pointer p-0 h-auto text-sm">Popover</Button>
                  </RouterLink> dan <RouterLink to="/command"><Button variant="link"
                      class="cursor-pointer p-0 h-auto text-sm">Command</Button></RouterLink>
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md px-10 py-10 text-center">
                <Popover v-model:open="open">
                  <PopoverTrigger as-child>
                    <Button variant="outline" role="combobox" :aria-expanded="open" class="w-[200px] justify-between">
                      {{ selectedFramework?.label || "Select framework..." }}
                      <ChevronsUpDownIcon class="opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent class="w-[200px] p-0">
                    <Command>
                      <CommandInput class="h-9" placeholder="Search framework..." />
                      <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          <CommandItem v-for="framework in frameworks" :key="framework.value" :value="framework.value"
                            @select="(ev) => {
                              selectFramework(ev.detail.value as string)
                            }">
                            {{ framework.label }}
                            <CheckIcon :class="cn(
                              'ml-auto',
                              value === framework.value ? 'opacity-100' : 'opacity-0',
                            )" />
                          </CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </div>
              <div class="border-2 h-16 rounded-md">
                <div class="text-center py-4 h-105">
                  <span>Lihat instalation untuk <RouterLink to="/popover"><Button variant="link"
                        class="cursor-pointer p-0 h-auto text-sm">Popover</Button>
                    </RouterLink> dan <RouterLink to="/command"><Button variant="link"
                        class="cursor-pointer p-0 h-auto text-sm">Command</Button></RouterLink></span>
                </div>
                <div class="flex justify-end gap-2">
                  <RouterLink to="/collapsible" class="pr-2">
                    <Button variant="ghost"
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                      <ChevronLeft class="w-6 h-6 text-white" />Collapsible
                    </Button>
                  </RouterLink>
                  <RouterLink to="/command">
                    <Button variant="ghost"
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                      Command
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
