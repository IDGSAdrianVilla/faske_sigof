import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UbicacionesService {
  constructor(
    private http: HttpClient
  ) { }

  public obtenerUbicacionesPorPlanta(arrPlantas: any): Observable<any> {
    return this.http.post<any>(`${api}/catalogos/ubicaciones/obtenerUbicacionesPorPlanta`, arrPlantas);
  }

  public obtenerDatosGraficaUbicaciones(arrPlantas: any): Observable<any> {
    return this.http.post<any>(`${api}/catalogos/ubicaciones/obtenerDatosGraficaUbicaciones`, arrPlantas);
  }
}