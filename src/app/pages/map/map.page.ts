import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map!: mapboxgl.Map
  markers: mapboxgl.Marker[] = []

  constructor() { }

  ngOnInit() {
    this.initializeMap()
  }

  initializeMap() {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiaXRzaGF6bGFuIiwiYSI6ImNsMXZsZDVuejA3dWszY29ocWU3dGQ0bGYifQ.sOxTgUHtJzDLkSk4fKLocg'; // Ganti dengan akses token Anda

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [106.865036, -6.175110],
      zoom: 12
    });

    
    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('click', (event) => {
      this.addMarker(event.lngLat)
      this.updateCoordinate(event.lngLat)
    })
  }

  addMarker(lngLat: mapboxgl.LngLat){
    this.markers.forEach(marker => marker.remove())
    this.markers = []

    const marker = new mapboxgl.Marker()
      .setLngLat(lngLat)
      .setPopup(new mapboxgl.Popup().setHTML(`<h3>New Marker</h3><p>Latitude: ${lngLat.lat}, Longitude: ${lngLat.lng}</p>`))
      .addTo(this.map);

    this.markers.push(marker);
  }

  updateCoordinate(lngLat: mapboxgl.LngLat){
    const latitudeElem = document.getElementById('latitude') 
    const longitudeElem = document.getElementById('longitude') 

    if (latitudeElem && longitudeElem) {
      latitudeElem.textContent = lngLat.lat.toFixed(6)
      longitudeElem.textContent = lngLat.lng.toFixed(6)
    }
    console.log(`Latitude: ${lngLat.lat.toFixed(6)}, Longitude: ${lngLat.lng.toFixed(6)}`);
  }
}
