import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCodigosComponent } from './registro-codigos.component';

describe('RegistroCodigosComponent', () => {
  let component: RegistroCodigosComponent;
  let fixture: ComponentFixture<RegistroCodigosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistroCodigosComponent]
    });
    fixture = TestBed.createComponent(RegistroCodigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
