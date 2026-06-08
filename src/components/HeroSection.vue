<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { getSocialInfo } from "@/data/Social";
import { Icon } from "@iconify/vue";
import { computed, useTemplateRef } from "vue";
import { useI18n } from "vue-i18n";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useElementSize } from "@vueuse/core";

const { locale } = useI18n();

const content = useTemplateRef("content");
const { height } = useElementSize(content);

const socials = getSocialInfo();

const cvSrc = computed((): string => new URL(`../assets/cv.pdf`, import.meta.url).href);

const codePhpSrc = computed((): string => new URL("../assets/code_php.png", import.meta.url).href);
const codeVueSrc = computed((): string => new URL("../assets/code_vue.png", import.meta.url).href);
</script>

<template>
  <div class="grid md:grid-cols-[1fr_auto] gap-2 md:mb-16">
    <div class="flex flex-col gap-8 md:self-center">
      <div
        class="flex flex-col gap-6 max-md:items-center max-md:*:text-center"
        ref="content"
      >
        <p class="text-secondary max-md:text-sm">// hazy.php</p>
        <div class="">
          <p class="text-5xl">Full-stack dev</p>
          <p class="text-[2.65rem]"><span class="text-secondary font-bold">/</span> Laravel & Vue</p>
        </div>
        <p class="w-96">{{ $t("sections.hero.quote") }}</p>
      </div>

      <Button
        class="h-12 max-md:w-3/5 cursor-pointer md:self-start max-md:self-center"
        as-child
      >
        <a
          :href="cvSrc"
          download="maciej_buczek_cv"
        >
          {{ $t("sections.hero.download_resume") }}
        </a>
      </Button>

      <div class="flex gap-4 max-md:self-center">
        <template
          v-for="social in socials"
          :key="social.value"
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <Button
                  variant="ghost"
                  @click="social.action"
                  class="cursor-pointer rounded-full size-12 not-hover:text-accent"
                >
                  <Icon
                    :icon="social.icon"
                    class="size-5"
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>{{ social.text }}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </template>
      </div>
    </div>

    <div class="relative max-md:hidden">
      <div class="relative">
        <img
          :src="codePhpSrc"
          alt="Code"
          class="rounded-md object-contain"
          :style="`height:${height * 2}px`"
        />
        <div class="absolute inset-0 bg-linear-to-b from-transparent to-[#0f0f1a]"></div>
      </div>

      <div class="absolute inset-0 translate-x-[50%] translate-y-[20%] z-5 shadow-2xs">
        <img
          :src="codeVueSrc"
          alt="Code"
          class="rounded-md object-contain"
          :style="`height:${height * 1.75}px`"
        />
        <div class="absolute inset-0 bg-linear-to-b from-transparent to-[#0f0f1a]"></div>
      </div>
    </div>
  </div>
</template>
