# Select 下拉选择框

下拉选择框组件，用于从选项列表中选择一项。

## 基础用法

```vue
<Select v-model="category" :options="categories" placeholder="请选择分类" />
```

## 占位文本

设置 `placeholder` 属性，会显示一个不可选中的默认选项。

```vue
<Select v-model="value" :options="options" placeholder="请选择" />
```

## 尺寸

```vue
<Select v-model="value" size="sm" :options="options" />
<Select v-model="value" size="md" :options="options" />
<Select v-model="value" size="lg" :options="options" />
```

## 禁用状态

```vue
<Select disabled :options="options" value="option1" />
```

## 错误状态

`error` 属性仅控制选择框边框颜色，不渲染错误消息。

```vue
<Select v-model="agree" :error="!agree" :options="agreeOptions" />
```

## 禁用选项

在选项中设置 `disabled: true` 可禁用特定选项。

```vue
<script setup>
const options = [
  { label: "启用", value: "active" },
  { label: "禁用", value: "inactive", disabled: true },
  { label: "待审核", value: "pending" },
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
| `options` | `SelectOption[]` | `[]` | 选项列表 |
| `placeholder` | `string` | `''` | 占位文本（显示为不可选中的默认选项） |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | 尺寸 |
| `disabled` | `boolean` | `false` | 是否禁用 |
| `error` | `boolean` | `false` | 是否显示错误状态 |

### SelectOption 类型

```typescript
interface SelectOption {
  label: string      // 显示文本
  value: string | number  // 选项值
  disabled?: boolean // 是否禁用该选项
}
```

### Events

| 事件 | 参数 | 说明 |
|------|------|------|
| `update:modelValue` | `(value: string \| number)` | 值变化时触发 |
| `change` | `(event: Event)` | 原生 change 事件 |

### 透传 Attributes

通过 `v-bind="$attrs"` 支持以下原生属性：

| 属性 | 说明 |
|------|------|
| `id` | 选择框 ID |
| `name` | 选择框名称 |
| `data-*` | 自定义数据属性 |
| `aria-*` | 无障碍属性 |

## 样式定制

可通过覆盖以下 CSS 变量定制样式：

```css
--ui-bg-muted           /* 背景色 */
--ui-border             /* 边框颜色 */
--ui-text               /* 文字颜色 */
--ui-primary            /* 聚焦时的边框色 */
--ui-error              /* 错误状态边框色 */
--ui-physics-focus-ring /* 聚焦环宽度 */
--ui-spacing-xs         /* 内边距 */
--ui-spacing-sm
--ui-spacing-md
--ui-spacing-lg
--ui-spacing-xl
--ui-typography-size-small
--ui-typography-size-body
```

## 注意事项

- Select 使用原生 `<select>` 元素，支持键盘导航
- 下拉箭头使用 SVG 背景图，颜色自动继承文字颜色
- `placeholder` 选项会设置为 `disabled` 和 `hidden`，不可被选中
- `error` 属性仅控制边框颜色，不渲染错误消息
- 聚焦时显示主题色边框和聚焦环