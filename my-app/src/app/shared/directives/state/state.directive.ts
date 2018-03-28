import { Directive, Input, OnInit, HostBinding, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements  OnChanges {
  @Input() appState: string;
  // Binder la propriété class du span avec cette chaine
  @HostBinding('class') nomClass;
  constructor() {
   }

   ngOnChanges(): void {
    this.nomClass = this.formatClass(this.appState);
   }

  //  A livrer => state-aliver
  //  En cours => state-encours
  //  Livrée => state-livree
   formatClass(state: string): string {
      return `state-${this.removeAccents(state)
        .toLowerCase()
      .replace(' ', '')}`;
   }

   removeAccents(state: string): string {
    return state.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

}
