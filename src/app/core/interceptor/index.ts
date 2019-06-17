import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptService } from './intercept.service';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: InterceptService, multi: true },
];
