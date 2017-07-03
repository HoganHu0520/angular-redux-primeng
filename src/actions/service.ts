import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class TestAPIService {
  constructor() {}

  getTest = (): Observable<string> => {
    let testSubject: Subject<string> = new Subject<string>();
    setTimeout(() => {
      testSubject.next('get success');
    }, 200);
    return testSubject.asObservable();
  }
}
