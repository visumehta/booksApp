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
}
