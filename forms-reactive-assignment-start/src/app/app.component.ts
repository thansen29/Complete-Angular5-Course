import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  forbiddenName = "test";

  ngOnInit() {
    this.form = new FormGroup({
      'projectName': new FormControl(null, Validators.required, this.forbidName.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('critical')
    })
  }

  forbidName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === this.forbiddenName) {
          resolve({
            'forbiddenName': true;
          });
        } else {
          resolve(null);
        }
      }, 1500)
    });

    return promise;
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
