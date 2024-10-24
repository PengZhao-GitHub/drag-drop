import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayDragComponent } from './delay-drag.component';

describe('DelayDragComponent', () => {
  let component: DelayDragComponent;
  let fixture: ComponentFixture<DelayDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelayDragComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelayDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
