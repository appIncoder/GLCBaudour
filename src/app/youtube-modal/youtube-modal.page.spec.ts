import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeModalPage } from './youtube-modal.page';

describe('YoutubeModalPage', () => {
  let component: YoutubeModalPage;
  let fixture: ComponentFixture<YoutubeModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoutubeModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
