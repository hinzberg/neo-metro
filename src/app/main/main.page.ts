import { Component } from '@angular/core';
import { ButtonComponent } from '../../lib/components/button/button.component';
import { ButtonBarComponent } from '../../lib/components/buttonbar/buttonbar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ButtonComponent, ButtonBarComponent],
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.css']
})
export class MainPage {}
