import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/models/Character';

@Component({
  selector: 'app-liste-characters',
  templateUrl: './liste-characters.component.html',
  styleUrls: ['./liste-characters.component.scss']
})
export class ListeCharactersComponent implements OnInit {
  
  @Input() public filter: boolean = true;
  @Input() public characters: Character[] = [];
  @Output() public deleteEvent: EventEmitter<number> = new EventEmitter();
  @Output() public modifyEvent: EventEmitter<Character> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Récupère l'id du personnage à supprimer et émet l'événement deleteEvent avec l'id
   * Le parent se chargera de la suppression via l'API
   * @param id Id du personnage à supprimer
   */
  public delete(id: number) : void {
    this.deleteEvent.emit(id);
  }

  /**
   * Toggle l'activité d'un personnage et émet l'événement modifyEvent avec les nouvelles infos du personnage
   * Le parent se chargera de modifier le personnage via l'API
   * @param character Le personnage
   */
  public toggleActivation(character: Character) : void {
    character.active = !character.active;
    this.modifyEvent.emit(character);
  }

  /**
   * Génère le nom du bouton pour activer/désactiver le personnage en fontion du filter
   * @returns Le nom du bouton pour activer/désactiver le personnage
   */
  public buttonName() : string {
    return (this.filter? "Désactiver" : "Activer")
  }
}
