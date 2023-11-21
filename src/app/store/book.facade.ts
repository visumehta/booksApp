import { Injectable, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { booksActions } from './book.actions';
import { selectBookState, selectBooks } from './book.selector';
import { BOOKS } from '../interface/books';

@Injectable({
  providedIn: 'root',
})
export class BookFacade {
  store = inject(Store);
  booksList$ = this.store.select(selectBooks);

  getAllBooks() {
    this.store.dispatch(booksActions.getAllBooks());
  }

  addBook(book: BOOKS) {
    this.store.dispatch(booksActions.addBook({ book }));
  }

  updateBook(id: number, changes: BOOKS) {
    this.store.dispatch(booksActions.updateBook({ id, changes }));
  }

  deleteBook(id: number) {
    this.store.dispatch(booksActions.deleteBook({ id }));
  }
}
