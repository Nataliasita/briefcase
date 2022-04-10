import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsCarruselComponent } from './items-carrusel.component';

describe('ItemsCarruselComponent', () => {
  let component: ItemsCarruselComponent;
  let fixture: ComponentFixture<ItemsCarruselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsCarruselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsCarruselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
