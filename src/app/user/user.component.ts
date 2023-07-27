import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../interface/user';
import { ErrorApp } from '../common/error';
import { ErrorNotFound } from '../common/Error-Not-Found';


@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

  constructor(private userService :UserService)
  {}
  listeUsers : any ;
  status:boolean=true;
  
 
   user ={
    id: 0,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    
}

 
  onGetUsers() : void{
    this.listeUsers=[];
    this.userService.getUsers().subscribe(
      (responce)=> this.listeUsers=responce,
      (error : any)=> alert('error inexpected')
    );
  }
  onGetUser() : void{
    this.userService.getUser().subscribe(
      (responce)=> console.log(responce),
      (error : any)=> alert('error inexpected'),
      ()=>console.log('data sans retour')

    );
    }
    addGetUSer() : void{
      this.userService.addUser(this.user).subscribe(
        (responce)=> {this.user.id= responce.id,
                    this.listeUsers.unshift(this.user),
                    this.user ={
                      id: 0,
                      name: "",
                      username: "",
                      email: "",
                      phone: "",
                      website: "",
                      
                    

                  }
                }
                  );
                  
                  
               
                  

   
      }
      edit(gg :any)
      {
        this.user=gg;
     this.status=false;
      }
      updateGetUSer() : void{
        this.userService.updateUser(this.user).subscribe(
          (responce)=> {}
         
    
        );
        this.user ={
          id: 0,
          name: "",
          username: "",
          email: "",
          phone: "",
          website: "",
    }

this.status=true;
        }
        deletegetUser(user1 :User) : void{
          this.userService.deleteUser(user1).subscribe(
            (responce)=> { 
              let index=this.listeUsers.indexOf(user1);
              this.listeUsers.splice(index,1);
            }
            ,(Error : ErrorApp)=>{
              if(Error instanceof ErrorNotFound)
              {
                alert('page not found !!!')
              }
              else{
                alert ('inxepextd error')
              }

            }
            
            
      
          );
          }
     
      
  ngOnInit(): void {
    this.onGetUser();
    this.onGetUsers();
  
  }


}
