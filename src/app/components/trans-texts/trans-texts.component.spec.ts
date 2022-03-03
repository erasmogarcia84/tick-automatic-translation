import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransTextsComponent } from './trans-texts.component';

describe('TransTextsComponent', () => {
  let component: TransTextsComponent;
  let fixture: ComponentFixture<TransTextsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransTextsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
