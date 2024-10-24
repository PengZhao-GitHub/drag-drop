import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableDragComponent } from './disable-drag.component';

describe('DisableDragComponent', () => {
  let component: DisableDragComponent;
  let fixture: ComponentFixture<DisableDragComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisableDragComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisableDragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
