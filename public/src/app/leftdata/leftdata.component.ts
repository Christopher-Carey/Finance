import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiService } from '../api.service'
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-leftdata',
  templateUrl: './leftdata.component.html',
  styleUrls: ['./leftdata.component.css']
})
export class LeftdataComponent implements OnInit {
  NewTransaction;
  errors = []
  allTrans;
  Balance = 1400;

  constructor(
    private _apiService: ApiService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getTrans();
  }

  
  ngOnChanges()	{
    this.getTrans();
  }
  ngDoCheck(){

  }

  getBalance() {
    for (var i = 0; i < this.allTrans.length; i++) {
      if (this.allTrans[i].process == "Withdraw") {
        this.Balance -= this.allTrans[i].amount;
      }else{
        this.Balance += this.allTrans[i].amount;
      }
      // if (this.allTrans[i].process == "Deposit") {
      //   this.Balance += this.allTrans[i].amount;
      // }
    }
  }
  getTrans() {
    let observable = this._apiService.getApis();
    observable.subscribe(results => {
      console.log("yay", results)
      this.allTrans = results['results']
      // this._apiService.getApis()
      this.getBalance();
    })
  }
  formattedDate(date) {
    return date.format("DD/MM/YYYY")
}
}
