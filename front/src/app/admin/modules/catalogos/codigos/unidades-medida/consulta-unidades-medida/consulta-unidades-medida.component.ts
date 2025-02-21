import { Component } from '@angular/core';

@Component({
	selector: 'app-consulta-unidades-medida',
	templateUrl: './consulta-unidades-medida.component.html',
	styleUrls: ['./consulta-unidades-medida.component.css']
})
export class ConsultaUnidadesMedidaComponent {
	protected unidades_medida: any[] = [{
		titulo: 'Unidad medida',
		unidad_medida: '',
		abreviacion: ''
	}];

	get obtenerTextoUnidades(): string {
		if (this.unidades_medida.length === 1) {
			return this.unidades_medida[0].unidad_medida;
		}
	
		let resultado = '';
		for (let i = 0; i < this.unidades_medida.length - 1; i++) {
			resultado += `${this.unidades_medida[i].unidad_medida} x ${this.unidades_medida[i + 1].unidad_medida}`;
			if (i < this.unidades_medida.length - 2) {
				resultado += '<br>';
			}
		}
		return resultado;
	}
}