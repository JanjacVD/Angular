import { Injectable } from "@angular/core";
import { Action, NgxsOnInit, State, StateContext } from "@ngxs/store";
import { Beer } from "../data/interfaces";
import { GetDataService } from "../services/get-data.service";
import { FilterBeers, SortBeers } from "./beer-state.actions";

export class BeerStateModel{
    beers:Beer[] = []
    filteredBeers:Beer[] = [];
    loaded:boolean = false;
}
@State<BeerStateModel>({
    name:'beer',
    defaults: {
        loaded: false,
        beers: [],
        filteredBeers: []
    }
})
@Injectable()
export class BeerState implements NgxsOnInit{
    constructor(private getDataService: GetDataService){}

    ngxsOnInit(ctx: StateContext<BeerStateModel>): void {
        this.getDataService.getData().subscribe(res => {
            ctx.setState({
                beers:res,
                loaded:true,
                filteredBeers:res
            })
        })
    }
    @Action(FilterBeers)
    filterBeers(ctx: StateContext<BeerStateModel>, action: FilterBeers) {
        const beers = ctx.getState().beers
        ctx.patchState({
            filteredBeers: beers.filter(beer => {return beer.name.toLowerCase().includes(action.payload.searchValue.toLowerCase()) && beer.abv >= action.payload.abv})
        })
    }

    @Action(SortBeers)
    sortBeer(ctx: StateContext<BeerStateModel>, action: SortBeers) {
        const beers = ctx.getState().filteredBeers
        const sortByValue = action.payload.byValue;

        if(sortByValue === 'name'){
            const sorted = beers.sort(function(a,b) {
                if(a.name < b.name){return -1}
                if(a.name > b.name){return 1}
                return 0;
            })
            console.log(sorted)
        }
        else{

        }
    }
}