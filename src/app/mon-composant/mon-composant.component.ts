import { Component } from '@angular/core';

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css']
})
export class MonComposantComponent {
  couleur: string = ''; // Variable pour stocker la couleur

  // Méthode pour réinitialiser la couleur
  resetCouleur() {
    this.couleur = ''; // Réinitialisez la couleur à une chaîne vide
  }
}
  