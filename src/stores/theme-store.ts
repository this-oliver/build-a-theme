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

const mainColorSet = [ 'primary', 'secondary', 'info', 'success', 'warning', 'error' ];
const brandColorSet = [ ...mainColorSet, 'background', 'surface' ]
const applicationColorSet = [ ...brandColorSet, 'on-background', 'on-surface' ];

const useThemeStore = defineStore( 'theme', () => {
  const vTheme = useTheme();

  const dark = computed<boolean>(() => vTheme.global.name.value === 'dark')

  const colors = computed<Color[]>(() => {
    const colors = vTheme.global.current.value.colors;
    
    return Object
      .keys(colors)
      .map(key => {
        return {
          label: key,
          value: colors[key] || ''
        }
      })
  })

  const brandColors = computed<Color[]>(() => {
    return colors.value
      .filter(color => {
        return brandColorSet.includes(color.label);
      });
  })

  const mainColors = computed<Color[]>(() => {
    const mainColors = colors.value
      .filter(color => {
        return mainColorSet.includes(color.label);
      });

    return [ { label: 'baseline', value: '' }, ...mainColors ];
  })

  const applicationColors = computed<Color[]>(() => {
    return colors.value
      .filter(color => {
        return applicationColorSet.includes(color.label);
      });
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
    mainColors,
    brandColors,
    applicationColors,
    setColor,
    setDarkMode,
    randomTheme
  }
});

export { useThemeStore };
