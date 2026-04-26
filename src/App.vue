<template>
  <div class="demo">
    <h2>Tooltip 提示测试</h2>

    <!-- 基础用法 -->
    <div class="section">
      <h3>基础用法</h3>
      <div class="group">
        <Tooltip content="这是顶部提示">
          <Button label="顶部" />
        </Tooltip>
        <Tooltip content="这是底部提示" placement="bottom">
          <Button label="底部" />
        </Tooltip>
        <Tooltip content="这是左侧提示" placement="left">
          <Button label="左侧" />
        </Tooltip>
        <Tooltip content="这是右侧提示" placement="right">
          <Button label="右侧" />
        </Tooltip>
      </div>
    </div>

    <!-- 自定义延迟 -->
    <div class="section">
      <h3>自定义延迟（500ms）</h3>
      <Tooltip content="延迟 500ms 显示" :delay="500">
        <Button label="悬浮延迟" />
      </Tooltip>
    </div>

    <!-- 自定义内容（插槽） -->
    <div class="section">
      <h3>自定义内容（插槽）</h3>
      <Tooltip>
        <template #trigger>
          <Button label="自定义提示" />
        </template>
        <template #content>
          <div class="custom-tooltip">
            <span>✨ 这是自定义内容</span>
            <span class="text-sm text-dim">可以放多行</span>
          </div>
        </template>
      </Tooltip>
    </div>

    <!-- 自动调整位置 -->
    <div class="section">
      <h3>自动调整位置（边缘检测）</h3>
      <p class="text-dim text-sm">靠近视口边缘时自动翻转方向</p>
      <div class="edge-group">
        <Tooltip content="顶部提示，空间不足时自动翻转到底部" placement="top">
          <Button label="靠近顶部" style="margin-top: 10px" />
        </Tooltip>
        <Tooltip content="右侧提示，空间不足时自动翻转到左侧" placement="right">
          <Button label="靠近右侧" style="margin-left: auto" />
        </Tooltip>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tooltip from "./components/Tooltip.vue"
import Button from "./components/Button.vue"


</script>

<style scoped>
.demo {
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: system-ui, sans-serif;
}

.section {
  margin-bottom: 2rem;
  padding: 1rem;
  border: 1px solid var(--ui-border);
  border-radius: 4px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.75rem;
  color: var(--ui-text-dim);
}

.group {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

.edge-group {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 100px;
}

.custom-tooltip {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.text-sm {
  font-size: var(--ui-typography-size-small);
}

.text-dim {
  color: var(--ui-text-dim);
}
</style>
