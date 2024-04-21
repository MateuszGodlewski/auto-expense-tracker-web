import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Vehicle} from "./vehicle";

@Component({
  selector: 'app-vehicles-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './vehicles-list.component.html',
  styleUrl: './vehicles-list.component.scss'
})
export class VehiclesListComponent {
  @Input({required: true}) vehicles: Vehicle[] = [];
}
