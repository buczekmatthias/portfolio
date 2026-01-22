<script setup lang="ts">
import { getProjects, type ProjectType } from "@/data/Projects";
import { computed, ref } from "vue";
import Project from "@/components/Project.vue";

const projects: ProjectType[] = getProjects();

const currentlyDisplayedProjectIndex = ref<number>(0);

const activeProject = computed((): ProjectType => projects[currentlyDisplayedProjectIndex.value]!);
</script>

<template>
  <div>
    <p class="section-header">{{ $t("sections.projects.header") }}</p>
    <div class="flex flex-col gap-6 sm:grid sm:grid-cols-[1fr_auto] sm:items-center">
      <div class="">
        <Project :project="activeProject" />
      </div>
      <div class="flex gap-6 sm:flex-col">
        <button
          v-for="index in projects.length"
          :key="index"
          @click="currentlyDisplayedProjectIndex = index - 1"
          class="size-4 rounded-full duration-300"
          :class="{
            'bg-linear-to-r sm:bg-linear-to-b from-indigo-500 via-purple-500 to-pink-500 max-sm:w-12 sm:h-12': index - 1 === currentlyDisplayedProjectIndex,
            'cursor-pointer border-4': index - 1 !== currentlyDisplayedProjectIndex,
          }"
        ></button>
      </div>
    </div>
  </div>
</template>
