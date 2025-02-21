import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaUnidadesMedidaComponent } from './consulta-unidades-medida.component';

describe('ConsultaUnidadesMedidaComponent', () => {
  let component: ConsultaUnidadesMedidaComponent;
  let fixture: ComponentFixture<ConsultaUnidadesMedidaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaUnidadesMedidaComponent]
    });
    fixture = TestBed.createComponent(ConsultaUnidadesMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
