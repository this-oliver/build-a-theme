import { createApp } from 'vue'
import { setupPinia, setupVuetify } from '@/plugins'

import App from './App.vue'
import router from './router'

import './assets/styles/main.css'

const app = createApp(App)

app.use(setupPinia())
app.use(setupVuetify())
app.use(router)
app.mount('#app')
