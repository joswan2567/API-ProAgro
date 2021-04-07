import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps-utils',
  templateUrl: './maps-utils.component.html',
  styleUrls: ['./maps-utils.component.css']
})
export class MapsUtilsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public async initMap(map) {
    let mapOptions = {
      zoom: 13,
      mapTypeId: 'hybrid',
      mapTypeControl: false,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_LEFT,
      },
      streetViewControl: false
    };
    map.setOptions(mapOptions)
  }

  public geraMarker(lat, lng, map) {
    var makerInicio = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: map,
    });
    return makerInicio;
  }

}
