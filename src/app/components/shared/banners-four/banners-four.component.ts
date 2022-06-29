import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banners-four',
  templateUrl: './banners-four.component.html',
  styleUrls: ['./banners-four.component.sass']
})
export class BannersFourComponent implements OnInit {

  @Input('banners') banners: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  public getBanner(index){
    return this.banners[index];
  }

  public getBgImage(index){
    let bgImage = {
      'background-image': index != null ? "url(" + this.banners[index].image + ")" : "url(https://via.placeholder.com/600x400/ff0000/fff/)"
    };
    return bgImage;
  }

}
