import { Component, Input } from "@angular/core";
import { Book } from "../../shared/interfaces/book.interface";

@Component({
    selector : 'app-books-card',
    templateUrl : './books-card.component.html'
})
export class BooksCardComponent{
    @Input() data ?: Book;
}