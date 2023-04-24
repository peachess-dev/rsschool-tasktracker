import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      terms: new FormControl(false, Validators.requiredTrue),
    });
  }

  handleSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      this.router.navigateByUrl('main');
    } else {
      alert(
        'Please fill in all the required fields and accept the terms of service.'
      );
    }
  }
}
