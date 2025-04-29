import { createApp } from 'vue'
import App from './App.vue'

// ✅ 引入 Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus) // 註冊 Element Plus

app.mount('#app')
