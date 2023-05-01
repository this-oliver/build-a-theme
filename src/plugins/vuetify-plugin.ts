import '@mdi/font/css/materialdesignicons.css'
import type { ThemeDefinition } from 'vuetify'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
import 'vuetify/styles'

const DefaultTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#50A6FF',
    secondary: '#E6E9FF',
    accent: '#FF4081',
    error: '#F44336',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    background: '#F5F5F5',
    surface: '#FFFFFF',
    'on-background': '#212121',
    'on-surface': '#212121'
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
        light: DefaultTheme,
        default: DefaultTheme // for reset purposes
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