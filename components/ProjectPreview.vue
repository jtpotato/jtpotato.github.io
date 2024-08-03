<template>
  <a :href="href" target="_blank">
    <div class="bg-neutral-100 p-4 rounded-xl border-neutral-200 border">
      <p class="font-semibold">
        {{ title }}
      </p>
      <p class="text-black/70">{{ description }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
// get a href prop
const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
