import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from 'src/app/models/Character';

@Component({
  selector: 'app-liste-actifs',
  templateUrl: './liste-actifs.component.html',
  styleUrls: ['./liste-actifs.component.scss']
})
export class ListeActifsComponent implements OnInit {

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
}
