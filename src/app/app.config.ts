import { ApplicationConfig } from '@angular/core';
import { withInMemoryScrolling, provideRouter } from '@angular/router';
import { routes } from './app-routing.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      }),
    ),
  ],
};
