import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs/Rx';

export interface IComponentCanDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}

export class UserEditGuard implements CanDeactivate<IComponentCanDeactivate> {
    canDeactivate(component: IComponentCanDeactivate): Observable<boolean> | boolean {
        return component.canDeactivate ? component.canDeactivate() : true;
    }
}