<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { ref, onMounted } from 'vue';
// Import fungsi spesifik dari animejs
import { animate, splitText, stagger, type AnimatableParams } from 'animejs';
import { RouterLink } from 'vue-router';

const square = ref(null);
const text = ref(null);

onMounted(() => {

  // Fungsi untuk menjalankan animasi pada satu elemen
  const runAnimation = (element: HTMLElement | null, config: AnimatableParams) => {
    if (!element) return;
    const { chars } = splitText(element, { words: false, chars: true });
    animate(chars, config);
  };

  // Sekarang Anda bisa memanggilnya untuk tiap elemen secara unik
  runAnimation(square.value, {
    opacity: [0, 1],
    duration: 100,
    delay: stagger(100),
  });

  runAnimation(text.value, {
    y: [
      { to: '-2.75rem', ease: 'outExpo', duration: 600 },
      { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
    ],
    rotate: { from: '-1turn', to: 0, delay: 0 },
    delay: stagger(50),
    ease: 'inOutCirc',
  });

});
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center">

    <div class="absolute inset-0 bg-slate-200/50 dark:bg-black/70 transition-colors duration-700"></div>
    <div class="relative z-10 w-full mx-auto px-[20%] text-center">

      <h1 ref="text"
        class="md:text-7xl font-bold text-slate-950 dark:text-white/95 mb-4 tracking-tighter leading-[1.1]">
        Bermain dengan Desain, <br> Menyusun Komponen.
      </h1>

      <p ref="square" class="pt-2 text-lg md:text-xl text-slate-800 dark:text-white/85 leading-relaxed">
        Eksplorasi gaya visual dan pustaka komponen yang telah saya bangun selama proses belajar. Temukan pola yang
        membentuk pengalaman pengguna luar biasa di sini.
      </p>

      <div class="pt-4">
        <RouterLink to="/components"><Button variant="ghost"
            class="text-slate-800 dark:text-white/85 bg-slate-200/50 dark:bg-white/10 hover:bg-slate-300/50 dark:hover:bg-white/20">View
            Components</Button></RouterLink>
      </div>
    </div>
  </section>
</template>
