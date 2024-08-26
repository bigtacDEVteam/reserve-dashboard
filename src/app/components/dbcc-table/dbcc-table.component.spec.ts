import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbccTableComponent } from './dbcc-table.component';

describe('DbccTableComponent', () => {
  let component: DbccTableComponent;
  let fixture: ComponentFixture<DbccTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DbccTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DbccTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
