import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGarantiasComponent } from './list-garantias.component';

describe('ListGarantiasComponent', () => {
  let component: ListGarantiasComponent;
  let fixture: ComponentFixture<ListGarantiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGarantiasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListGarantiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
