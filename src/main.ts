import '@/assets/main.css'
import { createApp } from 'vue'
import { setupPinia } from './plugins/pinia-plugin'
import { setupVuetify } from './plugins/vuetify-plugin'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(setupPinia())
app.use(setupVuetify())
app.use(router)
app.mount('#app')
