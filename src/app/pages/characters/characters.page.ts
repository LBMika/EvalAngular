import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/Character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss']
})
export class CharactersPage implements OnInit {
  private _characters: Character[] = [];

  constructor(private service : CharacterService) { }

  ngOnInit(): void {
    this.getAll();
  }

  public get characters(): Character[] {
    return this._characters;
  }

  /**
   * Récupère tous les personnages via l'API
   */
  private getAll() : void {
    this.service.getAll().subscribe({
      next: data => this._characters = data,
      error: err => console.error(err)
    });
  }

  /**
   * Ajoute un personnage en BD via l'API puis recharge la liste des personnages (appel à l'API)
   * @param character Le personnage à créer
   */
  public ajouterCharacter(character: Character) : void {
    this.service.create(character).subscribe({
      complete: () => this.getAll()
    });
  }

  /**
   * Supprime un personnage en BD via l'API puis recharge la liste des personnages (appel à l'API)
   * @param id L'id du personnage à supprimer
   */
  public supprimerCharacter(id: number) : void {
    this.service.delete(id).subscribe({
      complete: () => this.getAll()
    });
  }

  /**
   * Modifie un personnage en BD via l'API puis recharge la liste des personnages (appel à l'API)
   * @param character Le personnage à modifier
   */
  public modifierCharacter(character: Character) : void {
    this.service.modify(character).subscribe({
      complete: () => this.getAll()
    });
  }
}
