import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuroMaltePage } from './puro-malte.page';

describe('PuroMaltePage', () => {
  let component: PuroMaltePage;
  let fixture: ComponentFixture<PuroMaltePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuroMaltePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuroMaltePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
