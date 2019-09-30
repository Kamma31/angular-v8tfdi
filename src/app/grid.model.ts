export class Grid {
  longueur: number;
  largeur: number;
  vitesse: number;
  state: Array<number[]>;

  public constructor(longueur: number, largeur: number) {
    this.longueur = longueur;
    this.largeur = largeur;
    this.vitesse = 150;
    this.state = [];
    for (let i = 0; i < this.longueur; i++) {
      this.state[i] = [].fill(0);
    }
  }
}
