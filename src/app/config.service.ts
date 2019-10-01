import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  static LARGEUR = 25;
  static LONGUEUR = 25;
  static VITESSE = 150;

  longueur: number;
  largeur: number;
  vitesse: number;

  private onReset = new BehaviorSubject<any>(this);
  onReset$ = this.onReset.asObservable();

  private onUpdate = new BehaviorSubject<any>(this);
  onUpdate$ = this.onReset.asObservable();

  constructor() {
    this.reset();
  }

  reset() {
    this.longueur = ConfigService.LONGUEUR;
    this.largeur = ConfigService.LARGEUR;
    this.vitesse = ConfigService.VITESSE;
    this.onReset.next(this);
  }

  update() {
    this.onUpdate.next(this);
  }

  setLargeur(largeur: number) {
    this.largeur = largeur;
  }

  setLongueur(longueur: number) {
    this.longueur = longueur;
  }

  setVitesse(vitesse: number) {
    this.vitesse = Math.floor(vitesse);
  }
}
