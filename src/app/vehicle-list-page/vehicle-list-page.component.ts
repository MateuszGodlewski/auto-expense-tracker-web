import {Component} from '@angular/core';
import {NgIf} from "@angular/common";
import {VehiclesListComponent} from "../vehicles-list/vehicles-list.component";
import {Vehicle} from "../vehicles-list/vehicle";

type ListFetchingError = { status: number, message: string };
type IdleState = { state: 'idle' }
type LoadingState = { state: 'loading' };
type SuccessState = { state: 'success', results: Vehicle[] };
type ErrorState = { state: 'error', error: ListFetchingError };
type ComponentListState = IdleState | LoadingState | SuccessState | ErrorState;

@Component({
  selector: 'app-vehicle-list-page',
  standalone: true,
  imports: [
    NgIf,
    VehiclesListComponent
  ],
  templateUrl: './vehicle-list-page.component.html',
  styleUrl: './vehicle-list-page.component.scss'
})
export class VehicleListPageComponent {
  listState: ComponentListState = {state: 'idle'};

  error?: ListFetchingError;
  private readonly URL = 'http://localhost:3000';

  constructor() {
    this.listState.state = 'loading';

    fetch(`${this.URL}/vehicles`)
      .then<Vehicle[] | ListFetchingError>((response) => {
        if (response.ok) {
          return response.json()
        }
        return {status: response.status, message: response.statusText}
      })
      .then(response => {
          setTimeout(() => {
            if (Array.isArray(response)) {
              this.listState = {
                state: 'success', results: response
              }
            } else {
              this.listState = {
                state: 'error', error: response
              }
            }
          }, 1200)
        }
      )
  }
}
