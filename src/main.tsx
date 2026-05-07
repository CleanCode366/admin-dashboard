import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
// import App from './App';
import { ThemeProvider } from './shared/theme/ThemeProvider';
import router from './routes/index.tsx';
import './index.css';
import { enablePhonetic } from "@services/inputInterceptor.ts";

enablePhonetic();

// function getCSPNonce(): string | undefined {
//   const metaTag = document.querySelector('meta[property="csp-nonce"], meta[name="csp-nonce"]');
//   const nonce = metaTag?.getAttribute('content');
//   if (nonce && nonce !== '__CSP_NONCE__' && !nonce.startsWith('${')) return nonce;
//   const scriptWithNonce = document.querySelector('script[nonce]');
//   return scriptWithNonce?.getAttribute('nonce') || undefined;
// }

// const nonce = getCSPNonce();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);