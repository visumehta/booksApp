import { Injectable, inject } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { HttpService } from "../services/http.service";
import { booksActions } from "./book.actions";

@Injectable()
export class BookEffects {
  action$ = inject(Actions);
  _httpService = inject(HttpService);

  loadBooks$ = createEffect(() => 
    this.action$.pipe(
        ofType(booksActions.getAllBooks),
        mergeMap(() => 
            this._httpService.getAllBooks().pipe(
                map((books) => booksActions.getbookSuccess({books})),
                catchError((error) => of(booksActions.getAllBooksFailure({error})))
            )
        )
    )
  )

  addBook$ = createEffect(() => 
    this.action$.pipe(
      ofType(booksActions.addBook),
      mergeMap((action) => 
        this._httpService.addBookData(action.book).pipe(
          map((book) => booksActions.addBookSuccess({book})),
          catchError((error) => of(booksActions.addBookFailure({error})))
        )
      )
    )
  )

  updateBook$ = createEffect(() => 
    this.action$.pipe(
      ofType(booksActions.updateBook),
      mergeMap((action) => 
        this._httpService.updateBookData(action.id, action.changes).pipe(
          map((changes) => booksActions.updateBookSuccess({id : action.id,changes})),
          catchError((error) => of(booksActions.updateBookFailure({error})))
        )
      )
    )
  )

  deleteBook$ = createEffect(() => 
    this.action$.pipe(
      ofType(booksActions.deleteBook),
      mergeMap((action) => 
        this._httpService.deleteBook(action.id).pipe(
          map(() => booksActions.deleteBookSuccess({id : action.id})),
          catchError((error) => of(booksActions.deleteBookFailure({error})))
        )   
      )
    )
  )
}
