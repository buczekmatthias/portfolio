<script setup lang="ts">
import { getProject } from "@/data/Projects";
import { ArrowLeft } from "lucide-vue-next";
import { useRoute } from "vue-router";
import { getProjectFileSrc, getProjectIconSrc, getProjectYear } from "@/utils/useProject";
import Heading from "@/components/Heading.vue";
import { Separator } from "@/components/ui/separator";
import { Button, type ButtonVariants } from "@/components/ui/button";
import { getGithubIconClass } from "@/utils/useIcons";
import { Icon } from "@iconify/vue";
import { capitalize } from "vue";
import { getStackContent } from "@/data/Stack";
import { useI18n } from "vue-i18n";

type LinkType = {
  [key: string]: {
    variant: ButtonVariants["variant"];
    icon: string;
  };
};

const route = useRoute();
const projectName = route.params.project!.toString();

const project = getProject(projectName);

const linkType: LinkType = {
  github: {
    variant: "outline",
    icon: getGithubIconClass(),
  },
};

const { tm } = useI18n();

const hasKeyFeatures = (name: string) => {
  const features = tm(`sections.projects.project.${name}.key_features`) as string[];
  return Array.isArray(features) && features.length > 0;
};
</script>

<template>
  <div class="grid gap-6 my-4 section">
    <RouterLink
      :to="{ name: 'home' }"
      class="justify-self-start"
    >
      <ArrowLeft class="size-7" />
    </RouterLink>

    <template v-if="project">
      <div class="flex gap-6 items-center">
        <img
          :src="getProjectIconSrc(project.name)"
          :alt="`${project.name} icon`"
          class="size-18"
        />
        <Heading
          :title="project.name"
          :description="getProjectYear(project)"
          class="mb-0!"
        />
      </div>

      <div
        class="grid lg:grid-cols-3 gap-4"
        style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))"
      >
        <Button
          v-for="(link, type) in project.links"
          :key="link"
          as-child
          :variant="linkType[type]!.variant"
        >
          <a
            :href="link"
            target="_blank"
          >
            <Icon
              :icon="linkType[type]!.icon"
              class="size-6"
            />
            {{ $t(`sections.projects.buttons.${type}`) }}
          </a>
        </Button>
      </div>

      <Separator />

      <div class="grid gap-4 mb-4">
        <Heading :title="$t('sections.projects.project.headers.description')" />
        <p class="leading-[165%]">{{ $t(`sections.projects.project.${project.name}.description`) }}</p>
      </div>

      <div
        class="grid gap-4 mb-4"
        v-if="hasKeyFeatures(project.name)"
      >
        <Heading :title="$t('sections.projects.project.headers.key_features')" />
        <ul class="list-disc list-inside">
          <li
            class="leading-[175%]"
            v-for="(content, i) in $tm(`sections.projects.project.${project.name}.key_features`)"
            :key="i"
          >
            {{ content }}
          </li>
        </ul>
      </div>

      <div class="grid gap-4 mb-4">
        <Heading title="Stack" />
        <div
          class="grid gap-4"
          style="grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))"
        >
          <div
            class="flex items-center gap-6 bg-secondary/5 rounded-md py-4 px-6"
            v-for="item in getStackContent(project.stack)"
            :key="item.name"
          >
            <Icon
              :icon="item.icon"
              class="size-7"
            />
            <Heading
              :title="item.name"
              :description="capitalize(item.type)"
              variant="small"
            />
          </div>
        </div>
      </div>

      <div
        class="grid gap-4"
        v-if="project.images.length > 0"
      >
        <Heading :title="$t('sections.projects.project.headers.gallery')" />
        <div class="flex flex-wrap gap-4">
          <a
            v-for="img in project.images"
            :key="img"
            :href="getProjectFileSrc(project.name, img)"
            target="_blank"
          >
            <img
              :src="getProjectFileSrc(project.name, img)"
              :alt="img"
              class="rounded-md size-28 object-cover"
            />
          </a>
        </div>
      </div>
    </template>

    <Heading
      title="No project found"
      description="Check project name and try again"
      v-else
    />
  </div>
</template>
