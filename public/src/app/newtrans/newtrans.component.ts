import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LeftdataComponent } from '../leftdata/leftdata.component';

@Component({
  selector: 'app-newtrans',
  templateUrl: './newtrans.component.html',
  styleUrls: ['./newtrans.component.css']
})
export class NewtransComponent implements OnInit {
  errors=[];
  NewTransaction;

  constructor(
    private _apiService: ApiService,
    private _router: Router,
    private leftdata: LeftdataComponent
  ) { }

  ngOnInit() {
    this.NewTransaction = {
      name: "",
      amount: "",
      created_at: "",
      process: ""
    }
  }

  createApiFromService() {
    this.errors=[]
    let observable = this._apiService.createApi(this.NewTransaction);
    observable.subscribe(results => {
      if(results['results']){
        console.log("ts re")
        this.NewTransaction = {
          name:'',
          type:'',
          desc: '',
          Skills: []
        }
        // this.leftdata.getTrans();
        // this._router.navigate(['/']);
      }else if(results['error']){
        console.log(results)
        console.log(results["error"])

        for(var key in results['error']){
          console.log(results['error'][key])
          console.log(results['error'][key]["message"])
          this.errors.push(results['error'][key]['message'])
        }
      }
    })
  }


}
