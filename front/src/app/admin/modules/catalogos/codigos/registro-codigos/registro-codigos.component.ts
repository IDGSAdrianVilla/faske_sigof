import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogosService } from 'src/app/admin/services/api/catalogos/catalogos.service';
import { MensajesService } from 'src/app/admin/services/mensajes/mensajes.service';
import { ModalService } from 'src/app/admin/services/modal/modal.service';
import FGenerico from 'src/app/shared/util/funciones-genericas';

@Component({
	selector: 'app-registro-codigos',
	templateUrl: './registro-codigos.component.html',
	styleUrls: ['./registro-codigos.component.css']
})
export class RegistroCodigosComponent extends FGenerico implements OnInit {
	protected formCodigo!: FormGroup

	protected listaAreas: any = [];
	protected listaTiposCodigo: any = [];
	protected listaClientes: any = [];
	protected listaNomenclaturas: any = [];

	protected nomenclautra: boolean = false;

	constructor(
		private modal: ModalService,
		private fb: FormBuilder,
		private catalogos: CatalogosService,
		private mensajes: MensajesService
	) {
		super();
	}

	async ngOnInit(): Promise<void> {
		this.mensajes.mensajeEsperar();

		this.crearFormCodigo();

		await Promise.all([
			this.obtenerAreasDropdown(),
			this.obtenerTiposCodigoDropdown(),
			this.obtenerClientesDropdown()
		]);

		this.mensajes.cerrarMensajes();
	}

	private crearFormCodigo(): void {
		this.formCodigo = this.fb.group({
			codigo: [null, [Validators.required, Validators.pattern('[a-zA-Zá-úÁ-Ú0-9 .,-_:@#$%&+{}()?¿!¡\n]*')]],
			descripcion: [null, [Validators.required, Validators.pattern('[a-zA-Zá-úÁ-Ú0-9 .,-_:@#$%&+{}()?¿!¡\n]*')]],
			caducidad: [false, [Validators.required]],
			unidadMedida: ['', [Validators.required]],
			tipoEntrada: ['', [Validators.required]],
			calidad: [false],
			omitirConteo: [false],
			porValidar: [false],
			descripcionPorValidar: [null, [Validators.required, Validators.pattern('[a-zA-Zá-úÁ-Ú0-9 .,-_:@#$%&+{}()?¿!¡\n]*')]],
		});
	}

	async obtenerAreasDropdown(): Promise<any> {
		return this.catalogos.obtenerAreasDropdown().toPromise().then(
			respuesta => {
				this.listaAreas = respuesta.listaAreas;
			}, error => {
				this.mensajes.mensajeGenerico('error', 'error');
			}
		);
	}

	async obtenerTiposCodigoDropdown(): Promise<any> {
		return this.catalogos.obtenerTiposCodigoDropdown().toPromise().then(
			respuesta => {
				this.listaTiposCodigo = respuesta.listaTiposCodigo;
			}, error => {
				this.mensajes.mensajeGenerico('error', 'error');
			}
		);
	}

	async obtenerClientesDropdown(): Promise<any> {
		return this.catalogos.obtenerClientesDropdown().toPromise().then(
			respuesta => {
				this.listaClientes = respuesta.listaClientes;
			}, error => {
				this.mensajes.mensajeGenerico('error', 'error');
			}
		);
	}

	protected cerrarModal(): void {
		this.modal.cerrarModal();
	}
}