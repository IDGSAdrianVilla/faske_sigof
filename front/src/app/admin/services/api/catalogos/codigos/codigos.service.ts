import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/environments/environments';

@Injectable({
	providedIn: 'root'
})
export class CodigosService {
	constructor(
		private http: HttpClient
	) { }

	public obtenerCodigosPorFiltros(data: any): Observable<any> {
		return this.http.post<any>(`${api}/catalogos/codigos/obtenerCodigosPorFiltros`, data);
	}
}