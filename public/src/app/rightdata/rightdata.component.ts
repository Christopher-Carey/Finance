import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { ApiService } from '../api.service'
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
    selector: 'app-rightdata',
    templateUrl: './rightdata.component.html',
    styleUrls: ['./rightdata.component.css']
})
export class RightdataComponent implements OnInit {
    PieChart = [];
    BarChart = [];
    allTrans;
    Balance = 1400;
    WithDraws= 0;
    Deposits= 0;

    constructor(
        private _apiService: ApiService,
        private _router: Router
    ) { }

    ngOnInit() {
        this.getTrans();
  
    }
    getBalance() {
        for (var i = 0; i < this.allTrans.length; i++) {
          if (this.allTrans[i].process == "Withdraw") {
            this.Balance -= this.allTrans[i].amount;
            this.WithDraws += this.allTrans[i].amount;
          } else if (this.allTrans[i].process == "Deposit") {
            this.Balance += this.allTrans[i].amount;
            this.Deposits += this.allTrans[i].amount;
          }
        }
      }
      getTrans() {
        let observable = this._apiService.getApis();
        observable.subscribe(results => {
          console.log("yay", results)
          this.allTrans = results['results']
          this._apiService.getApis()
          this.getBalance();
          this.getChart();
        })
      }
    getChart(){
              // Bar chart:
              this.BarChart = new Chart('barChart', {
                type: 'bar',
                data: {
                    labels: ["Deposits", "Withdraws", "Balance"],
                    datasets: [{
                        label: '# of Votes',
                        data: [this.Deposits, this.WithDraws, this.Balance],
                        backgroundColor: [
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(75, 192, 192, 1)',
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    title: {
                        text: "Over View",
                        display: true
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
    }

}
