import { Component } from '@angular/core';

import { CountryService } from '../country.service';
import { filter } from 'minimatch';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: [ './filter.component.scss' ]
})
export class FilterComponent {
    public filters = [
        { name: 'Russia', checked: true },
        { name: 'Saudi Arabia', checked: true },
        { name: 'USA', checked: true },
        { name: 'Iraq', checked: true }
    ];

    constructor(private countryService: CountryService) {}

    filterChanged($event) {
        console.log($event);
        const name = $event.target.value;
        const checked = $event.target.checked;
        this.filters.find((filter) => filter.name === name).checked = checked;

        console.log(this.filters);
        this.countryService.filterItems(this.filters);
    }
}
