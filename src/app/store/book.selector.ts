import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BookState, adapter } from "./book.state";

export const selectBookState = createFeatureSelector<BookState>('books');

export const selectBooks = createSelector(
    selectBookState,
    adapter.getSelectors().selectAll
)