import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlamoListComponent } from './plamo-list.component';

describe('PlamoListComponent', () => {
  let component: PlamoListComponent;
  let fixture: ComponentFixture<PlamoListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlamoListComponent]
    });
    fixture = TestBed.createComponent(PlamoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
