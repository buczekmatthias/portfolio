<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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

    <Accordion
      type="single"
      collapsible
      class="w-full mt-4"
    >
      <AccordionItem
        :value="`item-${i}`"
        v-for="(content, i) in $tm('sections.about.content')"
        :key="i"
      >
        <AccordionTrigger class="cursor-pointer">{{ content.q }}</AccordionTrigger>
        <AccordionContent>
          <p
            v-for="(answer, i) in content.a"
            :key="i"
            class="leading-7"
          >
            {{ answer }}
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
</template>
