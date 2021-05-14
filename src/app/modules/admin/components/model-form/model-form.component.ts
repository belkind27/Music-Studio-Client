import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Actions, FormOperation, Models } from '../../models';
import { DataHandlerService } from '../../services/data-handler.service';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css'],
})
export class ModelFormComponent implements OnInit {
  constructor(private service: DataHandlerService) {}
  data!: any;
  model!: Models;
  action!: Actions;
  @Input() operation!: Subject<FormOperation>;
  ngOnInit(): void {
    this.operation.subscribe((res) => {
      this.data = res.data;
      this.model = res.model;
      this.action = res.action;
    });
  }
  onSubmit(value: any): void {
    let modelName;
    switch (this.model) {
      case 2:
        modelName = 'Songs';
        break;
      case 3:
        modelName = 'Notes';
        break;
      case 4:
        modelName = 'Recommendations';
        break;
      case 5:
        modelName = 'Spotlights';
        break;
      default:
        modelName = '';
        break;
    }
    if (this.action === Actions.Create) {
      this.service
        .postData(modelName, value)
        .subscribe((_) => (this.model = 0));
    }
    if (this.action === Actions.Update) {
      this.service
        .editData(modelName, value)
        .subscribe((_) => (this.model = 0));
    }
  }
}
