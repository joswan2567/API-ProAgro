import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  id: number;
  latCurrent: number;
  lngCurrent: number;
  latConflict: number;
  lngConflict: number;
  dist: number
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
  dist;

  constructor(
    public dialogRef: MatDialogRef<DialogMapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    // this.initMap()
  }

  takeMap(map) {
    this.map = map;
    this.initMap();
  }

  readRegistro(){
    window.open(`/add/${this.data.id}`);
  }

  public async initMap() {
    this.dist = this.data.dist;
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
    this.map.setOptions(mapOptions);
    this.makerRegistroOld = await this.geraMarker(this.data.latConflict, this.data.lngConflict);
    // this.makerRegistroOld = await this.geraMarker(51.678418, 7.456789);
    this.makerRegistroOld.setMap(this.map);
    // this.map.panTo(this.makerRegistroOld.getPosition());

    this.poly = await this.initLinha();
    this.poly.setMap(this.map);
    this.poly.getPath().push(this.makerRegistroOld.getPosition());

    this.makerRegistroCurrent = await this.geraMarker(this.data.latCurrent, this.data.lngCurrent);
    // this.makerRegistroCurrent = await this.geraMarker(52.456789, 9.478596);
    this.makerRegistroCurrent.setMap(this.map);

    this.poly.getPath().push(this.makerRegistroCurrent.getPosition());

    // this.map.panTo(this.makerRegistroCurrent.getPosition());

    this.map.panTo(this.retornaCentro(this.poly));

    this.centralizaLinha(this.poly);
  }

  public geraMarker(lat, lng) {
    var makerInicio = new google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: this.map,
    });
    return makerInicio;
  }

  public initLinha() {
    var poly = new google.maps.Polyline({
      strokeColor: '#4285F4',
      strokeWeight: 5,
      strokeOpacity: 1,
      editable: false,
    });
    return poly;
  }

  centralizaLinha(poly) {
    let bounds = new google.maps.LatLngBounds();
    for (let i = 0; i < poly.getPath().getLength(); i++)
      bounds.extend(poly.getPath().getAt(i));
    this.map.fitBounds(bounds);
  }

  public retornaCentro(poly) {
    let bounds = new google.maps.LatLngBounds();

    for (let i = 0; i < this.poly.getPath().getLength(); i++)
      bounds.extend(this.poly.getPath().getAt(i));

    return bounds.getCenter();
  }
}
