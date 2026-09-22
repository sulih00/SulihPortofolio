<template>
  <footer class="relative z-10 bg-white/90 backdrop-blur-sm">
    <!-- Gradient Separator Line -->
    <div class="h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent"></div>

    <div class="py-10">
      <div class="container-custom">

        <!-- Main Footer Content -->
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">

          <!-- Left — Brand & Copyright -->
          <div class="flex flex-col items-center md:items-start gap-2">
            <div class="flex items-center gap-2.5">
              <div
                class="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                S
              </div>
              <span class="font-bold text-lg tracking-wide text-slate-900">
                SULIH<span class="text-indigo-600">.dev</span>
              </span>
            </div>
            <p class="text-xs text-slate-500 text-center md:text-left max-w-xs">
              Full Stack Developer — Building scalable systems for government, healthcare & enterprise.
            </p>
            <span class="text-[11px] text-slate-400 mt-1">
              © {{ new Date().getFullYear() }} <strong class="text-slate-600">SULIH</strong>. All rights reserved.
            </span>
          </div>

          <!-- Center — Social Links -->
          <div class="flex items-center gap-3">
            <a :href="personalInfo.linkedin" target="_blank" rel="noopener noreferrer"
              class="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 hover:shadow-md transition-all duration-300 glow-ring"
              title="LinkedIn Profile">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a :href="'mailto:' + personalInfo.email"
              class="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 hover:shadow-md transition-all duration-300 glow-ring"
              title="Email">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>

            <a :href="'https://wa.me/' + personalInfo.phone.replace(/[^0-9]/g, '')" target="_blank"
              class="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50 hover:shadow-md transition-all duration-300 glow-ring"
              title="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>

          <!-- Right — Tech & Back to Top -->
          <div class="flex flex-col items-center md:items-end gap-3">
          </div>

          <!-- Back to Top -->
          <a href="#hero"
            class="group flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 hover:shadow-md text-xs font-medium transition-all duration-300 glow-ring">
            <span>Kembali ke atas</span>
            <svg xmlns="http://www.w3.org/2000/svg"
              class="h-3.5 w-3.5 group-hover:-translate-y-1 transition-transform duration-300" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>

      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { personalInfo } from '../data/portfolio';
</script>
