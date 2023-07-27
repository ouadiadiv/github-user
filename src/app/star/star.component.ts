import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit{
  @Input() trueee:boolean=false;
  @Output() change1=new EventEmitter();

  change(){
    this.trueee=!this.trueee
    this.change1.emit(this.trueee)
  }
      

      ngOnInit() {}

}
