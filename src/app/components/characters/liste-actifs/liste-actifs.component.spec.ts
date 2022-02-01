import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeActifsComponent } from './liste-actifs.component';

describe('ListeActifsComponent', () => {
  let component: ListeActifsComponent;
  let fixture: ComponentFixture<ListeActifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeActifsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeActifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
