import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
    login(){
      this.authService.login(this.model).subscribe(next => {
        console.log('logged in sucessfully');
      }, error => {
        console.log('failed to login');
      });
    }
}
