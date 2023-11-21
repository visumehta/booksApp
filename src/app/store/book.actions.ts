import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { BOOKS } from "../interface/books";

export const booksActions = createActionGroup({
    source: 'Books Actions',
    events: {
        'getAllBooks': emptyProps(),
        'getbookSuccess': props<{books: BOOKS[]}>(),
        'getAllBooksFailure': props<{error: string}>(),
        'addBook': props<{book: BOOKS}>(),
        'addBookSuccess': props<{book:BOOKS}>(),
        'addBookFailure': props<{error: string}>(),
        'updateBook': props<{id: number, changes: BOOKS}>(),
        'updateBookSuccess': props<{id: number, changes: BOOKS}>(),
        'updateBookFailure': props<{error: string}>(),
        'deleteBook': props<{id: number}>(),
        'deleteBookSuccess': props<{id: number}>(),
        'deleteBookFailure': props<{error: string}>()
    }
})