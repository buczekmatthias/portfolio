<script setup lang="ts">
import { computed, ref } from "vue";
import { Button } from "@/components/ui/button";

const showMore = ref<boolean>(false);
</script>

<template>
  <div>
    <p class="section-header">{{ $t("sections.about.header") }}</p>
    <div class="flex flex-col gap-6">
      <p
        class="leading-7"
        v-for="row in $tm('sections.about.short')"
      >
        {{ row }}
      </p>
    </div>
    <Button
      @click="showMore = !showMore"
      variant="outline"
      class="cursor-pointer"
      :class="showMore ? 'my-4' : 'mt-4'"
    >
      {{ $t(showMore ? "buttons.show_less" : "buttons.show_more") }}
    </Button>
    <div
      class="rounded-lg flex flex-col gap-10"
      :class="{
        'h-0 overflow-hidden': !showMore,
        'h-fit border p-3': showMore,
      }"
    >
      <div
        class="flex flex-col gap-4"
        v-for="(content, i) in $tm('sections.about.content')"
        :key="i"
      >
        <p class="text-2xl">{{ (i as number) + 1 }}. {{ content.q }}</p>
        <div class="flex flex-col gap-6">
          <p
            v-for="(answer, i) in content.a"
            :key="i"
            class="leading-7"
          >
            {{ answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
