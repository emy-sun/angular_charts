import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Options } from 'highcharts';

import { CountryService } from '../country.service';
import { ChartModel } from '../chart.model';

@Component({
    selector: 'app-bar-chart',
    templateUrl: './bar-chart.component.html'
})
export class BarChartComponent {
    chart: Chart;
    options: Options;
    dataOil: ChartModel[];

    constructor(private countryService: CountryService) {
        // this.dataOil = this.countryService.getAll();
        // this.dataOil = this.countryService.transformBar(this.dataOil);
        this.dataOil = this.countryService.transformBar(this.countryService.getAll());
        this.countryService.dataChanged.subscribe((newData) => {
            this.dataOil = this.countryService.transformBar(newData);
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
                type: 'bar',
                spacingLeft: 0,
                backgroundColor: 'transparent',
                style: {
                    fontFamily: "'Open Sans', sans-serif"
                }
            },
            title: {
                text: 'The total amount of oil produced (Million tons)',
                style: {
                    font: "16px 'Open Sans', sans-serif"
                }
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        useHTML: true,
                        className: 'barLabels',
                        enabled: true,
                        verticalAlign: 'top',
                        align: 'right',
                        formatter() {
                            return `${this.series.name}: ${this.y}`;
                        }
                    }
                }
            },
            credits: {
                enabled: false
            },
            xAxis: {
                categories: [ 'Country' ],
                title: {
                    text: null
                },
                labels: {
                    rotation: -90,
                    x: -7
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Volumes of oil (Mt)'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                enabled: false
            },
            series: this.countryService.extendDataWithColors(this.dataOil, this.countryService.COLOR)
        };

        this.chart = new Chart(this.options);
    }
}
