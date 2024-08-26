import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpxTableComponent } from './fpx-table.component';

describe('FpxTableComponent', () => {
  let component: FpxTableComponent;
  let fixture: ComponentFixture<FpxTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FpxTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FpxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
