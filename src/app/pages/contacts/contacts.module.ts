import { NgModule, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { IconoContactoComponent } from "../../components/icono-contacto/icono-contacto.component";
import { TarjetaContactoComponent } from "../../components/tarjeta-contacto/tarjeta-contacto.component";
import { Router } from '@angular/router';
import { NuevoContactoComponent } from 'src/app/components/nuevo-contacto/nuevo-contacto.component';


@NgModule({
    declarations: [
        ContactsComponent
    ],
    imports: [
        CommonModule,
        ContactsRoutingModule,
        TarjetaContactoComponent,
        NuevoContactoComponent
    ]
})
export class ContactsModule {
 }
