import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ApisList = [];
  Api;
  newApi;

  constructor(private _apiService: ApiService){}
  ngOnInit(){
  }
}