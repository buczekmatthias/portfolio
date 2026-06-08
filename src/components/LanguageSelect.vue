<script setup lang="ts">
import { useTitle } from "@vueuse/core";
import { useI18n } from "vue-i18n";
import { onBeforeMount, watch } from "vue";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger } from "@/components/ui/select";

const i18n = useI18n();

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
  <Select v-model="i18n.locale.value">
    <SelectTrigger class="uppercase cursor-pointer max-md:text-sm">
      {{ i18n.locale.value }}
    </SelectTrigger>
    <SelectContent align="end">
      <SelectGroup>
        <SelectLabel>{{ $t("language") }}</SelectLabel>
        <SelectItem
          :value="locale"
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          class="uppercase cursor-pointer max-md:text-sm"
        >
          {{ locale }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
