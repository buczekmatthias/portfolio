<script setup lang="ts">
import { getSelectDisplayOptions, type LanguageOptionsDisplay } from "@/utils/useTranslations";
import { useTitle } from "@vueuse/core";
import { useI18n } from "vue-i18n";
import { onBeforeMount, watch } from "vue";

const i18n = useI18n();

const optionsDisplays: LanguageOptionsDisplay = getSelectDisplayOptions();

const getFlag = (filename: string): string => new URL(`../assets/flags/${filename}`, import.meta.url).href;

const setTitle = () => useTitle(`${i18n.t("full_name")} | Portfolio`);

watch(
  () => i18n.locale.value,
  () => {
    setTitle();
  },
);

onBeforeMount(() => {
  setTitle();
});
</script>

<template>
  <div class="flex items-center gap-4.5">
    <button
      v-for="locale in $i18n.availableLocales"
      :key="`locale-${locale}`"
      @click="$i18n.locale = locale"
      :class="{
        'cursor-pointer': $i18n.locale !== locale,
      }"
    >
      <img
        :src="getFlag(optionsDisplays[locale]!)"
        :alt="`${locale}-flag`"
        class="size-7"
        :class="{
          'opacity-50 duration-300 hover:opacity-90': $i18n.locale !== locale,
        }"
      />
    </button>
  </div>
</template>
