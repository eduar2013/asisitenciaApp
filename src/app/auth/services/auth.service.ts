import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AutResponse, Usuario } from '../interfaces/interfaces';

import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string = environment.baseUrl;
  private _usuario!:Usuario;

  get usuario (){
    return {...this._usuario}
  }

  constructor(private http:HttpClient) { }

  login(username:string, password:string){
    const url = `${this.baseUrl}/v1/authenticate`;
    const body = {username,password}

    return this.http.post<AutResponse>(url,body)
      .pipe(
        tap( resp => {
          if(resp.ok){
            localStorage.setItem('token',resp.token!);
            this._usuario = {              
              name: resp.name!
            }
          }
        }),
        map(resp => resp.ok),
        catchError(err => {
         return of(err.error)
        }
        )
      );
  }


  validarToken():Observable<boolean>{
    const url  = `${this.baseUrl}/v1/refresh`;
    const headers = new HttpHeaders()
      .set('Authorization',`Bearer ${localStorage.getItem('token')} ` || '');
    return this.http.get<AutResponse>(url, {headers})
      .pipe(
        map( resp => {
          localStorage.setItem('token',resp.token!);
            this._usuario = {              
            name: resp.name!
          }
          return resp.ok
        }),
        catchError(errr => of(false))
      );
  }

  
  logout(){
    localStorage.clear();
  }

}
