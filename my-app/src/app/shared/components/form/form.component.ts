import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';
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
  form: FormGroup;
  constructor(private fb: FormBuilder) {

   }

   createForm() {
    this.form = this.fb.group({
      name: [
        '',
      Validators.compose([Validators.required, Validators.minLength(5)])
    ],
      reference: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)])
      ],
      state: State.ALIVRER
    });
   }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges() {
  }

  process(): void {
    this.nItem.emit(this.form.value);
  }

  invalidCondition(filedName: string): Boolean {
    return this.form.get(filedName).invalid && this.form.get(filedName).touched;
  }
}
