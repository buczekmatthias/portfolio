<script setup lang="ts">
import { getStackByType, type StackItem } from "@/data/Stack";

import { Icon } from "@iconify/vue";
import Heading from "@/components/Heading.vue";
import { capitalize, ref, watch } from "vue";

const tab = ref<string>("all");

const tabs = ["all", "language", "framework", "other"];

const stack = ref<StackItem[]>(getStackByType(tab.value));

watch(
  () => tab.value,
  () => (stack.value = getStackByType(tab.value)),
);
</script>

<template>
  <div class="grid">
    <Heading
      :title="$t('sections.tools_tech.header')"
      class="justify-self-center"
    />

    <div class="grid grid-cols-4 rounded-md bg-secondary/8 p-1.5 mb-4 w-full max-w-xl justify-self-center gap-1.5">
      <button
        v-for="t in tabs"
        :key="t"
        class="capitalize p-1.5 cursor-pointer text-sm rounded-md"
        @click="tab = t"
        :class="{
          'bg-primary': t === tab,
          'duration-150 hover:bg-primary/15': t !== tab,
        }"
      >
        {{ t }}
      </button>
    </div>

    <div
      class="grid gap-2"
      style="grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))"
    >
      <div
        class="flex flex-col items-center gap-1 bg-secondary/5 rounded-md p-6"
        v-for="item in stack"
        :key="item.name"
      >
        <Icon
          :icon="item.icon"
          class="size-6 md:size-7 mb-2.5"
        />
        <Heading
          :title="item.name"
          class="text-center"
          variant="small"
        />
        <p class="text-accent text-xs">{{ capitalize(item.type) }}</p>
      </div>
    </div>
  </div>
</template>
