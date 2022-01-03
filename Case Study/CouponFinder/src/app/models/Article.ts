import { Source } from './Source';
export class Article{
  constructor
  (public source: Source[],
    public author: String,
    public title: String,
    public discription: String,
    public url:String,
    public urlToImage:String,
    public publishedAt:String,
    public content: String,

    ){

    }




}
