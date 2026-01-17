import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path : '',
        loadComponent: () => import('./books-listing/books-listing.component').then(m => m.BooksListingComponent)
    }
];
