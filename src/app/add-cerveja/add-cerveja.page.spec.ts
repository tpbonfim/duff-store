import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCervejaPage } from './add-cerveja.page';

describe('AddCervejaPage', () => {
  let component: AddCervejaPage;
  let fixture: ComponentFixture<AddCervejaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCervejaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCervejaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
