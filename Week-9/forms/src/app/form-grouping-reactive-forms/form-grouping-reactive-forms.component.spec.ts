import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupingReactiveFormsComponent } from './form-grouping-reactive-forms.component';

describe('FormGroupingReactiveFormsComponent', () => {
  let component: FormGroupingReactiveFormsComponent;
  let fixture: ComponentFixture<FormGroupingReactiveFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGroupingReactiveFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGroupingReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
