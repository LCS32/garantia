import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditGarantiaComponent } from './add-edit-garantia.component';

describe('AddEditGarantiaComponent', () => {
  let component: AddEditGarantiaComponent;
  let fixture: ComponentFixture<AddEditGarantiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditGarantiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditGarantiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
