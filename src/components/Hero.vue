<template>
  <section id="hero" class="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <!-- Left Content Column -->
        <div class="lg:col-span-7 flex flex-col items-start space-y-6">

          <!-- Availability Pill — with shimmer & pulse -->
          <div 
            class="glass-pill text-indigo-700 border-indigo-200 bg-indigo-50 shimmer-badge animate-fade-in-up"
          >
            <span class="pulse-ring-container">
              <span class="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            </span>
            <span>Available for Full Stack Opportunities & Freelance</span>
          </div>

          <!-- Main Heading — staggered entrance -->
          <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight animate-fade-in-up delay-200">
            Halo, Saya <span class="gradient-text-premium">{{ personalInfo.name }}</span>
            <br />
            <span class="text-2xl sm:text-4xl text-slate-600 font-semibold mt-2 block">
              {{ displayedTitle }}<span v-if="showCursor" class="typing-cursor"></span>
            </span>
          </h1>

          <!-- Tagline & Description — staggered -->
          <p class="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed animate-fade-in-up delay-400">
            Pengembang aplikasi web Full Stack yang berpengalaman merancang arsitektur sistem berskala besar.
            Sukses membangun platform digital tingkat provinsi untuk
            <strong class="text-indigo-600 font-semibold">BPAD DKI Jakarta</strong>, sistem
            <strong class="text-sky-600 font-semibold">SIMRS & Reservasi Dokter</strong>, serta modul
            <strong class="text-emerald-600 font-semibold">ERP Perusahaan</strong>.
          </p>

          <!-- Featured Skill Badges — staggered fade-in -->
          <div class="flex flex-wrap gap-2 pt-2 animate-fade-in-up delay-500">
            <span 
              v-for="(badge, index) in mainBadges" 
              :key="badge.name"
              class="px-3 py-1.5 text-xs font-medium rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200/80 text-slate-700 flex items-center gap-2 hover:border-indigo-400 hover:text-indigo-600 hover:bg-white shadow-xs hover:shadow-md transition-all duration-300 cursor-default glow-ring"
              :style="{ animationDelay: `${600 + index * 80}ms` }"
            >
              <i :class="[badge.icon, 'text-base shrink-0']"></i>
              <span>{{ badge.name }}</span>
            </span>
          </div>

          <!-- Action Buttons — staggered -->
          <div class="flex flex-wrap items-center gap-3.5 pt-4 w-full sm:w-auto animate-fade-in-up delay-700">
            <a 
              href="#projects"
              class="w-full sm:w-auto px-7 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 hover:shadow-xl hover:shadow-indigo-600/30 transition-all duration-300 text-center flex items-center justify-center gap-2 group hover:-translate-y-0.5"
            >
              <span>Lihat Proyek Saya</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a 
              :href="personalInfo?.cvUrl || '/cv-sulih-fullstack.pdf'" 
              download
              class="w-full sm:w-auto px-6 py-3.5 rounded-full border border-slate-300 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 hover:text-slate-900 font-semibold text-sm shadow-xs hover:shadow-md transition-all duration-300 text-center flex items-center justify-center gap-2 glow-ring"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Unduh Resume / CV</span>
            </a>

            <a 
              href="#contact"
              class="w-full sm:w-auto px-6 py-3.5 rounded-full border border-slate-300 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 hover:text-slate-900 font-semibold text-sm shadow-xs hover:shadow-md transition-all duration-300 text-center"
            >
              Hubungi Saya
            </a>
          </div>

        </div>

        <!-- Right Visual Card Column -->
        <div class="lg:col-span-5 relative flex justify-center animate-scale-in delay-300">

          <!-- Floating Tech Accent Badges -->
          <div class="absolute -top-6 -left-4 sm:-left-6 w-14 h-14 rounded-2xl bg-indigo-50/80 backdrop-blur-sm border border-indigo-200/80 shadow-md flex items-center justify-center text-3xl z-20 transition-all hover:scale-110 animate-float" style="animation-delay: 0s;">
            <i class="devicon-go-plain colored"></i>
          </div>

          <div class="absolute -bottom-6 -right-2 sm:-right-4 w-14 h-14 rounded-2xl bg-sky-50/80 backdrop-blur-sm border border-sky-200/80 shadow-md flex items-center justify-center text-3xl z-20 transition-all hover:scale-110 animate-float" style="animation-delay: 1s;">
            <i class="devicon-vuejs-plain colored"></i>
          </div>

          <div class="absolute top-1/2 -right-6 sm:-right-8 -translate-y-1/2 w-12 h-12 rounded-2xl bg-emerald-50/80 backdrop-blur-sm border border-emerald-200/80 shadow-sm flex items-center justify-center text-2xl z-0 hidden sm:flex transition-all hover:scale-110 animate-float-slow" style="animation-delay: 0.5s;">
            <i class="devicon-laravel-original colored"></i>
          </div>

          <div class="absolute top-1/3 -left-6 sm:-left-8 w-12 h-12 rounded-2xl bg-blue-50/80 backdrop-blur-sm border border-blue-200/80 shadow-sm flex items-center justify-center text-2xl z-0 hidden sm:flex transition-all hover:scale-110 animate-float-slow" style="animation-delay: 1.5s;">
            <i class="devicon-docker-plain colored"></i>
          </div>

          <!-- Interactive Code/Profile Showcase Card — with gradient border -->
          <div class="w-full max-w-md glass-card p-6 border-slate-200 shadow-xl relative z-10 animate-glow-pulse">
            <!-- Card Window Controls -->
            <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-200/60">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-red-400 shadow-sm shadow-red-400/30"></span>
                <span class="w-3 h-3 rounded-full bg-yellow-400 shadow-sm shadow-yellow-400/30"></span>
                <span class="w-3 h-3 rounded-full bg-green-400 shadow-sm shadow-green-400/30"></span>
              </div>
              <span class="text-xs font-mono text-slate-500">sulih-developer.ts</span>
            </div>

            <!-- Code Snippet Box -->
            <div class="font-mono text-xs text-slate-300 leading-relaxed bg-slate-900 p-4 sm:p-5 rounded-xl border border-slate-700/60 overflow-x-auto shadow-inner space-y-1 relative">
              <!-- Line numbers gutter -->
              <div class="absolute left-0 top-4 sm:top-5 bottom-4 sm:bottom-5 w-8 flex flex-col text-right text-slate-600/50 text-[10px] leading-relaxed pr-1 select-none border-r border-slate-700/40">
                <span v-for="n in 10" :key="n">{{ n }}</span>
              </div>
              <div class="pl-7">
                <div><span class="text-purple-400">const</span> <span class="text-yellow-300">developer</span> = {</div>
                <div class="pl-4"><span class="text-cyan-400">name</span>: <span class="text-emerald-300">'SULIH'</span>,</div>
                <div class="pl-4"><span class="text-cyan-400">role</span>: <span class="text-emerald-300">'Full Stack Developer'</span>,</div>
                <div class="pl-4"><span class="text-cyan-400">education</span>: <span class="text-emerald-300">'S1 Sistem Informasi'</span>,</div>
                <div class="pl-4"><span class="text-cyan-400">coreTech</span>: [</div>
                <div class="pl-8"><span class="text-emerald-300">'Golang'</span>, <span class="text-emerald-300">'JavaScript'</span>, <span class="text-emerald-300">'TypeScript'</span>,</div>
                <div class="pl-8"><span class="text-emerald-300">'PHP/Laravel'</span>, <span class="text-emerald-300">'Docker'</span>, <span class="text-emerald-300">'REST API'</span>, <span class="text-emerald-300">'MySQL'</span></div>
                <div class="pl-4">],</div>
                <div class="pl-4"><span class="text-cyan-400">location</span>: <span class="text-emerald-300">'Bekasi, Indonesia'</span>,</div>
                <div class="pl-4"><span class="text-cyan-400">status</span>: <span class="text-emerald-400">'Ready for Next Challenge 🚀'</span><span class="typing-cursor !bg-emerald-400"></span></div>
                <div>};</div>
              </div>
            </div>

            <!-- Profile Summary Footer -->
            <div class="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
              <div class="flex items-center gap-2">
                <span class="pulse-ring-container">
                  <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                </span>
                <span>Pusdatin BPAD DKI & Healthcare Specialist</span>
              </div>
              <span class="text-indigo-600 font-mono font-semibold">STMIK-AUB</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { personalInfo } from '../data/portfolio';

const mainBadges = [
  { name: 'Golang', icon: 'devicon-go-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'PHP', icon: 'devicon-laravel-original colored' },
  { name: 'Tailwind CSS', icon: 'devicon-tailwindcss-original colored' },
  { name: 'REST API', icon: 'devicon-fastapi-plain colored' },
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'MySQL / Postgres', icon: 'devicon-mysql-plain colored' }
];

// Typing animation for role/title
const fullTitle = personalInfo.title;
const displayedTitle = ref('');
const showCursor = ref(true);
let typingTimer: ReturnType<typeof setTimeout> | null = null;

const startTyping = () => {
  let i = 0;
  const typeChar = () => {
    if (i < fullTitle.length) {
      displayedTitle.value = fullTitle.slice(0, i + 1);
      i++;
      typingTimer = setTimeout(typeChar, 80 + Math.random() * 40);
    } else {
      // Pause, then keep cursor blinking
      setTimeout(() => {
        showCursor.value = true;
      }, 500);
    }
  };
  // Delay before starting typing to let stagger animations finish
  typingTimer = setTimeout(typeChar, 800);
};

onMounted(() => {
  startTyping();
});

onUnmounted(() => {
  if (typingTimer) clearTimeout(typingTimer);
});
</script>
