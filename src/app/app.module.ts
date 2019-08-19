import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LegendComponent } from './legend/legend.component';
import { FilterComponent } from './filter/filter.component';
import { BarChartModule } from './bar-chart/bar-chart.module';
import { LinearChartModule } from './linear-chart/linear-chart.module';
import { PieChartModule } from './pie-chart/pie-chart.module';
import { CountryService } from './country.service';

@NgModule({
  declarations: [
    AppComponent,
    LegendComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    BarChartModule,
    LinearChartModule,
    PieChartModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
