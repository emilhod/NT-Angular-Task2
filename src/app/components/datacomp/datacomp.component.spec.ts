import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacompComponent } from './datacomp.component';

describe('DatacompComponent', () => {
  let component: DatacompComponent;
  let fixture: ComponentFixture<DatacompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatacompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
