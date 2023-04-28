import { ref, watch } from 'vue';
import { useTheme as useVuetifyTheme } from 'vuetify/lib/framework.mjs';

export function useTheme () {
  const vuetifyTheme = useVuetifyTheme();
  const dark = ref<boolean>(vuetifyTheme.global.name.value === 'dark');

  function toggleTheme() {
    dark.value = !dark.value;
  }

  function setDarkTheme(value: boolean) {
    dark.value = value;
  }

  watch(dark, (value) => {
    vuetifyTheme.global.name.value = value ? 'dark' : 'light';
  });

  return {
    dark,
    toggleTheme,
    setDarkTheme
  }
}