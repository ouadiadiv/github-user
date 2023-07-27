
import { HttpClient } from '@angular/common/http';
import { Component, ɵɵi18nPostprocess } from '@angular/core';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts : any;
  resultat :any ;
  post ={
    id : 0,
    title: "",
    body : ""

  }
  status=true;
 
  constructor(private http : HttpClient){
    this.posts=[];


    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(resultat => {
      this.posts = resultat;
    })
  }
  ajouter()
  {
    
    this.http.post('https://jsonplaceholder.typicode.com/posts',this.post).subscribe( resultat1 => {

      this.posts.push(this.post)

    })
  }
  edit(gg : any)
  {
     this.post=gg;
     this.status=false;
  }
    
  
  update(){

      this.http.put('https://jsonplaceholder.typicode.com/posts'+this.post.id,this.post).subscribe( resultat1 => {
       })
        this.post ={
              id : 0,
               title: "",
               body : ""
        }
  
   this.status=true;
  }
  delete(post:any){
    this.http.delete('https://jsonplaceholder.typicode.com/posts'+post.id).subscribe( resultat1 => {
      let index=this.posts.indexOf(post);
      this.posts.splice(index,1);
    })

  }
  
   




}
