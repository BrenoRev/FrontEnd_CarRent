import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

export class HeaderInterceptorService implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Verificar se existe a token e mandar no header da requisição pro back-end
    if (localStorage.getItem('token') !== null) {
      const token = 'Bearer ' + localStorage.getItem('token');

      if (req.method == 'GET' || req.url.includes('/login')) {
        return next.handle(req);
      }

      // Altera a requisição padrão do angular e coloca no header um authorization com a token
      const tokenRequest = req.clone({
        headers: req.headers.set('Authorization', token)
      });

      // Se existir manda a autorização com a token
      return next.handle(tokenRequest).pipe(
        tap((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // console.log('event--->>>', event);
          }
        }), catchError(this.processaError))
    } else {
      // Se não, manda a requisição original
      return next.handle(req).pipe(catchError(this.processaError));
    }
  }

  processaError(error: HttpErrorResponse) {
    let errorMessage = error.error.message;
  
    if (error.status === 403) {
      errorMessage = "Acesso expirado, faça o login novamente."
      localStorage.clear();
    } else {
      errorMessage = `Mensagem: ${error == undefined ? "Erro Desconhecido" : error.error.error}`;
    }
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: errorMessage,
      timer: 5000
    });
    setTimeout(() => {
      window.location.reload();
    }, 5000);
    
    
    return throwError(errorMessage);
  }

}

@NgModule({
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeaderInterceptorService,
    multi: true
  },
  ],
})

export class HttpInterceptorModule {

}
