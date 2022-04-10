import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationdarkComponent } from './animationdark.component';

describe('AnimationdarkComponent', () => {
  let component: AnimationdarkComponent;
  let fixture: ComponentFixture<AnimationdarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimationdarkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationdarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
