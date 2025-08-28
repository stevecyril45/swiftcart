import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PROVISIONFormComponent } from './provision-form.component';

describe('PROVISIONFormComponent', () => {
  let component: PROVISIONFormComponent;
  let fixture: ComponentFixture<PROVISIONFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PROVISIONFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PROVISIONFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
