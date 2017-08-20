import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNavbarBottomComponent } from './main-navbar-bottom.component';

describe('MainNavbarBottomComponent', () => {
  let component: MainNavbarBottomComponent;
  let fixture: ComponentFixture<MainNavbarBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainNavbarBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNavbarBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
