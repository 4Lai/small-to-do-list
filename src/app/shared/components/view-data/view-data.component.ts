import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss'],
})
export class ViewDataComponent {
  @Input() data: any;
  checked: boolean = false;

  onClick(num: number) {
    let elem = document.querySelector(`.nume${num}`);
    let ele = document.querySelectorAll(`.nume${num}`);
    if (elem?.classList.contains('checked') === false) {
      ele.forEach((el) => {
        el.classList.add('checked');
        el.classList.remove('notChecked');
      });
    } else {
      ele.forEach((el) => {
        el.classList.remove('checked');
        el.classList.add('notChecked');
      });
    }
  }

  onDelete(i: number) {
    this.data.splice(i, 1);
  }
}
