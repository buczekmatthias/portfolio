<script setup lang="ts">
import { projects } from "@/data/Projects";
import Heading from "@/components/Heading.vue";
import { getProjectIconSrc, getProjectYear } from "@/utils/useProject";
</script>

<template>
  <div class="grid">
    <Heading
      :title="$t('sections.projects.header')"
      class="justify-self-center"
    />
    <div class="grid gap-4 lg:grid-cols-2">
      <RouterLink
        :to="{ name: 'projects.show', params: { project: project.name } }"
        v-for="project in projects"
        :key="project.name"
        class="flex gap-4 items-center border rounded-md p-4 duration-150 hover:bg-sky-600/15 hover:border-sky-600"
      >
        <img
          :src="getProjectIconSrc(project.name)"
          :alt="`${project.name} icon`"
          class="size-12"
        />
        <Heading
          :title="project.name"
          :description="getProjectYear(project)"
          variant="small"
        />
      </RouterLink>
    </div>
  </div>
</template>
