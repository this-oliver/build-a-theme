import { setupPinia, setupVuetify } from '@/plugins'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(setupPinia())
app.use(setupVuetify())
app.use(router)
app.mount('#app')
