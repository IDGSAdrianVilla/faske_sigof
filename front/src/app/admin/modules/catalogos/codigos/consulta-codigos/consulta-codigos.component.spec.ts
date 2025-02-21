import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaCodigosComponent } from './consulta-codigos.component';

describe('ConsultaCodigosComponent', () => {
  let component: ConsultaCodigosComponent;
  let fixture: ComponentFixture<ConsultaCodigosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultaCodigosComponent]
    });
    fixture = TestBed.createComponent(ConsultaCodigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
