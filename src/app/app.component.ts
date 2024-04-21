import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {VehicleListPageComponent} from "./vehicle-list-page/vehicle-list-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VehicleListPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'auto-expense-tracker';
}
