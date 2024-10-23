import { Component } from '@angular/core';
import {CdkDrag, CdkDragHandle} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-handle',
  standalone: true,
  imports: [CdkDrag, CdkDragHandle],
  templateUrl: './handle.component.html',
  styleUrl: './handle.component.css'
})
export class HandleComponent {

}
