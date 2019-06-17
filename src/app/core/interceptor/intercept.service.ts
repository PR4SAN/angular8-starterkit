import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
// import { LocalstorageService } from '../localstorage/localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {
  constructor(
    private router: Router,
    // private ls: LocalstorageService
  ) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = `${environment.url}${request.url}`;

    if (localStorage.getItem('admin')) {
      const token: string = JSON.parse(localStorage.getItem('admin')).access_token;
      request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });

    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }

    request = request.clone(
      {
        headers: request.headers.set('Accept', 'application/json'),
        // url: url
      }
      );
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        if (error.error.code === 1006 || error.error.code === 1111) {
          // this.toastrService.error('Session expired.');
          // this.ls.deleteLocalStorage('isLoggedin');
          // this.ls.deleteLocalStorage('admin');
          this.router.navigate(['/login']);
        }
        return throwError(error);
      })
    );
  }
}
