<script setup lang="ts">
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import type { ProjectType } from "@/data/Projects";
import LazyAvatar from "./LazyAvatar.vue";
import { computed } from "vue";
import { Icon } from "@iconify/vue";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Globe, Image } from "lucide-vue-next";

interface ProcessedImage {
  href: string;
  src: string;
  alt: string;
}

const props = defineProps<{
  project: ProjectType;
}>();

const projectFolder = computed((): string => props.project.name.toLowerCase());

const getProjectFileSrc = computed(() => (file: string = "thumbnail.png"): string => {
  return new URL(`../assets/projects/${projectFolder.value}/${file}`, import.meta.url).href;
});

const processedImages = computed((): ProcessedImage[] =>
  props.project.images.map((img: string) => {
    const url = new URL(`../assets/projects/${projectFolder.value}/${img}`, import.meta.url).href;

    return <ProcessedImage>{
      href: url,
      src: url,
      alt: img,
    };
  }),
);
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <div class="flex flex-col gap-2.5 cursor-pointer relative">
        <LazyAvatar :src="getProjectFileSrc()" />
        <p class="absolute top-3 left-2.5 bg-popover px-3.5 py-2 rounded-full">{{ project.name }}</p>
        <div class="absolute top-3 right-2.5 bg-popover px-3.5 py-2 rounded-full flex">
          <p>{{ project.year.start }}</p>
          <p v-if="project.year.end">-{{ project.year.end }}</p>
        </div>
        <div class="absolute bottom-3 left-2.5 right-2.5 flex gap-2">
          <div class="flex gap-4 bg-popover px-3.5 py-2 rounded-full">
            <Icon
              :icon="icon"
              v-for="icon in Object.values(project.displayStack)"
              :key="icon"
              class="size-5 mt-0.5"
            />
          </div>
          <div
            class="bg-popover px-3.5 py-2 rounded-full flex items-center gap-2"
            v-if="project.links.website"
          >
            <Globe class="size-5" />
            <p>{{ $t("sections.projects.live") }}</p>
          </div>
          <div
            class="bg-popover px-3.5 py-2 rounded-full flex items-center gap-2"
            v-if="project.images.length > 0"
          >
            <Image class="size-5" />
            <p>{{ project.images.length }}</p>
          </div>
        </div>
      </div>
    </SheetTrigger>
    <SheetContent class="grid grid-rows-[auto_1fr_auto]">
      <SheetHeader>
        <SheetTitle>{{ project.name }}</SheetTitle>
        <SheetDescription class="leading-6">{{ $t(`sections.projects.descriptions.${project.name}`) }}</SheetDescription>
      </SheetHeader>
      <div class="grid grid-rows-[auto_1fr] gap-4">
        <div class="flex flex-wrap gap-4 px-4">
          <template
            v-for="[name, icon] in Object.entries(project.stack)"
            :key="icon"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <Icon
                    :icon="icon"
                    class="size-5"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{{ name }}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </template>
        </div>
        <ScrollArea v-if="processedImages.length > 0">
          <div class="grid grid-cols-3 gap-2 mx-4 max-h-[30vh]">
            <a
              v-for="(image, i) in processedImages"
              :key="i"
              :href="image.href"
              target="_blank"
              class="group overflow-hidden block border rounded-md"
            >
              <img
                v-lazy="image.src"
                :alt="image.alt"
                class="h-full w-full object-cover duration-150 group-hover:scale-110"
              />
            </a>
          </div>
        </ScrollArea>
      </div>
      <SheetFooter>
        <Button
          :variant="content.variant"
          v-for="[type, content] in Object.entries(project.links)"
          :key="type"
          as-child
        >
          <a
            :href="content.link"
            target="_blank"
            >{{ $t(`sections.projects.buttons.${type}`) }}</a
          >
        </Button>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</template>
