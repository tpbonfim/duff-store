import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilsenPage } from './pilsen.page';

describe('PilsenPage', () => {
  let component: PilsenPage;
  let fixture: ComponentFixture<PilsenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilsenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilsenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
