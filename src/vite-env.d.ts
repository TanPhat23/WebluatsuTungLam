/// <reference types="vite/client" />
declare namespace NodeJS {
    interface ProcessEnv {
        VITE_EMAILJS_PUBLIC_KEY: string;
        VITE_EMAILJS_SERVICE_ID: string;
        VITE_EMAILJS_TEMPLATE_ID: string;
    }
  }