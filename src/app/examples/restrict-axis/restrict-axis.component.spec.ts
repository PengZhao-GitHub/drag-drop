import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictAxisComponent } from './restrict-axis.component';

describe('RestrictAxisComponent', () => {
  let component: RestrictAxisComponent;
  let fixture: ComponentFixture<RestrictAxisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestrictAxisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestrictAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
