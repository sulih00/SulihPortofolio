<template>
  <section id="experience" class="section-padding relative">
    <div class="container-custom">
      
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center space-y-4 mb-16 scroll-animate" style="transition-delay: 0ms;">
        <span class="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-indigo-700 bg-indigo-50 border border-indigo-200 shimmer-badge">
          Career Path & Contributions
        </span>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Pengalaman Kerja & <span class="gradient-text-premium">Rekam Jejak</span>
        </h2>
        <p class="text-slate-600 max-w-2xl text-sm sm:text-base">
          Pengalaman profesional dalam mengembangkan solusi perangkat lunak skala instansi dan enterprise.
        </p>
      </div>

      <!-- Timeline Container -->
      <div class="max-w-4xl mx-auto relative">
        <!-- Vertical Timeline Line — animated grow -->
        <div 
          class="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden sm:block origin-top"
          :class="timelineVisible ? 'bg-gradient-to-b from-indigo-600 via-purple-400 to-indigo-300' : 'bg-slate-200'"
          :style="{ 
            transform: `translateX(-50%) scaleY(${timelineProgress})`, 
            transformOrigin: 'top',
            transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1), background 0.5s ease'
          }"
        ></div>

        <!-- Experience Items -->
        <div class="space-y-12">
          <div 
            v-for="(exp, index) in experiences" 
            :key="exp.id"
            class="relative flex flex-col sm:flex-row items-start group"
            :class="[
              index % 2 === 0 ? 'sm:flex-row-reverse' : '',
              index % 2 === 0 ? 'scroll-animate-right' : 'scroll-animate-left'
            ]"
            :style="{ transitionDelay: `${index * 150}ms` }"
          >
            <!-- Timeline Center Node Indicator — with pulse ring -->
            <div class="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-10">
              <div class="w-6 h-6 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center group-hover:border-indigo-700 group-hover:scale-125 transition-all duration-300 shadow-md relative">
                <div class="w-2 h-2 rounded-full bg-indigo-600"></div>
                <!-- Pulse ring on hover -->
                <div class="absolute inset-0 rounded-full border-2 border-indigo-400 opacity-0 group-hover:opacity-100 group-hover:animate-[pulseRing_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
              </div>
            </div>

            <!-- Content Card -->
            <div class="w-full sm:w-[45%] ml-10 sm:ml-0">
              <div class="glass-card p-6 border-slate-200 hover:border-indigo-400 bg-white/85 backdrop-blur-sm shadow-sm">
                
                <!-- Role & Period -->
                <div class="flex items-center justify-between gap-2 mb-2">
                  <span class="text-xs font-semibold text-indigo-600 font-mono">
                    {{ exp.period }}
                  </span>
                  <span class="text-xs text-slate-500">
                    {{ exp.location }}
                  </span>
                </div>

                <h3 class="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">
                  {{ exp.role }}
                </h3>

                <p class="text-sm font-medium text-slate-700 mb-4">
                  🏢 {{ exp.company }}
                </p>

                <p class="text-slate-600 text-xs sm:text-sm mb-4 leading-relaxed">
                  {{ exp.description }}
                </p>

                <!-- Achievements Bullet List -->
                <div class="space-y-2 mb-5">
                  <div 
                    v-for="(achieve, aIdx) in exp.achievements" 
                    :key="aIdx"
                    class="flex items-start gap-2 text-xs text-slate-600"
                  >
                    <span class="text-sky-600 font-bold shrink-0">▸</span>
                    <span>{{ achieve }}</span>
                  </div>
                </div>

                <!-- Tech Stack Badges -->
                <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/60">
                  <span 
                    v-for="tech in exp.techStack" 
                    :key="tech"
                    class="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-50 text-slate-700 border border-slate-200"
                  >
                    {{ tech }}
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { experiences } from '../data/portfolio';

const timelineVisible = ref(false);
const timelineProgress = ref(0);

const handleTimelineScroll = () => {
  const section = document.getElementById('experience');
  if (!section) return;

  const rect = section.getBoundingClientRect();
  const sectionTop = rect.top;
  const sectionHeight = rect.height;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight * 0.8) {
    timelineVisible.value = true;
    // Calculate how far through the section we've scrolled
    const scrolledIntoSection = windowHeight * 0.8 - sectionTop;
    const progress = Math.min(1, Math.max(0, scrolledIntoSection / (sectionHeight * 0.7)));
    timelineProgress.value = progress;
  }
};

// Also observe the scroll-animate cards
let observer: IntersectionObserver | null = null;

onMounted(() => {
  window.addEventListener('scroll', handleTimelineScroll, { passive: true });
  handleTimelineScroll();

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer?.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  const section = document.getElementById('experience');
  if (section) {
    section.querySelectorAll('.scroll-animate-left, .scroll-animate-right, .scroll-animate').forEach((el) => {
      observer?.observe(el);
    });
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleTimelineScroll);
  observer?.disconnect();
});
</script>
