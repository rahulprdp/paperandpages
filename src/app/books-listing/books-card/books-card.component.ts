import { Component, inject, Input } from '@angular/core';
import { Book } from '../../shared/interfaces/book.interface';
import { Store } from '@ngrx/store';
import { BooksActions } from '../../shared/stores/books.actions';

@Component({
  selector: 'app-books-card',
  templateUrl: './books-card.component.html',
})
export class BooksCardComponent {
  private readonly store = inject(Store);

  @Input() data?: Book;
  @Input() mode : 'collection' | 'list' = 'list'

  public addToCollection(){
    this.store.dispatch(BooksActions.addBook( { bookId : this.data?.id || ''}))
  }

  public removeFromCollection(){
    this.store.dispatch(BooksActions.removeBook({bookId : this.data?.id || ''}));
  }
}
