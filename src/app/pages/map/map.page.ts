import { Component, OnInit } from '@angular/core';
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map!: mapboxgl.Map
  constructor() { }

  ngOnInit() {
    this.initializeMap()
  }

  initializeMap() {
    (mapboxgl as any).accessToken = 'pk.eyJ1IjoiaXRzaGF6bGFuIiwiYSI6ImNsMXZsZDVuejA3dWszY29ocWU3dGQ0bGYifQ.sOxTgUHtJzDLkSk4fKLocg'; // Ganti dengan akses token Anda

    this.map = new mapboxgl.Map({
      container: 'map', // ID elemen HTML tempat peta akan ditampilkan
      style: 'mapbox://styles/mapbox/streets-v11', // Gaya peta
      center: [106.865036, -6.175110], // Koordinat pusat peta (longitude, latitude)
      zoom: 12 // Tingkat zoom awal
    });

    // Menambahkan kontrol navigasi (zoom dan rotasi)
    this.map.addControl(new mapboxgl.NavigationControl());

    // Menambahkan marker ke peta
    new mapboxgl.Marker()
      .setLngLat([106.865036, -6.175110])
      .setPopup(new mapboxgl.Popup().setHTML('<h3>Monas</h3><p>Monumen Nasional</p>')) // Menambahkan popup pada marker
      .addTo(this.map);
  }
}
