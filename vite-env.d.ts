/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_LOCAL_RELAY_SERVER_URL: string;
    VITE_PINECONE_API_KEY: string;
    // Agrega aquí otras variables de entorno que estés usando
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  