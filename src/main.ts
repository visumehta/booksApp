import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';

// import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { appConfig } from './app/app.config';


// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

bootstrapApplication(AppComponent, appConfig).catch((err) => console.log(err));


