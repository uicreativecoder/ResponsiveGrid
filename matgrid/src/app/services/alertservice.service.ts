import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlertserviceService {
  private subject = new Subject<any>();
  private navigationChange = false;
  constructor(private route: Router) {
    route.events.subscribe(
      event => {
        if (event instanceof NavigationStart)
          this.navigationChange = false;
        else this.subject.next();
      }

    );
  }
  success(message: string, navigationChange = false) {
    this.navigationChange = navigationChange;
    this.subject.next({ type: 'success', text: message });
  }

  error(message: string, navigationChange = false) {
    this.navigationChange = navigationChange;
    this.subject.next({ type: 'error', text: message });
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
