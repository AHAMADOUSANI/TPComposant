import { Component,Input,OnInit } from '@angular/core';
@Component({
  selector: 'app-detail-composant',
  templateUrl: './detail-composant.component.html',
  styleUrls: ['./detail-composant.component.css']
})
export class DetailComposantComponent implements OnInit {
  @Input()  Nom: string ='';
  @Input() Prenom:string='';
  @Input() Age:number=0;
   constuctor( )
   {

    }

   ngOnInit() {
    
    
   
   }
}
