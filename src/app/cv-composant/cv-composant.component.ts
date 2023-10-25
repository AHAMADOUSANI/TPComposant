import { Component } from '@angular/core';
@Component({
  selector: 'app-cv-composant',
  templateUrl: './cv-composant.component.html',
  styleUrls: ['./cv-composant.component.css']
})
export class CVComposantComponent {
  Nom:string ='';
  Prenom:string='';
  Age:number=0;
 // adresse: String="sousse";
 // getName(){
   // return this.Nom;
 // }
 // modifier( newName: string){
   // this.Nom=newName;
 // }
  envoyerDonnees(){
    
  }
  constructor(){

  }
}
