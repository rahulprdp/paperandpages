import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { booksReducer } from './shared/stores/books.reducer';
import { collectionReducer } from './shared/stores/collection.reducer';
import { BooksEffects } from './shared/stores/books.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({
       books: booksReducer,
      collection: collectionReducer,
    }),
    provideEffects(BooksEffects),
    provideHttpClient()
],
};
