import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { HomeComponent } from './admin/home/home.component';
import { DashboardComponent } from './admin/modules/dashboard/dashboard.component';
import { SidenavComponent } from './admin/components/sidenav/sidenav.component';
import { NavbarComponent } from './admin/components/navbar/navbar.component';
import { FooterComponent } from './admin/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { HomeModule } from './admin/home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatatableComponent } from './admin/components/datatable/datatable.component';
import { DropdownComponent } from './admin/components/dropdown/dropdown.component';
import { ConsultaUbicacionesComponent } from './admin/modules/catalogos/ubicaciones/consulta-ubicaciones/consulta-ubicaciones.component';
import { DetalleUbicacionComponent } from './admin/modules/catalogos/ubicaciones/detalle-ubicacion/detalle-ubicacion.component';
import { ConsultaCodigosComponent } from './admin/modules/catalogos/codigos/consulta-codigos/consulta-codigos.component';
import { DropdownSidenavComponent } from './admin/components/dropdown-sidenav/dropdown-sidenav.component';
import { RegistroCodigosComponent } from './admin/modules/catalogos/codigos/registro-codigos/registro-codigos.component';
import { ConsultaUnidadesMedidaComponent } from './admin/modules/catalogos/codigos/unidades-medida/consulta-unidades-medida/consulta-unidades-medida.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    NavbarComponent,
    FooterComponent,
    DatatableComponent,
    DropdownComponent,
    ConsultaUbicacionesComponent,
    DetalleUbicacionComponent,
    ConsultaCodigosComponent,
    DropdownSidenavComponent,
    RegistroCodigosComponent,
    ConsultaUnidadesMedidaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    ModalModule.forRoot(),
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }