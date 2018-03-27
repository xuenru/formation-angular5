import { Item } from '../../shared/models/item.model';
import { State } from '../../shared/enums/state.enum';

export const COLLECTION: Item[] = [
  {
    id: 'a1',
    name: 'Jean-Adel',
    reference: '123',
    state: State.ALIVRER
  },
  {
    id: 'a2',
    name: 'Stéphanie',
    reference: '456',
    state: State.ENCOURS
  },
  {
    id: 'c3',
    name: 'Julien',
    reference: '789',
    state: State.LIVREE
  }
];
