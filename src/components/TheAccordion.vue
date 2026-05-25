<script setup lang="ts">
import TheSidebar from './TheSidebar.vue';
import { SidebarProvider } from './ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
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
                  Accordion
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Disini kamu dapat menemukan semua komponen yang telah saya kumpulkan selama proses belajar
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
              <div class="border-2 h-95 rounded-md">
                <div class="px-10 py-10">
                  <Accordion type="single" collapsible class="w-full" default-value="item-1">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Product Information</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          Our flagship product combines cutting-edge technology with sleek
                          design. Built with premium materials, it offers unparalleled
                          performance and reliability.
                        </p>
                        <p class="mt-2">
                          Key features include advanced processing capabilities, and an
                          intuitive user interface designed for both beginners and experts.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Shipping Details</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          We offer worldwide shipping through trusted courier partners.
                          Standard delivery takes 3-5 business days, while express shipping
                          ensures delivery within 1-2 business days.
                        </p>
                        <p class="mt-2">
                          All orders are carefully packaged and fully insured. Track your
                          shipment in real-time through our dedicated tracking portal.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Return Policy</AccordionTrigger>
                      <AccordionContent>
                        <p>
                          We stand behind our products with a comprehensive 30-day return
                          policy. If you're not completely satisfied, simply return the
                          item in its original condition.
                        </p>
                        <p class="mt-2">
                          Our hassle-free return process includes free return shipping and
                          full refunds processed within 48 hours of receiving the returned
                          item.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
              <div class="border-2 h-16 rounded-md">
                <div class="text-center py-4 h-86">
                  <span>npx shadcn-vue@latest add accordion</span>
                </div>
                <div class="text-end ">
                  <RouterLink to="/components">
                    <Button variant="ghost"
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">Alert
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
