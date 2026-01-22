<script setup lang="ts">
import { getFileUrl } from "@/lib/utils";
</script>

<template>
  <img
    :src="getFileUrl('avatar.png')"
    alt="Avatar"
    class="size-12 duration-450 hover:rotate-45 origin-bottom-right"
  />
</template>
