import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransFilesComponent } from './trans-files.component';

describe('TransFilesComponent', () => {
  let component: TransFilesComponent;
  let fixture: ComponentFixture<TransFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
