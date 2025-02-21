import { Component } from '@angular/core';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  protected informacionUsuario: any = undefined;
	protected nombre: any = undefined;

  constructor (
		public home: HomeComponent
	) {}
}