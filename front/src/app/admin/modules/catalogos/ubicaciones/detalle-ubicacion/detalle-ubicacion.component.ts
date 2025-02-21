import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/admin/services/modal/modal.service';

@Component({
	selector: 'app-detalle-ubicacion',
	templateUrl: './detalle-ubicacion.component.html',
	styleUrls: ['./detalle-ubicacion.component.css']
})
export class DetalleUbicacionComponent {
	@Input() pkUbicacion: number = 0;

	protected columnasTabla: any = {
		planta: 'Planta',
		codigo: 'Código',
		descripcion: 'Descripción',
		piezas: 'Pzas',
		cajas: 'Cjs',
		tar: 'Tar'
	};

	protected tableConfig: any = {
		'planta': {
			'selectColumn': true,
			'center': true
		},
		'codigo': {
			'center': true
		},
		'descripcion': {
			'center': true
		},
		'piezas': {
			'center': true
		},
		'cajas': {
			'center': true
		},
		'tar': {
			'center': true
		}
	};

	protected datosTabla: any = [];

	constructor (
		private modal: ModalService
	) {}

	protected cerrarModal(): void {
		this.modal.cerrarModal();
	}
}