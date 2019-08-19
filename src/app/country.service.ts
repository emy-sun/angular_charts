import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

import { ChartModel } from './chart.model';
import { dataFromDB } from './chart.model';

@Injectable()
export class CountryService {
    COLOR = [ '#2D0035', '#D62828', '#F77F00', '#47D1ED' ];
    dataWithColors;
    newObj;

    private dataOil: ChartModel[] = dataFromDB;
    public dataChanged = new Subject<any>();
    public optionsSeries: any;

    public getOptions(optionsSeries: any) {
        this.optionsSeries = optionsSeries;
        console.log(optionsSeries);
    }

    public setOptions() {
        return this.optionsSeries;
    }

    // sumOilBar = dataFromDB.map((item) => {
    //     this.newObj = {};
    //     this.newObj.name = item.name;
    //     this.newObj.data = [ item.data.reduce((acc, value) => acc + value) ];
    //     return this.newObj;
    // });

    // private bar = this.sumOilBar;

    extendDataWithColors = (data, colors) => {
        this.dataWithColors = data.map((item, index) => {
            this.newObj = Object.assign(item, {
                color: colors[index]
            });
            return this.newObj;
        });
        return this.dataWithColors;
    };

    public getAll() {
        return this.dataOil.slice();
    }

    filterItems(filters) {
        this.dataOil = dataFromDB.filter((dataItem) => {
            const currentFilter = filters.find((filter) => filter.name === dataItem.name);
            return currentFilter.checked;
        });

        //console.log(this.dataOil);
        this.dataChanged.next(this.getAll());
    }

    transformBar(data) {
        const updateData = data.map((item) => {
            this.newObj = {};
            this.newObj.name = item.name;
            this.newObj.data = [ item.data.reduce((acc, value) => acc + value) ];
            return this.newObj;
        });
        //console.log(data);
        return updateData;
    }

    transformPie(data) {
        const updateData = data.map((item) => {
            const newObj = {};
            newObj['name'] = item['name'];
            newObj['y'] = item['data'].reduce((acc, value) => acc + value);
            return newObj;
        });
        //console.log(data);
        return updateData;
    }
}
