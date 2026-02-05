<script setup lang="ts">
defineProps<{
  title: string
  description: string
  meta: string
}>()
</script>

<template>
  <article class="feature-card">
    <p class="feature-card__meta mono">{{ meta }}</p>
    <h3 class="feature-card__title">{{ title }}</h3>
    <p class="feature-card__description">{{ description }}</p>
  </article>
</template>
