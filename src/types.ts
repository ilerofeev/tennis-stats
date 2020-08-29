export type Match = {
  id: number;
  date: string;
  odds: number;
  source:
    | source.wtaline
    | source.wtalive
    | source.ekfree
    | source.ekpaid
    | source.basketline;
  result: result.win | result.lose | result.return;
  bet: bet.win | bet.fav | bet.out | bet.clean;
};

export enum bet {
  win = 'win',
  fav = 'fav',
  out = 'out',
  clean = 'clean victory',
}

export enum result {
  win = 'win',
  lose = 'lose',
  return = 'return',
}

export enum source {
  wtaline = 'WTA line',
  wtalive = 'WTA live',
  ekfree = 'EK free',
  ekpaid = 'EK paid',
  basketline = 'Basket line',
}
