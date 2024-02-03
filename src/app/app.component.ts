import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GoogleMap } from "@angular/google-maps"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GoogleMap],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 52,
      lng: 19
  };
  zoom = 6;
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
