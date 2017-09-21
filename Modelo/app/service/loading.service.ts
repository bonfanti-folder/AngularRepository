import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoadingService {

    private subject = new Subject<any>();
    private promiseCount = 0;

    constructor(private router: Router) {
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) this.subject.next();
        });
    }

    public start() {
        if (isNaN(this.promiseCount)) this.promiseCount = 0;
        if (this.promiseCount >= 0) this.promiseCount++;
        this.subject.next(this.promiseCount);
    }

    public finish() {
        if (isNaN(this.promiseCount)) this.promiseCount = 0;
        else if (this.promiseCount > 0) this.promiseCount--;
        this.subject.next(this.promiseCount);
    }

    public reset() {
        this.promiseCount = 0;
        this.subject.next(this.promiseCount);
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

}
