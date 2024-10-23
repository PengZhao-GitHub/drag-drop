import { Component } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-restrict-axis',
  standalone: true,
  imports: [CdkDrag],
  templateUrl: './restrict-axis.component.html',
  styleUrl: './restrict-axis.component.css'
})
export class RestrictAxisComponent {

}
