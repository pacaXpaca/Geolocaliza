import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  constructor(public navCtrl: NavController, private geolocation: Geolocation) {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        console.log(resp.coords.latitude);
        this.latitude = resp.coords.latitude;

        console.log(resp.coords.longitude);
        this.longitude = resp.coords.longitude;
      })
      .catch((error) => {
        console.log('Erro ao pegar a localização', error);
      });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {});
  }

  latitude: any = '';
  longitude: any = '';
}
