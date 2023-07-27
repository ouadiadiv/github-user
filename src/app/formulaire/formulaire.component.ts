import { Component } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent {
  log(x : any)
  {
    console.log(x);
  }
  listes =[{nom:"sms", id:1},{nom:"sm1", id:2},{nom:"smphones", id:3}];
  log1(y : any)
  {
    console.log(y);
  }
  log2(f : any)
  {
    console.log(f.contact.value);
  }

}
