import { Component } from '@angular/core';
import { Brand } from './pages/brand/shared/brand';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public brands: Brand[] | undefined;
  title = 'forkliftSelection-UI';

}
