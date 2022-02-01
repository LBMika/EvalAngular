import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeInactifsComponent } from './liste-inactifs.component';

describe('ListeInactifsComponent', () => {
  let component: ListeInactifsComponent;
  let fixture: ComponentFixture<ListeInactifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeInactifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeInactifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
