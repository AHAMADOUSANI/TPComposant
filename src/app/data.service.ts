import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private donnees = {
    Nom: '',
    Prenom: '',
    Age: 0
  };
  getDonnees() {
    return this.donnees;
  }

  setDonnees(nom: string, prenom: string, age: number) {
    this.donnees.Nom = nom;
    this.donnees.Prenom = prenom;
    this.donnees.Age = age;
  }

  constructor() { }
}
