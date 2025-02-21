import { Component, OnInit } from '@angular/core';
import { CatalogosService } from '../../services/api/catalogos/catalogos.service';
import { MensajesService } from '../../services/mensajes/mensajes.service';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{
	protected listaPlantas: any[] = [];

	constructor (
		private catalogos: CatalogosService,
		private mensajes: MensajesService
	) {}

	ngOnInit(): void {
		this.obtenerPlantasDropdown();
	}

	private obtenerPlantasDropdown(): void {
		this.catalogos.obtenerPlantasDropdown().subscribe(
			respuesta => {
				this.listaPlantas = respuesta.listaPlantas;
				this.mensajes.cerrarMensajes();
			}, error => {
				this.mensajes.mensajeGenerico('error', 'error');
			}
		);
	}

	protected cambioPlantasSeleccion(data: any): void {

	}
}