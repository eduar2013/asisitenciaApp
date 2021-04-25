import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Empresa } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmpresaServices {

  private url:string = environment.url;
  private baseUrlEmpresa:string = environment.baseUrlEmpresa;

  constructor(private http:HttpClient) { }

  listarEmpresas():Observable<[Empresa]>{
    const url = `${this.url}${this.baseUrlEmpresa}`; 
    const headers = new HttpHeaders()
      .set('Authorization',`Bearer ${localStorage.getItem('token')} ` || '');
    return this.http.get<[Empresa]>(url,{headers});
  }


  eliminarEmpresa(idEmpresa:number):Observable<any>{
    const url = `${this.url}${this.baseUrlEmpresa}/${idEmpresa}`; 
    const headers = new HttpHeaders()
      .set('Authorization',`Bearer ${localStorage.getItem('token')} ` || '');
    return this.http.delete(url,{headers});
  }


}
