import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsFurnitureComponent } from './goods-furniture.component';

describe('GoodsFurnitureComponent', () => {
  let component: GoodsFurnitureComponent;
  let fixture: ComponentFixture<GoodsFurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodsFurnitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsFurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
