import { Component, OnInit, OnChanges, Output, EventEmitter, Input } from '@angular/core';
import { State } from '../../enums/state.enum';
import { Item } from '../../models/item.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnChanges {
  libelles = Object.values(State);
  @Output() nItem: EventEmitter<Item> = new EventEmitter;
  @Input() item: Item;
  form: FormGroup;
  constructor(private fb: FormBuilder) {

   }

   createForm() {
    this.form = this.fb.group({
      name: [
        this.item ? this.item.name : '',
        Validators.compose([Validators.required, Validators.minLength(2)])
    ],
      reference: [
        this.item ? this.item.reference : '',
        Validators.compose
        ([Validators.required, Validators.minLength(3)]
      )
      ],
      state: this.item ? this.item.state : State.ALIVRER,
    });
   }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges() {
  }

  getItem() {
    const data = this.form.value;
    if (!this.item) {
      return data;
    }
    const id = this.item.id;
    return {id, ...data};
  }

  process(): void {
    const data = this.getItem();
    this.nItem.emit(data);
    this.form.reset();
    this.form.get('state').setValue(State.ALIVRER);
  }

  invalidCondition(filedName: string): Boolean {
    return this.form.get(filedName).invalid && this.form.get(filedName).touched;
  }
}
