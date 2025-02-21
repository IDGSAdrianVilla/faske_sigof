import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { DashboardComponent } from "../modules/dashboard/dashboard.component";
import { ConsultaUbicacionesComponent } from "../modules/catalogos/ubicaciones/consulta-ubicaciones/consulta-ubicaciones.component";
import { ConsultaCodigosComponent } from "../modules/catalogos/codigos/consulta-codigos/consulta-codigos.component";
import { ConsultaUnidadesMedidaComponent } from "../modules/catalogos/codigos/unidades-medida/consulta-unidades-medida/consulta-unidades-medida.component";

export const HomeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            }, {
                path: 'catalogos-consulta-codigos',
                component: ConsultaCodigosComponent
            }, {
                path: 'catalogos-consulta-ubicaciones',
                component: ConsultaUbicacionesComponent
            }, {
                path: 'catalogos-consulta-unidades-medida',
                component: ConsultaUnidadesMedidaComponent
            }
        ]
    }
];