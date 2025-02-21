import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownSidenavComponent } from './dropdown-sidenav.component';

describe('DropdownSidenavComponent', () => {
  let component: DropdownSidenavComponent;
  let fixture: ComponentFixture<DropdownSidenavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownSidenavComponent]
    });
    fixture = TestBed.createComponent(DropdownSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
