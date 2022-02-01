import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Character } from 'src/app/models/Character';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent implements OnInit {

  @Output() public ajouterEvent : EventEmitter<Character> = new EventEmitter();
  public formulaire: FormGroup;

  constructor() {
    this.formulaire = new FormGroup({
      name: new FormControl("", Validators.required),
      title: new FormControl("", Validators.required)
    })
   }

  ngOnInit(): void {
  }

  /**
   * Ajoute un personnage. Recupère les infos du formulaire, vérifier s'ils ne sont pas vide
   * et envoie un événement ajouterEvent avec les infos du personnage à créer.
   * Un personnage est créé toujours avec le statut inactif.
   * La création effective est faite par le component parent via l'API.
   */
  public ajouterCharacter(): void {
    let controlName: AbstractControl = this.formulaire.controls["name"];
    let controlTitle: AbstractControl = this.formulaire.controls["title"];
    if (controlName.value && controlTitle.valid) {
        let character: Character = {
          name: controlName.value,
          title: controlTitle.value,
          id: 0,
          key: controlName.value.replace(' ', ''),
          active: false
        }
        this.ajouterEvent.emit(character);
    }
    this.formulaire.reset();
  }
}
