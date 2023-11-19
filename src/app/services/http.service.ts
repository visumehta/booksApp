import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BOOKS } from '../interface/books';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string = 'http://localhost:3000/booksData';
  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<BOOKS[]> {
    return this.http.get<BOOKS[]>(this.url);
  }
}
