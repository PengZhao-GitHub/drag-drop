import { Component } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-delay-drag',
  standalone: true,
  imports: [CdkDrag],
  templateUrl: './delay-drag.component.html',
  styleUrl: './delay-drag.component.css'
})
export class DelayDragComponent {

}
