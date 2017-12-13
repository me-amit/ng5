import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>([1,2,3]);
  goal = this.goals.asObservable();
  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
    
  }

}
