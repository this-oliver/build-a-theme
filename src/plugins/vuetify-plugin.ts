import '@mdi/font/css/materialdesignicons.css'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'
import 'vuetify/styles'

const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#00F55F',
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

const darkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#00F55F',
    secondary: '#FFC107',
    accent: '#FF4081',
    error: '#F44336',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FF9800',
    background: '#212121',
    surface: '#37474F',
    onPrimary: '#FFFFFF',
    onSecondary: '#212121',
    onAccent: '#FFFFFF',
    onError: '#FFFFFF',
    onInfo: '#FFFFFF',
    onSuccess: '#FFFFFF',
    onWarning: '#FFFFFF',
    onBackground: '#FFFFFF',
    onSurface: '#FFFFFF'
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
      defaultTheme: 'dark',
      themes: {
        light: lightTheme,
        dark: darkTheme
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