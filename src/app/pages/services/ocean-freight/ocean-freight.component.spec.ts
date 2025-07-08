import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OceanFreightComponent } from './ocean-freight.component';

describe('OceanFreightComponent', () => {
  let component: OceanFreightComponent;
  let fixture: ComponentFixture<OceanFreightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OceanFreightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OceanFreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
