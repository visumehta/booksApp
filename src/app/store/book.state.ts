import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { BOOKS } from "../interface/books";

export interface BookState extends EntityState<BOOKS>{
    error :string | undefined
};

export const adapter = createEntityAdapter<BOOKS>();

export const initialState: BookState = adapter.getInitialState({
    error : undefined
})