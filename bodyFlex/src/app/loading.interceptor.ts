import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from './shared/loader.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private totalRequest = 0
  constructor(private loadingService: LoaderService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('caught');
    this.totalRequest++;
    this.loadingService.setLoading(true);
    return next.handle(request).pipe(
      finalize(() => {
        this.totalRequest--;
        if(this.totalRequest === 0){
          this.loadingService.setLoading(false)
        }
      })
    )
  }
}
