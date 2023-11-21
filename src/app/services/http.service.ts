import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
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

  addBookData(sendFormData: BOOKS): Observable<BOOKS> {
    return this.http.post<BOOKS>(this.url, sendFormData);
  }

  updateBookData(id: number, changes: BOOKS): Observable<BOOKS> {
    return throwError('Backend update error')
    // return this.http.patch<BOOKS>(`${this.url}/${id}`, changes);
  }

  deleteBook(id: number): Observable<BOOKS> {
    return this.http.delete<BOOKS>(`${this.url}/${id}`);
  }
}
