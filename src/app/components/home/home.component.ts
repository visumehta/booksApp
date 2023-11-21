import { Component, OnInit, inject } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BookFacade } from 'src/app/store/book.facade';
import { MatButtonModule } from "@angular/material/button";
import { CommonService } from 'src/app/services/common.service';
import { AddBookComponent } from '../add-book/add-book.component';
import { BOOKS } from 'src/app/interface/books';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    // Modules
    MatMenuModule, MatIconModule, HttpClientModule, CommonModule, MatButtonModule,

    // component
    AddBookComponent
  
  ]
})
export class HomeComponent implements OnInit {
  booksfacade = inject(BookFacade);
  _commonService = inject(CommonService);
  

  ngOnInit(): void {
    this.booksfacade.getAllBooks()
  }

  openModal(item?: BOOKS) {
    this._commonService.openAddEditModal(AddBookComponent, item);
  }

  deleteBook(id?: any) {
    this._commonService.deleteDialog(id);
  }
 
}
