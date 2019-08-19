import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { PieChartComponent} from './pie-chart.component'

@NgModule({
    imports: [ChartModule],
    declarations: [PieChartComponent],
    exports: [PieChartComponent]
})

export class PieChartModule { }