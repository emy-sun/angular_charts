import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Options } from 'highcharts';

import { CountryService } from '../country.service';
import { ChartModel } from '../chart.model';

@Component({
    selector: 'app-linear-chart',
    templateUrl: './linear-chart.component.html',
    styleUrls: [ './linear-chart.component.scss' ]
})
export class LinearChartComponent implements OnInit {
    public chart: Chart;
    options: Options;
    dataOil: ChartModel[];

    constructor(private countryService: CountryService) {
        this.dataOil = this.countryService.getAll();
        this.countryService.dataChanged.subscribe((newData) => {
            this.dataOil = newData;
            this.init();
            console.log('Ура');
        });
    }

    ngOnInit() {
        this.init();
    }

    init() {
        this.options = {
            chart: {
                backgroundColor: 'transparent',
                spacingLeft: 0
            },
            title: {
                text: 'Volumes of oil production',
                margin: 15,
                style: {
                    font: "16px 'Open Sans', sans-serif"
                }
            },
            tooltip: {
                headerFormat: `<div style="margin-bottom: 5px">{point.key}</div>`,
                pointFormat: "<div style='color:{series.color}'>{series.name}: {point.y} Mt </div>",
                backgroundColor: null,
                borderWidth: 0,
                shadow: false,
                shared: true,
                crosshairs: true,
                useHTML: true
            },
            credits: {
                enabled: false
            },
            yAxis: {
                title: {
                    text: 'Mt',
                    x: 3
                }
            },
            legend: {
                enabled: false
            },
            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: 2013
                }
            },
            series: this.countryService.extendDataWithColors(this.dataOil, this.countryService.COLOR)
        };
        this.chart = new Chart(this.options);
        this.countryService.getOptions(this.options.series);
    }
}
