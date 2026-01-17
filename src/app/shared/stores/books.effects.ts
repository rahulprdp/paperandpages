import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { GoogleBooksService } from '../services/books.service';
import { BooksApiActions } from './books.actions';

@Injectable()
export class BooksEffects {
  private actions$ = inject(Actions);
  private books = inject(GoogleBooksService);

  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROOT_EFFECTS_INIT),
      exhaustMap(() =>
        this.books.getBooks().pipe(
          map((movies) => BooksApiActions.retrievedBookList({ books: movies })),
          catchError(() => EMPTY),
        ),
      ),
    );
  });
}
