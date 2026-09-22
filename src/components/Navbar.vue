<template>
  <header 
    class="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out"
    :class="scrolled ? 'w-[88%] max-w-[1000px] top-2' : 'w-[92%] max-w-[1100px]'"
  >
    <nav
      class="nav-glass flex items-center justify-between rounded-full border transition-all duration-500"
      :class="scrolled 
        ? 'px-5 py-2.5 bg-white/95 backdrop-blur-xl border-slate-200/90 shadow-xl shadow-slate-200/40 ring-1 ring-slate-900/5' 
        : 'px-6 py-3.5 bg-white/90 backdrop-blur-md border-slate-200/80 shadow-lg shadow-slate-200/50 ring-1 ring-slate-900/5'"
    >
      <!-- Logo -->
      <a href="#hero" class="flex items-center gap-2.5 group">
        <div
          class="rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold shadow-sm group-hover:scale-105 group-hover:shadow-md group-hover:shadow-indigo-600/20 transition-all duration-300"
          :class="scrolled ? 'w-8 h-8 text-base' : 'w-9 h-9 text-lg'"
        >
          S
        </div>
        <div class="flex items-center gap-1.5">
          <span class="font-bold text-lg tracking-wide text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
            SULIH<span class="text-indigo-600">.dev</span>
          </span>
          <span class="pulse-ring-container">
            <span class="w-2 h-2 rounded-full bg-emerald-500 inline-block" title="Available for hire"></span>
          </span>
        </div>
      </a>

      <!-- Desktop Nav Links -->
      <div class="hidden md:flex items-center gap-7 relative">
        <a v-for="item in navItems" :key="item.href" :href="item.href"
          class="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors duration-300 relative py-1"
          :class="{ 'text-indigo-600 font-semibold': activeSection === item.href.replace('#', '') }"
          @click="setActive(item.href)">
          {{ item.label }}
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 scale-x-0"
            enter-to-class="opacity-100 scale-x-100"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 scale-x-100"
            leave-to-class="opacity-0 scale-x-0"
          >
            <span v-if="activeSection === item.href.replace('#', '')"
              class="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 rounded-full origin-center"></span>
          </transition>
        </a>
      </div>

      <!-- Action Buttons -->
      <div class="hidden sm:flex items-center gap-2.5">
        <a :href="personalInfo?.cvUrl || '/cv-sulih-fullstack.pdf'" download
          class="px-4 py-2 text-xs font-semibold rounded-full border border-slate-300 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 hover:text-slate-900 shadow-2xs hover:shadow-md transition-all duration-300 flex items-center gap-1.5 glow-ring">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Unduh CV</span>
        </a>

        <a href="#contact"
          class="px-5 py-2 text-xs font-semibold rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0">
          Hubungi Saya
        </a>
      </div>

      <!-- Mobile Menu Toggle Button -->
      <button @click="isOpen = !isOpen" class="md:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
        aria-label="Toggle Navigation">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 transition-transform duration-300" :class="isOpen ? 'rotate-90' : ''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </nav>

    <!-- Mobile Dropdown Menu -->
    <transition enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4 scale-95" enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-4 scale-95">
      <div v-if="isOpen"
        class="md:hidden mt-2 p-4 rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-xl flex flex-col gap-3">
        <a v-for="item in navItems" :key="item.href" :href="item.href"
          class="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200"
          @click="isOpen = false; setActive(item.href)">
          {{ item.label }}
        </a>
        <a :href="personalInfo?.cvUrl || '/cv-sulih-fullstack.pdf'" download
          class="text-center py-2.5 text-sm font-semibold rounded-xl border border-slate-300 bg-white text-slate-700 shadow-xs flex items-center justify-center gap-2"
          @click="isOpen = false">
          <span>Unduh CV (PDF)</span>
        </a>
        <a href="#contact"
          class="text-center py-2.5 text-sm font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-md"
          @click="isOpen = false">
          Hubungi Saya
        </a>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { personalInfo } from '../data/portfolio';

const isOpen = ref(false);
const activeSection = ref('hero');
const scrolled = ref(false);

const navItems = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Proyek Selesai', href: '#projects' },
  { label: 'Pengalaman', href: '#experience' },
  { label: 'Sertifikat', href: '#certificates' },
  { label: 'Kontak', href: '#contact' }
];

const setActive = (href: string) => {
  activeSection.value = href.replace('#', '');
};

const handleScroll = () => {
  // Shrink navbar on scroll
  scrolled.value = window.scrollY > 60;

  // Active section detection
  const sections = ['hero', 'projects', 'experience', 'certificates', 'contact'];
  const scrollPosition = window.scrollY + 200;

  for (const section of sections) {
    const el = document.getElementById(section);
    if (el) {
      const top = el.offsetTop;
      const height = el.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = section;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
