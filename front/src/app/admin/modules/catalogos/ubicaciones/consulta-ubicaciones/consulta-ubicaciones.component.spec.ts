import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaUbicacionesComponent } from './consulta-ubicaciones.component';

describe('ConsultaUbicacionesComponent', () => {
  let component: ConsultaUbicacionesComponent;
  let fixture: ComponentFixture<ConsultaUbicacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaUbicacionesComponent]
    });
    fixture = TestBed.createComponent(ConsultaUbicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
