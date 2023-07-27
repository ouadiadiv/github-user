import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {
   id : number |undefined| null;
   email : string ="" ;
   website : string="";
             constructor(private route : ActivatedRoute)
             {
              
             }
             ngOnInit()
             {
this.route.paramMap.subscribe(Response =>{
 this.email = Response.get('id')!
 this.id = +Response.get('userame')!
 })
this.route.queryParamMap.subscribe(Response =>
  {
    this.website = Response.get('site')!
    console.log('website')
  })
             }
}
