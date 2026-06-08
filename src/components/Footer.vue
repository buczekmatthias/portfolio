<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import { Button } from "@/components/ui/button";
import { getSocialInfo } from "@/data/Social";
import { Icon } from "@iconify/vue";
import LanguageSelect from "@/components/LanguageSelect.vue";
import Heading from "@/components/Heading.vue";
</script>

<template>
  <div class="bg-secondary/5 mt-auto">
    <div class="section py-8 flex max-md:flex-col gap-8 md:gap-4 md:items-center">
      <div class="grid max-md:grid-cols-[1fr_auto] max-md:items-center gap-6 md:mr-auto">
        <div class="flex gap-6 items-center">
          <Logo />
          <Heading
            :title="$t('full_name')"
            description="Full-Stack Developer"
            class="mb-0!"
          />
        </div>

        <LanguageSelect />
      </div>

      <div class="grid-rows-[auto_1fr] grid">
        <Heading :title="$t('sections.footer.find_me')" />
        <div class="flex flex-col items-start gap-2">
          <Button
            v-for="social in getSocialInfo()"
            :key="social.text"
            @click="social.action"
            variant="link"
            class="cursor-pointer px-0!"
          >
            <Icon :icon="social.icon" />
            {{ social.value }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
