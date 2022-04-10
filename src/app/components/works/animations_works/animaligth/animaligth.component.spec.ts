import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaligthComponent } from './animaligth.component';

describe('AnimaligthComponent', () => {
  let component: AnimaligthComponent;
  let fixture: ComponentFixture<AnimaligthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimaligthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimaligthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
