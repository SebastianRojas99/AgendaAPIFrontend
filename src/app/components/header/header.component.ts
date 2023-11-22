import { Component, inject } from '@angular/core';
import{AuthService} from '../../services/auth.service'
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends ApiService {
  router = inject(Router);
    logout(){
      this.auth.logout();
    }
}
