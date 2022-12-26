import { createSelector, Selector } from '@ngxs/store';
import { BeerState, BeerStateModel } from './beer-state.module';

export class BeerSelector {
  @Selector([BeerState])
  static getBeers(state: BeerStateModel, id: string) {
    return state.filteredBeers
  }
  @Selector([BeerState])
  static getIsLoaded(state: BeerStateModel) {
    return state.loaded;
  }
 
  static getSingleBeer(id: string) {
    return createSelector([BeerState], (state: BeerStateModel) => {
      const beers = state.beers.filter(beer => {
        return beer.name.includes(id)
      })
      return beers[0]
    })
  }
}
