# Select 下拉选择框

下拉选择框组件，用于从选项列表中选择一项。

## 基础用法

```vue
<script setup>
import { ref } from 'vue'
import { Select } from 'moongate-ui'

const category = ref('')
const categories = [
  { label: '技术文章', value: 'tech' },
  { label: '生活随笔', value: 'life' },
  { label: '工具推荐', value: 'tools' },
]
</script>

<template>
  <Select v-model="category" :options="categories" placeholder="请选择分类" />
</template>
```

## 自定义字段名

如果选项数据不是 `{ label, value }` 格式，可以通过 `label-key` 和 `value-key` 指定字段名。

```vue
<script setup>
import { ref } from 'vue'
import { Select } from 'moongate-ui'

const category = ref('')
const categories = [
  { name: '技术文章', id: 'tech' },
  { name: '生活随笔', id: 'life' },
  { name: '工具推荐', id: 'tools' },
]
</script>

<template>
  <Select
    v-model="category"
    :options="categories"
    label-key="name"
    value-key="id"
    placeholder="请选择分类"
  />
</template>
```

## 字符串数组

`options` 也支持简单的字符串数组，组件会自动处理。

```vue
<script setup>
import { ref } from 'vue'
import { Select } from 'moongate-ui'

const value = ref('')
const options = ['选项一', '选项二', '选项三']
</script>

<template>
  <Select v-model="value" :options="options" />
</template>
```

## 占位文本

设置 `placeholder` 属性，会显示一个不可选中的默认选项。

```vue
<script setup>
import { ref } from 'vue'
import { Select } from 'moongate-ui'

const value = ref('')
const options = [
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2' },
]
</script>

<template>
  <Select v-model="value" :options="options" placeholder="请选择" />
</template>
```

## 尺寸

```vue
<script setup>
import { ref } from 'vue'
import { Select } from 'moongate-ui'

const value = ref('option1')
const options = [
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2' },
]
</script>

<template>
  <div class="space-y-2">
    <Select v-model="value" size="sm" :options="options" placeholder="小号" />
    <Select v-model="value" size="md" :options="options" placeholder="中号" />
    <Select v-model="value" size="lg" :options="options" placeholder="大号" />
  </div>
</template>
```

## 禁用状态

```vue
<script setup>
import { ref } from 'vue'
import { Select } from 'moongate-ui'

const options = [
  { label: '选项一', value: 'option1' },
  { label: '选项二', value: 'option2' },
]
</script>

<template>
  <Select disabled :options="options" value="option1" />
</template>
```

## 错误状态

`error` 属性仅控制选择框边框颜色，不渲染错误消息。

```vue
<script setup>
import { ref } from 'vue'
import { Select } from 'moongate-ui'

const agree = ref('')
const options = [
  { label: '同意', value: 'yes' },
  { label: '不同意', value: 'no' },
]
</script>

<template>
  <div class="space-y-2">
    <Select v-model="agree" :error="!agree" :options="options" placeholder="请选择" />
    <span v-if="!agree" class="text-error text-sm">请选择一个选项</span>
  </div>
</template>
```

## 禁用选项

在选项中设置 `disabled: true` 可禁用特定选项。

```vue
<script setup>
import { ref } from 'vue'
import { Select } from 'moongate-ui'

const status = ref('active')
const options = [
  { label: '启用', value: 'active' },
  { label: '禁用', value: 'inactive', disabled: true },
  { label: '待审核', value: 'pending' },
]
</script>

<template>
  <Select v-model="status" :options="options" />
</template>
```

## API

### Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `modelValue` | `string \| number` | `''` | 选中的值（v-model） |
| `options` | `any[]` | `[]` | 选项列表，支持对象数组或字符串数组 |
| `labelKey` | `string` | `'label'` | 作为显示文本的字段名 |
| `valueKey` | `string` | `'value'` | 作为选项值的字段名 |
| `placeholder` | `string` | `''` | 占位文本（显示为不可选中的默认选项） |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 尺寸 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `error` | `boolean` | `false` | 是否显示错误状态 |

### Events

| 事件 | 参数 | 说明 |
|------|------|------|
| `update:modelValue` | `(value: string \| number)` | 值变化时触发 |
| `change` | `(event: Event)` | 原生 change 事件 |

## 注意事项

- Select 使用原生 `<select>` 元素，支持键盘导航
- 下拉箭头使用 SVG 背景图，颜色自动继承文字颜色
- `placeholder` 选项会设置为 `disabled` 和 `hidden`，不可被选中
- `error` 属性仅控制边框颜色，不渲染错误消息
- 聚焦时显示主题色边框和聚焦环
