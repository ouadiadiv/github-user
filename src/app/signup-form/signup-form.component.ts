import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/Forms';
import { laValidation} from './personel.Validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  

  form = new FormGroup({
    userNme : new FormControl("",[
      Validators.required,
      Validators.minLength(3),
      laValidation.cannotUseEspace
      
      
    ]
      ),
    password : new FormControl("",Validators.required)
  })
  ngOnInit(){

  }
   get userName(){
    return this.form.get('userNme');
  }
}
