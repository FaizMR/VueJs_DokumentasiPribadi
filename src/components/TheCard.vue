<script setup lang="ts">
import TheSidebar from './TheSidebar.vue';
import { SidebarProvider } from './ui/sidebar';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChevronLeft } from '@lucide/vue'
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
                  Card
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Menampilkan kartu dengan header, konten, dan footer.
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
                <Card class="w-full max-w-sm">
                  <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                      Enter your email below to login to your account
                    </CardDescription>
                    <CardAction>
                      <Button class="cursor-pointer" variant="link">
                        Sign Up
                      </Button>
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <form>
                      <div class="grid w-full items-center gap-4">
                        <div class="flex flex-col space-y-1.5">
                          <Label for="email" class="pb-1">Email</Label>
                          <Input id="email" type="email" placeholder="m@example.com" />
                        </div>
                        <div class="flex flex-col space-y-1.5">
                          <div class="flex items-center justify-between pb-1">
                            <Label for="password">Password</Label>
                            <a href="#" class="ml-auto inline-block text-sm underline">
                              Forgot your password?
                            </a>
                          </div>
                          <Input id="password" type="password" />
                        </div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter class="flex flex-col gap-2">
                    <Button class="cursor-pointer w-full">
                      Login
                    </Button>
                    <Button variant="outline" class="cursor-pointer w-full">
                      Login with Google
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div class="border-2 h-16 rounded-md">
                <div class="text-center py-4 h-105">
                  <span>npx shadcn-vue@latest add card</span>
                </div>
                <div class="flex justify-end gap-2">
                  <RouterLink to="/calendar" class="pr-2">
                    <Button variant="ghost"
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                      <ChevronLeft class="w-6 h-6 text-white" />Calendar
                    </Button>
                  </RouterLink>
                  <RouterLink to="/carousel">
                    <Button variant="ghost"
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                      Carousel
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
