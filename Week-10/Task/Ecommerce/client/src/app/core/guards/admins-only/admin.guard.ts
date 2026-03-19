import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { SharedService } from '../../../shared/services/shared.service';
import { map, catchError, of } from 'rxjs';

export const adminGuard: CanMatchFn = (route, segments) => {

  const authService = inject(SharedService);
  const router = inject(Router);

  return authService.getCurrentUser().pipe(

    map((res) => {
      if (res?.status === 200) {
        const role = res?.body?.role;

        if (role === 'admin') {
          return true;
        } else {
          router.navigate(['/login']);
          return false;
        }
      } else {
        router.navigate(['/login']);
        return false;
      }
    }),
    catchError(() => {
      router.navigate(['/login']);
      return of(false);
    })
  );
};