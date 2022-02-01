import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/Character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  @Input() public character: Character = {
    title: "",
    id: 0,
    key: "",
    name: "",
    active: true
  };

  constructor() { }

  ngOnInit(): void {
  }
}
