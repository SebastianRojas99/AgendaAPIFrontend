import { Component, OnInit, inject } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';
import { Contacto } from '../../interfaces/contacto';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { generarMensajeError } from 'src/app/helpers/mensajes';
@Component({
  selector: 'app-details-contact',
  templateUrl: './details-contact.component.html',
  styleUrls: ['./details-contact.component.scss']
})
export class DetailsContactComponent implements OnInit {

  //==========editar===============
  editarContacto() {
throw new Error('Method not implemented.');
}


  contactsService = inject(ContactsService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  contacto:Contacto = {
    id: 0,
    name: '',
    lastName: '',
    address: '',
    email: '',
    image: '',
    number: '',
    company: '',
    userId: 0
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.contactsService.getById(params['id']).then(res => {
        if(res) this.contacto = res;
      });
      });
  }
  borrarContacto(){
    Swal.fire({
      title: 'Estas seguro de eliminar el contacto '+this.contacto.name+' '+this.contacto.lastName+'?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.contactsService.delete(this.contacto.id).then(res => {
          if(res){
            Swal.fire(
              'Borrado!',
              'tu contacto fue borrado.',
              'success'
            )
            this.router.navigate(['contacts']);
          }else{
            generarMensajeError('tu contacto no fue borrado.')
          }
        }
    )}
    })
  }

}


