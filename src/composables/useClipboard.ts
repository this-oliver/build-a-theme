import { useNotification } from './useNotification';

export function useClipboard() {
  const { notify } = useNotification();


  function copyToClipboard(value: string, message?: string){
    message = message || 'Copied to clipboard';

    navigator.clipboard.writeText(value);
    notify('Theme Builder', message);
  }

  return { copyToClipboard };
}