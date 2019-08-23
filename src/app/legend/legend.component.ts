import { Component } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
    selector: 'app-legend',
    templateUrl: './legend.component.html',
    styleUrls: [ './legend.component.scss' ]
})
export class LegendComponent {
    dataOil: any;
    COLOR: string[];
    withColors: any;
    constructor(private countryService: CountryService) {
        this.dataOil = this.countryService.dataOil;
        this.COLOR = this.countryService.COLOR;
        this.withColors = this.countryService.withColors(this.dataOil, this.COLOR);
        console.log(this.withColors);
    }
}
