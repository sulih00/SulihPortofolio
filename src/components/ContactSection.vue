<template>
  <section id="contact" class="section-padding relative">
    <div class="container-custom">
      
      <!-- Section Header -->
      <div class="flex flex-col items-center text-center space-y-4 mb-16 scroll-animate" style="transition-delay: 0ms;">
        <span class="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-emerald-700 bg-emerald-50 border border-emerald-200 shimmer-badge">
          Get In Touch
        </span>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
          Kontak <span class="gradient-text-premium">Saya</span>
        </h2>
        <p class="text-slate-600 max-w-2xl text-sm sm:text-base">
          Tertarik untuk mendiskusikan peluang kerja, proyek freelance, atau pengembangan sistem? Silakan hubungi saya melalui form di bawah atau kontak langsung.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
        
        <!-- Left Contact Info Cards -->
        <div class="lg:col-span-5 space-y-6">
          
          <!-- Email Card -->
          <div class="glass-card p-6 flex flex-col justify-between bg-white/85 backdrop-blur-sm border-slate-200 shadow-sm scroll-animate" style="transition-delay: 100ms;">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shrink-0 text-xl">
                ✉️
              </div>
              <div class="overflow-hidden">
                <h4 class="text-xs font-semibold uppercase text-slate-500 tracking-wider">Email Direct</h4>
                <p class="text-base font-bold text-slate-900 truncate mt-1">{{ personalInfo.email }}</p>
              </div>
            </div>

            <!-- Copy Email Button -->
            <button 
              @click="copyEmail" 
              class="mt-4 w-full py-2 px-4 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300 glow-ring"
            >
              <span>{{ copied ? 'Tersalin ke Clipboard! ✅' : 'Salin Email 1-Klik' }}</span>
            </button>
          </div>

          <!-- WhatsApp & Phone Card -->
          <div class="glass-card p-6 flex flex-col justify-between bg-white/85 backdrop-blur-sm border-slate-200 shadow-sm scroll-animate" style="transition-delay: 200ms;">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 text-xl">
                💬
              </div>
              <div>
                <h4 class="text-xs font-semibold uppercase text-slate-500 tracking-wider">WhatsApp & Telepon</h4>
                <p class="text-base font-bold text-slate-900 mt-1">{{ personalInfo.phone }}</p>
              </div>
            </div>

            <a 
              :href="'https://wa.me/' + personalInfo.phone.replace(/[^0-9]/g, '')" 
              target="_blank"
              class="mt-4 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-600 text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-300 text-center shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/25 relative overflow-hidden group"
            >
              <!-- Pulse glow effect on WhatsApp button -->
              <span class="absolute inset-0 bg-emerald-400/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></span>
              <span class="relative z-10">Chat via WhatsApp</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 relative z-10 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <!-- Location & LinkedIn Card -->
          <div class="glass-card p-6 space-y-4 bg-white/85 backdrop-blur-sm border-slate-200 shadow-sm scroll-animate" style="transition-delay: 300ms;">
            <div class="flex items-center gap-3 text-slate-700 text-xs sm:text-sm">
              <span class="text-sky-600 text-lg">📍</span>
              <span><strong>Lokasi:</strong> {{ personalInfo.location }}</span>
            </div>
            <div class="flex items-center gap-3 text-slate-700 text-xs sm:text-sm">
              <span class="text-indigo-600 text-lg">🔗</span>
              <span><strong>LinkedIn:</strong> <a :href="personalInfo.linkedin" target="_blank" class="text-indigo-600 hover:text-indigo-700 hover:underline transition-colors duration-200">Sulih Profile</a></span>
            </div>
          </div>

        </div>

        <!-- Right Interactive Form Column -->
        <div class="lg:col-span-7 scroll-animate" style="transition-delay: 150ms;">
          <div class="glass-card p-6 sm:p-8 bg-white/85 backdrop-blur-sm border-slate-200 shadow-sm">
            <h3 class="text-xl font-bold text-slate-900 mb-2">Kirim Pesan Langsung</h3>
            <p class="text-xs text-slate-500 mb-6">Isi formulir di bawah ini untuk mengirim pesan singkat.</p>

            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1.5">Nama Lengkap</label>
                  <input 
                    v-model="form.name"
                    type="text" 
                    required
                    placeholder="Nama Anda"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-50/80 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 focus:shadow-md focus:shadow-indigo-500/5 transition-all duration-300 placeholder-slate-400 shadow-2xs"
                  />
                </div>
                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1.5">Alamat Email</label>
                  <input 
                    v-model="form.email"
                    type="email" 
                    required
                    placeholder="email@domain.com"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-50/80 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 focus:shadow-md focus:shadow-indigo-500/5 transition-all duration-300 placeholder-slate-400 shadow-2xs"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1.5">Subjek / Topik</label>
                <input 
                  v-model="form.subject"
                  type="text" 
                  required
                  placeholder="Contoh: Penawaran Project / Diskusi Rekrutmen"
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-50/80 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 focus:shadow-md focus:shadow-indigo-500/5 transition-all duration-300 placeholder-slate-400 shadow-2xs"
                />
              </div>

              <div>
                <label class="block text-xs font-semibold text-slate-700 mb-1.5">Pesan</label>
                <textarea 
                  v-model="form.message"
                  rows="4" 
                  required
                  placeholder="Tuliskan rincian pesan atau kriteria proyek Anda di sini..."
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-50/80 border border-slate-300 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 focus:shadow-md focus:shadow-indigo-500/5 transition-all duration-300 resize-none placeholder-slate-400 shadow-2xs"
                ></textarea>
              </div>

              <!-- Submit Status Toast -->
              <transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 -translate-y-2 scale-95"
                enter-to-class="opacity-100 translate-y-0 scale-100"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <div 
                  v-if="submitted" 
                  class="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs flex items-center gap-2"
                >
                  <span>✅ Terima kasih! Pesan Anda telah terkirim. Saya akan segera membalas email Anda.</span>
                </div>
              </transition>

              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/25 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 relative overflow-hidden group"
              >
                <span class="absolute inset-0 bg-indigo-500/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></span>
                <span v-if="!isSubmitting" class="relative z-10">Kirim Pesan Sekarang</span>
                <span v-else class="flex items-center gap-2 relative z-10">
                  <svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Mengirim...
                </span>
              </button>

            </form>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { personalInfo } from '../data/portfolio';

const copied = ref(false);
const isSubmitting = ref(false);
const submitted = ref(false);

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const copyEmail = () => {
  navigator.clipboard.writeText(personalInfo.email);
  copied.value = true;
  setTimeout(() => {
    copied.value = false;
  }, 2500);
};

const handleSubmit = () => {
  isSubmitting.value = true;
  setTimeout(() => {
    isSubmitting.value = false;
    submitted.value = true;
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';
    setTimeout(() => {
      submitted.value = false;
    }, 5000);
  }, 1000);
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

  const section = document.getElementById('contact');
  if (section) {
    section.querySelectorAll('.scroll-animate').forEach((el) => observer.observe(el));
  }
});
</script>
