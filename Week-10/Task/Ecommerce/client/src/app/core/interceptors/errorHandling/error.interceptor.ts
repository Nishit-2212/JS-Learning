import { HttpClient, HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, switchMap, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  
  const http = inject(HttpClient);

  return next(req).pipe(
    catchError((error:HttpErrorResponse) => {

      if(error.status === 401) {
        console.log("My access token is expired");
        const url = environment.apiUrl;
        return http.post(url+'/api/auth/generateToken',null,{ withCredentials: true}).pipe(
          switchMap(() => {
            return next(req.clone())
          })
        )
      }

      console.log('Error message',error.error?.message);
      return throwError(() => error)
    })
  );
};
