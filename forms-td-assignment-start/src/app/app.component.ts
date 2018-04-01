import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultSub: string = "advanced";
  user = {
    email: '',
    subscription: '',
    password: ''
  }

  onSubmit(form: NgForm) {
    this.user.email = form.value.email;
    this.user.subscription = form.value.subscription;
    this.user.password = form.value.password;

    console.log(`Email: ${this.user.email}, Sub: ${this.user.subscription}, Password: ${this.user.password}`);
  }

}
