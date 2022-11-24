import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationGamesComponent } from './information-games.component';

describe('InformationGamesComponent', () => {
  let component: InformationGamesComponent;
  let fixture: ComponentFixture<InformationGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
