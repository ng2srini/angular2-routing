import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

    subscription: Subscription;

    routeParam: string;

    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        //this.routeParam = this.activatedRoute.snapshot.params['id'];
        this.subscription = this.activatedRoute.params.subscribe(
            data => this.routeParam = data['id']
        );
    }

    OnNavigate() {
        this.router.navigate(['/'], { queryParams: { analytics: 100 } });
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
