import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlamoComponent } from './add-plamo.component';

describe('AddPlamoComponent', () => {
  let component: AddPlamoComponent;
  let fixture: ComponentFixture<AddPlamoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPlamoComponent]
    });
    fixture = TestBed.createComponent(AddPlamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
