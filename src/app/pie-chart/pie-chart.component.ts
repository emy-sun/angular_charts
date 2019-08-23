import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Options } from 'highcharts';

import { CountryService } from '../country.service';
import { ChartModel } from '../chart.model';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: [ './pie-chart.component.scss' ]
})
export class PieChartComponent {
    chart: Chart;
    options: Options | any;
    dataOil: ChartModel[];

    constructor(private countryService: CountryService) {
        this.dataOil = this.countryService.transformPie(this.countryService.getAll());
        this.countryService.dataChanged.subscribe((newData) => {
            this.dataOil = this.countryService.transformPie(newData);
            this.init();
            console.log('Ура');
        });
    }

    // tslint:disable-next-line: use-lifecycle-interface
    ngOnInit() {
        this.init();
    }

    init() {
        this.options = {
            chart: {
                type: 'pie',
                backgroundColor: 'transparent',
                style: {
                    fontFamily: "'Open Sans', sans-serif"
                }
            },
            title: {
                text: 'The total amount of oil produced (%)',
                margin: 5,
                style: {
                    font: "16px 'Open Sans', sans-serif"
                }
            },
            credits: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },

            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        useHTML: true,
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [
                {
                    name: 'Volumes of oil',
                    colorByPoint: true,
                    data: this.countryService.extendDataWithColors(this.dataOil, this.countryService.COLOR)
                }
            ]
        };
        this.chart = new Chart(this.options);
        console.log(this.options);
        console.log(this.chart);
    }
}
