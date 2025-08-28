import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionAndSupplyComponent } from './provision-and-supply.component';

describe('ProvisionAndSupplyComponent', () => {
  let component: ProvisionAndSupplyComponent;
  let fixture: ComponentFixture<ProvisionAndSupplyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvisionAndSupplyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionAndSupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
