import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/pokemon-list']);
    } else {
      alert('Invalid username or password');
    }
  }
}
