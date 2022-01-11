import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeaderInterceptorService implements HttpInterceptor{

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(req.method == 'GET') {
      return next.handle(req);
    }
      //enviar token no header
      const token = localStorage.getItem('token');
      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      });
      return next.handle(authReq).pipe(
        tap(
          event => {
            if (event instanceof HttpResponse) {
              alert('Sucessfully');
            }
          },
          error => {
            if(error.status == 403){
              window.alert("Acesso expirado, faça o login novamente.");
              localStorage.clear();
              this.router.navigateByUrl('login');
            }else{
              return;
            }
          }
        )
      );

  }
  
}
@NgModule({
  providers : [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true
  },
  ],
})

export class HttpInterceptorModule {

}
