import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.scss']
})
export class RegisterAccountComponent implements OnInit {

  user: string;
  password: string;
  constructor() { }

  ngOnInit(): void {
  }

  register() {
  }

}
