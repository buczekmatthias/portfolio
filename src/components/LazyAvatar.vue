<script setup lang="ts">
import { cn } from "@/lib/utils";
import { ImageOff, LoaderCircle } from "lucide-vue-next";
import { reactive, ref, watch, type HTMLAttributes } from "vue";

const props = defineProps<{
  src: string;
  alt?: string;
  fallback?: string;
  fallbackTextSize?: string;
  containerClass?: HTMLAttributes["class"];
  imageClass?: HTMLAttributes["class"];
}>();

const imageLoaded = ref<boolean>(false);
const imageError = ref<boolean>(false);

const onLoaded = (listener: any) => {
  if (listener.src === props.src) {
    imageLoaded.value = true;
    imageError.value = false;
  }
};

const onError = (listener: any) => {
  if (listener.src === props.src) {
    imageLoaded.value = false;
    imageError.value = true;
  }
};

const onLoading = (listener: any) => {
  if (listener.src === props.src) {
    imageLoaded.value = false;
    imageError.value = false;
  }
};

const lazyOptions = reactive({
  src: props.src,
  lifecycle: {
    loading: onLoading,
    error: onError,
    loaded: onLoaded,
  },
});

watch(
  () => props.src,
  () => (lazyOptions.src = props.src),
);
</script>

<template>
  <div :class="cn('relative shrink-0 overflow-hidden rounded-lg h-60 sm:h-80', props.containerClass)">
    <img
      v-lazy="{ src: lazyOptions.src, lifecycle: lazyOptions.lifecycle }"
      :alt="alt"
      :class="cn('h-full w-full object-cover', props.imageClass)"
      v-if="!imageError"
      :key="`avatar-${alt}-${src}`"
    />
    <!-- Fallback -->
    <div
      v-if="!imageLoaded || imageError"
      class="bg-muted text-muted-foreground flex h-full w-full items-center justify-center"
    >
      <span
        v-if="fallback"
        :class="fallbackTextSize"
        >{{ fallback }}</span
      >
      <ImageOff
        class="size-1/3"
        v-else
      />
    </div>
    <!-- Loader -->
    <div
      v-if="!imageLoaded && !imageError"
      class="bg-muted absolute inset-0 flex items-center justify-center"
    >
      <LoaderCircle class="size-1/3 animate-spin" />
    </div>
  </div>
</template>
