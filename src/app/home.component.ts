import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'app-home',
    template: `
    <p>
      home Works!
      Retrieved Query Params : {{queryParameters}}
    </p>
  `,
    styles: []
})
export class HomeComponent implements OnInit {
    queryParameters: string;
    subscription: Subscription;
    constructor(private params: ActivatedRoute) {
        this.subscription = params.queryParams.subscribe((data) => this.queryParameters = data['analytics']);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
