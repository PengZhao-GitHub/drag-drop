import { Component } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-restrict',
  standalone: true,
  imports: [CdkDrag],
  templateUrl: './restrict.component.html',
  styleUrl: './restrict.component.css'
})
export class RestrictComponent {

}
