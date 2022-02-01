import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCharactersComponent } from './liste-characters.component';

describe('ListeCharactersComponent', () => {
  let component: ListeCharactersComponent;
  let fixture: ComponentFixture<ListeCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
