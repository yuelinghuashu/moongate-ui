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
      :key="getValue(item)"
      :value="getValue(item)"
      :disabled="item.disabled"
    >
      {{ getLabel(item) }}
    </option>
  </select>
</template>

<script setup lang="ts">
type Size = "sm" | "md" | "lg"

interface Props {
  modelValue?: string | number
  options?: any[]
  placeholder?: string
  size?: Size
  disabled?: boolean
  error?: boolean
  labelKey?: string
  valueKey?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  options: () => [],
  placeholder: "",
  size: "md",
  disabled: false,
  error: false,
  labelKey: "label",
  valueKey: "value",
})

const emit = defineEmits<{
  "update:modelValue": [value: string | number]
  change: [event: Event]
}>()

const getLabel = (item: any) => {
  if (typeof item === "string") return item
  return item[props.labelKey] ?? item
}

const getValue = (item: any) => {
  if (typeof item === "string") return item
  return item[props.valueKey] ?? item
}

const handleChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit("update:modelValue", target.value)
  emit("change", event)
}
</script>