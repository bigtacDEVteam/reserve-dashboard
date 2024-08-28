import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDataModalComponent } from './live-data-modal.component';

describe('LiveDataModalComponent', () => {
  let component: LiveDataModalComponent;
  let fixture: ComponentFixture<LiveDataModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LiveDataModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiveDataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
