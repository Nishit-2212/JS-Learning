import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';


export interface CanComponentDeactivate{
  canDeactivate: () => boolean | Observable<boolean>;
}


export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactivate> = (component, currentRoute, currentState, nextState) => {
  
  console.log('deactivate Guard called')
  return component.canDeactivate ? component.canDeactivate() : true;

};
