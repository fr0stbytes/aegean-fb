import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavbarTopComponent } from './main-navbar-top.component';

describe('MainNavbarTopComponent', () => {
  let component: MainNavbarTopComponent;
  let fixture: ComponentFixture<MainNavbarTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavbarTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavbarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
