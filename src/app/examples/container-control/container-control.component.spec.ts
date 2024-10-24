import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerControlComponent } from './container-control.component';

describe('ContainerControlComponent', () => {
  let component: ContainerControlComponent;
  let fixture: ComponentFixture<ContainerControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
