<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import { Button } from "@/components/ui/button";
import { getSocialInfo } from "@/data/Social";
import { Icon } from "@iconify/vue";
import LanguageSelect from "@/components/LanguageSelect.vue";

const socials = getSocialInfo();
</script>

<template>
  <div class="flex flex-col gap-4 rounded-t-2xl bg-popover py-6 px-6 sm:flex-row sm:justify-between sm:items-center">
    <div class="flex flex-col gap-4">
      <Logo />
      <div class="mb-4">
        <p class="text-2xl">{{ $t("full_name") }}</p>
        <p class="text-muted-foreground">Full-Stack Developer</p>
      </div>
      <LanguageSelect />
    </div>

    <div class="flex flex-col items-start gap-2">
      <template
        v-for="social in socials"
        :key="social.text"
      >
        <Button
          variant="link"
          @click="social.action"
          class="cursor-pointer px-0!"
        >
          <Icon :icon="social.icon" />
          {{ social.value }}
        </Button>
      </template>
    </div>
  </div>
</template>
