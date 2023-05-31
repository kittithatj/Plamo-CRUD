import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlamoInfoComponent } from './plamo-info.component';

describe('PlamoInfoComponent', () => {
  let component: PlamoInfoComponent;
  let fixture: ComponentFixture<PlamoInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlamoInfoComponent]
    });
    fixture = TestBed.createComponent(PlamoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
