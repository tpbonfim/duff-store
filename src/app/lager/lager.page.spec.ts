import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LagerPage } from './lager.page';

describe('LagerPage', () => {
  let component: LagerPage;
  let fixture: ComponentFixture<LagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LagerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
