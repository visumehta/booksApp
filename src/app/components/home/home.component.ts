import { Component, OnInit, inject } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BookFacade } from 'src/app/store/book.facade';
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatMenuModule, MatIconModule, HttpClientModule, CommonModule, MatButtonModule]
})
export class HomeComponent implements OnInit {
  booksfacade = inject(BookFacade);
  

  ngOnInit(): void {
    this.booksfacade.getAllBooks()
  }
 
}
