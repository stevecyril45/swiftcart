import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadFreightComponent } from './road-freight.component';

describe('RoadFreightComponent', () => {
  let component: RoadFreightComponent;
  let fixture: ComponentFixture<RoadFreightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadFreightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadFreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
