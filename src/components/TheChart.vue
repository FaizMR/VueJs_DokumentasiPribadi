<script setup lang="ts">
import TheSidebar from './TheSidebar.vue';
import { SidebarProvider } from './ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from '@lucide/vue';
import { Button } from './ui/button';
import type { ChartConfig } from '@/components/ui/chart'
import { VisGroupedBar, VisXYContainer, VisAxis } from '@unovis/vue';
import { ChartContainer, ChartCrosshair, ChartLegendContent, ChartTooltip, ChartTooltipContent, componentToString } from '@/components/ui/chart'


const chartData = [
  { date: new Date('2024-01-01'), desktop: 186, mobile: 80 },
  { date: new Date('2024-02-01'), desktop: 305, mobile: 200 },
  { date: new Date('2024-03-01'), desktop: 237, mobile: 120 },
  { date: new Date('2024-04-01'), desktop: 73, mobile: 190 },
  { date: new Date('2024-05-01'), desktop: 209, mobile: 130 },
  { date: new Date('2024-06-01'), desktop: 214, mobile: 140 },
]
type Data = typeof chartData[number]
const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
} satisfies ChartConfig
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
                  Chart
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Grafik yang indah untuk menampilkan data.
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
              <div>
                <div class="border-2 rounded-md px-10 py-10">
                  <div class="grid w-full max-w-xl items-start gap-4">
                    <ChartContainer :config="chartConfig" class="min-h-50 w-full">
                      <VisXYContainer :data="chartData">
                        <VisGroupedBar :x="(d: Data) => d.date" :y="[(d: Data) => d.desktop, (d: Data) => d.mobile]"
                          :color="[chartConfig.desktop.color, chartConfig.mobile.color]" :rounded-corners="4"
                          bar-padding="0.1" group-padding="0" />
                        <VisAxis type="x" :x="(d: Data) => d.date" :tick-line="false" :domain-line="false"
                          :grid-line="false" :tick-format="(d: number) => {
                            const date = new Date(d)
                            return date.toLocaleDateString('en-US', {
                              month: 'short',
                            })
                          }" :tick-values="chartData.map(d => d.date)" />
                        <VisAxis type="y" :tick-format="(d: number) => ''" :tick-line="false" :domain-line="false"
                          :grid-line="true" />
                        <ChartTooltip />
                        <ChartCrosshair :template="componentToString(chartConfig, ChartTooltipContent, {
                          labelFormatter(d) {
                            return new Date(d).toLocaleDateString('en-US', {
                              month: 'long',
                            })
                          },
                        })" :color="[chartConfig.desktop.color, chartConfig.mobile.color]" />
                      </VisXYContainer>
                      <ChartLegendContent name-key="browser" />
                    </ChartContainer>
                  </div>
                </div>
                <div class="pt-10">
                  <RouterLink to="/charts" class="pr-2">
                    <Button
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-transparent hover:bg-transparent/50 hover:text-slate-800 dark:hover:text-white">
                      Check Charts More
                      <ChevronRight class="w-6 h-6 text-white" />
                    </Button>
                  </RouterLink>
                </div>
              </div>

              <div class="border-2 h-16 rounded-md">
                <div class="text-center py-4 h-105">
                  <span>npx shadcn-vue@latest add chart</span>
                </div>
                <div class="flex justify-end gap-2">
                  <RouterLink to="/carousel" class="pr-2">
                    <Button variant="ghost"
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                      <ChevronLeft class="w-6 h-6 text-white" />Carousel
                    </Button>
                  </RouterLink>
                  <RouterLink to="/checkbox">
                    <Button variant="ghost"
                      class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                      Checkbox
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
