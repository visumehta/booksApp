import { ApplicationConfig, importProvidersFrom } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";
import { booksReducer } from "./store/book.reducer";
import { BookEffects } from "./store/books.effects";
import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { FormControl, FormGroup } from "@angular/forms";
import { CommonService } from "./services/common.service";
import { provideStoreDevtools } from "@ngrx/store-devtools";


export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(), 
    provideStore({'books': booksReducer}), 
    provideEffects([BookEffects]),
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([])
    ),
    importProvidersFrom(
      MatDialogModule,
      FormGroup,
      FormControl,
      CommonService
    ),
    provideStoreDevtools({
      maxAge: 55,
      logOnly: false, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ],
}