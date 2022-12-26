import { NgModule } from '@angular/core';
import { BeerRoutingModule } from './beer-routing.module';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { BeerState } from './state/beer-state.module';

@NgModule({
  declarations: [HomeComponent, DetailsComponent],
  imports: [BeerRoutingModule, CommonModule, NgxsModule.forFeature([BeerState])],
  providers: [],
  bootstrap: [],
})
export class BeerModule {}
