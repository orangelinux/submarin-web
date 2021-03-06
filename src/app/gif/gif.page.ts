import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-gif',
  templateUrl: './gif.page.html',
  styleUrls: ['./gif.page.scss'],
})
export class GifPage implements OnInit {
  ary: any; 
  first: any;
  inpt: any;
  load: any;
  kdict: any;
  constructor(public mc: ModalController, public http: HttpClient) {
    this.kdict = require('./../../hidefile.json');
  }

  ngOnInit() {
  }
  close(){
    this.mc.dismiss();
  }
  go(url) {
    console.log(url);
    this.mc.dismiss(url);
  }
  get(val) {
    this.first= true;
    this.load = true;
    console.log(val);
    if (val) {
      this.http.get('https://api.giphy.com/v1/gifs/search?api_key='+this.kdict["GIPHY"]+'&limit=25&offset=0&rating=G&lang=en&q=' + val.target.value).subscribe(res => {
        console.log(res);
        this.load = false;
        this.ary = res["data"];
      });
    } else {
      this.http.get('https://api.giphy.com/v1/gifs/search?api_key='+this.kdict["GIPHY"]+'&limit=25&offset=0&rating=G&lang=en&q=' + this.inpt).subscribe(res => {
        console.log(res);
        this.load = false;
        this.ary = res["data"];
      });
    }
}
}
