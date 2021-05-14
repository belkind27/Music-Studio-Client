import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IsPlayerReadyService {
 isReady: Subject<boolean> = new Subject();
  constructor() {}
  emit(val: boolean): void {
    this.isReady.next(val);
  }
}
