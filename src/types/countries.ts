export interface Country {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  region: string;
  subregion: string;
  borders: string[];
  area: number;
  population: number;
  continents: string[];
  tld: string[];
  flags: {
    png: string;
  };
}
