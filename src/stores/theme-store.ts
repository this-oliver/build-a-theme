import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { ThemeDefinition } from 'vuetify';
import { useTheme } from 'vuetify';

//function forceUpdate(){
//  const vm = getCurrentInstance()
//  if(vm?.proxy){
//    vm.proxy?.$forceUpdate()
//  }
//}

/**
 * ConfigMode
 * 
 * @description ConfigSet is used to determine which colors are displayed in the color picker.
 * 
 * @property {string} brand - Display brand colors. This includes primary, secondary, info, success, warning, error, surface and background.
 * @property {string} application - Display application colors. This includes brand colors and intricate colors such as on-background and on-surface.
 */
type ColorSet = 'brand' | 'application';

/**
 * Color
 * 
 * @description Color is used to represent a color in the theme.
 * 
 * @property {string} label - The name of the color.
 * @property {string} description - The description of the color.
 * @property {string} value - The value of the color in hex format.
 */
export interface Color {
  label: string;
  description: string;
  value: string;
}

const mainColorSet: Color[] = [ 
  {
    label: 'primary',
    description: 'Represents the main identity color used for emphasis and branding.',
    value: ''
  },
  {
    label: 'secondary',
    description: 'Complements the primary color and provides contrast for branding.',
    value: ''
  },
  {
    label: 'info',
    description: 'Used for displaying informational messages in visual design elements like buttons, cards and notifications.',
    value: ''
  },
  {
    label: 'success',
    description: 'Indicates successful actions or outcomes in visual design elements like buttons, cards and notifications.',
    value: ''
  },
  {
    label: 'warning',
    description: 'Highlights warnings or potential issues in visual design elements like buttons, cards and notifications.',
    value: ''
  },
  {
    label: 'error',
    description: 'Signals errors or problems in visual design elements like buttons, cards and notifications.',
    value: ''
  }
];

const brandColorSet: Color[] = [
  ...mainColorSet,
  {
    label: 'background',
    description: 'Sets the overall canvas color for the application.',
    value: ''
  },
  {
    label: 'surface',
    description: 'Defines the color for components placed over the background.',
    value: ''
  }
];

const applicationColorSet: Color[] = [
  ...brandColorSet,
  {
    label: 'on-background',
    description: 'Determines the text and icon color displayed on the background.',
    value: ''
  },
  {
    label: 'on-surface',
    description: 'Determines the text and icon color displayed on the surface.',
    value: ''
  }
];

const useThemeStore = defineStore( 'theme', () => {
  const vTheme = useTheme();

  const colorSet = ref<ColorSet>('brand');

  const dark = computed<boolean>(() => vTheme.global.name.value === 'dark')

  const colors = computed<Color[]>(() => {
    const colors = vTheme.global.current.value.colors;
    
    return Object
      .keys(colors)
      .map(key => {
        return {
          label: key,
          description: '',
          value: colors[key] || ''
        }
      })
  })

  const brandColors = computed<Color[]>(() => {
    return colors.value
      .filter(color => {
        return brandColorSet.find(colorSet => colorSet.label === color.label) !== undefined;
      })
      .map(color => {
        const brandColor = brandColorSet.find(colorSet => colorSet.label === color.label);
        return brandColor ? { ...color, description: brandColor.description } : color;
      });
  })

  const mainColors = computed<Color[]>(() => {
    const mainColors = colors.value
      .filter(color => {
        return mainColorSet.find(colorSet => colorSet.label === color.label) !== undefined;
      })
      .map(color => {
        const mainColor = mainColorSet.find(colorSet => colorSet.label === color.label);
        return mainColor ? { ...color, description: mainColor.description } : color;
      });

    return [ 
      { 
        label: 'baseline',
        value: '',
        description: 'Serves as the default color for elements when no specific color is assigned.'
      },
      ...mainColors
    ];
  })

  const applicationColors = computed<Color[]>(() => {
    return colors.value
      .filter(color => {
        return applicationColorSet.find(colorSet => colorSet.label === color.label) !== undefined;
      })
      .map(color => {
        const applicationColor = applicationColorSet.find(colorSet => colorSet.label === color.label);
        return applicationColor ? { ...color, description: applicationColor.description } : color;
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

  function getColor(label: string): Color | undefined {
    return colors.value.find(color => color.label === label);
  }

  function setDarkMode(dark: boolean): void {
    vTheme.global.name.value = dark ? 'dark' : 'light';
  }

  function toggleColorSet(): void {
    colorSet.value = colorSet.value === 'brand' ? 'application' : 'brand';
  }

  function generateRandomTheme(): void {
    setColor('background', `#${_getRandomHex()}`);
    setColor('surface', `#${_getRandomHex()}`);
  }

  function resetTheme(): void {
    // get theme 'default'
    const defaultTheme = _getTheme('default');

    // get current theme
    const currentTheme = _getTheme();
    const currentThemeName = _getCurrentThemeName();

    // reset colors
    currentTheme.dark = defaultTheme.dark;

    Object.keys(defaultTheme.colors!).forEach(key => {
      currentTheme.colors![key] = defaultTheme.colors![key];
    });

    // override theme
    vTheme.themes.value[currentThemeName] = currentTheme as any; // can't assign to InternalThemeDefinition

    // force update
    vTheme.global.name.value = currentThemeName;
  }

  function _getCurrentThemeName(): string {
    return vTheme.global.name.value;
  }

  function _getTheme(name?: string): ThemeDefinition {
    return name ? vTheme.themes.value[name] : vTheme.global.current.value;
  }

  function _getRandomHex(): string {
    return Math.floor(Math.random() * 16777215).toString(16);
  }

  return {
    colorSet,
    dark,
    colors,
    mainColors,
    brandColors,
    applicationColors,
    setColor,
    getColor,
    setDarkMode,
    toggleColorSet,
    generateRandomTheme,
    resetTheme
  }
});

export { useThemeStore };
