import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { Note } from 'src/app/shared/models/note';
import { Recommendation } from 'src/app/shared/models/recommendation';
import { Song } from 'src/app/shared/models/song.model';
import { Spotlight } from 'src/app/shared/models/spotlight.model';
import { Actions, Models, TableOperation } from '../../models';

import { DataHandlerService } from '../../services/data-handler.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {
  constructor(private service: DataHandlerService) {}
  @Input() operation!: Subject<TableOperation>;
  @Output() updateEmitter: EventEmitter<any> = new EventEmitter();

  action!: Actions;
  model!: Models;
  data!: any[];
  title!: string;
  ngOnInit(): void {
    this.operation.subscribe((res) => this.getData(res));
  }
  private getData(op: TableOperation): void {
    switch (op.model) {
      case 1:
        this.service
          .getData<Comment>('Comments')
          .subscribe((res) => this.updateTable(op, res, 'Comments'));
        break;
      case 2:
        this.service
          .getData<Song>('Songs')
          .subscribe((res) => this.updateTable(op, res, 'Songs'));
        break;
      case 3:
        this.service
          .getData<Note>('Notes')
          .subscribe((res) => this.updateTable(op, res, 'Notes'));
        break;
      case 4:
        this.service
          .getData<Recommendation>('Recommendations')
          .subscribe((res) => this.updateTable(op, res, 'Recommendations'));
        break;
      case 5:
        this.service
          .getData<Spotlight>('Spotlights')
          .subscribe((res) => this.updateTable(op, res, 'Spotlights'));
        break;
      default:
        break;
    }
  }
  private updateTable(op: TableOperation, res: any[], modelName: string): void {
    this.data = res;
    this.action = op.action;
    this.model = op.model;
    this.action === 2
      ? (this.title = 'Delete ' + modelName)
      : (this.title = 'Update ' + modelName);
  }
  delete(id: number): void {
    switch (this.model) {
      case 1:
        this.service
          .deleteData<Comment>('Comments', id)
          .subscribe((res) =>
            this.updateTable(
              { model: this.model, action: this.action },
              res,
              'Comments'
            )
          );
        break;
      case 2:
        this.service
          .deleteData<Song>('Songs', id)
          .subscribe((res) =>
            this.updateTable(
              { model: this.model, action: this.action },
              res,
              'Songs'
            )
          );
        break;
      case 3:
        this.service
          .deleteData<Note>('Notes', id)
          .subscribe((res) =>
            this.updateTable(
              { model: this.model, action: this.action },
              res,
              'Notes'
            )
          );
        break;
      case 4:
        this.service
          .deleteData<Recommendation>('Recommendations', id)
          .subscribe((res) =>
            this.updateTable(
              { model: this.model, action: this.action },
              res,
              'Recommendations'
            )
          );
        break;
      case 5:
        this.service
          .deleteData<Spotlight>('Spotlights', id)
          .subscribe((res) =>
            this.updateTable(
              { model: this.model, action: this.action },
              res,
              'Spotlights'
            )
          );
        break;
      default:
        break;
    }
  }
  update(item: any): void {
    this.updateEmitter.emit(item);
    this.model = 0;
  }
}
