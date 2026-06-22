import { Component, Input } from '@angular/core';

@Component({
  selector: 'neo-buttonbar',
  standalone: true,
  templateUrl: './buttonbar.component.html',
  styleUrls: ['./buttonbar.component.css']
})
export class ButtonBarComponent {
  @Input() width?: string;
}
