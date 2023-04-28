const BASE_URL = import.meta.env.VITE_SERVER_URL;

interface FetchError {
  status: number;
  statusText: string;
  content: any;
}

export function useFetch() {
  function handleError(error: any){
    const errObj: FetchError = {
      status: error.status,
      statusText: error.statusText,
      content: undefined
    };

    if (error.status >= 400 && error.status < 500) {
      errObj.content = error.json();
    } else {
      errObj.content = error;
    }

    return errObj;
  };
  
  /**
 * wrapper for fetch API with base url and default headers
 */
  async function request(url: string, options?: RequestInit) {
  
    const config: RequestInit = {
      ...options,
      method: options?.method || 'GET' // default method is GET
    }

    try {
      const res = await fetch(`${BASE_URL}${url}`, { ...config });

      if (!res.ok) {
        throw res;
      }

      return res.json();
    } catch (error) {
      throw handleError(error);
    }
  }

  return { request };
}
