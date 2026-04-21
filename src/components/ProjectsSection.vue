<script setup lang="ts">
import { getProjects, type ProjectType } from "@/data/Projects";
import Project from "@/components/Project.vue";

const projects: ProjectType[] = getProjects();
</script>

<template>
  <div>
    <p class="section-header">{{ $t("sections.projects.header") }}</p>
    <Project
      :project
      v-for="(project, i) in projects"
      :key="i"
    />
  </div>
</template>
