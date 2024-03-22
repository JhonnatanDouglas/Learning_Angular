import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UsersCardComponent } from '../../components/cards/users-card/users-card.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, UsersCardComponent],
  providers: [UserService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  exemple = 'Texto de exemplo';

  constructor(private userService: UserService){}

  getUserList(){
    return this.userService.userList
  }

}
