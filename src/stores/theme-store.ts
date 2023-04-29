import { defineStore } from 'pinia';
import { computed } from 'vue';
import type { ThemeDefinition } from 'vuetify';
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

  const standardColors = computed<Color[]>(() => {
    // filter out all colors that start with 'on' (case insensitive)
    return allColors.value
      .filter(color => {
        return !color.label.match(/^on/i) && !color.label.includes('-')
      });
  })

  const colors = computed<Color[]>(() => {
    // filter out background and surface colors
    const color = standardColors.value
      .filter(color => {
        return color.label !== 'background' && color.label !== 'surface'
      });

    return [ { label: 'baseline', value: '' }, ...color ];
  })
  
  function setColor(color: string, value: string): void {
    // get name of current theme
    const themeName = _getCurrentThemeName();
    // get theme object
    const theme = _getTheme(themeName);
    // set color
    theme.colors![color] = value;
    // override theme
    vTheme.themes.value[themeName] = theme as any; // can't assign to InternalThemeDefinition
    // force update
    vTheme.global.name.value = themeName;
  }

  function setDarkMode(dark: boolean): void {
    vTheme.global.name.value = dark ? 'dark' : 'light';
  }

  function _getCurrentThemeName(): string {
    return vTheme.global.name.value;
  }

  function _getTheme(name?: string): ThemeDefinition {
    return name ? vTheme.themes.value[name] : vTheme.global.current.value;
  }

  function randomTheme(): void {
    setColor('background', `#${_getRandomHex()}`);
    setColor('surface', `#${_getRandomHex()}`);
  }

  function _getRandomHex(): string {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  return {
    dark,
    colors,
    standardColors,
    allColors,
    setColor,
    setDarkMode,
    randomTheme
  }
});

export { useThemeStore };
