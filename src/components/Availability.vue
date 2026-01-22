<script setup lang="ts">
import { BriefcaseBusiness, Rocket } from "lucide-vue-next";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ref } from "vue";

const available = ref<boolean>(true);
</script>

<template>
  <div class="max-sm:px-4">
    <Alert
      class="border-2"
      :class="available ? 'border-green-600' : ''"
    >
      <Rocket
        class="size-4"
        v-if="available"
      />
      <BriefcaseBusiness
        class="size-4"
        v-else
      />
      <AlertTitle>{{ $t(available ? "sections.availability.available" : "sections.availability.hired") }}</AlertTitle>
      <AlertDescription>{{ $t("sections.availability.reach") }} buczekmatthias@gmail.com</AlertDescription>
    </Alert>
  </div>
</template>
