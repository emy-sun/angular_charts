import { Component, AfterViewInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
    selector: 'app-legend',
    template: '<div #legend></div>',
    styleUrls: [ './legend.component.scss' ]
})
export class LegendComponent implements AfterViewInit {
    // tslint:disable-next-line: variable-name
    @ViewChild('legend', { static: true })
    // tslint:disable-next-line: variable-name
    _legend: ElementRef;
    public options: any;

    // tslint:disable-next-line: variable-name
    constructor(private _renderer: Renderer2, private countryService: CountryService) {}

    ngAfterViewInit() {
        const legendTitle = this._renderer.createElement('div');
        const title = this._renderer.createText('Oil production in the leading countries for 2013-2017');

        this._renderer.appendChild(legendTitle, title);
        this._renderer.appendChild(this._legend.nativeElement, legendTitle);
        // tslint:disable-next-line: no-unused-expression
        let optionsSeries = this.countryService.optionsSeries;
        console.log(optionsSeries);
    }
}

// const chart = Highcharts.charts[0];
//   let chartSeries = chart.series;

//   chartSeries.forEach(function(serie) {
//     legend.append('<div class="item"><div class="symbol" style="background-color:' + serie.color + '"></div><div class="serieName" id="">' + serie.name + '</div></div>');
//   });
// console.log(chartSeries);
