import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableTabComponent } from './sortable-tab.component';

describe('SortableTabComponent', () => {
  let component: SortableTabComponent;
  let fixture: ComponentFixture<SortableTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortableTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortableTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
