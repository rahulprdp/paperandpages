import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBookCollection, selectBooks } from '../shared/stores/books.selectors';
import { BooksCardComponent } from './books-card/books-card.component';

@Component({
  selector: 'app-books-listing',
  templateUrl: './books-listing.component.html',
  imports : [BooksCardComponent]
})
export class BooksListingComponent implements OnInit{
  private readonly store = inject(Store);

  protected books = this.store.selectSignal(selectBooks);
  protected bookCollection = this.store.selectSignal(selectBookCollection);

    ngOnInit(): void {
    }
}
