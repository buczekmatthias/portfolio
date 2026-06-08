<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Heading from "@/components/Heading.vue";
import { getSocialInfo } from "@/data/Social";
import TextDivider from "@/components/TextDivider.vue";
</script>

<template>
  <div class="grid">
    <Heading
      :title="$t('sections.about.header')"
      class="justify-self-center"
    />

    <Accordion
      type="single"
      collapsible
    >
      <AccordionItem
        :value="`item-${i}`"
        v-for="(content, i) in $tm('sections.about.content')"
        :key="i"
      >
        <AccordionTrigger class="cursor-pointer">{{ content.q }}</AccordionTrigger>
        <AccordionContent class="grid gap-4">
          <p
            v-for="(answer, j) in content.a"
            :key="j"
            class="leading-7"
          >
            {{ answer }}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
