import { ApplicationConfig } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";
import { booksReducer } from "./store/book.reducer";
import { BookEffects } from "./store/books.effects";
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from "@angular/common/http";


export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(), 
    provideStore({'books': booksReducer}), 
    provideEffects([BookEffects]),
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([])
    ),
  ],
}