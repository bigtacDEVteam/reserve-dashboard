import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EwalletTableComponent } from './ewallet-table.component';

describe('EwalletTableComponent', () => {
  let component: EwalletTableComponent;
  let fixture: ComponentFixture<EwalletTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EwalletTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EwalletTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
