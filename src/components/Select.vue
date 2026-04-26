<template>
  <select
    class="mg-select"
    :class="[`mg-select-${size}`, { 'mg-select-error': error }]"
    :value="modelValue"
    :disabled="disabled"
    v-bind="$attrs"
    @change="handleChange"
  >
    <option v-if="placeholder" value="" disabled hidden>
      {{ placeholder }}
    </option>
    <option
      v-for="item in options"
      :key="item.value"
      :value="item.value"
      :disabled="item.disabled"
    >
      {{ item.label }}
    </option>
  </select>
</template>

<script setup lang="ts">
type Size = "sm" | "md" | "lg"

export interface SelectOption {
  label: string
  value: string | number
  disabled?: boolean
}

interface Props {
  modelValue?: string | number
  options?: SelectOption[]
  placeholder?: string
  size?: Size
  disabled?: boolean
  error?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  options: () => [],
  placeholder: "",
  size: "md",
  disabled: false,
  error: false,
})

const emit = defineEmits<{
  "update:modelValue": [value: string | number]
  change: [event: Event]
}>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit("update:modelValue", target.value)
  emit("change", event)
}
</script>
