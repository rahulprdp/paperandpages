import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';
import { Book } from '../interfaces/book.interface';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  private readonly http = inject(HttpClient);

  getBooks(): Observable<Array<Book>> {
    return this.http
      .get<{
        items: Book[];
      }>(
        'https://www.googleapis.com/books/v1/volumes?orderBy=relevance&q=oliver%20sacks'
      )
      .pipe(map((books) => books.items || []));
  }
}