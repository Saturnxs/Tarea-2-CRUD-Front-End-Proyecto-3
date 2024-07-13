import { Component } from '@angular/core';
import { UserListComponent } from '../../components/user/user-list/user-list.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserListComponent,
    LoaderComponent,
    ModalComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

}
