import { defineStore } from 'pinia';
import { computed } from 'vue';
import { useTheme } from 'vuetify';

//function forceUpdate(){
//  const vm = getCurrentInstance()
//  if(vm?.proxy){
//    vm.proxy?.$forceUpdate()
//  }
//}

export interface Color {
  label: string;
  value: string
}

const useThemeStore = defineStore( 'theme', () => {
  const vuetifyTheme = useTheme()
  
  const dark = computed<boolean>(() => vuetifyTheme.current.value.dark)

  const allColors = computed<Color[]>(() => {
    return Object
      .keys(vuetifyTheme.current.value.colors)
      .map(key => {
        return {
          label: key,
          value: vuetifyTheme.current.value.colors[key] || ''
        }
      })
  })

  const colors = computed<Color[]>(() => {
    return allColors.value.filter(color => {
      // filter out all colors that start with 'on' (case insensitive)
      return !color.label.match(/^on/i) && !color.label.includes('-')
    })
  })
  
  function setColor(color: string, value: string): void {
    // get name of current theme
    const themeName = vuetifyTheme.global.name.value;
    // get theme object
    const theme = vuetifyTheme.themes.value[themeName];
    // set color
    theme.colors[color] = value;
    // override theme
    vuetifyTheme.themes.value[themeName] = theme;
    // force update
    vuetifyTheme.global.name.value = themeName;
  }

  function setDarkMode(dark: boolean): void {
    vuetifyTheme.global.name.value = dark ? 'dark' : 'light';
  }

  return {
    dark,
    colors,
    allColors,
    setColor,
    setDarkMode
  }
});

export { useThemeStore };
