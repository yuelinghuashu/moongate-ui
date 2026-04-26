// src/index.ts
import type { App, Plugin } from 'vue'

// 导入组件
import Button from './components/Button.vue'
import Card from './components/Card.vue'
import Badge from './components/Badge.vue'
import Divider from './components/Divider.vue'
import Input from './components/Input.vue'
import Textarea from './components/Textarea.vue'
import Checkbox from './components/Checkbox.vue'
import Radio from './components/Radio.vue'
import Switch from './components/Switch.vue'
import Select from './components/Select.vue'
import Pagination from './components/Pagination.vue'
import Modal from './components/Modal.vue'
import Toast from './components/Toast.vue'
import Tabs from './components/Tabs.vue'
import Skeleton from './components/Skeleton.vue'
import Tooltip from './components/Tooltip.vue'

// 导入组合式函数
import { useToast } from './composables/useToast'

// 导入样式
import './styles/index.css'

// 组件列表
const components = [
  Button,
  Card,
  Badge,
  Divider,
  Input,
  Textarea,
  Checkbox,
  Radio,
  Switch,
  Select,
  Pagination,
  Modal,
  Toast,
  Tabs,
  Skeleton,
  Tooltip,
]

// 安装方法（命名导出）
export const install: Plugin = (app: App) => {
  components.forEach(component => {
    const name = component.name || component.__name
    if (name) {
      app.component(name, component)
    }
  })
}

// 导出所有组件（命名导出）
export {
  Button,
  Card,
  Badge,
  Divider,
  Input,
  Textarea,
  Checkbox,
  Radio,
  Switch,
  Select,
  Pagination,
  Modal,
  Toast,
  Tabs,
  Skeleton,
  Tooltip,
  useToast,
}