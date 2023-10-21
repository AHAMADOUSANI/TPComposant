import { Component } from '@angular/core';

@Component({
  selector: 'app-cv-composant',
  templateUrl: './cv-composant.component.html',
  styleUrls: ['./cv-composant.component.css']
})
export class CVComposantComponent {
  nom:String ='Ahmed sani';
  age:number=20;
  adresse: String="sousse";
  getName(){
    return this.nom;
  }
  modifier( newName: string){
    this.nom=newName;
  }
}
