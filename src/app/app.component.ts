import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 post={
  star:true
  }
  

 favoriEstChanger(arg : any)
  {
  console.log('vous avez changer votre favorie', arg);
  }
  fonctiontrack(index : any ,course  : any){
         return course ? course.id : undefined ;
  }
  courses : any; 
  show(){
    this.courses=[
      {id : 1 ,titre :"mama"},
      {id : 2 ,titre :"baba"}
    ];
  }
 
  dwitch='kk'; titre= "je mapeele"
  
  ajouter(){
     this.courses.push({id :3 ,titre : "amamamamama"})
  }
  deletecourses(course: any){
    let index = this.courses.indexOf(course);
    this.courses.splice(index , 1);
  }
  updateCourses(course: any){
   course.titre= "helo word" ;
  }
}

