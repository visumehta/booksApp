import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [HomeComponent, MatDialogModule]
})
export class AppComponent {
  title = 'booksApp';
}
