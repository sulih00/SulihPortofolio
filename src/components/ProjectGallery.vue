<template>
  <section id="projects" class="section-padding relative">
    <div class="container-custom">
      
      <!-- Section Header with entrance animation -->
      <div class="flex flex-col items-center text-center space-y-4 mb-12 scroll-animate" style="transition-delay: 0ms;">
        <span class="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 flex items-center gap-1.5 shimmer-badge">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Track Record & Production Systems
        </span>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Proyek Yang <span class="gradient-text-premium">Telah Diselesaikan</span>
        </h2>
        <p class="text-slate-600 max-w-2xl text-sm sm:text-base">
          Portofolio aplikasi web skala instansi pemerintah, layanan rumah sakit, dan sistem enterprise yang telah sukses dibangun dan berjalan di lingkungan produksi.
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="flex flex-wrap items-center justify-center gap-2 mb-10 scroll-animate" style="transition-delay: 100ms;">
        <button
          v-for="cat in categories"
          :key="cat.id"
          @click="activeCategory = cat.id"
          class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border glow-ring"
          :class="activeCategory === cat.id
            ? 'bg-indigo-600 text-white border-transparent shadow-md shadow-indigo-600/20 scale-105'
            : 'bg-white/80 backdrop-blur-sm text-slate-600 border-slate-200 hover:text-indigo-600 hover:border-indigo-200'"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          class="glass-card p-6 flex flex-col justify-between group cursor-pointer transition-all duration-400 scroll-animate relative overflow-hidden"
          :style="{ transitionDelay: `${150 + index * 100}ms` }"
          @click="openModal(project)"
        >
          <!-- Animated gradient top border -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 bg-[length:200%_auto] group-hover:animate-[gradientShift_2s_ease-in-out_infinite] transition-all duration-500"></div>

          <div>
            <!-- Category Badge & Organization -->
            <div class="flex items-center justify-between gap-2 mb-4">
              <div class="flex items-center gap-1.5 flex-wrap">
                <span class="px-3 py-1 rounded-full text-[11px] font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                  {{ project.categoryLabel }}
                </span>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 shrink-0 shimmer-badge">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  Selesai
                </span>
              </div>
              <span class="text-xs font-medium text-slate-500 truncate max-w-[130px]">
                {{ project.organization }}
              </span>
            </div>

            <!-- Title & Description -->
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300 mb-3 leading-snug">
              {{ project.title }}
            </h3>

            <p class="text-slate-600 text-sm mb-6 leading-relaxed line-clamp-3">
              {{ project.description }}
            </p>

            <!-- Key Features Bullet List -->
            <div class="space-y-2 mb-6">
              <div 
                v-for="(feat, idx) in project.features.slice(0, 2)" 
                :key="idx"
                class="flex items-start gap-2 text-xs text-slate-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-sky-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{{ feat }}</span>
              </div>
            </div>
          </div>

          <!-- Tags & Detail Button Footer -->
          <div>
            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-slate-200/60">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-50 text-slate-700 border border-slate-200"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Action Button -->
            <button 
              class="w-full py-2.5 px-4 rounded-xl bg-slate-50 group-hover:bg-indigo-600 text-slate-700 group-hover:text-white border border-slate-200 group-hover:border-indigo-600 text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300 shadow-xs group-hover:shadow-md group-hover:shadow-indigo-600/15"
            >
              <span>Detail Selengkapnya</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>

    </div>

    <!-- Project Modal Popup Overlay -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="selectedProject" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md"
        @click.self="selectedProject = null"
      >
        <transition
          enter-active-class="transition duration-300 ease-out delay-75"
          enter-from-class="opacity-0 translate-y-8 scale-95"
          enter-to-class="opacity-100 translate-y-0 scale-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0 scale-100"
          leave-to-class="opacity-0 translate-y-4 scale-95"
        >
          <div v-if="selectedProject" class="glass-card max-w-2xl w-full p-6 sm:p-8 bg-white/95 backdrop-blur-xl border-slate-200 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <!-- Close Button -->
            <button 
              @click="selectedProject = null"
              class="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-all duration-200 hover:rotate-90"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Modal Header -->
            <div class="mb-6">
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                {{ selectedProject.categoryLabel }}
              </span>
              <h3 class="text-2xl font-bold text-slate-900 mt-3 leading-snug">
                {{ selectedProject.title }}
              </h3>
              <p class="text-xs text-sky-700 font-medium mt-1">
                Instansi/Organisasi: {{ selectedProject.organization }}
              </p>
            </div>

            <!-- Modal Content -->
            <div class="space-y-6 text-sm">
              <div>
                <h4 class="text-xs font-semibold uppercase text-slate-500 tracking-wider mb-2">Deskripsi Proyek</h4>
                <p class="text-slate-700 leading-relaxed bg-slate-50/80 p-4 rounded-xl border border-slate-200">
                  {{ selectedProject.longDescription }}
                </p>
              </div>

              <div>
                <h4 class="text-xs font-semibold uppercase text-slate-500 tracking-wider mb-3">Fitur Utama & Hasil Implementasi</h4>
                <ul class="space-y-2.5">
                  <li 
                    v-for="(feat, idx) in selectedProject.features" 
                    :key="idx"
                    class="flex items-start gap-2.5 text-slate-700"
                  >
                    <span class="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</span>
                    <span>{{ feat }}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 class="text-xs font-semibold uppercase text-slate-500 tracking-wider mb-3">Teknologi yang Digunakan</h4>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tag in selectedProject.tags" 
                    :key="tag"
                    class="px-3 py-1 rounded-lg text-xs font-mono bg-slate-50 text-slate-700 border border-slate-200"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- System Architecture & Data Flow Diagram Section -->
              <div v-if="selectedProject.architecture">
                <h4 class="text-xs font-semibold uppercase text-indigo-600 tracking-wider mb-3 flex items-center gap-1.5">
                  <span>🏛️ Arsitektur Sistem & Alur Kerja Data</span>
                </h4>
                <div class="bg-indigo-50/50 p-5 rounded-xl border border-indigo-100 space-y-4">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-indigo-900 bg-white px-3 py-1 rounded-full border border-indigo-200 shadow-2xs">
                      {{ selectedProject.architecture.pattern }}
                    </span>
                  </div>

                  <!-- Layer Nodes Grid -->
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                    <div 
                      v-for="(node, nIdx) in selectedProject.architecture.layers" 
                      :key="nIdx"
                      class="bg-white p-3 rounded-xl border border-slate-200 flex flex-col items-center text-center shadow-xs hover:shadow-md hover:border-indigo-200 transition-all duration-300"
                    >
                      <i :class="[node.icon, 'text-2xl mb-1']"></i>
                      <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">{{ node.title }}</span>
                      <span class="text-xs font-bold text-slate-900 mt-0.5">{{ node.tech }}</span>
                      <span class="text-[10px] text-slate-500 mt-0.5 line-clamp-1">{{ node.role }}</span>
                    </div>
                  </div>

                  <!-- Flow Description Box -->
                  <div class="bg-white p-3.5 rounded-xl border border-indigo-100 text-xs text-slate-700 leading-relaxed flex items-start gap-2 shadow-2xs">
                    <span class="text-indigo-600 font-bold shrink-0">⚡ Alur Data:</span>
                    <span>{{ selectedProject.architecture.flowDescription }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Modal Footer Button -->
            <div class="mt-8 pt-4 border-t border-slate-200 flex justify-end">
              <button 
                @click="selectedProject = null"
                class="px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 border border-slate-300 text-xs font-semibold transition-all duration-200"
              >
                Tutup Window
              </button>
            </div>

          </div>
        </transition>
      </div>
    </transition>

  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { projects, type Project } from '../data/portfolio';

const activeCategory = ref('all');
const selectedProject = ref<Project | null>(null);

const categories = [
  { id: 'all', label: 'Semua Proyek' },
  { id: 'government', label: 'Pusdatin BPAD DKI' },
  { id: 'healthcare', label: 'Healthcare & SIMRS' },
  { id: 'enterprise', label: 'Enterprise & ERP' }
];

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') return projects;
  return projects.filter(p => p.category === activeCategory.value);
});

const openModal = (project: Project) => {
  selectedProject.value = project;
};

// Re-observe scroll-animate elements after filter changes
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  const section = document.getElementById('projects');
  if (section) {
    section.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));
  }
});
</script>
