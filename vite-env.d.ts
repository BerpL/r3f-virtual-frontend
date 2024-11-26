/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_OPENAI_API_KEY: string;
    VITE_LOCAL_RELAY_SERVER_URL: string;
    // Agrega aquí otras variables de entorno que estés usando
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  