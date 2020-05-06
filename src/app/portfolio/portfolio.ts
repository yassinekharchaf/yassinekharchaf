import { Galerie } from './galerie';

export interface Portfolio {
  name: string;
  imgUrl: string;
  description: string;
  galerie?: Array<Galerie>;
}
