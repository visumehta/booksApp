import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { BOOKS } from "../interface/books";

export const booksActions = createActionGroup({
    source: 'Books Actions',
    events: {
        'getAllBooks': emptyProps(),
        'getbookSuccess': props<{books: BOOKS[]}>(),
        'getAllBooksFailure': props<{error: string}>()
    }
})