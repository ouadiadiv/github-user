import { Component } from "@angular/core";

@Component({
    selector : 'courses',
    template : `
               <h1>{{title}}</h1>
               <button class="btn btn-primary"> hello </button>
               <div class="container">
                  <ul class="list-group">
                      <li class="list-group-item"> titre :{{courses.titre | uppercase}}</li>
                  </ul>
               </div>

              
    ` 
            
})
export class CoursesCoponent{

    title="bonjpour";
    courses={
        titre :"ouaida",
        prenom: "zahid",
        age: 18 
    }
}