import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent {
  arrayList: any = [];
  submit: boolean = false;

  constructor() {}


  listForm = new FormGroup<ListFormInterface>({
    title: new FormControl('', {validators: Validators.required}),
    task: new FormControl(''),
  });

  onSubmit() {
    if (this.listForm.value.title) {
      this.arrayList.push(this.listForm.value);
      this.listForm.reset()
      this.submit = true
    } else {
      this.submit = false
    }
  }
}

export interface ListFormInterface {
  title: FormControl<string | null>;
  task: FormControl<string | null>;
}
