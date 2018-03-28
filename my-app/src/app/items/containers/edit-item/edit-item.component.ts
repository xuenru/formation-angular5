import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../../shared/models/item.model';
import { CollectionService } from '../../../core/services/collection/collection.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  item: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private collectionService: CollectionService,
    private router: Router
  ) { }

  ngOnInit() {
    // souscrire a params pour recuperer dans le router l'item transmis par mon resolve
    // c'est cette valeur recuperer ici que je bind avec l'@Input qui va se trouver dans formComponent
    this.activateRoute.data.subscribe((data) => {
      this.item = data['item'];
      // console.log(this.item);
    });
  }

  update(item: Item): void {
    this.collectionService.update(item);
    this.router.navigate(['/items/list']);
  }
}
