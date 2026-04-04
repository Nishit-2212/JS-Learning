import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAndSetInputFieldComponent } from './get-and-set-input-field.component';

describe('GetAndSetInputFieldComponent', () => {
  let component: GetAndSetInputFieldComponent;
  let fixture: ComponentFixture<GetAndSetInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAndSetInputFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAndSetInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
