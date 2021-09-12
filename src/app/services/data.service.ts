import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';
import {Data} from '../Data';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = "https://jsonplaceholder.typicode.com/albums"

  constructor(private http:HttpClient) { }

  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.apiUrl)
  }

  deleteData(data: Data): Observable<Data>{
    const url = `${this.apiUrl}/${data.id}`;
    return this.http.delete<Data>(url)
  }

  addData(data :Data): Observable<Data> {
    return this.http.post<Data>(this.apiUrl, data, httpOptions);
  }
}
