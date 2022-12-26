import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Beer } from 'src/app/modules/beer-module/data/interfaces';
import { FilterBeers } from '../../state/beer-state.actions';
import { BeerSelector } from '../../state/beer-state.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  minAbv: number = 0;
  maxAbv: number = 0;
  abv:number = 0;
  searchValue: string = ''; 
  subscribtions: Subscription[] = [];
  constructor(private store: Store) {}
  @Select(BeerSelector.getBeers) beers$!: Observable<Beer[]> ;
  @Select(BeerSelector.getIsLoaded) isLoaded$!: Observable<boolean>;
  filter(){
    this.store.dispatch(new FilterBeers({searchValue:this.searchValue, abv: this.abv}))
  }
  filterAbv(event:any){
    const input = event.target.value;
    this.abv = input
    this.filter()
  }
  filterName(event:any){
    const input = event.target.value;
    this.searchValue = input
    this.filter()
  }
  sort(event:any){
    console.log(event.target.value)
  }
  ngOnInit(): void {
    const Subscription = this.beers$.subscribe(res => {
      // console.log(res)
      // this.maxAbv = Math.max(...abvArr)
      // this.minAbv = Math.min(...abvArr)
    })
    Subscription.unsubscribe()
  }
  ngOnDestroy(): void {
    this.subscribtions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}
