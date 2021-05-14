import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { titleColors } from 'src/app/shared/models/titleColors.model';
import { Actions, FormOperation, Models, TableOperation } from '../../models';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css'],
})
export class AdminMainComponent implements OnInit {
  constructor() {}
  title = 'Admin Portal';
  titleColor = titleColors.black;
  model: Models = 0;
  action: Actions = 0;
  isShow = false;
  tableOperation$: Subject<TableOperation> = new Subject();
  formOperation$: Subject<FormOperation> = new Subject();

  ngOnInit(): void {}
  onUpdate(item: any): void {
    this.formOperation$.next({
      data: item,
      model: this.model,
      action: this.action,
    });
    this.isShow = true;
  }
  emitAction(): void {
    if (this.action !== 1) {
      this.tableOperation$.next({ model: this.model, action: this.action });
      this.isShow = false;
    } else {
      this.formOperation$.next({
        data: undefined,
        model: this.model,
        action: this.action,
      });
      this.isShow = true;
    }
  }
  canCreate(): boolean {
    if (!this.model || this.model === 1 || this.model === 4) {
      return true;
    }
    return false;
  }
  canDelete(): boolean {
    if (!this.model || this.model === 4) {
      return true;
    }
    return false;
  }
  canUpdate(): boolean {
    if (!this.model || this.model === 1) {
      return true;
    }
    return false;
  }
  canStart(): boolean {
    return this.action === 0 || this.model === 0;
  }
}
