import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss'],
})
export class ViewDataComponent {
  @Input() data: any;

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
    document
      .getElementsByClassName(`view-data-container`)[i]
      ?.classList.add('showOut');
    setTimeout(() => {
      this.data.splice(i, 1);
    }, 500);
  }
}
