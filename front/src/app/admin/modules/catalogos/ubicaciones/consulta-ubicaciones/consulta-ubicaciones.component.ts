import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { CatalogosService } from 'src/app/admin/services/api/catalogos/catalogos.service';
import { UbicacionesService } from 'src/app/admin/services/api/catalogos/ubicaciones/ubicaciones.service';
import { MensajesService } from 'src/app/admin/services/mensajes/mensajes.service';
import { ModalService } from 'src/app/admin/services/modal/modal.service';
import { DetalleUbicacionComponent } from '../detalle-ubicacion/detalle-ubicacion.component';

@Component({
	selector: 'app-consulta-ubicaciones',
	templateUrl: './consulta-ubicaciones.component.html',
	styleUrls: ['./consulta-ubicaciones.component.css']
})
export class ConsultaUbicacionesComponent {
	protected listaPlantas: any[] = [];

	protected columnasTabla: any = {
		rack: 'Rack',
		nivel: 'Nivel',
		ubicacion: 'Ubicacion',
		peso: 'Peso',
		disponible: 'Status',
		permitido: 'Capacidad',
		tipo_almacen: 'Tipo almacén',
		nombre_almacen: 'Almacén',
		fecha: 'Fecha',
		acciones: 'Opciones'
	};

	protected tableConfig: any = {
		'rack': {
			'center': true,
			'selectColumn': true
		},
		'nivel': {
			'center': true,
			'selectColumn': true
		},
		'ubicacion': {
			'center': true
		},
		'peso': {
			'center': true
		},
		'disponible': {
			'center': true,
			'selectColumn': true,
			'dadges': true,
			'dadgesCases': [
				{
					'text': 'Disponible',
					'color': 'primary'
				}, {
					'text': 'Ocupado',
					'color': 'danger'
				}
			]
		},
		'permitido': {
			'center': true
		},
		'tipo_almacen': {
			'center': true,
			'selectColumn': true
		},
		'nombre_almacen': {
			'center': true,
			'selectColumn': true
		},
		'fecha': {
			'dateSpForm' : true,
			'center': true
		},
		'acciones': {
			'noFilter': true,
			'center': true,
			'actionFilter': true,
			'value': 'id_ubicacion',
			'actions': [
				{
					'bg': 'primary',
					'titulo': 'Detalle',
					'nombre': 'verDetalle'
				}, {
					'bg': 'warning',
					'titulo': 'Modificar',
					'nombre': 'modificar'
				}, {
					'bg': 'danger',
					'titulo': 'Eliminar',
					'nombre': 'eliminar'
				}
			]
		}
	}

	protected datosTabla: any = [];
	protected datosGrafica: any = [];

	private myChartEstadisticasUbicaciones: any;

	constructor(
		private mensajes: MensajesService,
		private catalogos: CatalogosService,
		private ubicaciones: UbicacionesService,
		private modal: ModalService
	) { }

	async ngOnInit(): Promise<any> {
		this.mensajes.mensajeEsperar();
		this.actualizarGraficaEstadisticasAgrupadas();
		await this.obtenerPlantasDropdown();
	}

	private obtenerPlantasDropdown(): Promise<any> {
		return this.catalogos.obtenerPlantasDropdown().toPromise().then(
			respuesta => {
				this.listaPlantas = respuesta.listaPlantas;
				this.mensajes.cerrarMensajes();
			}, error => {
				this.mensajes.mensajeGenerico('error', 'error');
			}
		);
	}

	protected async obtenerInformacionPorPlantas(data: any): Promise<any> {
		if (data.selectedOptions.length == 0) {
			if (this.myChartEstadisticasUbicaciones) this.myChartEstadisticasUbicaciones.destroy();
			this.datosTabla = [];
			return;
		};

		this.mensajes.mensajeEsperar();

		const arrPlantas = data.selectedOptions.map((item: any) => item.value);

		await this.obtenerUbicacionesPorPlanta(arrPlantas);
		await this.obtenerDatosGraficaUbicaciones(arrPlantas);
	}

	protected obtenerUbicacionesPorPlanta(arrPlantas: any): Promise<any> {
		return this.ubicaciones.obtenerUbicacionesPorPlanta(arrPlantas).toPromise().then(
			respuesta => {
				this.datosTabla = respuesta.ubicaciones;
			}, error => {
				this.mensajes.mensajeGenerico('error', 'error');
			}
		);
	}

	protected obtenerDatosGraficaUbicaciones(arrPlantas: any): Promise<any> {
		return this.ubicaciones.obtenerDatosGraficaUbicaciones(arrPlantas).toPromise().then(
			respuesta => {
				this.datosGrafica = respuesta.datosGrafica;
				this.actualizarGraficaEstadisticasAgrupadas();
				this.mensajes.mensajeGenericoToast(respuesta.mensaje, 'success');
			}, error => {
				this.mensajes.mensajeGenerico('error', 'error');
			}
		);
	}

	private actualizarGraficaEstadisticasAgrupadas(): void {
		if (this.myChartEstadisticasUbicaciones) {
			this.myChartEstadisticasUbicaciones.destroy();
		}

		const config: any = {
			type: 'bar',
			data: {
				labels: this.datosGrafica.map((item: any) => item.disponible) ?? [],
				datasets: [
					{
						label: 'Ocupado',
						data: this.datosGrafica.map((item: any) => item.cantidad) ?? [],
						backgroundColor: [
							'rgba(255, 99, 132, 0.2)',
							'rgba(255, 159, 64, 0.2)',
							'rgba(255, 205, 86, 0.2)'
						],
						borderColor: [
							'rgb(255, 99, 132)',
							'rgb(255, 159, 64)'
						],
						borderWidth: 1
					}
				]
			}
		};;

		this.myChartEstadisticasUbicaciones = new Chart("estadisticasUbicaciones", config);
	}
	
	protected opcionSeleccionada (data: any): void {
		if (this.obtenerValidacionMostrarDetalle(data.idAccion)) {
			this.mensajes.mensajeGenericoToast('No hay información para mostrar', 'info');
			return;
		};

		const accion = data.action;

		data = {
			pkUbicacion: data.idAccion
		};

		switch (accion) {
			case 'verDetalle':
				this.modal.abrirModalConComponente(DetalleUbicacionComponent, data);
			break;
		}
	}

	private obtenerValidacionMostrarDetalle (pkUbicacion: number): boolean {
		const obj = this.datosTabla.find(((ubicacion: any) => ubicacion.id_ubicacion == pkUbicacion && ubicacion.disponible == 'Ocupado'));

		return obj == undefined;
	}
}