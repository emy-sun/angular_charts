import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { BarChartComponent} from './bar-chart.component'

@NgModule({
    imports: [ChartModule],
    declarations: [BarChartComponent],
    exports: [BarChartComponent]
})

export class BarChartModule { }