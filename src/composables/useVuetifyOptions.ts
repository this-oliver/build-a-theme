import { computed, ref } from 'vue';

export type Type = 'output' | 'input';
export type Variant = 'text' | 'flat' | 'elevated' | 'tonal' | 'outlined' | 'plain';
export type VariantTextInput = 'outlined' | 'plain' | 'underlined' | 'filled' | 'solo' | 'solo-inverted' | 'solo-filled';
export type Behavior = 'loading' | 'disable';

export const outputVanityOptions: Variant[] = [ 'flat', 'text', 'elevated', 'tonal', 'outlined', 'plain' ];
export const outputBehaviours: Behavior[] = [ 'loading', 'disable' ];

export const inputVanityOptions: VariantTextInput[] = [ 'outlined', 'plain', 'underlined', 'filled', 'solo', 'solo-inverted', 'solo-filled' ];
export const inputBehaviours: Behavior[] = [ 'loading', 'disable' ];

export interface Option {
  value: boolean;
  label: Variant | VariantTextInput | Behavior;
}

export function useVuetifyOptions(componentType: Type = 'output') {
  const vanityOptions: (Variant | VariantTextInput)[] = componentType === 'output' ? outputVanityOptions : inputVanityOptions;
  const behaviourOptions: Behavior[] = componentType === 'output' ? outputBehaviours : inputBehaviours;
  
  const optionsForm = ref<Record<string, Option>>(_setupOptions());

  const options = computed<Option[]>(() => {
    return Object.keys(optionsForm.value).map((key) => optionsForm.value[key]);
  });

  const variant = computed<Variant | VariantTextInput | undefined>(() => {
    let variant: Variant | undefined = undefined;

    Object.keys(optionsForm.value).forEach((key) => {
      if(optionsForm.value[key].value){
        variant = key as Variant;
      }
    });
  
    return variant;
  });

  const disabled = computed<boolean>(() => {
    return optionsForm.value.disable.value;
  });

  const loading = computed<boolean>(() => {
    return optionsForm.value.loading.value;
  });

  function toggleOption(option: Option){
    // if option is vanity, set all vanity options to false
    if(vanityOptions.includes(option.label as Variant | VariantTextInput)){
      vanityOptions.forEach((vanityOption) => {
        optionsForm.value[vanityOption].value = false;
      });
    }
  
    optionsForm.value[option.label].value = !optionsForm.value[option.label].value;
  }

  function _setupOptions(): Record<string, Option> {
    const defaultVanityValue: string = componentType === 'output' ? 'flat' : 'outlined';

    const form: Record<string, Option> = {};
    
    vanityOptions.forEach((option) => {
      form[option] = {
        label: option,
        value: option === defaultVanityValue ? true : false // set flat to true by default
      }
    });

    behaviourOptions.forEach((option) => {
      form[option] = {
        label: option,
        value: false
      }
    });

    return form;
  }

  return {
    options,
    variant,
    disabled,
    loading,
    toggleOption
  }
}