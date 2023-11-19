import { Action, createReducer, on } from "@ngrx/store";
import { booksActions } from "./book.actions";
import { BookState, adapter, initialState } from "./book.state";

const _booksReducer = createReducer(
    initialState,
    on(booksActions.getAllBooks, (state) => ({...state})),
    on (booksActions.getbookSuccess, (state, {books}) => {return adapter.setAll(books, state)}),
    on(booksActions.getAllBooksFailure, (state, {error}) => ({ ...state, error}))
)

export function booksReducer(state: BookState | undefined, action: Action) {
    return _booksReducer(state, action)
}