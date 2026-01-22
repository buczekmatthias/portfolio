<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { getSocialInfo } from "@/data/Social";
import { Icon } from "@iconify/vue";

const socials = getSocialInfo();
</script>

<template>
  <div class="flex flex-col gap-6 sm:flex-row sm:items-center">
    <div class="flex flex-col gap-3 sm:flex-1">
      <p class="text-3xl">{{ $t("sections.hero.hi") }}</p>
      <p class="text-4xl">{{ $t("sections.hero.name") }}</p>
      <p class="text-2xl">{{ $t("sections.hero.who") }}</p>
    </div>
    <div class="flex flex-wrap gap-4 sm:grid sm:grid-cols-2">
      <template
        v-for="social in socials"
        :key="social.value"
      >
        <Button
          variant="outline"
          @click="social.action"
          class="cursor-pointer max-sm:rounded-full max-sm:size-12 sm:h-12"
          :class="social.backgroundClass"
        >
          <Icon
            :icon="social.icon"
            class="size-5"
          />
          <p class="hidden sm:block">{{ social.text }}</p>
        </Button>
      </template>
    </div>
  </div>
</template>
