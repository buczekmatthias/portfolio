<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
import StackSection from "@/components/StackSection.vue";
import Footer from "@/components/Footer.vue";
import "vue-sonner/style.css";
import { Toaster } from "@/components/ui/sonner";
import Availability from "@/components/Availability.vue";
</script>

<template>
  <div class="bg-background text-foreground w-full min-h-screen max-lg:*:px-4 flex flex-col gap-6 mx-auto max-w-4xl">
    <Navigation />
    <HeroSection />
    <Availability />
    <AboutSection />
    <ProjectsSection />
    <StackSection />
    <Footer />
  </div>
  <Toaster />
</template>
