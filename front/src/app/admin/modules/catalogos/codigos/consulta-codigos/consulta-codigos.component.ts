import { Component } from '@angular/core';
import { CatalogosService } from 'src/app/admin/services/api/catalogos/catalogos.service';
import { CodigosService } from 'src/app/admin/services/api/catalogos/codigos/codigos.service';
import { MensajesService } from 'src/app/admin/services/mensajes/mensajes.service';
import { ModalService } from 'src/app/admin/services/modal/modal.service';
import { RegistroCodigosComponent } from '../registro-codigos/registro-codigos.component';

@Component({
	selector: 'app-consulta-codigos',
	templateUrl: './consulta-codigos.component.html',
	styleUrls: ['./consulta-codigos.component.css']
})
export class ConsultaCodigosComponent {
	protected listaTiposCodigos: any[] = [];
	protected listaStatusCodigos: any[] = [
		{
			value: 1,
			label: 'Por validar',
			checked: false
		}, {
			value: 2,
			label: 'Sin explosión',
			checked: false
		}, {
			value: 3,
			label: 'Con explosión',
			checked: false
		}, {
			value: 4,
			label: 'Activos',
			checked: false
		}, {
			value: 5,
			label: 'Inactivos',
			checked: false
		}
	];

	protected columnasTabla: any = {
		activo: '____________',
		por_validar: '',
		tipo: 'Tipo',
		codigo: 'Código',
		descripcion: 'Descripción',
		cliente: 'Cliente',
		cantidad_unidad_medida: '',
		unidad_medida: 'Unidad de medida',
		fecha: 'Fecha',
		explosion: '',
		acciones: 'Opciones'
	};

	protected tableConfig: any = {
		'por_validar': {
			'center': true,
			'linea': true,
			'noFilter': true
		},
		'activo': {
			'noFilter': true,
			'center': true,
			'checkColumn': true,
			'value': 'id_codigos'
		},
		'tipo': {
			'center': true,
			'selectColumn': true
		},
		'codigo': {
			'center': true
		},
		'descripcion': {
			'center': true
		},
		'cliente': {
			'center': true,
			'selectColumn': true
		},
		'cantidad_unidad_medida': {
			'noFilter': true,
			'center': true,
			'dadges': true,
			'dadgesCases': [
				{
					'text': '3',
					'color': 'primary'
				}, {
					'text': '2',
					'color': 'danger'
				}
			]
		},
		'unidad_medida': {
			'center': true,
			'selectColumn': true
		},
		'fecha': {
			'dateSpForm': true,
			'center': true
		},
		'explosion': {
			'noFilter': true,
			'center': true,
			'dadges': true,
			'dadgesCases': [
				{
					'text': 'Con explosión',
					'color': 'primary'
				}, {
					'text': 'Sin explosión',
					'color': 'danger'
				}
			]
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
				}, {
					'bg': 'success',
					'titulo': 'Clonar',
					'nombre': 'clonar'
				}
			]
		}
	}

	protected datosTabla: any = [];

	constructor(
		private mensajes: MensajesService,
		private codigos: CodigosService,
		private catalogos: CatalogosService,
		private modal: ModalService
	) { }

	async ngOnInit(): Promise<any> {
		this.mensajes.mensajeEsperar();
		await this.obtenerTiposCodigoDropdown();
		this.mensajes.cerrarMensajes();
	}

	async obtenerTiposCodigoDropdown(): Promise<any> {
		return this.catalogos.obtenerTiposCodigoDropdown().toPromise().then(
			respuesta => {
				this.listaTiposCodigos = respuesta.listaTiposCodigo;
			}, error => {
				this.mensajes.mensajeGenerico('error', 'error');
			}
		);
	}

	protected cambioFiltrosBusqueda(): void {
		const tipos_codigo = this.listaTiposCodigos.filter(item => item.checked === true).map(item => item.value);
		const status_codigo = this.listaStatusCodigos.filter(item => item.checked === true).map(item => item.value);

		if (tipos_codigo.length == 0 || status_codigo.length == 0) {
			this.datosTabla = [];
			return;
		};

		this.mensajes.mensajeEsperar();
		this.obtenerCodigosPorFiltros(tipos_codigo, status_codigo).then(() => {
			this.mensajes.mensajeGenericoToast('Se obtuvieron los códigos con éxito', 'success');
		});
	}

	protected agregarCodigo(): void {
		this.modal.abrirModalConComponente(RegistroCodigosComponent, {}, 'md-modal');
	}

	private obtenerCodigosPorFiltros(tipos_codigo: any[], status_codigo: any[]): Promise<any> {
		const data = {
			tipos_codigo,
			status_codigo
		};

		return this.codigos.obtenerCodigosPorFiltros(data).toPromise().then(
			respuesta => {
				this.datosTabla = respuesta.codigos;
			}, error => {
				this.mensajes.mensajeGenerico('error', 'error');
			}
		);
	}

	protected opcionSeleccionada(data: any): void {

	}
}