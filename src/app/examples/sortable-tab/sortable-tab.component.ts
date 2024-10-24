import { Component, ViewEncapsulation } from '@angular/core';
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-sortable-tab',
  standalone: true,
  imports: [CdkDrag, CdkDropList, MatTabsModule],
  templateUrl: './sortable-tab.component.html',
  styleUrl: './sortable-tab.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SortableTabComponent {
  protected tabs = ['One', 'Two', 'Three', 'Four', 'Five'];
  protected selectedTabIndex = 0;

  drop(event: CdkDragDrop<string[]>) {
    const prevActive = this.tabs[this.selectedTabIndex];
    moveItemInArray(this.tabs, event.previousIndex, event.currentIndex);
    this.selectedTabIndex = this.tabs.indexOf(prevActive);
  }

}
