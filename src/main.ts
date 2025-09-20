import { bootstrapApplication } from '@angular/platform-browser';
import { InputNumberNumeralsDemo } from './app/input-number-numerals-demo';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

  export const appConfig: ApplicationConfig = {
      providers: [
      provideHttpClient(withFetch()),
      provideAnimationsAsync(),
      providePrimeNG({
          theme: { preset: Aura, options: { darkModeSelector: '.p-dark' } },
      }),
    ],
  };

    bootstrapApplication(InputNumberNumeralsDemo, appConfig).catch((err) =>
    console.error(err)
);