import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { api } from 'src/environments/environments';

@Injectable({
	providedIn: 'root'
})
export class CatalogosService {
	constructor(
		private http: HttpClient
	) { }

	public obtenerPlantasDropdown(): Observable<any> {
		return this.http.get<any>(`${api}/util/plantas/obtenerPlantasDropdown`);
	}

	public obtenerTiposCodigoDropdown(): Observable<any> {
		return this.http.get<any>(`${api}/util/catalogos/obtenerTiposCodigoDropdown`);
	}

	public obtenerAreasDropdown(): Observable<any> {
		return this.http.get<any>(`${api}/util/catalogos/obtenerAreasDropdown`);
	}

	public obtenerClientesDropdown(): Observable<any> {
		return this.http.get<any>(`${api}/util/catalogos/obtenerClientesDropdown`);
	}
}