import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { LinearChartComponent} from './linear-chart.component'

@NgModule({
    imports: [ChartModule],
    declarations: [LinearChartComponent],
    exports: [LinearChartComponent]
})

export class LinearChartModule { }