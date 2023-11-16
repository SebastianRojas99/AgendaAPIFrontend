import { Component, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';
import { registerData } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

registerData:registerData ={
  "nombre": "string",
  "apellido": "string",
  "contrasenia": "string",
  "nombreDeUsuario": "string"
}

  authService = inject(AuthService)
  router = inject(Router);

  register(){
    this.authService.register(this.registerData);
    //this.router.navigate(["/login"])
  }
}