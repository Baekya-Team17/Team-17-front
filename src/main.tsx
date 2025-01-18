// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ResetCss from './ResetCss';
import React from "react";
import AppRouter from './Router.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ResetCss />
    <AppRouter />
  </React.StrictMode>
);