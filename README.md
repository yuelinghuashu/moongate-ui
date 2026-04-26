## 属性透传

所有组件都支持通过 `v-bind="$attrs"` 透传原生属性到根元素：

- `id`、`name`、`data-*`、`aria-*`、`role` 等
- Input/Textarea 透传到原生输入元素
- Checkbox/Radio/Switch 透传到隐藏的 `<input>`（无障碍）
- Button 透传到 `<button>` 元素

示例：

```vue
<!-- 属性自动透传到 <input> -->
<Input id="email" name="email" type="email" autocomplete="off" />

<!-- 无障碍属性 -->
<Checkbox name="terms" aria-label="同意用户协议" />

<!-- 自定义数据属性 -->
<Card data-testid="article-card" hoverable>
  文章内容
</Card>
```

### 注意事项

- 透传属性不会覆盖组件 Props 中已声明的属性
- 若需覆盖组件内置行为，请使用对应的 Props（如 `disabled`、`size` 等）
