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
  const vTheme = useTheme()

  const dark = computed<boolean>(() => vTheme.global.name.value === 'dark')

  const allColors = computed<Color[]>(() => {
    return Object
      .keys(vTheme.current.value.colors)
      .map(key => {
        return {
          label: key,
          value: vTheme.current.value.colors[key] || ''
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
    const themeName = vTheme.global.name.value;
    // get theme object
    const theme = vTheme.themes.value[themeName];
    // set color
    theme.colors[color] = value;
    // override theme
    vTheme.themes.value[themeName] = theme;
    // force update
    vTheme.global.name.value = themeName;
  }

  function setDarkMode(dark: boolean): void {
    vTheme.global.name.value = dark ? 'dark' : 'light';
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
