<template>
  <div v-bind="$attrs" class="mg-container" :class="`mg-container-${size}`">
    <slot />
  </div>
</template>

<script setup lang="ts">
type Size = "sm" | "md" | "lg" | "xl"

interface Props {
  size?: Size
}

withDefaults(defineProps<Props>(), {
  size: "lg",
})
</script>
