import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../models/News';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  getAllNews() {
    return this.http.get<News[]>('http://localhost:8090/news');
  }


  constructor(private http: HttpClient) { }
}
