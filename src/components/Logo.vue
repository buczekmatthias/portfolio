<script setup lang="ts">
import { computed } from "vue";

const logoSrc = computed((): string => new URL("../assets/avatar.png", import.meta.url).href);
</script>

<template>
  <img
    :src="logoSrc"
    alt="Avatar"
    class="size-12 duration-450 hover:rotate-45 origin-bottom-right"
  />
</template>
