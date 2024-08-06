import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit, AfterViewInit, ViewWillEnter {
  map!: mapboxgl.Map;
  markers: mapboxgl.Marker[] = [];
  currentLocation: mapboxgl.LngLatLike = [106.865036, -6.175110];

  constructor() {}

  async ngOnInit() {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiaXRzaGF6bGFuIiwiYSI6ImNsMXZsZDVuejA3dWszY29ocWU3dGQ0bGYifQ.sOxTgUHtJzDLkSk4fKLocg';
  }

  ionViewWillEnter() {
    this.requestCurrentLocation();
  }

  ngAfterViewInit() {
    this.initializeMap();
    this.updateCurrentLocation();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.map) {
      this.map.resize();
    }
  }

  async requestCurrentLocation() {
    try {
      const permission = await Geolocation.requestPermissions();
      if (permission.location === 'granted') {
        console.log('Location permission granted');
        this.updateCurrentLocation();
        return true;
      } else {
        console.log('Location permission denied');
        return false;
      }
    } catch (error) {
      console.error('Error requesting location permissions', error);
      return false;
    }
  }

  initializeMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.currentLocation,
      zoom: 12
    });

    this.map.addControl(new mapboxgl.NavigationControl());

    this.map.on('click', (event) => {
      this.addMarker(event.lngLat);
      this.updateCoordinate(event.lngLat);
    });
  }

  async updateCurrentLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      if (position && position.coords) {
        this.currentLocation = [position.coords.longitude, position.coords.latitude];

        this.map.setCenter(this.currentLocation);
        this.addMarker(this.currentLocation);
        this.updateCoordinate(this.currentLocation);
      } else {
        console.error('Position or position.coords is undefined');
      }
    } catch (error) {
      console.error('Error getting location', error);
    }
  }

  addMarker(lngLat: mapboxgl.LngLatLike) {
    this.markers.forEach(marker => marker.remove());
    this.markers = [];

    const marker = new mapboxgl.Marker()
      .setLngLat(lngLat)
      .setPopup(new mapboxgl.Popup().setHTML(`<h3>Current Location</h3><p>Latitude: ${(lngLat as mapboxgl.LngLat).lat}, Longitude: ${(lngLat as mapboxgl.LngLat).lng}</p>`))
      .addTo(this.map);

    this.markers.push(marker);
  }

  updateCoordinate(lngLat: mapboxgl.LngLatLike) {
    const latitudeElem = document.getElementById('latitude');
    const longitudeElem = document.getElementById('longitude');

    if (lngLat && latitudeElem && longitudeElem) {
      const lat = (lngLat as mapboxgl.LngLat).lat;
      const lng = (lngLat as mapboxgl.LngLat).lng;

      if (lat !== undefined && lng !== undefined) {
        latitudeElem.textContent = lat.toFixed(6);
        longitudeElem.textContent = lng.toFixed(6);
        console.log(`Latitude: ${lat.toFixed(6)}, Longitude: ${lng.toFixed(6)}`);
      } else {
        console.error('Latitude or Longitude is undefined');
      }
    } else {
      console.error('lngLat, latitudeElem, or longitudeElem is undefined');
    }
  }
}
