import { Article } from './../models/Article';
import { HttpClient } from '@angular/common/http';
import { News } from './../models/News';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NewsService } from './news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:any = [];
  article: Article[] = [];
  formValue!: FormGroup;
  articles: Article = new Article([], '', '','','','','','');



  news1:any = JSON.stringify(this.news);



  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {

    console.log(this.news1);
    this.getNews();

  }
  getNews(){
    this.httpClient.get<any>('http://localhost:8090/news',{responseType:'json' as 'json'}).subscribe(
      response =>{
        console.log(response);
        this.news1 = JSON.stringify(response);
      }
    );

    console.log("in news component")
  }


}
