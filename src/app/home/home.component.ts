import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router : Router)
  {

  }
  ajouter()
  {
    this.router.navigate(['user',1,'Sincere@april.biz'],
    {
      queryParams :{page : 1 , site : 'hildegard.org'}
    }
    )
  }



}
