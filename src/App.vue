<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";

import "vue-sonner/style.css";
import { Toaster } from "@/components/ui/sonner";
</script>

<template>
  <Navigation />
  <RouterView />
  <Footer />

  <Toaster />
</template>
