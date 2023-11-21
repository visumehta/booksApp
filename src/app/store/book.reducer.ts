import { Action, createReducer, on } from "@ngrx/store";
import { booksActions } from "./book.actions";
import { BookState, adapter, initialState } from "./book.state";

export const booksReducer = createReducer<BookState>(
    initialState,
    // on(booksActions.getAllBooks, (state) => ({...state})),
    on (booksActions.getbookSuccess, (state, {books}) => {return adapter.setAll(books, state)}),
    on(booksActions.getAllBooksFailure, (state, {error}) => ({ ...state, error})),
    on(booksActions.addBookSuccess, (state, {book}) => { 
        return adapter.addOne(book, state)}),
    on(booksActions.addBookFailure, (state, {error}) => ({...state, error})),
    on(booksActions.updateBookSuccess, (state, {id, changes}) => { return adapter.updateOne({id, changes}, state)}),
    on(booksActions.updateBookFailure, (state, {error}) => ({...state, error})),
    on(booksActions.deleteBookSuccess, (state,{id}) => {return adapter.removeOne(id,{...state})}),
    on(booksActions.deleteBookFailure, (state, {error}) => ({...state, error}))
)
