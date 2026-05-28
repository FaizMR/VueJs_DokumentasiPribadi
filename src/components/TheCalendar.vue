<script setup lang="ts">
import TheSidebar from './TheSidebar.vue';
import { SidebarProvider } from './ui/sidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { computed, ref, type Ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { CalendarDate, fromDate, createCalendar, getLocalTimeZone, toCalendar, today, parseDate } from '@internationalized/date'
import { Calendar, type LayoutTypes } from '@/components/ui/calendar'
import type { CalendarIdentifier, DateValue } from '@internationalized/date'
// import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { CalendarIcon, ChevronRight, ChevronLeft } from '@lucide/vue';

// Calendar 1
const date_1 = ref(fromDate(new Date(), getLocalTimeZone())) as Ref<DateValue>

// Calendar 2
const date_2 = ref(today(getLocalTimeZone())) as Ref<DateValue>
const preferences = [
  { locale: 'en-US', label: 'Default', ordering: 'gregory' },
  { label: 'Arabic (Algeria)', locale: 'ar-DZ', territories: 'DJ DZ EH ER IQ JO KM LB LY MA MR OM PS SD SY TD TN YE', ordering: 'gregory islamic islamic-civil islamic-tbla' },
  { label: 'Arabic (United Arab Emirates)', locale: 'ar-AE', territories: 'AE BH KW QA', ordering: 'gregory islamic-umalqura islamic islamic-civil islamic-tbla' },
  { label: 'Arabic (Egypt)', locale: 'AR-EG', territories: 'EG', ordering: 'gregory coptic islamic islamic-civil islamic-tbla' },
  { label: 'Arabic (Saudi Arabia)', locale: 'ar-SA', territories: 'SA', ordering: 'islamic-umalqura gregory islamic islamic-rgsa' },
  { label: 'Farsi (Iran)', locale: 'fa-IR', territories: 'IR', ordering: 'persian gregory islamic islamic-civil islamic-tbla' },
  { label: 'Farsi (Afghanistan)', locale: 'fa-AF', territories: 'AF IR', ordering: 'persian gregory islamic islamic-civil islamic-tbla' },
  { label: 'Amharic (Ethiopia)', locale: 'am-ET', territories: 'ET', ordering: 'gregory ethiopic ethioaa' },
  { label: 'Hebrew (Israel)', locale: 'he-IL', territories: 'IL', ordering: 'gregory hebrew islamic islamic-civil islamic-tbla' },
  { label: 'Hindi (India)', locale: 'hi-IN', territories: 'IN', ordering: 'gregory indian' },
  { label: 'Japanese (Japan)', locale: 'ja-JP', territories: 'JP', ordering: 'gregory japanese' },
  { label: 'Thai (Thailand)', locale: 'th-TH', territories: 'TH', ordering: 'buddhist gregory' },
  { label: 'Chinese (Taiwan)', locale: 'zh-TW', territories: 'TW', ordering: 'gregory roc chinese' },
]
const calendars = [
  { key: 'gregory', name: 'Gregorian' },
  { key: 'japanese', name: 'Japanese' },
  { key: 'buddhist', name: 'Buddhist' },
  { key: 'roc', name: 'Taiwan' },
  { key: 'persian', name: 'Persian' },
  { key: 'indian', name: 'Indian' },
  { key: 'islamic-umalqura', name: 'Islamic (Umm al-Qura)' },
  { key: 'islamic-civil', name: 'Islamic Civil' },
  { key: 'islamic-tbla', name: 'Islamic Tabular' },
  { key: 'hebrew', name: 'Hebrew' },
  { key: 'coptic', name: 'Coptic' },
  { key: 'ethiopic', name: 'Ethiopic' },
  { key: 'ethioaa', name: 'Ethiopic (Amete Alem)' },
]
const locale = ref(preferences[0]?.locale)
const calendar = ref(calendars[0]?.key) as Ref<CalendarIdentifier>
const pref = computed(() => preferences.find(p => p.locale === locale.value))
const preferredCalendars = computed(() => pref.value ? pref.value.ordering.split(' ').map(p => calendars.find(c => c.key === p)).filter(Boolean) : [calendars[0]])
const otherCalendars = computed(() => calendars.filter(c => !preferredCalendars.value.some(p => p!.key === c.key)))
function updateLocale(newLocale: any) {
  locale.value = newLocale
  calendar.value = pref.value!.ordering.split(' ')[0] as any
}
const placeholder = computed(() => toCalendar(today(getLocalTimeZone()), createCalendar(calendar.value)))

// Calendar 3
const defaultPlaceholder_1 = today(getLocalTimeZone())
const date_3 = ref(today(getLocalTimeZone())) as Ref<DateValue>
const layout = ref<LayoutTypes>('month-and-year')

// Calendar 4
const date_4 = ref(today(getLocalTimeZone())) as Ref<DateValue>

// Calendar 5
const date_5 = ref(today(getLocalTimeZone())) as Ref<DateValue>
const open_1 = ref(false)

// Calendar 6
const inputValue = ref('')
const nativeDate = ref(new Date()); // Berikan initial value yang sesuai
const open_2 = ref(false)

// Calendar 7
const date_6 = ref(today(getLocalTimeZone())) as Ref<DateValue>
const defaultPlaceholder_2 = today(getLocalTimeZone())
</script>

<script lang="ts">
export function formatDate(date: Date | undefined) {
  if (!date) {
    return ''
  }
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}
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
                  Calendar
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Komponen kolom tanggal yang memungkinkan pengguna untuk memasukkan dan mengedit tanggal.
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
              <div class="border-2 rounded-md items-center justify-center flex py-2">
                <Calendar v-model="date_1" class="rounded-md border shadow-sm" layout="month-and-year"
                  :min-value="new CalendarDate(1925, 1, 1)" :max-value="new CalendarDate(2035, 1, 1)" />
              </div>
              <div class="border-2 h-16 rounded-md">
                <div class="text-center py-4 h-105">
                  <span>npx shadcn-vue@latest add calendar
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
                  Calendar Systems
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Mengimpor `createCalendar` ke dalam proyek Anda akan menghasilkan semua kalender yang tersedia
                  disertakan dalam bundel Anda. Jika Anda ingin membatasi kalender yang didukung untuk mengurangi ukuran
                  bundel, Anda dapat membuat implementasi sendiri yang hanya mengimpor kelas yang diinginkan. Dengan
                  cara ini, bundler Anda dapat melakukan tree-shaking pada implementasi kalender yang tidak digunakan.
                  <br>
                  Periksa `@internationalized/date`, terutama bagian tentang Pengidentifikasi Kalender.
                </CardDescription>
              </div>
              <div>
                <CardTitle class="pt-8 text-xl text-slate-950 dark:text-white/80">
                  Month and Year Selector
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Pastikan untuk memberikan properti placeholder atau defaultPlaceholder saat menggunakan fitur ini.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <div class="flex flex-col gap-4">
                  <Label>Locale</Label>
                  <Select :model-value="locale" @update:model-value="updateLocale">
                    <SelectTrigger class="w-full">
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem v-for="(option, index) in preferences" :key="index"
                        class="text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                        :value="option.locale">
                        {{ option.label }}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <Label>Calendar</Label>
                  <Select v-model="calendar" class="w-full">
                    <SelectTrigger class="w-full">
                      <SelectValue placeholder="Select a calendar">
                        {{calendars.find(c => c.key === calendar)?.name}}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectLabel />
                      <SelectGroup>
                        <SelectItem v-for="(option, index) in preferredCalendars" :key="index"
                          class="text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                          :value="option!.key">
                          {{ option!.name }}
                        </SelectItem>
                      </SelectGroup>
                      <SelectSeparator />
                      <SelectLabel>Other</SelectLabel>
                      <SelectGroup>
                        <SelectItem v-for="(option, index) in otherCalendars" :key="index"
                          class="text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                          :value="option.key">
                          {{ option.name }}
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Calendar v-model="date_2" v-model:placeholder="placeholder" :locale="locale"
                    class="rounded-md border shadow-sm" />
                </div>
              </div>
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <div class="flex flex-col gap-4">
                  <Calendar v-model="date_3" :default-placeholder="defaultPlaceholder_1"
                    class="rounded-md border shadow-sm" :layout disable-days-outside-current-view />
                  <div class="flex flex-col gap-3">
                    <Label for="dropdown" class="px-1">
                      Dropdown
                    </Label>
                    <Select v-model="layout">
                      <SelectTrigger id="dropdown" size="sm" class="bg-background w-full">
                        <SelectValue placeholder="Dropdown" />
                      </SelectTrigger>
                      <SelectContent align="center">
                        <SelectItem value="month-and-year">
                          Month and Year
                        </SelectItem>
                        <SelectItem value="month-only">
                          Month Only
                        </SelectItem>
                        <SelectItem value="year-only">
                          Year Only
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
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
                  Date of Birth Picker
                </CardTitle>
              </div>
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Date and Time Picker
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <div class="flex flex-col gap-3">
                  <Label for="date_4" class="px-1">
                    Date of birth
                  </Label>
                  <Popover v-slot="{ close }">
                    <PopoverTrigger as-child>
                      <Button id="date_4" variant="outline" class="w-48 justify-between font-normal">
                        {{ date_4 ? date_4.toDate(getLocalTimeZone()).toLocaleDateString() : "Select date" }}
                        <ChevronDownIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent class="w-auto overflow-hidden p-0" align="start">
                      <Calendar :model-value="date_4" layout="month-and-year" @update:model-value="(value) => {
                        if (value) {
                          date_4 = value
                          close()
                        }
                      }" />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <div class="flex gap-4">
                  <div class="flex flex-col gap-3">
                    <Label for="date-picker" class="px-1">
                      Date
                    </Label>
                    <Popover v-model:open="open_1">
                      <PopoverTrigger as-child>
                        <Button id="date-picker" variant="outline" class="w-32 justify-between font-normal">
                          {{ date_5 ? date_5.toDate(getLocalTimeZone()).toLocaleDateString() : "Select date" }}
                          <ChevronDownIcon />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent class="w-auto overflow-hidden p-0" align="start">
                        <Calendar :model-value="date_5" @update:model-value="(value) => {
                          if (value) {
                            date_5 = value
                            open_1 = false
                          }
                        }" />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div class="flex flex-col gap-3">
                    <Label for="time-picker" class="px-1">
                      Time
                    </Label>
                    <Input id="time-picker" type="time" step="1" default-value="10:30:00"
                      class="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none" />
                  </div>
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
                  Natural Language Picker
                </CardTitle>
                <CardDescription class="text-sm text-slate-950 dark:text-white/80">
                  Komponen ini menggunakan pustaka chrono-node untuk mengurai tanggal dalam bahasa alami.
                </CardDescription>
              </div>
              <div>
                <CardTitle class="text-xl text-slate-950 dark:text-white/80">
                  Custom Heading and Cell Size
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div class="grid grid-cols-2 gap-4">
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <div class="flex flex-col gap-3">
                  <Label for="date" class="px-1">
                    Schedule Date
                  </Label>
                  <div class="relative flex gap-2">
                    <Input id="date" :model-value="inputValue" placeholder="Tomorrow or next week"
                      class="bg-background pr-10" @update:model-value="(value) => {
                        inputValue = value.toString();
                        const parsed = parseDate(value.toString());
                      }" />
                    <Popover v-model:open="open_2">
                      <PopoverTrigger as-child>
                        <Button id="date-picker" variant="ghost"
                          class="absolute top-1/2 right-2 size-6 -translate-y-1/2">
                          <CalendarIcon class="size-3.5" />
                          <span class="sr-only">Select date</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent class="w-auto overflow-hidden p-0" align="end">
                        <Calendar :model-value="fromDate(nativeDate, getLocalTimeZone())" @update:model-value="(value) => {
                          if (value) {
                            nativeDate = value.toDate(getLocalTimeZone());
                            inputValue = formatDate(nativeDate);
                            open_2 = false;
                          }
                        }" />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div class="text-muted-foreground px-1 text-sm">
                    Your post will be published on
                    <span class="font-medium">{{ formatDate(nativeDate!) }}</span>.
                  </div>
                </div>
              </div>
              <div class="border-2 rounded-md items-center justify-center flex px-5 py-5">
                <Calendar v-model="date_6" :default-placeholder="defaultPlaceholder_2" weekday-format="short"
                  class="rounded-md border shadow-sm **:data-[slot=calendar-cell-trigger]:size-12!">
                  <template #calendar-heading="{ date, month }">
                    <div class="flex gap-2 items-center">
                      <div>
                        Custom heading
                      </div>
                      <component :is="month" :date="date" />
                    </div>
                  </template>
                </Calendar>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card class=" border-0 shadow-transparent bg-transparent">
          <CardContent>
            <div class="flex justify-end items-end gap-2">
              <RouterLink to="/buttonGroup" class="pr-2">
                <Button variant="ghost"
                  class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                  <ChevronLeft class="w-6 h-6 text-white" />Button Group
                </Button>
              </RouterLink>
              <RouterLink to="/card">
                <Button variant="ghost"
                  class="cursor-pointer text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">
                  Card
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
