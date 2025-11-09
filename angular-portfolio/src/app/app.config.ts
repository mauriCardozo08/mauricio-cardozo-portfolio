import { ApplicationConfig, APP_INITIALIZER, inject, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { ContentService } from '../shared/services/content.service';
import { EmailConfigService } from '../shared/services/email-config.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        const cs = inject(ContentService);
        return () => cs.load();
      },
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        const emailCfg = inject(EmailConfigService);
        return () => emailCfg.load();
      },
      multi: true
    }
  ]
};
