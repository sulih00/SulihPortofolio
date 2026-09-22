<template>
  <section id="certificates" class="section-padding relative">
    <div class="container-custom">
      
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center space-y-4 mb-12 scroll-animate" style="transition-delay: 0ms;">
        <span class="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-indigo-700 bg-indigo-50 border border-indigo-200 shimmer-badge">
          Sertifikasi & Kualifikasi
        </span>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Sertifikat <span class="gradient-text-premium">Profesional</span>
        </h2>
        <p class="text-slate-600 max-w-2xl text-sm sm:text-base">
          Sertifikasi resmi dan lisensi profesional yang memvalidasi kompetensi teknis dalam pengembangan aplikasi modern.
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

      <!-- Certificates Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(cert, index) in filteredCertificates"
          :key="cert.id"
          class="glass-card p-6 flex flex-col justify-between group transition-all duration-400 scroll-animate relative overflow-hidden"
          :style="{ transitionDelay: `${150 + index * 100}ms` }"
        >
          <!-- Animated gradient top border -->
          <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-500 to-indigo-600 bg-[length:200%_auto] group-hover:animate-[gradientShift_2s_ease-in-out_infinite] transition-all duration-500"></div>

          <div>
            <!-- Card Top Bar: Issuer Logo & Verification Badge -->
            <div class="flex items-center justify-between gap-2 mb-5">
              <div class="flex items-center gap-2.5">
                <!-- Meta Logo SVG -->
                <div v-if="cert.logo === 'meta'" class="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold p-1.5 shadow-2xs">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" class="w-full h-full fill-current text-sky-600">
                    <path d="M363.6 150c-26.2 0-49.9 12.4-65.7 32-15.8-19.6-39.5-32-65.7-32-47.5 0-86 38.5-86 86s38.5 86 86 86c26.2 0 49.9-12.4 65.7-32 15.8 19.6 39.5 32 65.7 32 47.5 0 86-38.5 86-86s-38.5-86-86-86zm-131.4 128c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zm131.4 0c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z"/>
                  </svg>
                </div>
                <div v-else class="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 font-bold">
                  🏅
                </div>
                <div>
                  <span class="text-xs font-bold text-slate-900 block leading-tight">{{ cert.issuer }}</span>
                  <span class="text-[11px] text-slate-500 block">{{ cert.platform }}</span>
                </div>
              </div>

              <!-- Verified Badge with shimmer -->
              <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0 shimmer-badge">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
                Terverifikasi
              </span>
            </div>

            <!-- Certificate Title -->
            <h3 class="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors duration-300 mb-2 leading-snug">
              {{ cert.title }}
            </h3>

            <!-- Issued Date & Credential ID -->
            <div class="flex items-center gap-3 text-xs text-slate-500 mb-4 font-mono">
              <span>🗓️ {{ cert.issueDate }}</span>
              <span>•</span>
              <span class="truncate">ID: {{ cert.credentialId }}</span>
            </div>

            <!-- Description -->
            <p class="text-slate-600 text-xs sm:text-sm mb-5 leading-relaxed">
              {{ cert.description }}
            </p>

            <!-- 9 Courses Highlight Pill List -->
            <div v-if="cert.courses" class="mb-5 bg-slate-50/80 backdrop-blur-sm border border-slate-200 rounded-xl p-3">
              <div class="text-[11px] font-semibold text-slate-700 mb-2 flex items-center justify-between">
                <span>Program 9 Spesialisasi Kursus:</span>
                <span class="text-indigo-600 text-[10px] bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-100">9 Courses</span>
              </div>
              <ul class="space-y-1">
                <li 
                  v-for="(course, idx) in cert.courses.slice(0, 3)" 
                  :key="idx"
                  class="text-[11px] text-slate-600 flex items-center gap-1.5"
                >
                  <span class="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                  <span class="truncate">{{ course }}</span>
                </li>
              </ul>
              <button 
                @click="openModal(cert)"
                class="mt-2 text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 transition-colors duration-200 flex items-center gap-1"
              >
                <span>Lihat semua {{ cert.courses.length }} modul kursus &rarr;</span>
              </button>
            </div>

          </div>

          <!-- Footer Actions & Skills -->
          <div>
            <!-- Skill Badges -->
            <div class="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-slate-200/60">
              <span 
                v-for="skill in cert.skills" 
                :key="skill"
                class="px-2.5 py-0.5 rounded text-[11px] font-medium bg-slate-50 text-slate-700 border border-slate-200"
              >
                {{ skill }}
              </span>
            </div>

            <!-- Action Buttons -->
            <div class="grid grid-cols-2 gap-2">
              <button 
                @click="openModal(cert)"
                class="py-2.5 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white border border-indigo-600 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 shadow-xs hover:shadow-md hover:shadow-indigo-600/15"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>Lihat Detail</span>
              </button>

              <a 
                :href="cert.credentialUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 text-center glow-ring"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Verifikasi</span>
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>

    <!-- Certificate Modal / Lightbox -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="selectedCert" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md"
        @click.self="closeModal"
      >
        <transition
          enter-active-class="transition duration-300 ease-out delay-75"
          enter-from-class="opacity-0 translate-y-8 scale-95"
          enter-to-class="opacity-100 translate-y-0 scale-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0 scale-100"
          leave-to-class="opacity-0 translate-y-4 scale-95"
        >
          <div v-if="selectedCert" class="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            
            <!-- Close Button -->
            <button 
              @click="closeModal"
              class="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-all duration-200 hover:rotate-90"
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <!-- Modal Header Banner -->
            <div class="flex items-start gap-4 mb-6 pr-8">
              <div v-if="selectedCert.logo === 'meta'" class="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 p-2 shrink-0 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" class="w-full h-full fill-current">
                  <path d="M363.6 150c-26.2 0-49.9 12.4-65.7 32-15.8-19.6-39.5-32-65.7-32-47.5 0-86 38.5-86 86s38.5 86 86 86c26.2 0 49.9-12.4 65.7-32 15.8 19.6 39.5 32 65.7 32 47.5 0 86-38.5 86-86s-38.5-86-86-86zm-131.4 128c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zm131.4 0c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z"/>
                </svg>
              </div>
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    {{ selectedCert.categoryLabel }}
                  </span>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 shimmer-badge">
                    ✓ Verified Professional
                  </span>
                </div>
                <h3 class="text-2xl font-extrabold text-slate-900 leading-tight">
                  {{ selectedCert.title }}
                </h3>
                <p class="text-sm font-medium text-slate-600 mt-1">
                  Diterbitkan oleh <strong class="text-slate-900">{{ selectedCert.issuer }}</strong> via <span class="text-indigo-600 font-semibold">{{ selectedCert.platform }}</span>
                </p>
              </div>
            </div>

            <!-- Credential Meta Info Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-slate-50/80 border border-slate-200 text-xs">
              <div>
                <span class="text-slate-500 block mb-0.5">Tanggal Penerbitan:</span>
                <span class="font-bold text-slate-800">{{ selectedCert.issueDate }}</span>
              </div>
              <div>
                <span class="text-slate-500 block mb-0.5">Credential ID:</span>
                <span class="font-mono font-bold text-slate-800 select-all">{{ selectedCert.credentialId }}</span>
              </div>
            </div>

            <!-- Detailed Description -->
            <div class="mb-6">
              <h4 class="text-sm font-bold text-slate-900 mb-2">Deskripsi Sertifikasi:</h4>
              <p class="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {{ selectedCert.description }}
              </p>
            </div>

            <!-- Course Modules List -->
            <div v-if="selectedCert.courses" class="mb-6">
              <h4 class="text-sm font-bold text-slate-900 mb-3 flex items-center justify-between">
                <span>Modul & Topik Kursus Yang Diselesaikan (9 Courses):</span>
                <span class="text-xs text-indigo-600 font-normal">Meta Coursera Specialization</span>
              </h4>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div 
                  v-for="(course, idx) in selectedCert.courses" 
                  :key="idx"
                  class="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3 text-xs text-slate-700 font-medium hover:border-indigo-200 hover:bg-indigo-50/30 transition-all duration-200"
                >
                  <div class="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center shrink-0 text-[11px]">
                    {{ idx + 1 }}
                  </div>
                  <span class="leading-tight">{{ course }}</span>
                </div>
              </div>
            </div>

            <!-- Key Skills -->
            <div class="mb-8">
              <h4 class="text-sm font-bold text-slate-900 mb-2">Keahlian Terverifikasi:</h4>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="skill in selectedCert.skills" 
                  :key="skill"
                  class="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200"
                >
                  {{ skill }}
                </span>
              </div>
            </div>

            <!-- Modal Action Buttons Footer -->
            <div class="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-200">
              <a 
                v-if="selectedCert.pdfUrl"
                :href="selectedCert.pdfUrl" 
                download
                class="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-all duration-200 flex items-center justify-center gap-2 shadow-xs text-center glow-ring"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Unduh Sertifikat (PDF)</span>
              </a>

              <a 
                :href="selectedCert.credentialUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/25 text-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>Verifikasi Resmi di Coursera</span>
              </a>
            </div>

          </div>
        </transition>
      </div>
    </transition>

  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { certificates, type Certificate } from '../data/portfolio';

const activeCategory = ref('all');
const selectedCert = ref<Certificate | null>(null);

const categories = [
  { id: 'all', label: 'Semua Sertifikat' },
  { id: 'frontend', label: 'Frontend & UI' },
  { id: 'backend', label: 'Backend & API' },
  { id: 'fullstack', label: 'Full Stack' }
];

const filteredCertificates = computed(() => {
  if (activeCategory.value === 'all') {
    return certificates;
  }
  return certificates.filter(c => c.category === activeCategory.value);
});

const openModal = (cert: Certificate) => {
  selectedCert.value = cert;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  selectedCert.value = null;
  document.body.style.overflow = '';
};

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

  const section = document.getElementById('certificates');
  if (section) {
    section.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));
  }
});
</script>
