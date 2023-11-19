import { EntityState, createEntityAdapter } from "@ngrx/entity";
import { BOOKS } from "../interface/books";

export interface BookState extends EntityState<BOOKS>{};

export const adapter = createEntityAdapter<BOOKS>();

export const initialState: BookState = adapter.getInitialState()