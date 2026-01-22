<script setup lang="ts">
import { getEntries, getRemainingItems, INCREMENT_LIMIT_VALUE, type StackItem } from "@/data/Stack";

import { Icon } from "@iconify/vue";
import { onBeforeMount, ref } from "vue";

const stack = ref<{ [key: string]: StackItem }>({
  Frontend: {},
  Backend: {},
  Tools: {},
});
const stackRemaining = ref<{ [key: string]: number }>({
  Frontend: 0,
  Backend: 0,
  Tools: 0,
});

onBeforeMount((): void => {
  Object.keys(stack.value).forEach((k: string) => {
    stack.value[k] = getEntries(k);
    stackRemaining.value[k] = getRemainingItems(k);
  });
});

const updateStack = (group: string, showAll: boolean = false): void => {
  stack.value[group] = getEntries(group, showAll);
  stackRemaining.value[group] = showAll ? 0 : getRemainingItems(group);
};
</script>

<template>
  <div>
    <p class="section-header">{{ $t("sections.tools_tech.header") }}</p>
    <div class="grid lg:grid-cols-3 gap-4">
      <div
        class="flex flex-col gap-4"
        v-for="[group, items] in Object.entries(stack)"
        :key="group"
      >
        <p>{{ group }}</p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-1 gap-2">
          <div
            class="flex items-center gap-3 bg-popover p-3 rounded-md hover:bg-popover-foreground/10 duration-150 text-sm"
            v-for="[item, icon] in Object.entries(items)"
            :key="item"
          >
            <Icon
              :icon="icon"
              class="size-5"
            />

            <p>{{ item }}</p>
          </div>
        </div>
        <p
          v-if="stackRemaining[group]! > 0"
          class="cursor-pointer text-sky-500 text-sm self-start -mt-2"
          @click="updateStack(group, true)"
        >
          +{{ stackRemaining[group] }} {{ $t("sections.tools_tech.more") }}
        </p>
        <p
          v-if="stackRemaining[group]! === 0 && Object.keys(stack[group]!).length > INCREMENT_LIMIT_VALUE"
          class="cursor-pointer text-sky-500 text-sm self-start -mt-2"
          @click="updateStack(group)"
        >
          {{ $t("buttons.show_less") }}
        </p>
      </div>
    </div>
  </div>
</template>
