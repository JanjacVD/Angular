export class AddBeerToFavoritesAction {
  static readonly type = '[Beer] Add to favorites';
}
export class FilterBeers {
  static readonly type = '[Beer] filter beer';
  constructor(public payload: { searchValue: string; abv: number }) {}
}
export class SortBeers{
    static readonly type = '[Beer] sort beer';
    constructor(public payload: { byValue: 'name' | 'abv'; type: 'asc' | 'desc'}) {}
}