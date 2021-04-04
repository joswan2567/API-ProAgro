import { Component, OnInit, ViewChild, Inject } from '@angular/core';
// import { GoogleMapsAPIWrapper, KmlLayerManager } from '@agm/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  latlngCurrent: google.maps.LatLng;
  latlngOld: google.maps.LatLng;
}

@Component({
  selector: 'app-dialog-map',
  templateUrl: './dialog-map.component.html',
  styleUrls: ['./dialog-map.component.css']
})
export class DialogMapComponent implements OnInit {

  lat = 51.678418;
  lng = 7.809007;
  map: google.maps.Map;
  makerRegistroCurrent: google.maps.Marker;
  makerRegistroOld: google.maps.Marker;
  poly: google.maps.Polyline;
  teste: string;

  constructor(
    public dialogRef: MatDialogRef<DialogMapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(): void {
    // this.initMap()
  }

  takeMap(map) {
    this.map = map;
    this.initMap();
}

  public initMap() {
    let mapOptions = {
      zoom: 13,
      mapTypeId: 'hybrid',
      mapTypeControl: false,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: google.maps.ControlPosition.TOP_LEFT
      },
      streetViewControl: false
    };
    this.map.setOptions(mapOptions);
  }

}
