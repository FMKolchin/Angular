import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
giftCardSubject$:BehaviorSubject<string> = new BehaviorSubject("By adding a feedback you are entitled to a gift card")
/**
 * setGiftCardSubject
 */
public setGiftCardSubject(str:string) {
  this.giftCardSubject$.next(str);
}
  constructor() { }
}
