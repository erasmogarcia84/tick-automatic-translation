import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVersionsComponent } from './info-versions.component';

describe('InfoVersionsComponent', () => {
  let component: InfoVersionsComponent;
  let fixture: ComponentFixture<InfoVersionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoVersionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
