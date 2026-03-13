import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  
  const token = 'thisis myToken................'

  const newReq = req.clone({
    setHeaders:{
      Authorization: `Bearer ${token}`
    },
    withCredentials: true
  })

  return next(newReq);

};
