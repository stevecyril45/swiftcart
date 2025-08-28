import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FURNITUREFormComponent } from './furniture-form.component';

describe('FURNITUREFormComponent', () => {
  let component: FURNITUREFormComponent;
  let fixture: ComponentFixture<FURNITUREFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FURNITUREFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FURNITUREFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
