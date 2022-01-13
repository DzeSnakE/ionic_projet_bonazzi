export class Game {
  id?: string;
  name: string;
  dev: string;
  plateformes: string;
  affiche: string;
  categ: string;
  description: string;
  date: string;
  note: string;

  constructor() {
    this.name = '';
    this.dev = '';
    this.plateformes = '';
    this.affiche = '';
    this.categ = '';
    this.description = '';
    this.date = '';
  }
}
