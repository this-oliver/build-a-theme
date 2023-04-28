import '@mdi/font/css/materialdesignicons.css'
import type { ThemeDefinition } from 'vuetify'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
import 'vuetify/styles'

const theme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#FFFFFF',
    secondary: '#FFC107',
    accent: '#FF4081',
    error: '#F44336',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FF9800',
    background: '#F5F5F5',
    surface: '#FFFFFF',
    onPrimary: '#FFFFFF',
    onSecondary: '#212121',
    onAccent: '#FFFFFF',
    onError: '#FFFFFF',
    onInfo: '#FFFFFF',
    onSuccess: '#FFFFFF',
    onWarning: '#212121',
    onBackground: '#212121',
    onSurface: '#212121'
  }
}

export function setupVuetify() {
  return createVuetify({
    components: {
      ...components,
      VSkeletonLoader
    },
    directives,
    theme: {
      defaultTheme: 'light',
      themes: {
        light: theme
      }
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi
      }
    }
  })
}