import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { IComponentCanDeactivate } from './user-edit.guard';

@Component({
  selector: 'app-user-edit',
  template: `
  <div>
    <p>
      user-edit Works!
    </p>
    <button class="btn btn-sm" (click)="this.done=true">Done</button>
    <button class="btn btn-sm" (click)="navigateHome()">Home</button>
    </div>
  `,
  styles: []
})
export class UserEditComponent implements IComponentCanDeactivate {
  private done: boolean;
  constructor(private router: Router) { }

  navigateHome() {
    this.router.navigate(['/']);
  }

  canDeactivate(): boolean | Observable<boolean> {
    if (!this.done){
      return confirm("Are you sure to leave?");
    }
    return true;
  }

}
